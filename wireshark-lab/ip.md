
## A look at the captured trace
2. Within the IP packet header, what is the value in the upper layer protocol field


3. How many bytes are in the IP header? How many bytes are in the payload of the
IP datagram? Explain how you determined the number of payload bytes.
  Datagram length = 84 bytes
  Data length = len(Datagram) - len(header) = 84 - 20 = 64 bytes 

4. Has this IP datagram been fragmented? Explain how you determined whether or
not the datagram has been fragmented.
  no, see the flags/fragement = 00 00

5. Which fields in the IP datagram always change from one datagram to the next
within this series of ICMP messages sent by your computer?
  TTL

6. Which fields stay constant? Which of the fields must stay constant? Which fields
must change? Why?
  IP ver(4b):               must stay constant
  Header length(4b):        
  Type of service(8b):      must stay constant
  Datagram length(16b):
  Identifier(16b):
  Flags/Fragment(16b):
  TTL(8b):
  UpperLayerProtocol(8b):   must stay constant
  HeaderChecksum(16b):      must change
  SourceIPAddress(32b):     must stay constant
  DestinationIPAddress(32b):must change
  Options
  Data

p344
the checksum must be recomputed and stored again at each router, since
the TTL field, and possibly the options field as well, will change.


7. Describe the pattern you see in the values in the Identification field of the IP
datagram

0xa60b  42507
0xa5e3  42467 40  0x28
0xa5b6  42422 45  0x2d
0xa579  42361 61  0x3d
0xa54b  42315 46  
0xa50f  42255 60
0xa480  42112 43
0xa423  42019 93