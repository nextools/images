FROM ubuntu:bionic

ARG VERSION
ARG DEBIAN_FRONTEND=noninteractive
ENV RD_PORT=9222

RUN apt-get update \
    # https://github.com/phusion/baseimage-docker/issues/319
    && apt-get install --yes apt-utils 2>&1 | grep -v "debconf: delaying package configuration, since apt-utils is not installed" \
    && apt-get install --no-install-recommends --yes \
        dumb-init \
        fontconfig \
        chromium-browser=${VERSION}\* \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd chromium \
    && useradd --create-home --gid chromium chromium \
    && chown --recursive chromium:chromium /home/chromium/

VOLUME ["/home/chromium/.fonts"]

COPY --chown=chromium:chromium entrypoint.sh /home/chromium/

USER chromium

ENTRYPOINT ["dumb-init", "--", "/bin/sh", "/home/chromium/entrypoint.sh"]
