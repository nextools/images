FROM ubuntu:bionic

ARG VERSION
ARG DEBIAN_FRONTEND=noninteractive
ENV RD_PORT=9222

RUN apt-get update \
    # https://github.com/phusion/baseimage-docker/issues/319
    && apt-get install --yes apt-utils 2>&1 | grep -v "debconf: delaying package configuration, since apt-utils is not installed" \
    && apt-get --yes install software-properties-common \
    # beta: ppa:mozillateam/firefox-next
    # nightly: ppa:ubuntu-mozilla-daily/ppa
    && add-apt-repository --yes ppa:ubuntu-mozilla-daily/ppa \
    && apt-get update \
    && apt-get --no-install-recommends --yes install \
        dumb-init \
        socat \
        fontconfig \
        firefox-trunk=${VERSION}\* \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd firefox \
    && useradd --create-home --gid firefox firefox \
    && chown --recursive firefox:firefox /home/firefox/

VOLUME ["/home/firefox/.fonts"]

COPY --chown=firefox:firefox entrypoint.sh /home/firefox/
COPY --chown=firefox:firefox profile/ /home/firefox/profile/

USER firefox

ENTRYPOINT ["dumb-init", "--", "/bin/sh", "/home/firefox/entrypoint.sh"]
