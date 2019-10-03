FROM tiangolo/node-frontend:10 as build-stage
WORKDIR /app
COPY package.json /app/
COPY yarn.lock /app/

RUN npm install --ignore-optional

COPY ./ /app/


RUN npm run build -- --output-path=./dist/out

FROM nginx:1.15

COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html

COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80