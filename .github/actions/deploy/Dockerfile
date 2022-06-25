FROM alpine:3.15.4

# python + build dependencies
RUN apk add --update --no-cache
RUN apk add --no-cache \
    libffi-dev openssl-dev musl-dev python3-dev \
    bash gcc make python3 yarn py3-pip \
    build-base linux-headers libc-dev

RUN python3 -m pip install --upgrade pip wheel setuptools Cython

ADD reqs.txt  /
RUN python3 -m pip install -r /reqs.txt

RUN mkdir -p /src/deploy/
ADD deploy.sh deploy.yaml library /src/deploy/
RUN chmod +x /src/deploy/deploy.sh

ENTRYPOINT ["/src/deploy/deploy.sh"]
