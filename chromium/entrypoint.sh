#!/bin/sh

if [ "$(ls -A /home/chromium/.fonts/)" ]; then
  fc-cache -f -v
fi

/usr/bin/chromium-browser \
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
  --headless \
  --hide-scrollbars \
  --ignore-certificate-errors \
  --ignore-certificate-errors-spki-list \
  --ignore-ssl-errors \
  --metrics-recording-only \
  --mute-audio \
  --no-first-run \
  --no-sandbox \
  --remote-debugging-address=0.0.0.0 \
  --remote-debugging-port="$RD_PORT" \
  --safebrowsing-disable-auto-update \
  --user-data-dir=/home/chromium/ \
  "$@"
