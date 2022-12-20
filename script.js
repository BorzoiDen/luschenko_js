
let str13 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';

const f13 = () => {
  let myObj = {};
  let arr = str13.split('');
  let s13 = new Set(arr);
  for(letter of s13){
    let counter = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == letter){
        counter++;
      }
    }
    myObj[`${letter}`] = counter;
  }
  return myObj;
}

document.querySelector('.b').onclick = () => {
    console.log(f13());
}