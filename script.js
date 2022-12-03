//const input = document.querySelector('.input');
//const input2 = document.querySelector('.input2');
const select = document.querySelector('.select');
const select2 = document.querySelector('.select2');
const select3 = document.querySelector('.select3');
const out = document.querySelector('.out');

function f15(){
  switch(select3.value){
    case '&&':
      out.innerHTML = (+select.value && +select2.value);
      break;
    case '||':
      out.innerHTML = (+select.value || +select2.value);
      break;
  }
}
document.querySelector('.button').onclick = f15;