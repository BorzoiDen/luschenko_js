//function showArr(domElem, arr) {
//  let out = '';
//  for (let i = 0; i < arr.length; i++) {
//      out += arr[i] + ' ';
//  }
//  document.querySelector(domElem).innerHTML = out;
//}

let a20 = [
  [[0, 3], 1], 
  [[0, 1, 8], [0, 9]], 
  [0, [12], [18]],
  12
];

console.group('Task 19 ================');
console.log(a20[1][1][1] == 9);
console.log(a20[2][2] == 18);
console.log(a20[3]== 12);

console.groupEnd();