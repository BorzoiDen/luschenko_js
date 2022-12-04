//const input = document.querySelector('.input');
//const input2 = document.querySelector('.input2');
//const input =  document.querySelector('#inp');
//const input2 =  document.querySelector('#inp2');
//const select2 = document.querySelector('.select2');
//const select3 = document.querySelector('.select3');
const input =  document.querySelector('.input-t');
const input2 =  document.querySelector('.input-p');
const out = document.querySelector('.out');
const formb = document.querySelector('.formb');
//const select = document.querySelector('.select');
function f20(e) {
  e.preventDefault(); // чтобы форма не перезагружала страницу!!!!
  let form = document.querySelector('.form');
  out.innerHTML = form.elements['username'].value;
  out.innerHTML += ' ';
  out.innerHTML += form.elements['userpass'].value;
}
document.querySelector('.formb').onclick = f20;
