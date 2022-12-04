
//const input2 = document.querySelector('.input2');
//const input =  document.querySelector('#inp');
//const input2 =  document.querySelector('#inp2');
//const select2 = document.querySelector('.select2');
//const select3 = document.querySelector('.select3');
//const select = document.querySelector('.select');
//const input =  document.querySelector('.input-t');
//const input2 =  document.querySelector('.input-p');
//const out = document.querySelector('.out');
const input = document.querySelector('.input');
const input2 = document.querySelector('.input2');
const out = document.querySelector('.out');
function t15() {
  for(let i = 0; i <= 10; i++){
      out.innerHTML += (10 - i) + ' ' + i + ' '; 
    }
  }
document.querySelector('.b').onclick = t15;
