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
    a. Explain the mechanism used for signaling between the client and server to indicate that a persistent connection is being closed. Can the client, the server, or both signal the close of a connection?

    b. What encryption services are provided by HTTP?

    c. Can a client open three or more simultaneous connections with a given server?

    d. Either a server or a client may close a transport connection between them if either one detects the connection has been idle for some time. Is it possible that one side starts closing a connection while the other side is transmitting data via this connection? Explain.

P7
    RTT0: the RTT between the local host and the server containing the object
    RTTn: n DNS servers
    0 transmission time of the object

    t1 = IP lookup time(DNS): RTT1 + ... RTTn
    t2 = HTTP communication time(no message transfer time) : 2*RTT0
    T = t1 + t2

P8
    a. Non-persistent HTTP with no parallel TCP connections?
      T = t1 + 9 * t2

    b. Non-persistent HTTP with the browser configured for 6 parallel connections?
      T = t1 + 2 * t2

    c. Persistent HTTP?
      T = t1 + t2

P9
  + the average object size is 1,000,000 bits(= 1Mb)
  + the average request rate from the institution’s browsers to the origin servers is 16 requests per second.
  + the amount of time it takes from when the router on the Internet side of the access link forwards an HTTP request until it receives the response is 3 seconds on average(<Internet Delay>)

  Model the total average response time as the sum of the average access delay.
  (
    For the average access delay, use !/(1 - !b).
      !: is the average time required to send an object over the access link.
      b: is the arrival rate of objects to the access link.
  )
    a. Find the total average response time.
      ! = 1Mb / 15Mbps
      b = 16

      !/(1 - !b) = (1 / 15) / (1 - 0.16)
      3 + !/(1 - !b)

    b. Now suppose a cache is installed in the institutional LAN. Suppose the miss rate is 0.4. Find the total response time.
      ! = 2 * 0.4 + (1 / 100) * (1 - 0.4)
      b = 16

P10
  10m <propagation time does not need to count?>
  150 bits/s
  packet with data size: 100k bits
  packet with handshaking size: 200 bits

    t1 = handshaking time(2*RTT): (200 / 150) * 2
    t2 = 100,000 / 150
    t3 = propagation time

    + sequence 10 requests with no parallel and non-persistent connections:
      T = t1 * 10 + t2 * 10 + t3 * 10 = (t1 + t2 + t3) * 10     

    + N parallel connections with non-persistent connections:
      T = t1 + t2 * 10  + t3

    + N parallel connections with persistent connections
      T = t1 + t2 * 10  + t3

P11
  Consider the scenario introduced in the previous problem. Now suppose that the link is shared by Bob with four other users. Bob uses parallel instances of non-persistent HTTP, and the other four users use non-persistent HTTP without parallel downloads.

  a. Do Bob’s parallel connections help him get Web pages more quickly? Why or why not?


  b. If all five users open five parallel instances of non-persistent HTTP, then would Bob’s parallel connections still be beneficial? Why or why not?

P15
  What is the difference between MAIL FROM: in SMTP and From: in the mail message itself?
  the mail message and mail header:

SMTP servers and clients provide a mail transport service and therefore act as "Mail transfer Agents".
"Mail User Agents"

P17
  From - Fri Nov 07 13:41:30 2008
  Return-Path: <tennis5@pp33head.com>
  Received: from barmail.cs.umass.edu (barmail.cs.umass.
  edu
  [128.119.240.3]) by cs.umass.edu (8.13.1/8.12.6) for
  <hg@cs.umass.edu>; Fri, 7 Nov 2008 13:27:10 -0500
  Received: from asusus-4b96 (localhost [127.0.0.1]) by
  barmail.cs.umass.edu (Spam Firewall) for <hg@cs.umass.
  edu>; Fri, 7
  Nov 2008 13:27:07 -0500 (EST)
  Received: from asusus-4b96 ([58.88.21.177]) by barmail.
  cs.umass.edu
  for <hg@cs.umass.edu>; Fri, 07 Nov 2008 13:27:07 -0500
  (EST)
  Received: from [58.88.21.177] by inbnd55.exchangeddd.
  com; Sat, 8
  Nov 2008 01:27:07 +0700
  From: ”Jonny” <tennis5@pp33head.com>
  To: <hg@cs.umass.edu>

  Subject: How to secure your savings

P18
  a. WHOIS is a TCP-based transaction-oriented query/response protocol that is widely used to provide information services to Internet users.  While originally used to provide "white pages" services and information about registered domain names, current deployments cover a much broader range of information services. [RFC3912]

  b. Use various whois databases on the Internet to obtain the names of two
  DNS servers. Indicate which whois databases you used.
