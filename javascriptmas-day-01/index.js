const countDownDate = new Date("Dec 25, 2023 00:00:00").getTime();

let x = setInterval(function() {

  const now = new Date().getTime();
    
  let distance = countDownDate - now;
    
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("countdown-display").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-display").innerHTML = "Christmas DAY!!!!";
  }
}, 1000);