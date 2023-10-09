## Section 4.1
### R1
+ the name of a network-layer packet?
  datagram

+ Both routers and link-layer switches are called packet switches. What is the fundamental difference between a router and link-layer switch?
p322


### R2
p315 
The primary data-plane role of each router is to forward datagrams from
its input links to its output links;
The primary role of the network control plane is to
coordinate these local, per-router forwarding actions so that datagrams are ultimately
transferred end-to-end, along paths of routers between source and destination hosts.


Forwarding refers to the router-local action of transferring a packet from an input
link interface to the appropriate output link interface. Forwarding takes place at very
short timescales (typically a few nanoseconds), and thus is typically implemented in
hardware.

Routing refers to the network-wide process that determines the end-to-end
paths that packets take from source to destination. Routing takes place on much longer
timescales (typically seconds), and as we will see is often implemented in software.

## Section 4.2
### R7 Discuss why each input port in a high-speed router stores a shadow copy of the forwarding table

## Section 4.3
### R17
if IPv4, Upper-layer protocol header
if IPv6, Next header

### R21. Do routers have IP addresses? If so, how many?
p345
The boundary between the host and the physical link is called an interface.
The boundary between the router and any one of its links is also called an interface. A router thus has multiple interfaces, one for each of its links.
Because every host and router is capable of sending and receiving IP datagrams, IP requires each host and router interface to have its own IP address. Thus, an IP address is technically associated with an interface, rather than with the host or router containing that interface. 
