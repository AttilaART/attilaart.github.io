FROM python:alpine3.22
WORKDIR /app
COPY . .
EXPOSE 8000
CMD [ "python3", "-m", "http.server" ]
