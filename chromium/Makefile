.PHONY: get-version test tags

CURRENT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

get-version:
	@docker run --rm \
		ubuntu:bionic \
		sh -c "apt-get update -qq && apt-cache policy chromium-browser | sed -En 's/.*Candidate: (.+)-.+/\1/p'"

test:
	@if [ -z $(version) ]; then \
		echo "\`version\` argument is required" 1>&2; \
		exit 1; \
	fi

	@docker build --tag chromium --build-arg VERSION=$(version) $(CURRENT_DIR)

	@docker run --detach --publish 9222:9222 --name chromium chromium

	@timeout 15s sh -c "trap 'docker container rm --force chromium' 0; until curl http://localhost:9222/json/version; do sleep 1; done"

tags:
	@if [ -z $(version) ]; then \
		echo "\`version\` argument is required" 1>&2; \
		exit 1; \
	fi

	@for i in 3 2 1 0 -1; do \
		if [[ $$i -ge 0 ]]; then \
			tag=`echo $(version) | sed -E "s/(\.[0-9]+){$$i}$$//"`; \
		else \
			tag=latest; \
		fi; \
		echo $$tag; \
		tag=chromium@$$tag; \
		git tag --force $$tag >/dev/null 2>&1; \
		git push --force origin $$tag >/dev/null 2>&1; \
	done
