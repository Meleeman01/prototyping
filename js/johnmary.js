function johnMary(str) {
  // Your code goes here
  let string = str.toUpperCase();
  //find john and count
  let johnCount = string.match(/JOHN/g).length;
  //find mary and count
  let maryCount = string.match(/MARY/g).length;
  console.log(johnCount)
  //if john count is equivilent to mary count
  if (maryCount==johnCount) {
  	return true;
  } 
  return false;
}

console.log(johnMary("John&MaryJoHnjohnmary mary"));