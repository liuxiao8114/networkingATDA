## 2.1
R1. List five nonproprietary Internet applications and the application-layer protocols that they use.
  name    application-layer protocol
  Web      HTTP
  EMAIL    SMTP/IMAP/POP3/HTTP
  hostname-to-IP-address translation service         DNS
  File transfer   FTP
                  BitTorrent
  Remote terminal access TELNET


R2. What is the difference between network architecture and application architecture?
  application architecture:
    programming language, env, compiler

  network architecture:
    how multiple processes communicate.
    In client-server architecture, how

R3. For a communication session between a pair of processes, which process is the client and which is the server?
  the process which initiates the communication

R4. For a P2P file-sharing application, do you agree with the statement, "There is no
notion of client and server sides of a communication session"? Why or why not?
  No, every node in P2P performs as client or server or both.

R5. What information is used by a process running on one host to identify a process
running on another host?
  IP and port

R6. Suppose you wanted to do a transaction

R7. Referring to Figure 2.4, we see that none of the applications listed in Figure
2.4 requires both no data loss and timing. Can you conceive of an application
that requires no data loss and that is also highly time-sensitive?
  SOS message
  real-time remote command

R10. What is meant by a handshaking protocol?
  TCP is connection-oriented service, that has the client and server exchange transport layer control information with each other before   

R11. Why do HTTP, SMTP, and IMAP run on top of TCP rather than on UDP?
  reliable data transfer

R12. Consider an e-commerce site that wants to keep a purchase record for each of its customers. Describe how this can be done with cookies
