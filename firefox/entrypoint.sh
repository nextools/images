#!/bin/sh

if [ "$(ls -A /home/firefox/.fonts/)" ]; then
  fc-cache -f -v
fi

ip=$(hostname --ip-address)

# no `--remote-debugging-address=0.0.0.0` yet
socat tcp-listen:$RD_PORT,bind=$ip,fork tcp:127.0.0.1:$RD_PORT &

# https://developer.mozilla.org/en-US/docs/Mozilla/Command_Line_Options
/usr/bin/firefox-trunk \
  --headless \
  --remote-debugging-port=$RD_PORT \
  --no-remote \
  --profile /home/firefox/profile/ \
  "$@"
