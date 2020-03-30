# firefox

[![version](https://img.shields.io/badge/version-latest-blue.svg?style=flat-square)](https://launchpad.net/~ubuntu-mozilla-daily/+archive/ubuntu/ppa)

Dockerized Firefox in [headless + remote debugging mode](https://wiki.mozilla.org/Remote).

The [same CDP protocol as in Chromium](https://wiki.mozilla.org/Remote) finally comes to Firefox starting with version 76, allowing to [use Puppeteer with Firefox directly and as is](https://github.com/puppeteer/puppeteer/issues/5397). Currently is in `nightly` alpha state and only `latest` version is available which we update _manually_ from time to time.

## Usage

### Login

See [login section](../readme.md#login) in the root readme.

### Versions

Firefox version is atomatically split into multiple Docker tags ("versions"), for example version `76.0` produces `76`, `76.0` and `latest`.  See the [list of versions available to use](https://github.com/nextools/images/packages/166489/versions).

### Run

```sh
docker run -it --rm -p 9222:9222 docker.pkg.github.com/nextools/images/firefox:<VERSION>
```

### Puppeteer

```sh
yarn add puppeteer-core
```

```js
import fetch from 'node-fetch'
import puppeteer from 'puppeteer-core'

const response = await fetch('http://localhost:9222/json/version')
const { webSocketDebuggerUrl } = await response.json()

const browser = await puppeteer.connect({ browserWSEndpoint: webSocketDebuggerUrl })
const page = await browser.newPage()

await page.goto('https://example.com')
await page.screenshot({ path: 'example.png' })
await browser.close()
```

## How to

### specify a different port

Container uses a `RD_PORT` [environment variable](https://docs.docker.com/engine/reference/commandline/run/#set-environment-variables--e---env---env-file), which is `9222` by default:

```
docker run -it --rm -p 9223:9223 -e RD_PORT=9223 docker.pkg.github.com/nextools/images/firefox:<VERSION>
```

### pass additional Firefox arguments

```
docker run -it --rm -p 9222:9222 docker.pkg.github.com/nextools/images/firefox:<VERSION> --some-firefox-arg
```

### add custom fonts

It's possible to mount a folder with custom fonts to be used later by Firefox: 

```
docker run -it --rm -p 9222:9222 -v $(pwd)/path/to/fonts:/home/firefox/.fonts docker.pkg.github.com/nextools/images/firefox:<VERSION>
```

### push necessary tags out of new version

1. `make get-version` to print the full version of the latest [Firefox for Ubuntu "Bionic" 18.04 LTS](https://packages.ubuntu.com/bionic/firefox)
2. `make tags version=<VERSION>` to automatically make and push 3 tags
