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


let time= setInterval(() => createSnowflake(), 1);
quantityInput.addEventListener("change", ()=>{
  if (quantityInput.value = 0){
    quantityInput.value = 0
    clearInterval(time);
    time = setInterval(() => createSnowflake(), 150);
  }else if (quantityInput.value = 1){
    clearInterval(time);
    time = setInterval(() => createSnowflake(), 100);
  }else if (quantityInput.value = 2){
    clearInterval(time);
    time = setInterval(() => createSnowflake(), 50);
  }else if (quantityInput.value = 3){
    clearInterval(time);
    time = setInterval(() => createSnowflake(), 25);
  }else{
    time= setInterval(() => createSnowflake(), 1);
  }
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


