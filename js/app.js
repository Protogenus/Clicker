
// DOM ---
const moneyHeading = document.querySelector("#money-heading");

const woodHeading = document.querySelector("#wood-heading");
const woodbtn = document.querySelector("#wood-btn");
const autowood = document.querySelector("#auto-wood");
const woodWorkerHeading = document.querySelector("#wood-worker-heading");

const oreHeading = document.querySelector("#ore-heading");
const orebtn = document.querySelector("#ore-btn");
const autoore = document.querySelector("#auto-ore");
const oreWorkerHeading = document.querySelector("#ore-worker-heading");

const fishHeading = document.querySelector("#fish-heading");
const fishbtn = document.querySelector("#fish-btn");
const autofish = document.querySelector("#auto-fish");
const fishWorkerHeading = document.querySelector("#fish-worker-heading");

const sellWood = document.querySelector("#sell-wood");
const sellOre = document.querySelector("#sell-ore");
const sellFish = document.querySelector("#sell-fish");

// Game variables ---
let money = 0;

let lumberjacks = 0;
let miners = 0;
let fisherman = 0;

let wood = 0;
let woodPerSecond = 0;
let woodCost = 20;

let ore = 0;
let orePerSecond = 0;
let oreCost = 50;

let fish = 0;
let fishPerSecond = 0;
let fishCost = 15;

// Event listeners ----

// Gathering buttons
woodbtn.addEventListener("click", function() {
    wood += 1;
    woodHeading.innerHTML = `Wood: ${wood}`; 
});

orebtn.addEventListener("click", function() {
    ore += 1;
    oreHeading.innerHTML = `Ore: ${ore}`; 
});

fishbtn.addEventListener("click", function() {
    fish += 1;
    fishHeading.innerHTML = `Fish: ${fish}`; 
});

// Selling buttons
sellWood.addEventListener("click", function() {
    money += woodCost * wood;
    wood = 0;
})

sellOre.addEventListener("click", function() {
    money += oreCost * ore;
    ore = 0;
})

sellFish.addEventListener("click", function() {
    money += fishCost * fish;
    fish = 0;
})


// Worker buttons
autowood.addEventListener("click", function() {
    woodPerSecond += 1;
    lumberjacks += 1;
});

autoore.addEventListener("click", function() {
    orePerSecond += 1;
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

autoore.addEventListener("click", () => {
    orePerSecond += 1;
    }
);

autofish.addEventListener("click", () => {
    fishPerSecond += 1;
    }
);

// Functions ---
function addWoodWorker() {
    wood += woodPerSecond;
}

function addoreWorker() {
    ore += orePerSecond;
}

function addFishWorker() {
    fish += fishPerSecond;
}


// Game loop ---
window.setInterval(function () {
    addWoodWorker()
    addoreWorker()
    addFishWorker()
    woodHeading.innerHTML = `Wood: ${wood}`;
    oreHeading.innerHTML = `Ore: ${ore}`;
    fishHeading.innerHTML = `Fish: ${fish}`;

    woodWorkerHeading.innerHTML = `Lumberjacks: ${lumberjacks}`;
    oreWorkerHeading.innerHTML = `Miners: ${miners}`;
    fishWorkerHeading.innerHTML = `Fisherman: ${fisherman}`;
    moneyHeading.innerHTML = `$${money}`
}, 500);