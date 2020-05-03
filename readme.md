# images

Monorepo of Docker images auto-published to [Docker Hub](https://hub.docker.com/repositories/nextools) and [GitHub Packages](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages).

## GitHub Packages

This is fantastic but [you have to login to GitHub Packages with Docker even to pull images](https://github.community/t5/GitHub-Actions/docker-pull-from-public-GitHub-Package-Registry-fail-with-quot/td-p/32782):

1. Generate a personal access token [here](https://github.com/settings/tokens) with `read:packages` scope
2. Login with `docker login docker.pkg.github.com -u <GITHUB_USERNAME>` using the token instead of a password
