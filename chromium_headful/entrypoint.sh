#!/bin/sh

if [ "$(ls -A /home/chromium/.fonts/)" ]; then
  fc-cache -f -v
fi

ip=$(hostname --ip-address)
socat tcp-listen:"$RD_PORT",bind="$ip",fork tcp:0.0.0.0:"$RD_PORT" &
(ulimit -n 65000 || true) && (ulimit -p 65000 || true) && \
  xvfb-run -a \
  /usr/bin/chromium-browser \
  --enable-automation \
  --disable-background-networking \
  --disable-background-timer-throttling \
  --disable-backgrounding-occluded-windows \
  --disable-renderer-backgrounding \
  --disable-breakpad \
  --disable-client-side-phishing-detection \
  --disable-default-apps \
  --disable-dev-shm-usage \
  --disable-extensions \
  --disable-gpu \
  --disable-popup-blocking \
  --disable-prompt-on-repost \
  --disable-sync \
  --disable-translate \
  --disable-setuid-sandbox \
  --disable-ipc-flooding-protection \
  --disable-component-update \
  --hide-scrollbars \
  --ignore-certificate-errors \
  --ignore-certificate-errors-spki-list \
  --ignore-ssl-errors \
  --metrics-recording-only \
  --mute-audio \
  --no-first-run \
  --no-sandbox \
  --no-default-browser-check \
  --remote-debugging-address=0.0.0.0 \
  --remote-debugging-port="$RD_PORT" \
  --safebrowsing-disable-auto-update \
  --user-data-dir=/home/chromium/ \
  --window-size=1920,1080 \
  "$@"
