.PHONY: get-version tags

get-version:
	@docker run -it --rm \
		ubuntu:bionic \
		sh -c "apt-get update -qq && apt-cache policy chromium-browser | sed -En 's/.*Candidate: (.+)-.+/\1/p'"

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
