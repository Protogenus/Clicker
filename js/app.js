
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

const buyAxe = document.querySelector("#buy-axe");
const buyPickaxe = document.querySelector("#buy-pickaxe");
const buyRod = document.querySelector("#buy-rod");

const axeHeading = document.querySelector("#axe-heading");
const pickaxeHeading = document.querySelector("#pickaxe-heading");
const rodHeading = document.querySelector("#rod-heading");

// Game variables ---
let money = 0;

let lumberjacks = 0;
let lumberjack_cost = 500;
let miners = 0;
let miner_cost = 1000;
let fisherman = 0;
let fisherman_cost = 1500;

let axes = 0;
let axeCost = 50;
let pickaxes = 0;
let pickaxeCost = 100;
let rods = 0;
let rodCost = 150;

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
    if (axes >= 1) {
        wood += 2 * axes;
        woodHeading.innerHTML = `Wood: ${wood}`; 
    } else {
        wood += 1;
        woodHeading.innerHTML = `Wood: ${wood}`; 
    }
});

orebtn.addEventListener("click", function() {
    if (pickaxes >= 1) {
        ore += 2 * pickaxes;
        oreHeading.innerHTML = `Ore: ${ore}`; 
    } else {
        ore += 1;
        oreHeading.innerHTML = `Ore: ${ore}`; 
    }
});

fishbtn.addEventListener("click", function() {
    if (rods >= 1) {
        fish += 2 * rods;
        fishHeading.innerHTML = `Fish: ${fish}`; 
    } else {
        fish += 1;
        fishHeading.innerHTML = `Fish: ${fish}`; 
    }
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

// Buying tools
buyAxe.addEventListener("click", function() {
    if (money >= axeCost) {
        money -= axeCost;
        axes += 1;
    } else {
        alert("Not enough money!");
    }
})

buyPickaxe.addEventListener("click", function() {
    if (money >= pickaxeCost) {
        money -= pickaxeCost;
        pickaxes += 1;
    } else {
        alert("Not enough money!");
    }
})

buyRod.addEventListener("click", function() {
    if (money >= rodCost) {
        money -= rodCost;
        rods += 1;
    } else {
        alert("Not enough money!");
    }
})




// Worker buttons
autowood.addEventListener("click", function() {
    if (money >= lumberjack_cost) {
        woodPerSecond += 1;
        lumberjacks += 1;
        money -= lumberjack_cost;
    } else {
        alert("Not enough money!");
    }
});

autoore.addEventListener("click", function() {
    if (money >= miner_cost) {
        orePerSecond += 1;
        miners += 1;
        money -= miner_cost;
    } else {
        alert("Not enough money!"); 
    }
});

autofish.addEventListener("click", function() {
    if (money >= fisherman_cost) {
        fishPerSecond += 1;
        fisherman += 1;
        money -= fisherman_cost;
    } else {
        alert("Not enough money!");
    }
});


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
    moneyHeading.innerHTML = `$${money}`

    woodHeading.innerHTML = `Wood: ${wood}`;
    oreHeading.innerHTML = `Ore: ${ore}`;
    fishHeading.innerHTML = `Fish: ${fish}`;

    woodWorkerHeading.innerHTML = `Lumberjacks: ${lumberjacks}`;
    oreWorkerHeading.innerHTML = `Miners: ${miners}`;
    fishWorkerHeading.innerHTML = `Fisherman: ${fisherman}`;

    axeHeading.innerHTML = `Axes: ${axes}`;
    pickaxeHeading.innerHTML = `Pickaxes: ${pickaxes}`;
    rodHeading.innerHTML = `Rods: ${rods}`;
}, 500);