// QuerySelector-tron 9000 ---
// ITS SO BEAUTIFUL! Thank you Guike! https://github.com/Guillaume-Docquier

// Transforms a string into a camelCasedString
// i.e: my-string => myString
// i.e: My_String => myString
function toCamelCase(string) {
    return string
      .split(/[\s-_]+/) // Splits the string based on spaces, dashes or underscores
      .map((word, i) => i === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1)) // lowercase the first word, capitalize the others
      .join(""); // Glue all the words together
  }
  
  // Add all elements here
  const elementIds = [
    "money-heading",
    "wood-heading",
    "wood-btn",
    "auto-wood",
    "wood-worker-heading",
    "ore-heading",
    "ore-btn",
    "auto-ore",
    "ore-worker-heading",
    "sell-wood",
    "sell-ore",
    "sell-fish",
    "fish-heading",
    "fish-btn",
    "auto-fish",
    "fish-worker-heading",
    "buy-axe",
    "buy-pickaxe",
    "buy-rod",
    "axe-heading",
    "pickaxe-heading",
    "rod-heading",
    "create-paper",
    "create-iron",
    "create-charcoal",
    "create-steel",
    "paper-heading",
    "iron-heading",
    "charcoal-heading",
    "steel-heading"
  ];
  
  // Generate the elements based on the ids
  const elements = elementIds.reduce((elements, elementId) => {
    elements[toCamelCase(elementId)] = document.querySelector(`#${elementId}`);
    return elements;
  }, {});
  
  // elements looks like this now:
  // {
  //    woodHeading: Element,
  //    woodBtn: Element,
  //    ...
  //    ironHeading: Element,
  // }
  //
  // So you can do:
  //   elements.woodHeading
  //
  // to get the woodHeading element


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

let paper = 0;
let iron = 0;
let charcoal = 0;
let steel = 0;


// Event listeners ----

// Gathering buttons
elements.woodBtn.addEventListener("click", function() {
    if (axes >= 1) {
        wood += 2 * axes;
        elements.woodHeading.innerHTML = `Wood: ${wood}`; 
    } else {
        wood += 1;
        elements.woodHeading.innerHTML = `Wood: ${wood}`; 
    }
});

elements.oreBtn.addEventListener("click", function() {
    if (pickaxes >= 1) {
        ore += 2 * pickaxes;
        elements.oreHeading.innerHTML = `Ore: ${ore}`; 
    } else {
        ore += 1;
        elements.oreHeading.innerHTML = `Ore: ${ore}`; 
    }
});

elements.fishBtn.addEventListener("click", function() {
    if (rods >= 1) {
        fish += 2 * rods;
        elements.fishHeading.innerHTML = `Fish: ${fish}`; 
    } else {
        fish += 1;
        elements.fishHeading.innerHTML = `Fish: ${fish}`; 
    }
});

// Selling buttons
elements.sellWood.addEventListener("click", function() {
    money += woodCost * wood;
    wood = 0;
})

elements.sellOre.addEventListener("click", function() {
    money += oreCost * ore;
    ore = 0;
})

elements.sellFish.addEventListener("click", function() {
    money += fishCost * fish;
    fish = 0;
})

// Buying tools
elements.buyAxe.addEventListener("click", function() {
    if (money >= axeCost) {
        money -= axeCost;
        axes += 1;
    } else {
        alert("Not enough money!");
    }
})

elements.buyPickaxe.addEventListener("click", function() {
    if (money >= pickaxeCost) {
        money -= pickaxeCost;
        pickaxes += 1;
    } else {
        alert("Not enough money!");
    }
})

elements.buyRod.addEventListener("click", function() {
    if (money >= rodCost) {
        money -= rodCost;
        rods += 1;
    } else {
        alert("Not enough money!");
    }
})

// Crafting buttons

elements.createPaper.addEventListener("click", function() {
    if (wood >= 1) {
        wood -= 1;
        paper += 10;
    } else {
        alert("Not enough wood!")
    }
})

elements.createIron.addEventListener("click", function() {
    if (ore >= 2) {
        ore -= 2;
        iron += 1;
    } else {
        alert("Not enough ore!")
    }
})

elements.createCharcoal.addEventListener("click", function() {
    if (wood >= 1) {
        wood -= 1;
        charcoal += 10;
    } else {
        alert("Not enough wood!")
    }
})

elements.createSteel.addEventListener("click", function() {
    if (iron >= 2 && charcoal >= 10) {
        iron -= 2;
        charcoal -= 10;
        steel += 1;
    } else {
        alert("Not enough resource!")
    }
})


// Worker buttons

elements.autoWood.addEventListener("click", function() {
    if (money >= lumberjack_cost) {
        woodPerSecond += 1;
        lumberjacks += 1;
        money -= lumberjack_cost;
    } else {
        alert("Not enough money!");
    }
});

elements.autoOre.addEventListener("click", function() {
    if (money >= miner_cost) {
        orePerSecond += 1;
        miners += 1;
        money -= miner_cost;
    } else {
        alert("Not enough money!"); 
    }
});

elements.autoFish.addEventListener("click", function() {
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
    elements.moneyHeading.innerHTML = `$${money}`

    elements.woodHeading.innerHTML = `Wood: ${wood}`;
    elements.oreHeading.innerHTML = `Ore: ${ore}`;
    elements.fishHeading.innerHTML = `Fish: ${fish}`;

    elements.woodWorkerHeading.innerHTML = `Lumberjacks: ${lumberjacks}`;
    elements.oreWorkerHeading.innerHTML = `Miners: ${miners}`;
    elements.fishWorkerHeading.innerHTML = `Fisherman: ${fisherman}`;

    elements.paperHeading.innerHTML = `Paper: ${paper}`
    elements.ironHeading.innerHTML = `Iron: ${iron}`
    elements.charcoalHeading.innerHTML = `Charcoal: ${charcoal}`
    elements.steelHeading.innerHTML = `Steel: ${steel}`

    elements.axeHeading.innerHTML = `Axes: ${axes}`;
    elements.pickaxeHeading.innerHTML = `Pickaxes: ${pickaxes}`;
    elements.rodHeading.innerHTML = `Rods: ${rods}`;
}, 500);