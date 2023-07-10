.PHONY: get-version build test tags

CURRENT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

IMAGE_NAME="docker.pkg.github.com/nextools/images/chromium:rc"
DOCKER_NAMESPACE="nextools"

get-version:
	@docker pull ubuntu:bionic > /dev/null 2>&1
	@docker run --rm \
		ubuntu:bionic \
		sh -c "apt-get update --quiet=2 && apt-cache policy chromium-browser | sed --regexp-extended --quiet 's/.*Candidate: ([0-9.]+)-.+/\1/p'"

build:
	@docker buildx build --push --platform linux/arm64,linux/amd64 --tag $(IMAGE_NAME) --build-arg VERSION=$(version) $(CURRENT_DIR)
	@echo $(IMAGE_NAME)

test:
	@docker run --detach --publish 9222:9222 --name chromium $(IMAGE_NAME)
	@timeout 20s sh -c "trap 'docker container rm --force chromium' 0; until curl http://localhost:9222/json/version; do sleep 1; done"

tags:
	@for i in 3 2 1 0 -1; do \
		if [ $$i -ge 0 ]; then \
			tag=`echo $(version) | sed --regexp-extended "s/(\.[0-9]+){$$i}$$//"`; \
		else \
			tag=latest; \
		fi; \
		echo $$tag; \
		docker buildx imagetools create $(IMAGE_NAME) --tag docker.pkg.github.com/nextools/images/chromium:$$tag; \
		chmod +r ${HOME}/.docker/config.json; \
		docker container run --rm --net host \
			-u "$(id -u):$(id -g)" -e HOME -v ${HOME}:${HOME} \
			-v /etc/docker/certs.d:/etc/docker/certs.d:ro \
			regclient/regctl:latest image copy $(IMAGE_NAME) ${DOCKER_NAMESPACE}/chromium:$$tag; \
		git tag --force chromium@$$tag; \
	done


