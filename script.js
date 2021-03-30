const MIN_SIZE = 10;
const MAX_SIZE = 20;
const MIN_DURATION = 2000;
const MAX_DURATION = 5000;
// color
const colorInput = document.querySelector("input[name='color']");
let color = "#ffffff";

const snowflakesContainer = document.getElementById("snowflakes-container");

// quantity
const quantityInput = document.querySelector("input[name='quantity']")

// rain or snow
const snowVsRainrInput = document.querySelector("input[name='snow-vs-rain']")
setInterval(() => createSnowflake(), 50);

function randint(lo, hi) {
  return Math.random() * (hi - lo) + lo;
}

function randomIcon() {
  if (snowVsRainrInput.value == 0.5){
    if (Math.random() < 0.5) {
      return "fa-tint";
    } else {
      return "fa-snowflake";
    }
  }if (snowVsRainrInput.value < 0.7){
    return "fa-snowflake";
  }else if (snowVsRainrInput.value >0.2 ){
    return "fa-tint";
  }
}
function createSnowflake() {
  const snowFlake = document.createElement("i");

  snowFlake.classList.add("fas", randomIcon());
  snowFlake.style.left = randint(0, 100) + "%";
  snowFlake.style.opacity = Math.random();
  snowFlake.style.fontSize = randint(MIN_SIZE, MAX_SIZE) + "px";
  snowFlake.style.color = color;
  

  snowflakesContainer.appendChild(snowFlake);

  snowFlake
    .animate(
      { transform: `translate(0vw, 100vh)` },
      { duration: randint(MIN_DURATION, MAX_DURATION) }
  )
  
    .finished.then(() => snowFlake.remove());
    colorInput.addEventListener("change", () => {
    color = colorInput.value;
  })
  
}

