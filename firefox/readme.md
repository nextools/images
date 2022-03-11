# firefox

[![version](https://flat.badgen.net/badge/version/100.0a1/blue)](https://www.mozilla.org/en-US/firefox/releases/) [![size](https://flat.badgen.net/badge/size/154M/blue)](https://hub.docker.com/repository/docker/nextools/firefox/tags)

Dockerized Firefox in [headless + remote debugging mode](https://wiki.mozilla.org/Remote).

The [same CDP protocol as in Chromium](https://wiki.mozilla.org/Remote) finally comes to Firefox, allowing to [use Puppeteer with Firefox directly and as is](https://github.com/puppeteer/puppeteer/issues/5397). 

Auto-updatable every 12 hours (currently available only as [nightly alpha builds](https://launchpad.net/~ubuntu-mozilla-daily/+archive/ubuntu/ppa)). See [list of image tags available to use](https://hub.docker.com/repository/docker/nextools/firefox/tags).

## Usage

### Docker Hub

```sh
docker run -it --rm -p 9222:9222 nextools/firefox:<TAG>
```

### GitHub Packages

```sh
docker run -it --rm -p 9222:9222 docker.pkg.github.com/nextools/images/firefox:<TAG>
```

See [login caveats](../readme.md#github-packages) in the root readme.

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
docker run -it --rm -p 9223:9223 -e RD_PORT=9223 nextools/firefox:<TAG>
```

### pass additional Firefox arguments

```
docker run -it --rm -p 9222:9222 nextools/firefox:<TAG> --some-firefox-arg
```

### add custom fonts

It's possible to mount a folder with custom fonts to be used later by Firefox: 

```
docker run -it --rm -p 9222:9222 -v $(pwd)/path/to/fonts:/home/firefox/.fonts nextools/firefox:<TAG>
```
