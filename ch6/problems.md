00  111101 01110101 0
00  110010 11000111 0
01  110101 10010110 1
1<1>111100 01101101 0
00  101101 10010000 0

11  101011 11011001 1


110 0 0100 00000001 0
000 1 1101 00011001 1
111 1 0100 10010011 0
001 1 1001 10011010 0
101 1 1000 10100101 0

101 1 1100 10110100 1


P1. Suppose the information content of a packet is the bit pattern 1110 0110 1001
0101 and an even parity scheme is being used. What would the value of the field
containing the parity bits be for the case of a two-dimensional parity scheme?
Your answer should be such that a minimum-length checksum field is used.

N nodes
R bps(the transmission rate of the channel)

P3. Suppose the information portion of a packet (D in Figure 6.3) contains
10 bytes consisting of the 8-bit unsigned binary ASCII representation of
string "Internet." Compute the Internet checksum for this data.

49        6e        75        65        73        6e        65        75        2e
0100 1001 0110 1110 0111 0101 0110 0101 0111 0011 0110 1110 0110 0101 0111 0101 0010 1110

0100 1001
0110 1110
0111 0101
0110 0101
0111 0011
0110 1110
0110 0101
0111 0101
0010 1110

P4. Consider the previous problem, but instead suppose these 10 bytes contain
a. the binary representation of the numbers 1 through 10.
b. the ASCII representation of the letters B through K (uppercase).
c. the ASCII representation of the letters b through k (lowercase).
d. Compute the Internet checksum for this data.

P5. Consider the 5-bit generator, G = 10011, and suppose that D has the value
1010101010. What is the value of R?
D + R | nG
  + R: 0100


P6. Consider the previous problem, but suppose that D has the value
a. 1000100101.
b. 0101101010.
c. 0110100011.

P7. In this problem, we explore some of the properties of the CRC. For
the generator G (= 1001) given in Section 6.2.3, answer the following
questions.
a. Why can it detect any single bit error in data D?
  + 

b. Can the above G detect any odd number of bit errors? Why?
  + yes, the original D is divided by G, any changes in odd number cannot make it still divided by G.

P8. In Section 6.3, we provided an outline of the derivation of the efficiency of
slotted ALOHA. In this problem we’ll complete the derivation.
a. Recall that when there are N active nodes, the efficiency of slotted ALOHA is Np(1 - p)N-1. Find the value of p that maximizes this expression.
b. Using the value of p found in (a), find the efficiency of slotted ALOHA by letting N approach infinity. Hint: (1 - 1/N)N approaches 1/e as N approaches infinity