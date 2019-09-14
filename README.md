# Simple Upload button with PHP backend

The project consists of two parts - frontend ([NextJS + Ant.Design][next-antd]) and backend
(simple PHP, using [Blueimp jQuery][blue-jq] backend PHP class).

## Installation

Frontend needs dependencies installed:

```bash
cd frontend && yarn
```

Backend could be ran as is with built-in PHP server or built into a Docker image.

## Running

From frontend directory:

```bash
yarn dev
```

This will start a webserver on address "localhost:3000". The frontend is
configured to upload files to the backend process on "localhost:4000".

From backend directory:

```bash
php -S localhost:4000
```

This will start a PHP server to accept uploads.
Successfully uploaded files will end up in `./backend/files` directory.

## Configuration

Both frontend Upload button component and backend UploadHandler script are
configurable via, respectively, [props][upload-button-props] and constructor
options (see the source file), but the configurations must match on appropriate
points.

The default configuration allows for upload of a single *.png, *.jpeg or *.gif
file at a time.

[next-antd]: https://github.com/Acerbic/NextJS-AntDesign
[upload-button-props]: https://ant.design/components/upload/#API
[blue-jq]: https://github.com/blueimp/jQuery-File-Upload
