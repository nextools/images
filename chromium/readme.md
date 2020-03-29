# chromium

Dockerized Chromium in [headless + remote debugging mode](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md).

Latest tags:
* `80`
* `80.0`
* `80.0.3987`
* `80.0.3987.87`
* `latest`

## Usage

### Login

This is ridiculous but [you have to login to GitHub Packages with Docker even to pull images](https://github.community/t5/GitHub-Actions/docker-pull-from-public-GitHub-Package-Registry-fail-with-quot/td-p/32782):

1. Generate a personal access token [here](https://github.com/settings/tokens) with `read:packages` scope
2. Login with `docker login docker.pkg.github.com -u <USERNAME>` using the token

### Run

```sh
docker run -it --rm -p 9222:9222 docker.pkg.github.com/nextools/images/chromium:80
```

### Puppeteer

Ensure to match version of [`puppeteer-core`](https://github.com/GoogleChrome/puppeteer) to the version of Chromium you are using:

```sh
yarn add puppeteer-core@chrome-80
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

Container uses a `RD_PORT` env var, which is just `9222` by default:

```
docker run -it --rm -p 9223:9223 -e RD_PORT=9223 docker.pkg.github.com/nextools/images/chromium:80
```

### pass additional Chromium arguments

```
docker run -it --rm -p 9222:9222 docker.pkg.github.com/nextools/images/chromium:80 --some-arg
```

### add custom fonts

It's possible to mount a folder with custom fonts to be used later by Chromium: 

```
docker run -it --rm -p 9222:9222 -v $(pwd)/path/to/fonts:/home/chromium/.fonts docker.pkg.github.com/nextools/images/chromium:80
```

### push a new version

1. `make get-version` to print the full version of the latest [Chromium for Ubuntu "Bionic" 18.04 LTS](https://packages.ubuntu.com/bionic/chromium-browser)
2. `make tags version=<VERSION>` to automatically make and push 5 tags: for example version `80.0.3987.87` leads to `80`, `80.0`, `80.0.3987`, `80.0.3987.87` and `latest` tags
