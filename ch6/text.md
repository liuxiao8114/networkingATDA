## 6.1 Introduction to the Link Layer
+ node
+ link

###  6.1.1 The Services Provided by the Link Layer
+ Framing
+ Link access
  A medium access control(MAC) protocol specifies the rules by which a frame is transmitted onto the link.
+ Reliable delivery
+

## 6.6
40 simultaneous flows
100 Gpbs extern



interconnection network has many advantages over a conceptual crossbar switch,
including multiple paths from source to destination and the increased capacity (due
to multipath routing) and reliability (due to multiple switch- and link-disjoint paths
between any two hosts).
The data center interconnection network is comprised of a large number of smallsized
switches. For example,

in Google’s Jupiter datacenter fabric, one configuration has
48 links between the ToR switch and its servers below, and connections up to 8 tier-2 switches;
a tier-2 switch has links to 256 ToR switches and links up to 16 tier-1 switches.

In Facebook’s data center architecture,
each ToR switch connects up to four different tier-2 switches (each in a different “spline plane”), and each tier-2 switch connects
up to 4 of the 48 tier-1 switches in its spline plane; there are four spline planes. Tier-1 and
tier-2 switches connect down to a larger, scalable number of tier-2 or ToR switches, respectively,
below [FB 2019]. For some of the largest data center operators, these switches
are being built in-house from commodity, off-the-shelf, merchant silicon [Greenberg
2009b; Roy 2015; Singh 2015] rather than being purchased from switch vendors.

DHCP request from Bob's PC

### 6.7.1 Getting Started: DHCP, UDP, IP, and Ethernet
1. send DHCP request, through UDP and IP
-> UDP Segment:
    src: 0.0.0.0, src port: 68(DHCP client), target: ff.ff.ff.ff, target port: 67(DHCP server),
-> IP Datagram:
    version: 4, top service: UDP, ttl:, src: 0.0.0.0, target: ff.ff.ff.ff, data
2. through Ethernet
-> Ethernet Frame:
    destination MAC addresses: FF:FF:FF:FF:FF:FF(broadcast)
    source MAC addresses
3. received by router
switch broadcasts the
incoming frame on all outgoing ports, including the port connected to the
router.
-> Switch

4. DHCP server received the request

5. DHCP server running in the router can allocate IP addreesses in CIDR blocks 68.85.2.0/24.
allocates 68.85.2.101 to Bob’s laptop
The DHCP server creates a DHCP ACK message contains
  + 68.85.2.101 IP address
  + the IP address of the DNS server(68.87.71.226)
  + the IP address for the default gateway router(68.85.2.1)
  + the subnet block(68.85.2.0/24) (equivalently, the “network mask”).

6. Ethernet frame sent by router to the switch. The switch forward a frame addressed to 00:16:D3:23:68:8A only to the output port leading to Bob’s laptop.
7.

### 6.7.2 Still Getting Started: DNS and ARP
8. The UDP segment is then placed within an IP datagram with an IP destination address of 68.87.71.226 (the address of the DNS server returned in the DHCP ACK in step 5) and a source IP address of 68.85.2.101.

9. Even though Bob’s laptop knows the IP address of the school’s gateway router (68.85.2.1) via the DHCP ACK message in step 5 above, it doesn’t know the gateway router’s MAC address. In order to obtain the MAC address of the gateway router, Bob’s laptop will need to use the ARP protocol (Section 6.4.1).

10. ARP query message

14. The gateway router receives the frame and extracts the IP datagram containing the DNS query. The router looks up the destination address of this datagram

15. The leftmost router in the Comcast network receives the frame, extracts the
IP datagram, examines the datagram’s destination address (68.87.71.226) and
determines the outgoing interface on which to forward the datagram toward the
DNS server from its forwarding table, which has been filled in by Comcast’s
intra-domain protocol (such as RIP, OSPF or IS-IS, Section 5.3) as well as the
Internet’s inter-domain protocol, BGP (Section 5.4).
