## 2.1
HTTP request header lines:
  + Host specifies the host on which the object resides. It is required by Web proxy caches
  + Connection

### 2.2.4 Cookies
Why?
  The server wants to identify the user, keep track of users.
How?
  server: Set-cookie
  client: cookie

Client Storage
https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API

### 2.2.5 Web Caching
Why web Caching?
  + reduce the response time for a client request, particularly if the b
  + reduce the traffic on an institution's access to the internet

### 2.2.6 HTTP/2
#### HTTP/2 Framing
#### Response Message Prioritization and Server Pushing
The server can send multiple responses for a single client request.

## 2.5 DNS
When a host connects to an ISP, the ISP provides the host with the IP addresses of one or more of its local DNS servers

the sample:
the host cse.nyu.edu desires gaia.cs.umass.edu
NYU’s local DNS server for cse.nyu.edu is called dns.nyu.edu
an authoritative DNS server for gaia.cs.umass.edu is called dns.umass.edu
