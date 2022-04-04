.PHONY: get-version build test tags

CURRENT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

get-version:
	@docker pull ubuntu:bionic > /dev/null 2>&1
	@docker run --rm \
		ubuntu:bionic \
		sh -c "apt-get update --quiet=2 && apt-get --yes install software-properties-common > /dev/null 2>&1 && add-apt-repository --yes ppa:ubuntu-mozilla-daily/ppa > /dev/null 2>&1 && apt-get update --quiet=2 && apt-cache policy firefox-trunk | sed --regexp-extended --quiet 's/.*Candidate: ([0-9.]+)~([a-z0-9]+)\~.+/\1\2/p'"

build:
	@_version=`echo $(version) | sed --regexp-extended s/a/~a/`
	@docker build --tag neuralegion/nextools-firefox --build-arg VERSION=$$_version $(CURRENT_DIR)

test:
	@docker run --detach --publish 9222:9222 --name nextools-firefox neuralegion/nextools-firefox
	@timeout 20s sh -c "trap 'docker container rm --force nextools-firefox' 0; until curl http://localhost:9222/json/version; do sleep 1; done"

# tags:
# 	@for tag in $(version) latest; do \
# 		echo $$tag; \
# 		docker tag nextools-firefox docker.pkg.github.com/neuralegion/images/nextools-firefox:$$tag; \
# 		docker tag nextools-firefox neuralegion/nextools-firefox:$$tag; \
# 		git tag --force firefox@$$tag >/dev/null 2>&1; \
# 	done

tags:
	@for tag in $(version) latest; do \
		echo $$tag; \
		docker tag nextools-firefox neuralegion/nextools-firefox:$$tag; \
		git tag --force nextools-firefox@$$tag >/dev/null 2>&1; \
	done
