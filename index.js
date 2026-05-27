let point = document.querySelector('.point-cost')
let parsedPoint = parseFloat(point.innerHTML)
let ppsText = document.getElementById("pps-text")
let pps = 0;
let totalBiscuitsBaked = 0; 

let pointerFingerCount = 0;
const pointerFingerBaseCost = 15;
let pointerFingerCurrentCost = pointerFingerBaseCost;
const pointerFingerPPSContribution = 0.1;

let elderlyManCount = 0;
const elderlyManBaseCost = 100;
let elderlyManCurrentCost = elderlyManBaseCost;
const elderlyManPPSContribution = 1.0;

let agriculturalPropertyCount = 0;
const agriculturalPropertyBaseCost = 1100; 
let agriculturalPropertyCurrentCost = agriculturalPropertyBaseCost;
const agriculturalPropertyPPSContribution = 8.0; 

let pitCount = 0;
const pitBaseCost = 12000; 
let pitCurrentCost = pitBaseCost;
const pitPPSContribution = 47.0;

function buyPointerFinger() {
    if (parsedPoint >= pointerFingerCurrentCost) {
        parsedPoint -= pointerFingerCurrentCost;
        point.innerHTML = Math.floor(parsedPoint);
        
        pointerFingerCount++;
        pointerFingerCurrentCost = Math.ceil(pointerFingerBaseCost * Math.pow(1.15, pointerFingerCount));
        
        calculateTotalPPS();
        updateShopUI(); 
    } else {
        console.log("Not enough biscuits, lil bro");
    }
}

function buyElderlyMan() {
    if (parsedPoint >= elderlyManCurrentCost) {
        parsedPoint -= elderlyManCurrentCost;
        point.innerHTML = Math.floor(parsedPoint);
        
        elderlyManCount++;
        elderlyManCurrentCost = Math.ceil(elderlyManBaseCost * Math.pow(1.15, elderlyManCount));
        
        calculateTotalPPS();
        updateShopUI();
    } else {
        console.log("The elderly men require more biscuits!");
    }
}

function buyAgriculturalProperty() {
    if (parsedPoint >= agriculturalPropertyCurrentCost) {
        parsedPoint -= agriculturalPropertyCurrentCost;
        point.innerHTML = Math.floor(parsedPoint);
        
        agriculturalPropertyCount++;
        agriculturalPropertyCurrentCost = Math.ceil(agriculturalPropertyBaseCost * Math.pow(1.15, agriculturalPropertyCount));
        
        calculateTotalPPS();
        updateShopUI();
    } else {
        console.log("Acquiring an Agricultural Property demands more biscuits!");
    }
}

function buyPit() {
    if (parsedPoint >= pitCurrentCost) {
        parsedPoint -= pitCurrentCost;
        point.innerHTML = Math.floor(parsedPoint);
        
        pitCount++;
        pitCurrentCost = Math.ceil(pitBaseCost * Math.pow(1.15, pitCount));
        
        calculateTotalPPS();
        updateShopUI();
    } else {
        console.log("Acquiring an awesome pit demands more biscuits!");
    }
}

function checkUnlocks() {
    let pointerFingerElement = document.getElementById("shop-item-pointer-finger");
    if (pointerFingerElement) {
        if (totalBiscuitsBaked >= pointerFingerBaseCost) {
            pointerFingerElement.classList.add("visible");
        }
        if (pointerFingerCount > 0) {
            pointerFingerElement.classList.add("fully-unlocked");
        }
    }

    let elderlyManElement = document.getElementById("shop-item-elderly-man");
    if (elderlyManElement) {
        if (totalBiscuitsBaked >= elderlyManBaseCost) {
            elderlyManElement.classList.add("visible"); 
        }
        if (elderlyManCount > 0) {
            elderlyManElement.classList.add("fully-unlocked"); 
        }
    }

    let agPropertyElement = document.getElementById("shop-item-agricultural-property");
    if (agPropertyElement) {
        if (totalBiscuitsBaked >= agriculturalPropertyBaseCost) {
            agPropertyElement.classList.add("visible");
        }
        if (agriculturalPropertyCount > 0) {
            agPropertyElement.classList.add("fully-unlocked");
        }
    }

    let pitElement = document.getElementById("shop-item-pit");
    if (pitElement) {
        if (totalBiscuitsBaked >= pitBaseCost) {
            pitElement.classList.add("visible");
        }
        if (pitCount > 0) {
            pitElement.classList.add("fully-unlocked");
        }
    }
}

function calculateTotalPPS() {
    pps = (pointerFingerCount * pointerFingerPPSContribution) + 
          (elderlyManCount * elderlyManPPSContribution) + 
          (agriculturalPropertyCount * agriculturalPropertyPPSContribution) +
          (pitCount * pitPPSContribution);
          
    ppsText.innerHTML = pps % 1 === 0 ? pps : pps.toFixed(1);
}

function updateShopUI() {
    let fingerPriceTag = document.getElementById("pointer-finger-price");
    let fingerCountTag = document.getElementById("pointer-finger-count");
    if (fingerPriceTag) fingerPriceTag.innerHTML = pointerFingerCurrentCost;
    if (fingerCountTag) fingerCountTag.innerHTML = pointerFingerCount;

    let elderlyPriceTag = document.getElementById("elderly-man-price");
    let elderlyCountTag = document.getElementById("elderly-man-count");
    if (elderlyPriceTag) elderlyPriceTag.innerHTML = elderlyManCurrentCost;
    if (elderlyCountTag) elderlyCountTag.innerHTML = elderlyManCount;

    let agPriceTag = document.getElementById("agricultural-property-price");
    let agCountTag = document.getElementById("agricultural-property-count");
    if (agPriceTag) agPriceTag.innerHTML = agriculturalPropertyCurrentCost;
    if (agCountTag) agCountTag.innerHTML = agriculturalPropertyCount;

    let pitPriceTag = document.getElementById("pit-price");
    let pitCountTag = document.getElementById("pit-count");
    if (pitPriceTag) pitPriceTag.innerHTML = pitCurrentCost;
    if (pitCountTag) pitCountTag.innerHTML = pitCount;
}

function incrementPoints() {
    parsedPoint += 1;
    totalBiscuitsBaked += 1; 
    point.innerHTML = Math.floor(parsedPoint);
    checkUnlocks(); 
}

const ticksPerSecond = 30;

setInterval(() => {
    if (pps > 0) {
        let ppsPerTick = pps / ticksPerSecond;
        parsedPoint += ppsPerTick;
        totalBiscuitsBaked += ppsPerTick; 
        point.innerHTML = Math.floor(parsedPoint);
    }
    checkUnlocks(); 
}, 1000 / ticksPerSecond);

const modal = document.getElementById("naming-modal");
const nameInput = document.getElementById("bakery-name-input");
const nameDisplay = document.getElementById("bakery-name");

const randomPrefixes = ["Magic", "Golden", "Grandma", "Fancy", "Tasty", "Power", "Lucky", "Happy", "Crispy"];
const randomSuffixes = ["Turtle", "Baker", "Biscuit", "Cookie", "Monster", "Hero", "Star", "Knight", "Captain"];

function openNamingModal() {
    modal.style.display = "flex";
    nameInput.value = nameDisplay.innerText;
    nameInput.focus();
    nameInput.select();
}

function closeNamingModal() {
    modal.style.display = "none";
}

function confirmBakeryName() {
    let cleanName = nameInput.value.trim();
    if (cleanName !== "") {
        nameDisplay.innerText = cleanName;
    }
    closeNamingModal();
}

function randomBakeryName() {
    let randomPref = randomPrefixes[Math.floor(Math.random() * randomPrefixes.length)];
    let randomSuff = randomSuffixes[Math.floor(Math.random() * randomSuffixes.length)];
    nameInput.value = randomPref + " " + randomSuff;
}

nameInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        confirmBakeryName();
    }
});