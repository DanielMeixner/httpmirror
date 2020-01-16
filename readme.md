# HTTP Mirror
This app provides a simple server which remembers the last value you sent and returns it whenever you query the server.

## Setup

Start the server, e.g. like this on your localhost:

```
docker run -p 8080:80 danielmeixner/httpmirror
```
Typically you'd rather use Azure Container Instances or something else to run it in the internet. For realworld scenarios this is more useful.
```
az group create --name httpmirrorgroup --location westeurope

az container create --resource-group httpmirrorgroup --name httpmirror --image danielmeixner/httpmirror --dns-name-label httpmirror --ports 80
```

### Store data
To store data you send an HTTP GET request to the server.
```
curl http://IPOFSERVER/write?value=YOURVALUE
```

### View data
To view your data you just visit the server in your browser.

### Ping
You can HTTP Get the path /ping to see if your server is alive. It will respond with "PONG".

## Hints
This is for testing and debugging purposes only. 

