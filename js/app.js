// DOM ---
const woodHeading = document.querySelector("#wood-heading");
const woodbtn = document.querySelector("#wood-btn");
const copperHeading = document.querySelector("#copper-heading");
const copperbtn = document.querySelector("#copper-btn");
const fishHeading = document.querySelector("#fish-heading");
const fishbtn = document.querySelector("#fish-btn");

// Game variables ---
let workers = 0;

let wood = 0;
let woodPerSecond = 0;

let copper = 0;
let copperPerSecond = 0;

let fish = 0;
let fishPerSecond = 0;

// Event listeners ----

// Gathering buttons
woodbtn.addEventListener("click", function () {
    wood += 1;
    woodHeading.innerHTML = `Wood: ${wood}`; 
})

copperbtn.addEventListener("click", function () {
    copper += 1;
    copperHeading.innerHTML = `Copper: ${copper}`; 
})

fishbtn.addEventListener("click", function () {
    fish += 1;
    fishHeading.innerHTML = `Fish: ${fish}`; 
})

// Game loop ---
window.setInterval(function () {
    //autoClicker() Will be used for workers
    woodHeading.innerHTML = `Wood: ${wood}`;
    copperHeading.innerHTML = `Copper: ${copper}`;
    fishHeading.innerHTML = `Fish: ${fish}`;
}, 500);


/* This will be for adding workers, essentially autoclickers
autobtn.addEventListener("click", () => {  You can use => instead of writing out 'function()'
    if(clicks >= 5) {
        clicks -= 5;
        clicksPerSecond += 5;
        autoclickers += 1;
    }
});

function autoClicker() {
    clicks += clicksPerSecond;
}
*/