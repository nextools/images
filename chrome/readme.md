# chrome

Dockerized Chrome

## Usage

### Docker Hub

```sh
docker run -it --rm -p 9222:9222 neuralegion/nextools-chrome:<TAG>
```
-->

## How to

### specify a different port

Container uses a `RD_PORT` [environment variable](https://docs.docker.com/engine/reference/commandline/run/#set-environment-variables--e---env---env-file), which is `9222` by default:

```
docker run -it --rm -p 9223:9223 -e RD_PORT=9223 neuralegion/nextools-chrome:<TAG>
```

### pass additional Chrome arguments

```
docker run -it --rm -p 9222:9222 neuralegion/nextools-chrome:<TAG> --some-chrome-arg
```

### add custom fonts

It's possible to mount a folder with custom fonts to be used later by Chrome: 

```
docker run -it --rm -p 9222:9222 -v $(pwd)/path/to/fonts:/home/chrome/.fonts neuralegion/nextools-chrome:<TAG>
```
