const startTime = function() {
  let countTime = 0;
  setInterval(() => {
    if(countTime == 60) countTime = 0;
    countTime += 1;
    divTime.innerHTML = countTime;
  }, 1000);
}


btnStart.addEventListener("click", startTime);
