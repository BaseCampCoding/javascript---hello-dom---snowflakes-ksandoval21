const MIN_SIZE = 10;
const MAX_SIZE = 20;
const MIN_DURATION = 2000;
const MAX_DURATION = 3000;
const snowflakesContainer = document.getElementById("snowflakes-container");


// color
const colorInput = document.querySelector("input[name='color']");
let color = "#ffffff";


// rain or snow
const snowVsRainrInput = document.querySelector("input[name='snow-vs-rain']")


// quantity
let quantityAmount =400;
const quantityInput = document.getElementById("quantity");
let time = setInterval(() => createSnowflake(), quantityAmount);

quantityInput.addEventListener("input", ()=>{
  switch(quantityInput.value) {
  case "0":
    quantityAmount= 600;
    break;
  case "1":
    quantityAmount=200;
    break;
  case "2":
    quantityAmount=50;
    break;
  case "3":
    quantityAmount=25;
    break;
  case "4":
    quantityAmount=1;
    break;
}
clearInterval(time);
time=setInterval(() => createSnowflake(), quantityAmount);
});

// wind 
const windInput = document.getElementById("wind");



function randint(lo, hi) {
  return Math.random() * (hi - lo) + lo;
}

function randomIcon() {
    if (Math.random() < Number(snowVsRainrInput.value)) {
      return "fa-tint";
    } else {
      return "fa-snowflake";
    }
}
function createSnowflake() {
  const snowFlake = document.createElement("i");
  snowFlake.classList.add("fas", randomIcon());
  snowFlake.style.left = randint(0, 100) + "%";
  snowFlake.style.opacity = Math.random();
  snowFlake.style.fontSize = randint(MIN_SIZE, MAX_SIZE) + "px";
  snowFlake.style.color = color;
  colorInput.addEventListener("change", () => {
    color = colorInput.value;
  })

  windInput.addEventListener("change", () => {
    switch(windInput.value) {
    case "-40":
      snowFlake.style.transform= "translateX(" + (-500) + "px) ";
      break;
    case "-20":
      snowFlake.style.transform= "translateX(" + (-300) + "px) ";
      break;
    case "-10":
      snowFlake.style.transform= "translateX(" + (-100) + "px) ";
      break;
    case "10":
      snowFlake.style.transform= "translateX(" + (100) + "px) ";
      break;
    case "20":
      snowFlake.style.transform= "translateX(" + (300) + "px) ";
      break;
    case "40":
      snowFlake.style.transform= "translateX(" + (500) + "px) ";
      break;
    }
    })
  snowflakesContainer.appendChild(snowFlake);

  snowFlake
    .animate(
      { transform: `translate(0vw, 100vh)` },
      { duration: randint(MIN_DURATION, MAX_DURATION) }
  )
  
    .finished.then(() => snowFlake.remove());
    
  
}

