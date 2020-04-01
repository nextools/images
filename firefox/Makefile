.PHONY: get-version test publish

CURRENT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

get-version:
	@docker run --rm \
		ubuntu:bionic \
		sh -c "apt-get update -qq && apt-cache policy firefox | sed -En 's/.*Candidate: (.+)\+.+/\1/p'"

test:
	@if [ -z $(version) ]; then \
		echo "\`version\` argument is required" 1>&2; \
		exit 1; \
	fi

	@docker build --tag firefox --build-arg VERSION=$(version) $(CURRENT_DIR)

	@docker run --detach --publish 9222:9222 --name firefox firefox

	@timeout 15s sh -c "trap 'docker container rm --force firefox' 0; until curl http://localhost:9222/json/version; do sleep 1; done"

publish:
	@if [ -z $(version) ]; then \
		echo "\`version\` argument is required" 1>&2; \
		exit 1; \
	fi

	@docker build --tag firefox --build-arg VERSION=$(version) $(CURRENT_DIR)

	@for i in 1 0 -1; do \
		if [ $$i -ge 0 ]; then \
			tag=`echo $(version) | sed -E "s/(\.[0-9]+){$$i}$$//"`; \
		else \
			tag=latest; \
		fi; \
		echo $$tag; \
		docker tag firefox docker.pkg.github.com/nextools/images/firefox:$$tag; \
		git tag --force firefox@$$tag >/dev/null 2>&1; \
		git push --force origin firefox@$$tag >/dev/null 2>&1; \
	done

	@docker push docker.pkg.github.com/nextools/images/firefox
