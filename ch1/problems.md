P6
  a. Express the propagation delay, dprop, in terms of m and s.
    dprop = m / s

  b. Determine the transmission time of the packet, dtrans, in terms of L and R.
    dtrans = L / R

  c. Ignoring processing and queuing delays, obtain an expression for the end to end delay.
    d = dprop + dtrans

  d. Suppose Host A begins to transmit the packet at time t = 0. At time t = dtrans, where is the last bit of the packet?
    right leave the router A

  e. Suppose dprop is greater than dtrans. At time t = dtrans, where is the first bit of the packet?
    on the way to router B

  f. Suppose dprop is less than dtrans. At time t = dtrans, where is the first bit of the packet?
    arrived router B

  g. Suppose s = 2.5 * 10^8, L = 1500 bytes, and R = 10 Mbps. Find the distance m so that dprop equals dtrans.
    dtrans = L/R = 1500 * 8 / (10^6) = 0.012s
    m = s * dtrans = 3 * 10^6 = 3000km

P7
  56-byte packets.
  Host A converts analog voice to a digital 64 kbps bit stream on the fly.
  its transmission rate is 10 Mbps and its propagation delay is 10 msec
  How much time elapses from the time a bit is created (from the original analog signal at Host A) until the bit is decoded (as part of the analog signal at Host B)?
    one bit:
      dend-end = dprop + dtrans = 10^(-4) + 10 = 10.0001 msec
    one packet:

P8
  a. When circuit switching is used, how many users can be supported?
    (10 * 10^6) / (200 * 10^3) = 50

  b. For the remainder of this problem, suppose packet switching is used. Find the probability that a given user is transmitting.
    0.1

  c. Suppose there are 120 users. Find the probability that at any given time, exactly n users are transmitting simultaneously. (Hint: Use the binomial distribution.)
    p = (0.1)^n * (0.9)^(120-n)

  d. Find the probability that there are 51 or more users transmitting simultaneously.
    p =

P9
  Consider the discussion in Section 1.3 of packet switching versus circuit switching
  in which an example is provided with a 1 Mbps link. Users are generating
  data at a rate of 100 kbps when busy, but are busy generating data only with
  probability p = 0.1. Suppose that the 1 Mbps link is replaced by a 1 Gbps link.

  a. What is N, the maximum number of users that can be supported simultaneously under circuit switching?
    10^9 / (100 * 10^3) = 10000 users

  b. Now consider packet switching and a user population of M users. Give a formula (in terms of p, M, N) for the probability that more than N users are sending data.
    F(N; M, p) = i=0

P10
  + A ----- R1 ---- R2 - B. 3 links, 2 packet switches
  + packet is 1,500 bytes
  + the propagation speed on all three links is 2.5 * 10^8 m/s, distance are 5000km, 4000km, 1000km
  + transmission rates of all three links are 2.5 Mbps
  + the packet switch processing delay is 3 msec
  + no queuing delays

  Q. what is the end-to-end delay?
    dproc = 3 * 2 = 6ms
    dtrans= 1500*8 / (2.5*10^6) = 4.8ms
    dprog = 20ms + 16ms + 4ms
    dend-end = dproc + dque + dtrans + dprog

P11
  circuit switch does need to store and forward packet as a unit.
  dend-end = dtrans * 3 = 3/R

P12
  + packet size: 1500 bytes, link rate: 2.5 Mbps
  + When the packet arrives, one other packet is halfway done being transmitted on this outbound link and four other packets are waiting to be transmitted.
  Q1. What is the queuing delay for the new packet?
    dque = (1500 * 8) / (2.5 * 10^6) = 4.8 ms
    4.8 / 2 + 4 * 4.8 = 2.4 + 19.2 = 21.6 ms

P13
  a.
    dtrans = L/R
    (L/R + 2*L/R + ... + (N-1)*L/R) / N = (N - 1)/2 * L/R
  b.
    because N*L/R

P14

P20
  Rs, Rc, R, M
  Throughput = Min{ Rs, M / R, Rc }

P21
  Q1. If the server can only use one path to send data to the client,
  what is the maximum throughput that the server can achieve?
    Max{ Min{ R11, R12, ..., R1N }, Min{ R21, R22, ..., R2N }, ..., Min{ RM1, RM2, ..., RMN } }

  Q2.

P22
  Q1.
    p^N
  Q2.
    (1 - p^N)  * p^N
    (1 - p^N)^2* p^N
    (1 - p^N)^3* p^N
    ...
    (1 - p^N)^N* p^N

    ((1 - p^N) + ... + (1 - p^N)^N) * p^N / N

P23
  Q1
    2*dprog + L/Rs
  Q2
    T >= L/Rc - dprog

P24
  50T bytes = 400T bits
  100Mbps

  (400 * 10^6) / 100 = 4 * 10^6s ~= 1000h

P25
  transmission R:  5Mbps
  file size:       800,000bits
  distance:        20,000km
  propagate speed: 2.5 * 10^8m/s

  a.
  dprop = 2 * 10

8ms
160ms
50000

bandwidth-delay: R

1

Derive a general expression for the width of a bit in terms of the
propagation speed s, the transmission rate R, and the length of the
link m
