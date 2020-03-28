FROM ubuntu:bionic

ARG CHROMIUM_VERSION=80.0.3987.87\*
ARG DEBIAN_FRONTEND=noninteractive
ENV RD_PORT=9222

RUN apt-get update \
    # https://github.com/phusion/baseimage-docker/issues/319
    && apt-get install --yes apt-utils 2>&1 | grep -v "debconf: delaying package configuration, since apt-utils is not installed" \
    && apt-get install --no-install-recommends --yes \
        chromium-browser=${CHROMIUM_VERSION} \
        dumb-init \
        fontconfig \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd chromium \
    && useradd --create-home --gid chromium chromium \
    && chown --recursive chromium:chromium /home/chromium/

VOLUME ["/home/chromium/.fonts"]

COPY --chown=chromium:chromium entrypoint.sh /home/chromium/

USER chromium

# EXPOSE 9222

ENTRYPOINT ["dumb-init", "--", "/bin/sh", "/home/chromium/entrypoint.sh"]
