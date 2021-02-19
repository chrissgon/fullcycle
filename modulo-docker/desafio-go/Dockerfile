FROM golang:1.7.1-alpine as build

WORKDIR /go/src

COPY . .

RUN GOOS=linux go build main.go

FROM alpine:3.1 as release

WORKDIR /go/src

COPY --from=build go/src/main .

CMD [ "./main" ]