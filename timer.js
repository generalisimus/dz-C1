const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const plusis = document.querySelector('.plusis');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const start = document.querySelector('.start');

let countSec = 0;
let countMin = 0;

const updateText = () =>{ 
  minutes.innerHTML = (0 + String(countMin)).slice(-2);
  seconds.innerHTML = (0 + String(countSec)).slice(-2);
}
updateText();

const countDown = () => { 
  let total = countSec + countMin * 60;
  const timeinterval = setTimeout(countDown, 1000);
  if (total <= 0) {
    clearInterval(timeinterval);
    timer.style.display = 'none';
    message.innerHTML = '<p> Поехали!!!</p>'
  }
  if(countSec > 0) countSec--;
  else{
    countSec = 59;
    countMin--;
  } 
  updateText();
}

plusis.onclick = () =>{
  if (countMin < 59) ++countMin;
  updateText();
}

plus.onclick = () =>{
  if(countSec < 59) ++countSec;
  else{
    countSec = 0;
    ++countMin;
  }
  updateText();
}

minus.onclick = () =>{
  if(countMin <= 0 && countSec===0){
    countSec = 0;
    countMin = 0;
    return;
  }
  if(countSec > 0) --countSec;
  else{
    countSec = 59;
    --countMin;
  }
  updateText();
}

start.onclick = () => {
    countDown();  
}
/*этим я хотел принудительно завершить 
  работу таймера, пробовал различные
  варианты но у меня так и не получилось
  просьба если знаете что нужно сделать
  напишите в коментариях.*/    
one.onclick = () => {
  if (countSec > 1);
  return;
}