P3. Consider an HTTP client that wants to retrieve a Web document at a given
    URL. The IP address of the HTTP server is initially unknown. What transport
    and application-layer protocols besides HTTP are needed in this scenario?

    1. UDP | DNS
    2. TCP | HTTP

P4
    a. What is the URL of the document requested by the browser?
      gaia.cs.umass.edu/cs453/index.html

    b. What version of HTTP is the browser running?
      HTTP/1.1

    c. Does the browser request a non-persistent or a persistent connection?
      Keep-Alive: 300
      Connection:keep-alive

    d. What is the IP address of the host on which the browser is running?
    e. What type of browser initiates this message? Why is the browser type
    needed in an HTTP request message?

P5
    a. Was the server able to successfully find the document or not? What time
       was the document reply provided?
      200 OK

    b. When was the document last modified?
      Last-Modified: Sat, 10 Dec2005 18:27:46GMT

    c. How many bytes are there in the document being returned?
      Content-Length: 3874

    d. What are the first 5 bytes of the document being returned? Did the server
       agree to a persistent connection?
      48 54 54 50 2F
      Keep-Alive:timeout=max=100
      Connection:Keep-Alive

P6
    a. Explain the mechanism used for signaling between the client and server
    to indicate that a persistent connection is being closed. Can the client, the
    server, or both signal the close of a connection?

    b. What encryption services are provided by HTTP?

    c. Can a client open three or more simultaneous connections with a given server?

    d. Either a server or a client may close a transport connection between them
    if either one detects the connection has been idle for some time. Is it
    possible that one side starts closing a connection while the other side is
    transmitting data via this connection? Explain.

P7
    RTT0: the RTT between the local host and the server containing the object
    RTTn: n DNS servers
    0 transmission time of the object
    3*RTT0 + RTT1 + ... RTTn

P8
    a. Non-persistent HTTP with no parallel TCP connections?
      6*3*RTT0 + RTT1 + ... RTTn
    b. Non-persistent HTTP with the browser configured for 6 parallel connections?
      2*3*RTT0 + RTT1 + ... RTTn
    c. Persistent HTTP?
      3*RTT0 + RTT1 + ... RTTn

P9
  + the average object size is 1,000,000 bits(= 1Mb)
  + the average request rate from the institution’s browsers to the origin servers is 16 requests per second.
  + the amount of time it takes from when the router on the Internet side of the access link forwards an HTTP request until it receives the response is 3 seconds on average

  Model the total average response time as the sum of the average access delay.
  (
    For the average access delay, use !/(1 - !b).
      !: is the average time required to send an object over the access link.
      b: is the arrival rate of objects to the access link.
  )
    a. Find the total average response time.
      16Mb / 100Mbps = 0.16
      16Mb / 15Mbps  = 1.01

    b. Now suppose a cache is installed in the institutional LAN. Suppose the miss rate is 0.4. Find the total response time.

P10
