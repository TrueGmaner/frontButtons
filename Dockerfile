FROM denoland/deno:1.35.0

FROM denoland/deno:1.35.0 as final

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${cbd7ba5ed57d9ae8b3066df2e88d0f301424308a}

WORKDIR /fresh-project

COPY . .
RUN deno cache main.ts

EXPOSE 8000

CMD ["run", "-A", "main.ts"]