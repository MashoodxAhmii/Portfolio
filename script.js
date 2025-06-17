// ==== CIRCULAR PROGRESS BARS ====
function animateProgress(selector, valueSelector, endValue, color) {
  let progress = document.querySelector(selector),
      valueText = document.querySelector(valueSelector),
      startValue = 0,
      speed = 30;

  let progressInterval = setInterval(() => {
    startValue++;
    valueText.textContent = `${startValue}%`;
    progress.style.background = `conic-gradient(${color} ${startValue * 3.6}deg, #ededed 0deg)`;

    if (startValue === endValue) clearInterval(progressInterval);
  }, speed);
}

animateProgress(".html-css", ".html-progress", 90, "#fca61f");
animateProgress(".javascript", ".javascript-progress", 75, "#7d2ae8");
animateProgress(".php", ".php-progress", 80, "#20c997");
animateProgress(".reactjs", ".reactjs-progress", 30, "#3f396d");


