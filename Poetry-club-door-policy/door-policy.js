// @ts-check

export function frontDoorResponse(line) {
  return line.slice(0,1);
}

export function frontDoorPassword(word) {
  return word.slice(0,1).toUpperCase()+word.slice(1).toLowerCase();
}

export function backDoorResponse(line) {
  line = line.trim()
  return line[line.length-1];
}

export function backDoorPassword(word) {
  return word.slice(0,1).toUpperCase().trim()+word.slice(1).trim()+', please';
}
