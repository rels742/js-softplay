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
    numAdults += adults
    numChildren += children
    return true
  } else {
    if(numAdults !== numChildren) {
      return false
    }
  }
}

function leave(numAdults, numChildren)


// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset
}


// PLAIN ENGLISH 
// CREATE THREE FUNCTIONS IN TOTAL
// I need to create a condition that tracks how many adults and children are in the softplay center. For every child their needs to be AT LEAST one adult. If there is not then it will return a false. If there is then the number will increment accordingly. 

// for leave function for every child that leaves at least one adult has to leave too and the number will decrement accordingly 

// An adult can leave on their own, so long as their is still an adult to one child

// there has to be more people in the playarea then there are people trying to leave

//THOUGHTS ON SOLVING THE FIRST FUNCTION:
// function enter(numAdults, numChildren)
// for loop - (not sure how to set it up) but after inital set up, if AT LEAST one adult and  child want to enter then that is true and increment the overall number 
// if the number of adults to children is not even then its false and number will not increment


// PSEUDO CODE 
//FIRST FUNCTION: 
// FUNCTION enter (NUM ADULTS, NUM CHILDREN) {
// FOR every adult = A child can enter 
// FOR ADULT >= CHILD THEN ADD Numofadult and numofchildren
//IF CHILD > ADULT then RETURN False
//}
