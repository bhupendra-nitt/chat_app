FROM node:8.9.3

ADD . /opt/chat

WORKDIR /opt/chat

VOLUME ["/opt/chat"]

ADD docker-entrypoint.sh /entrypoint.sh

RUN chmod 755 /entrypoint.sh
