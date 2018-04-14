#! /bin/sh

yarn install
npm rebuild node-sass
exec "$@"
