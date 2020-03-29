# images

Monorepo of Docker images auto-published to [GitHub Packages](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages) based on `package@version` Git tags.

## Details

* `foo@1.0.0` Git tag leads to an `docker.pkg.github.com/nextools/images/foo:1.0.0` Docker image
* each package provides a way to make necessary tag(s), for example [`Makefile` in `chromium` package](./chromium/Makefile) pushes 5 tags out of single version
* each package `Dockerfile` receives an _optional_ `VERSION` [build argument](https://docs.docker.com/engine/reference/commandline/build/#set-build-time-variables---build-arg) which is equal to `version` extracted from a Git tag with one expection: `latest` version leads to an _empty_ `VERSION` argument, like it wasn't passed at all

## Login

This is ridiculous but [you have to login to GitHub Packages with Docker even to pull images](https://github.community/t5/GitHub-Actions/docker-pull-from-public-GitHub-Package-Registry-fail-with-quot/td-p/32782):

1. Generate a personal access token [here](https://github.com/settings/tokens) with `read:packages` scope
2. Login with `docker login docker.pkg.github.com -u <GITHUB_USERNAME>` using the token instead of a password