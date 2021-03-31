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
// wind 
// setInterval(() => createSnowflake(), 100)


quantityInput.addEventListener("input", ()=>{
  setInterval(() => createSnowflake(), (quantityInput.value * 1000))
})



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

  snowflakesContainer.appendChild(snowFlake);

  snowFlake
    .animate(
      { transform: `translate(0vw, 100vh)` },
      { duration: randint(MIN_DURATION, MAX_DURATION) }
  )
  
    .finished.then(() => snowFlake.remove());
    
  
}


