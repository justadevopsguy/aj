FROM node:12-alpine

ENV APP_USER=aj APP_HOME=/home/aj

COPY ./dist/ ${APP_HOME}/dist/
COPY ./initsvc.sh ${APP_HOME}/

RUN adduser -D -u 500 -h ${APP_HOME} -s /bin/false ${APP_USER} \
 && chown -R ${APP_USER}:${APP_USER} ${APP_HOME}

USER ${APP_USER}
WORKDIR ${APP_HOME}

ENTRYPOINT ["sh", "initsvc.sh"]
