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

  c. Suppose there are 120 users. Find the probability that at any given time, exactly n users are transmitting simultaneously. (Hint: Use the binomial distribution.)

  120 * 0.1

  d. Find the probability that there are 51 or more users transmitting simultaneously.
