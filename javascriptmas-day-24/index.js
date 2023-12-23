/**
 * 🎄 Challenge: 
 * 1. The Christmas tree's lights should switch 
 *    on and off every 800 miliseconds.
 * 
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/ 

document.addEventListener("DOMContentLoaded", function () {
  const lights = document.querySelectorAll(".lights");

  function toggleLights() {
    lights.forEach((light, index) => {
      setTimeout(() => {
        light.classList.toggle("lights-on");
      }, index * 200);
    });
  }

  function startLightSequence() {
    toggleLights();
    setInterval(toggleLights, 800);
  }

  startLightSequence();
});
