let ar19 = [15, 424, 313, 78, 241, 4, 45, 67];

function f19() {
  let out = document.querySelector('.out'); 
  let min = ar19[0];
  for(let i = 0; i < ar19.length; i++){
    if(ar19[i] < min){
      min = ar19[i];
    }
  }
  out.innerHTML = min;
}
document.querySelector('.b').onclick = f19;