# [Choice] Node.js version: 14, 12, 10
ARG VARIANT="14-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# とりあえず yarn入れる
RUN sudo npm uninstall yarn -g
RUN sudo npm install yarn -g

# vue install
RUN sudo yarn global add @vue/cli