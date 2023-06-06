### Run any website on CLI and get the DOM after JavaScript has finished rendering it.

```bash
$ node main.js https://www.google.com

  > Starting Puppeteer.....
  > Rendering website.....
  > URL: https://www.google.com/
  > Executing JavaScript.....

Request:
  > upgrade-insecure-requests: 1
  > user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36
  > sec-ch-ua: "Chromium";v="113", "Not-A.Brand";v="24"
  > sec-ch-ua-mobile: ?0
  > sec-ch-ua-platform: "Linux"
 
Response:
  > alt-svc: h3=":443"; ma=86400
  > cf-cache-status: DYNAMIC
  > cf-ray: 7d2f1cdacbe29a39-FRA
  > content-encoding: br
  > content-type: text/html
  > date: Tue, 06 Jun 2023 07:58:52 GMT

<html>
  <head>
    ...
```
