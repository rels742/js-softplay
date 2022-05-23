// do not change these lines

function reset () {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
function occupancy() {
  return {
    adults: adults,
    children: children
  }
}

function enter(numAdults, numChildren) {
  if(numAdults >= numChildren) {
    adults += numAdults //adults and children objects are the ones being reassigned hence why it worked when I changed the order from numAdults += adults to adults += numAdults.
    children += numChildren
    return true
  } else {
    if(numAdults !== numChildren) {
      return false
    }
  } //Note to myself for the future, this else if section is not really needed because once tests are run, if the arguments dont meet the first if it then must mean its false so I didn't actually have to code this part in but for the sake of practice
}

function leave(numAdults, numChildren) {
  if(numAdults >= numChildren) {
    adults -= numAdults
    children -= numChildren
    return true
  } else {
    if(numAdults < numChildren) {
      return false
    }
  }
}


// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset
}
