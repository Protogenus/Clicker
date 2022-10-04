// DOM ---
const woodHeading = document.querySelector("#wood-heading");
const woodbtn = document.querySelector("#wood-btn");
const autowood = document.querySelector("#auto-wood");
const woodWorkerHeading = document.querySelector("#wood-worker-heading");

const copperHeading = document.querySelector("#copper-heading");
const copperbtn = document.querySelector("#copper-btn");
const autocopper = document.querySelector("#auto-copper");
const copperWorkerHeading = document.querySelector("#copper-worker-heading");

const fishHeading = document.querySelector("#fish-heading");
const fishbtn = document.querySelector("#fish-btn");
const autofish = document.querySelector("#auto-fish");
const fishWorkerHeading = document.querySelector("#fish-worker-heading");

// Game variables ---
let lumberjacks = 0;
let miners = 0;
let fisherman = 0;

let wood = 0;
let woodPerSecond = 0;

let copper = 0;
let copperPerSecond = 0;

let fish = 0;
let fishPerSecond = 0;

// Event listeners ----

// Gathering buttons
woodbtn.addEventListener("click", function() {
    wood += 1;
    woodHeading.innerHTML = `Wood: ${wood}`; 
});

copperbtn.addEventListener("click", function() {
    copper += 1;
    copperHeading.innerHTML = `Copper: ${copper}`; 
});

fishbtn.addEventListener("click", function() {
    fish += 1;
    fishHeading.innerHTML = `Fish: ${fish}`; 
});


// Worker buttons
autowood.addEventListener("click", function() {
    woodPerSecond += 1;
    lumberjacks += 1;
});

autocopper.addEventListener("click", function() {
    copperPerSecond += 1;
    miners += 1;
});

autofish.addEventListener("click", function() {
    fishPerSecond += 1;
    fisherman += 1;
});

// Workers
autowood.addEventListener("click", () => {
    woodPerSecond += 1;
    }
);

autocopper.addEventListener("click", () => {
    copperPerSecond += 1;
    }
);

autofish.addEventListener("click", () => {
    fishPerSecond += 1;
    }
);

// Function ---
function addWoodWorker() {
    wood += woodPerSecond;
}

function addCopperWorker() {
    copper += copperPerSecond;
}

function addFishWorker() {
    fish += fishPerSecond;
}


// Game loop ---
window.setInterval(function () {
    addWoodWorker()
    addCopperWorker()
    addFishWorker()
    woodHeading.innerHTML = `Wood: ${wood}`;
    copperHeading.innerHTML = `Copper: ${copper}`;
    fishHeading.innerHTML = `Fish: ${fish}`;

    woodWorkerHeading.innerHTML = `Lumberjacks: ${lumberjacks}`;
    copperWorkerHeading.innerHTML = `Miners: ${miners}`;
    fishWorkerHeading.innerHTML = `Fisherman: ${fisherman}`;
}, 500);