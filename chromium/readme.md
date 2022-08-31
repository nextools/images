# chromium

[![version](https://flat.badgen.net/badge/version/104.0.5112.101/blue)](https://www.chromestatus.com/features/schedule) [![size](https://flat.badgen.net/badge/size/20/blue)](https://hub.docker.com/repository/docker/nextools/chromium/tags)

Dockerized Chromium in [headless + remote debugging mode](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md).

Auto-updatable every 12 hours: Chromium version is split into multiple Docker tags, for example version `80.0.3987.87` produces `80`, `80.0`, `80.0.3987`, `80.0.3987.87` and `latest` tagged images. See [list of tags available to use](https://hub.docker.com/repository/docker/nextools/chromium/tags).


## Usage

### Docker Hub

```sh
docker run -it --rm -p 9222:9222 neuralegion/nextools-chromium:<TAG>
```

<!-- ### GitHub Packages

```sh
docker run -it --rm -p 9222:9222 docker.pkg.github.com/nextools/images/chromium:<TAG>
```

See [login caveats](../readme.md#github-packages) in the root readme. -->

### Puppeteer

Ensure to match version of [`puppeteer-core`](https://github.com/GoogleChrome/puppeteer) to the version of Chromium you are using:

```sh
yarn add puppeteer-core@chrome-<MAJOR_VERSION>
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
docker run -it --rm -p 9223:9223 -e RD_PORT=9223 neuralegion/nextools-chromium:<TAG>
```

### pass additional Chromium arguments

```
docker run -it --rm -p 9222:9222 neuralegion/nextools-chromium:<TAG> --some-chromium-arg
```

### add custom fonts

It's possible to mount a folder with custom fonts to be used later by Chromium: 

```
docker run -it --rm -p 9222:9222 -v $(pwd)/path/to/fonts:/home/chromium/.fonts neuralegion/nextools-chromium:<TAG>
```
