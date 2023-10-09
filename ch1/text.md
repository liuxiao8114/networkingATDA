### 1.2.1 
  DSL:   digital subscriber line
  DSLAM: digital subscriber line access multiplexer
  CMTS : cable modem termination system


### 1.3.3 Network of Network
As we just learned, customer ISPs pay their provider ISPs to obtain global Internet
interconnectivity. The amount that a customer ISP pays a provider ISP reflects
the amount of traffic it exchanges with the provider. To reduce these costs, a pair
of nearby ISPs at the same level of the hierarchy can peer, that is, they can directly
connect their networks together so that all the traffic between them passes over the
direct connection rather than through upstream intermediaries. When two ISPs peer,
it is typically settlement-free, that is, neither ISP pays the other. As noted earlier,
tier-1 ISPs also peer with one another, settlement-free. For a readable discussion of
peering and customer-provider relationships, see [Van der Berg 2008]. Along these
same lines, a third-party company can create an Internet Exchange Point (IXP),
which is a meeting point where multiple ISPs can peer together. An IXP is typically
in a stand-alone building with its own switches [Ager 2012]. There are over 600 IXPs
in the Internet today [PeeringDB 2020]. We refer to this ecosystem—consisting of
access ISPs, regional ISPs, tier-1 ISPs, PoPs, multi-homing, peering, and IXPs—as
Network Structure 4.

We now finally arrive at Network Structure 5, which describes today’s Internet.
Network Structure 5, illustrated in Figure 1.15, builds on top of Network Structure 4
by adding content-provider networks. Google is currently one of the leading examples
of such a content-provider network. As of this writing, it Google has 19 major data
centers distributed across North America, Europe, Asia, South America, and Australia
with each data center having tens or hundreds of thousands of servers. Additionally,
Google has smaller data centers, each with a few hundred servers; these smaller data
centers are often located within IXPs. The Google data centers are all interconnected
via Google’s private TCP/IP network, which spans the entire globe but is nevertheless
separate from the public Internet. Importantly, the Google private network only
carries traffic to/from Google servers. As shown in Figure 1.15, the Google private
network attempts to “bypass” the upper tiers of the Internet by peering (settlement
free) with lower-tier ISPs, either by directly connecting with them or by connecting
with them at IXPs [Labovitz 2010]. However, because many access ISPs can still only
be reached by transiting through tier-1 networks, the Google network also connects
to tier-1 ISPs, and pays those ISPs for the traffic it exchanges with them. By creating
its own network, a content provider not only reduces its payments to upper-tier ISPs,
but also has greater control of how its services are ultimately delivered to end users.
Google’s network infrastructure is described in greater detail in Section 2.6.

### 1.4
#### Processing Delay
Examine the packet's header and decide where to direct the packet.

#### Queuing Delay
The

#### Transmission Delay
It is the amount of time required to push all of packet's bits into the link.
#### Propagation Delay
It is the function between the packet length and the transmission rate of the link.
the distance of the two routers and the propagation speed of the link.


the rate at which traffic arrive
#### 1.4.4 Throughput in Computer Networks
