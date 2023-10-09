P3. In Section 4.2.4, it was said that if R_switch is N times faster than R_line,
then only negligible queuing will occur at the input ports, even if all the
packets are to be forwarded to the same output port. Now suppose that
R_switch = R_line, but all packets are to be forwarded to different output
ports. Let D be the time to transmit a packet. As a function of D, what is the
maximum input queuing delay for a packet for the (a) memory, (b) bus, and
(c) crossbar switching fabrics?
  + two points:
    1. forwarded to different output ports
    2. the maximum input queuing delay
  (a) (N-1)R_switch
  (b) (N-1)R_switch
  (c) constant


P8. Consider a datagram network using 32-bit host addresses. Suppose a router
has four links, numbered 0 through 3, and packets are to be forwarded to the
link interfaces as follows:

Destination Address Range Link Interface
11100000 00000000 00000000 00000000
through 0
11100000 00111111 11111111 11111111

11100000 01000000 00000000 00000000
through 1
11100000 01000000 11111111 11111111

11100000 01000001 00000000 00000000
through 2
11100001 01111111 11111111 11111111

otherwise 3

a. Provide a forwarding table that has five entries, uses longest prefix matching, and forwards packets to the correct link interfaces.

0 192.0.0.0 - 192.63.255.255
1 192.64.0.0- 192.64.255.255
2 
3
unknown


b. Describe how your forwarding table determines the appropriate link interface for datagrams with destination addresses:
11001000 10010001 01010001 01010101
11100001 01000000 11000011 00111100
11100001 10000000 00010001 01110111

