let nextSeqNum = InitialSeqNumber
let sendBase = InitialSeqNumber
const timers = []
const waitAckQ = []

function handleReciveData(data) { 
  if(timers.length == 0)
    startTimer(0)
  // setup IP from
}

/** whenever   */
function handleTimeout(x) {
  startTimer(x)
}

function handleReciveACK(ack) {
  if(ack > sendBase) {
    sendBase = ack
    if(waitAckQ.length !== 0)
      startTimer()
  }
}
