FROM ubuntu:bionic

ARG VERSION
ARG DEBIAN_FRONTEND=noninteractive
ENV RD_PORT=9222

RUN apt-get update \
    # https://github.com/phusion/baseimage-docker/issues/319
    && apt-get install --yes apt-utils 2>&1 | grep -v "debconf: delaying package configuration, since apt-utils is not installed" \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && wget --no-verbose -O /tmp/chrome.deb https://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${VERSION}_amd64.deb \
    && apt-get update \
    && apt-get install --no-install-recommends -y \
      /tmp/chrome.deb \
      fonts-ipafont-gothic \
      fonts-wqy-zenhei \
      fonts-thai-tlwg \
      fonts-khmeros \
      fonts-kacst \
      fonts-freefont-ttf \
      libxss1 \
      htop \
      net-tools \
      dumb-init \
      curl \
      socat \
    && rm /tmp/chrome.deb \
    && rm -rf /var/lib/apt/lists/*

RUN groupadd chrome
RUN useradd --create-home --gid chrome chrome
RUN chown --recursive chrome:chrome /home/chrome/

WORKDIR /home/chrome

COPY --chown=chrome:chrome entrypoint.sh /home/chrome/

USER chrome

ENTRYPOINT ["dumb-init", "--", "/bin/sh", "/home/chrome/entrypoint.sh"]
