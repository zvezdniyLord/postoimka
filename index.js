const btnStart = document.getElementById('btnStart');
const divTime = document.getElementById('divTime');
const btnEnd = document.getElementById('btnEnd');

let timer;

btnStart.addEventListener('click', function() {
  let countTime = 0;
  timer = setInterval( () =>{
    if(countTime == 60) countTime = 0;
    countTime += 1;
    divTime.innerHTML = countTime;
  }, 1000);
});

btnEnd.addEventListener('click', () => {
  if(timer){
    clearTimeout(timer);
  }
});

// const startTime = function() {
//   let countTime = 0;
//   setInterval(() => {
//     if(countTime == 60) countTime = 0;
//     countTime += 1;
//     divTime.innerHTML = countTime;
//   }, 1000);
// }

// const endTime = function() {
//   clearInterval(countTime);
// };


// btnStart.addEventListener("click", startTime);
// btnEnd.addEventListener("click", endTime);