// @ts-check


export function canExecuteFastAttack(knightIsAwake) {
  // const knightIsAwake = true;
  if (knightIsAwake){
    return false;
  } else {
    return true;
  }
}
// const knightIsAwake = false;
// const archerIsAwake = true;
// const prisonerIsAwake = false;
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake || archerIsAwake || prisonerIsAwake){
    return true;
  } else {
    return false;
  }
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (prisonerIsAwake === true && archerIsAwake === false){
    return true;
  }else{
    return false
  }
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
if (petDogIsPresent === true ){
  if (archerIsAwake === false){
    return true
  }else {
    return false
  }
} else {
  if (prisonerIsAwake=== true){
    if (archerIsAwake === false && knightIsAwake===false){
      return true
    }else{
      return false
    }
   }else{
     return false
   }
  }
}
