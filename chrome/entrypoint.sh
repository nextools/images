#!/bin/sh

if [ "$(ls -A /home/chrome/.fonts/)" ]; then
  fc-cache -f -v
fi

(ulimit -n 65000 || true) && (ulimit -p 65000 || true) && google-chrome-stable \
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
  --disable-component-extensions-with-background-pages \
  --deny-permission-prompts \
  --disable-print-preview \
  --noerrdialogs \
  --disable-hang-monitor \
  --disable-ipc-flooding-protection \
  --disable-component-update \
  --headless \
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
  --user-data-dir=/home/chrome/ \
  --window-size=1920,1080 \
  "$@"
