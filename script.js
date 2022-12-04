
//const input2 = document.querySelector('.input2');
//const input =  document.querySelector('#inp');
//const input2 =  document.querySelector('#inp2');
//const select2 = document.querySelector('.select2');
//const select3 = document.querySelector('.select3');
//const select = document.querySelector('.select');
//const input =  document.querySelector('.input-t');
//const input2 =  document.querySelector('.input-p');
//const out = document.querySelector('.out');
//const input = document.querySelector('.input');
//const input2 = document.querySelector('.input2');
function t10() {
  let total = '';
  const out = document.querySelector('.out');
  for(let i = 1; i <= 5; i++){
      for(let k = (10 * i - 9); k <= (10 * i); k++){
        if (k >= 1 && k <= 9){
          total += `0${k} `;
        } else {
          total += `${k} `;
        }
      }
      total += `<br>`;
    }
    out.innerHTML = total;
  }
document.querySelector('.b').onclick = t10;
