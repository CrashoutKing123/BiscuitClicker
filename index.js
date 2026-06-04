let point = document.querySelector('.point-cost')
let parsedPoint = parseFloat(point.innerHTML)
let ppsText = document.getElementById("pps-text")
let pps = 0;
let totalBiscuitsBaked = 0; 
let devModeActivated = false;
let isWiping = false;
let storeMode = "buy";

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

let assemblyLineCount = 0;
const assemblyLineBaseCost = 130000; 
let assemblyLineCurrentCost = assemblyLineBaseCost;
const assemblyLinePPSContribution = 260.0;

let vaultCount = 0;
const vaultBaseCost = 1400000;
let vaultCurrentCost = vaultBaseCost;
const vaultPPSContribution = 1400.0;

let shrineCount = 0;
const shrineBaseCost = 20000000;
let shrineCurrentCost = shrineBaseCost;
const shrinePPSContribution = 7800.0;

let witchCastleCount = 0;
const witchCastleBaseCost = 330000000;
let witchCastleCurrentCost = witchCastleBaseCost;
const witchCastlePPSContribution = 44000.0;

let spaceShuttleCount = 0;
const spaceShuttleBaseCost = 5100000000;
let spaceShuttleCurrentCost = spaceShuttleBaseCost;
const spaceShuttlePPSContribution = 260000.0;

let tmCount = 0;
const tmBaseCost = 75000000000;
let tmCurrentCost = tmBaseCost;
const tmPPSContribution = 1600000.0;

let whCount = 0;
const whBaseCost = 1000000000000;
let whCurrentCost = whBaseCost;
const whPPSContribution = 10000000.0;

let stbCount = 0;
const stbBaseCost = 14000000000000;
let stbCurrentCost = stbBaseCost;
const stbPPSContribution = 65000000.0;

let qbcCount = 0;
const qbcBaseCost = 170000000000000;
let qbcCurrentCost = qbcBaseCost;
const qbcPPSContribution = 430000000.0;

const formats = [
    { value: 1e303, symbol: " centillion" },
    { value: 1e300, symbol: " novemnonagintillion" },
    { value: 1e297, symbol: " octononagintillion" },
    { value: 1e294, symbol: " septennonagintillion" },
    { value: 1e291, symbol: " sexnonagintillion" },
    { value: 1e288, symbol: " quinnonagintillion" },
    { value: 1e285, symbol: " quattuornonagintillion" },
    { value: 1e282, symbol: " trenonagintillion" },
    { value: 1e279, symbol: " duononagintillion" },
    { value: 1e276, symbol: " unnonagintillion" },
    { value: 1e273, symbol: " nonagintillion" },
    { value: 1e270, symbol: " novemoctogintillion" },
    { value: 1e267, symbol: " octooctogintillion" },
    { value: 1e264, symbol: " septemoctogintillion" },
    { value: 1e261, symbol: " sexoctogintillion" },
    { value: 1e258, symbol: " quinoctogintillion" },
    { value: 1e255, symbol: " quattuoroctogintillion" },
    { value: 1e252, symbol: " treoctogintillion" },
    { value: 1e249, symbol: " duooctogintillion" },
    { value: 1e246, symbol: " unoctogintillion" },
    { value: 1e243, symbol: " octogintillion" },
    { value: 1e240, symbol: " novemseptuagintillion" },
    { value: 1e237, symbol: " octoseptuagintillion" },
    { value: 1e234, symbol: " septenseptuagintillion" },
    { value: 1e231, symbol: " sexseptuagintillion" },
    { value: 1e228, symbol: " quinseptuagintillion" },
    { value: 1e225, symbol: " quattuorseptuagintillion" },
    { value: 1e222, symbol: " treseptuagintillion" },
    { value: 1e219, symbol: " duoseptuagintillion" },
    { value: 1e216, symbol: " unseptuagintillion" },
    { value: 1e213, symbol: " septuagintillion" },
    { value: 1e210, symbol: " novemsexagintillion" },
    { value: 1e207, symbol: " octosexagintillion" },
    { value: 1e204, symbol: " septensexagintillion" },
    { value: 1e201, symbol: " sexsexagintillion" },
    { value: 1e198, symbol: " quinsexagintillion" },
    { value: 1e195, symbol: " quattuorsexagintillion" },
    { value: 1e192, symbol: " tresexagintillion" },
    { value: 1e189, symbol: " duosexagintillion" },
    { value: 1e186, symbol: " unsexagintillion" },
    { value: 1e183, symbol: " sexagintillion" },
    { value: 1e180, symbol: " novemquinquagintillion" },
    { value: 1e177, symbol: " octoquinquagintillion" },
    { value: 1e174, symbol: " septenquinquagintillion" },
    { value: 1e171, symbol: " sexquinquagintillion" },
    { value: 1e168, symbol: " quinquinquagintillion" },
    { value: 1e165, symbol: " quattuorquinquagintillion" },
    { value: 1e162, symbol: " trequinquagintillion" },
    { value: 1e159, symbol: " duoquinquagintillion" },
    { value: 1e156, symbol: " unquinquagintillion" },
    { value: 1e153, symbol: " quinquagintillion" },
    { value: 1e150, symbol: " novemquadragintillion" },
    { value: 1e147, symbol: " octoquadragintillion" },
    { value: 1e144, symbol: " septenquadragintillion" },
    { value: 1e141, symbol: " sexquadragintillion" },
    { value: 1e138, symbol: " quinquadragintillion" },
    { value: 1e135, symbol: " quattuorquadragintillion" },
    { value: 1e132, symbol: " trequadragintillion" },
    { value: 1e129, symbol: " duoquadragintillion" },
    { value: 1e126, symbol: " unquadragintillion" },
    { value: 1e123, symbol: " quadragintillion" },
    { value: 1e120, symbol: " novemtrigintillion" },
    { value: 1e117, symbol: " octotrigintillion" },
    { value: 1e114, symbol: " septentrigintillion" },
    { value: 1e111, symbol: " sextrigintillion" },
    { value: 1e108, symbol: " quintrigintillion" },
    { value: 1e105, symbol: " quattuortrigintillion" },
    { value: 1e102, symbol: " tretrigintillion" },
    { value: 1e99, symbol: " duotrigintillion" },
    { value: 1e96, symbol: " untrigintillion" },
    { value: 1e93, symbol: " trigintillion" },
    { value: 1e90, symbol: " novemvigintillion" },
    { value: 1e87, symbol: " octovigintillion" },
    { value: 1e84, symbol: " septenvigintillion" },
    { value: 1e81, symbol: " sexvigintillion" },
    { value: 1e78, symbol: " quinvigintillion" },
    { value: 1e75, symbol: " quattuorvigintillion" },
    { value: 1e72, symbol: " trevigintillion" },
    { value: 1e69, symbol: " duovigintillion" },
    { value: 1e66, symbol: " unvigintillion" },
    { value: 1e63, symbol: " vigintillion" },
    { value: 1e60, symbol: " novemdecillion" },
    { value: 1e57, symbol: " octodecillion" },
    { value: 1e54, symbol: " septendecillion" },
    { value: 1e51, symbol: " sexdecillion" },
    { value: 1e48, symbol: " quindecillion" },
    { value: 1e45, symbol: " quattuordecillion" },
    { value: 1e42, symbol: " tredecillion" },
    { value: 1e39, symbol: " duodecillion" },
    { value: 1e36, symbol: " undecillion" },
    { value: 1e33, symbol: " decillion" },
    { value: 1e30, symbol: " nonillion" },
    { value: 1e27, symbol: " octillion" },
    { value: 1e24, symbol: " septillion" },
    { value: 1e21, symbol: " sextillion" },
    { value: 1e18, symbol: " quintillion" },
    { value: 1e15, symbol: " quadrillion" },
    { value: 1e12, symbol: " trillion" },
    { value: 1e9, symbol: " billion" },
    { value: 1e6, symbol: " million" }
];

function formatNumber(num) {
    if (!isFinite(num) || num >= 1e306) return "Infinity";
    let floorNum = Math.floor(num);
    if (floorNum < 1000000) {
        return floorNum.toLocaleString();
    }
    for (let i = 0; i < formats.length; i++) {
        if (floorNum >= formats[i].value) {
            let divided = floorNum / formats[i].value;
            if (Math.round(divided * 1000) / 1000 >= 1000) {
                if (i > 0) {
                    let nextDivided = floorNum / formats[i - 1].value;
                    return parseFloat(nextDivided.toFixed(3)) + formats[i - 1].symbol;
                } else {
                    return "Infinity";
                }
            }
            return parseFloat(divided.toFixed(3)) + formats[i].symbol;
        }
    }
    return floorNum.toLocaleString();
}

function formatPPS(num) {
    if (!isFinite(num) || num >= 1e306) return "Infinity";
    if (num < 1000000) {
        return parseFloat(num.toFixed(1)).toLocaleString(undefined, {
            minimumFractionDigits: num % 1 === 0 ? 0 : 1,
            maximumFractionDigits: 1
        });
    }
    for (let i = 0; i < formats.length; i++) {
        if (num >= formats[i].value) {
            let divided = num / formats[i].value;
            if (Math.round(divided * 1000) / 1000 >= 1000) {
                if (i > 0) {
                    let nextDivided = num / formats[i - 1].value;
                    return parseFloat(nextDivided.toFixed(3)) + formats[i - 1].symbol;
                } else {
                    return "Infinity";
                }
            }
            return parseFloat(divided.toFixed(3)) + formats[i].symbol;
        }
    }
    return num.toFixed(1);
}

function setStoreMode(mode) {
    if (isWiping) return;
    storeMode = mode;
    
    document.getElementById("store-buy").classList.remove("active");
    document.getElementById("store-sell").classList.remove("active");
    
    if (mode === "buy") {
        document.getElementById("store-buy").classList.add("active");
    } else {
        document.getElementById("store-sell").classList.add("active");
    }

    let items = document.querySelectorAll(".shop-item");
    items.forEach(item => {
        if (mode === "sell") {
            item.classList.add("selling-active");
        } else {
            item.classList.remove("selling-active");
        }
    });
    updateShopUI();
}

function handlePointerFingerClick() {
    if (storeMode === "buy") buyPointerFinger();
    else sellPointerFinger();
}

function buyPointerFinger() {
    if (isWiping) return;
    if (parsedPoint >= pointerFingerCurrentCost) {
        parsedPoint -= pointerFingerCurrentCost;
        point.innerHTML = formatNumber(parsedPoint);
        
        pointerFingerCount++;
        pointerFingerCurrentCost = Math.ceil(pointerFingerBaseCost * Math.pow(1.15, pointerFingerCount));
        
        calculateTotalPPS();
        updateShopUI(); 
    }
}

function sellPointerFinger() {
    if (isWiping) return;
    if (pointerFingerCount > 0) {
        let refundAmount = Math.floor(pointerFingerCurrentCost * 0.25);
        parsedPoint += refundAmount;
        point.innerHTML = formatNumber(parsedPoint);

        pointerFingerCount--;
        pointerFingerCurrentCost = Math.ceil(pointerFingerBaseCost * Math.pow(1.15, pointerFingerCount));

        calculateTotalPPS();
        updateShopUI();
    }
}

function handleElderlyManClick() {
    if (storeMode === "buy") buyElderlyMan();
    else sellElderlyMan();
}

function buyElderlyMan() {
    if (isWiping) return;
    if (parsedPoint >= elderlyManCurrentCost) {
        parsedPoint -= elderlyManCurrentCost;
        point.innerHTML = formatNumber(parsedPoint);
        
        elderlyManCount++;
        elderlyManCurrentCost = Math.ceil(elderlyManBaseCost * Math.pow(1.15, elderlyManCount));
        
        calculateTotalPPS();
        updateShopUI();
    }
}

function sellElderlyMan() {
    if (isWiping) return;
    if (elderlyManCount > 0) {
        let refundAmount = Math.floor(elderlyManCurrentCost * 0.25);
        parsedPoint += refundAmount;
        point.innerHTML = formatNumber(parsedPoint);

        elderlyManCount--;
        elderlyManCurrentCost = Math.ceil(elderlyManBaseCost * Math.pow(1.15, elderlyManCount));

        calculateTotalPPS();
        updateShopUI();
    }
}

function handleAgriculturalPropertyClick() {
    if (storeMode === "buy") buyAgriculturalProperty();
    else sellAgriculturalProperty();
}

function buyAgriculturalProperty() {
    if (isWiping) return;
    if (parsedPoint >= agriculturalPropertyCurrentCost) {
        parsedPoint -= agriculturalPropertyCurrentCost;
        point.innerHTML = formatNumber(parsedPoint);
        
        agriculturalPropertyCount++;
        agriculturalPropertyCurrentCost = Math.ceil(agriculturalPropertyBaseCost * Math.pow(1.15, agriculturalPropertyCount));
        
        calculateTotalPPS();
        updateShopUI();
    }
}

function sellAgriculturalProperty() {
    if (isWiping) return;
    if (agriculturalPropertyCount > 0) {
        let refundAmount = Math.floor(agriculturalPropertyCurrentCost * 0.25);
        parsedPoint += refundAmount;
        point.innerHTML = formatNumber(parsedPoint);

        agriculturalPropertyCount--;
        agriculturalPropertyCurrentCost = Math.ceil(agriculturalPropertyBaseCost * Math.pow(1.15, agriculturalPropertyCount));

        calculateTotalPPS();
        updateShopUI();
    }
}

function handlePitClick() {
    if (storeMode === "buy") buyPit();
    else sellPit();
}

function buyPit() {
    if (isWiping) return;
    if (parsedPoint >= pitCurrentCost) {
        parsedPoint -= pitCurrentCost;
        point.innerHTML = formatNumber(parsedPoint);
        
        pitCount++;
        pitCurrentCost = Math.ceil(pitBaseCost * Math.pow(1.15, pitCount));
        
        calculateTotalPPS();
        updateShopUI();
    }
}

function sellPit() {
    if (isWiping) return;
    if (pitCount > 0) {
        let refundAmount = Math.floor(pitCurrentCost * 0.25);
        parsedPoint += refundAmount;
        point.innerHTML = formatNumber(parsedPoint);

        pitCount--;
        pitCurrentCost = Math.ceil(pitBaseCost * Math.pow(1.15, pitCount));

        calculateTotalPPS();
        updateShopUI();
    }
}

function handleAssemblyLineClick() {
    if (storeMode === "buy") buyAssemblyLine();
    else sellAssemblyLine();
}

function buyAssemblyLine() {
    if (isWiping) return;
    if (parsedPoint >= assemblyLineCurrentCost) {
        parsedPoint -= assemblyLineCurrentCost;
        point.innerHTML = formatNumber(parsedPoint);
        
        assemblyLineCount++;
        assemblyLineCurrentCost = Math.ceil(assemblyLineBaseCost * Math.pow(1.15, assemblyLineCount));
        
        calculateTotalPPS();
        updateShopUI();
    }
}

function sellAssemblyLine() {
    if (isWiping) return;
    if (assemblyLineCount > 0) {
        let refundAmount = Math.floor(assemblyLineCurrentCost * 0.25);
        parsedPoint += refundAmount;
        point.innerHTML = formatNumber(parsedPoint);

        assemblyLineCount--;
        assemblyLineCurrentCost = Math.ceil(assemblyLineBaseCost * Math.pow(1.15, assemblyLineCount));

        calculateTotalPPS();
        updateShopUI();
    }
}

function handleVaultClick() {
    if (storeMode === "buy") buyVault();
    else sellVault();
}

function buyVault() {
    if (isWiping) return;
    if (parsedPoint >= vaultCurrentCost) {
        parsedPoint -= vaultCurrentCost;
        point.innerHTML = formatNumber(parsedPoint);
        
        vaultCount++;
        vaultCurrentCost = Math.ceil(vaultBaseCost * Math.pow(1.15, vaultCount));
        
        calculateTotalPPS();
        updateShopUI();
    }
}

function sellVault() {
    if (isWiping) return;
    if (vaultCount > 0) {
        let refundAmount = Math.floor(vaultCurrentCost * 0.25);
        parsedPoint += refundAmount;
        point.innerHTML = formatNumber(parsedPoint);

        vaultCount--;
        vaultCurrentCost = Math.ceil(vaultBaseCost * Math.pow(1.15, vaultCount));

        calculateTotalPPS();
        updateShopUI();
    }
}

function handleShrineClick() {
    if (storeMode === "buy") buyShrine();
    else sellShrine();
}

function buyShrine() {
    if (isWiping) return;
    if (parsedPoint >= shrineCurrentCost) {
        parsedPoint -= shrineCurrentCost;
        point.innerHTML = formatNumber(parsedPoint);
        
        shrineCount++;
        shrineCurrentCost = Math.ceil(shrineBaseCost * Math.pow(1.15, shrineCount));
        
        calculateTotalPPS();
        updateShopUI();
    }
}

function sellShrine() {
    if (isWiping) return;
    if (shrineCount > 0) {
        let refundAmount = Math.floor(shrineCurrentCost * 0.25);
        parsedPoint += refundAmount;
        point.innerHTML = formatNumber(parsedPoint);

        shrineCount--;
        shrineCurrentCost = Math.ceil(shrineBaseCost * Math.pow(1.15, shrineCount));

        calculateTotalPPS();
        updateShopUI();
    }
}

function handleWitchCastleClick() {
    if (storeMode === "buy") buyWitchCastle();
    else sellWitchCastle();
}

function buyWitchCastle() {
    if (isWiping) return;
    if (parsedPoint >= witchCastleCurrentCost) {
        parsedPoint -= witchCastleCurrentCost;
        point.innerHTML = formatNumber(parsedPoint);
        
        witchCastleCount++;
        witchCastleCurrentCost = Math.ceil(witchCastleBaseCost * Math.pow(1.15, witchCastleCount));
        
        calculateTotalPPS();
        updateShopUI();
    }
}

function sellWitchCastle() {
    if (isWiping) return;
    if (witchCastleCount > 0) {
        let refundAmount = Math.floor(witchCastleCurrentCost * 0.25);
        parsedPoint += refundAmount;
        point.innerHTML = formatNumber(parsedPoint);

        witchCastleCount--;
        witchCastleCurrentCost = Math.ceil(witchCastleBaseCost * Math.pow(1.15, witchCastleCount));

        calculateTotalPPS();
        updateShopUI();
    }
}

function handleSpaceShuttleClick() {
    if (storeMode === "buy") buySpaceShuttle();
    else sellSpaceShuttle();
}

function buySpaceShuttle() {
    if (isWiping) return;
    if (parsedPoint >= spaceShuttleCurrentCost) {
        parsedPoint -= spaceShuttleCurrentCost;
        point.innerHTML = formatNumber(parsedPoint);
        
        spaceShuttleCount++;
        spaceShuttleCurrentCost = Math.ceil(spaceShuttleBaseCost * Math.pow(1.15, spaceShuttleCount));
        
        calculateTotalPPS();
        updateShopUI();
    }
}

function sellSpaceShuttle() {
    if (isWiping) return;
    if (spaceShuttleCount > 0) {
        let refundAmount = Math.floor(spaceShuttleCurrentCost * 0.25);
        parsedPoint += refundAmount;
        point.innerHTML = formatNumber(parsedPoint);

        spaceShuttleCount--;
        spaceShuttleCurrentCost = Math.ceil(spaceShuttleBaseCost * Math.pow(1.15, spaceShuttleCount));

        calculateTotalPPS();
        updateShopUI();
    }
}

function handleTMClick() {
    if (storeMode === "buy") buyTM();
    else sellTM();
}

function buyTM() {
    if (isWiping) return;
    if (parsedPoint >= tmCurrentCost) {
        parsedPoint -= tmCurrentCost;
        point.innerHTML = formatNumber(parsedPoint);
        
        tmCount++;
        tmCurrentCost = Math.ceil(tmBaseCost * Math.pow(1.15, tmCount));
        
        calculateTotalPPS();
        updateShopUI();
    }
}

function sellTM() {
    if (isWiping) return;
    if (tmCount > 0) {
        let refundAmount = Math.floor(tmCurrentCost * 0.25);
        parsedPoint += refundAmount;
        point.innerHTML = formatNumber(parsedPoint);

        tmCount--;
        tmCurrentCost = Math.ceil(tmBaseCost * Math.pow(1.15, tmCount));

        calculateTotalPPS();
        updateShopUI();
    }
}

function handleWHClick() {
    if (storeMode === "buy") buyWH();
    else sellWH();
}

function buyWH() {
    if (isWiping) return;
    if (parsedPoint >= whCurrentCost) {
        parsedPoint -= whCurrentCost;
        point.innerHTML = formatNumber(parsedPoint);
        
        whCount++;
        whCurrentCost = Math.ceil(whBaseCost * Math.pow(1.15, whCount));
        
        calculateTotalPPS();
        updateShopUI();
    }
}

function sellWH() {
    if (isWiping) return;
    if (whCount > 0) {
        let refundAmount = Math.floor(whCurrentCost * 0.25);
        parsedPoint += refundAmount;
        point.innerHTML = formatNumber(parsedPoint);

        whCount--;
        whCurrentCost = Math.ceil(whBaseCost * Math.pow(1.15, whCount));

        calculateTotalPPS();
        updateShopUI();
    }
}

function handleSTBClick() {
    if (storeMode === "buy") buySTB();
    else sellSTB();
}

function buySTB() {
    if (isWiping) return;
    if (parsedPoint >= stbCurrentCost) {
        parsedPoint -= stbCurrentCost;
        point.innerHTML = formatNumber(parsedPoint);
        
        stbCount++;
        stbCurrentCost = Math.ceil(stbBaseCost * Math.pow(1.15, stbCount));
        
        calculateTotalPPS();
        updateShopUI();
    }
}

function sellSTB() {
    if (isWiping) return;
    if (stbCount > 0) {
        let refundAmount = Math.floor(stbCurrentCost * 0.25);
        parsedPoint += refundAmount;
        point.innerHTML = formatNumber(parsedPoint);

        stbCount--;
        stbCurrentCost = Math.ceil(stbBaseCost * Math.pow(1.15, stbCount));

        calculateTotalPPS();
        updateShopUI();
    }
}

function handleQBCClick() {
    if (storeMode === "buy") buyQBC();
    else sellQBC();
}

function buyQBC() {
    if (isWiping) return;
    if (parsedPoint >= qbcCurrentCost) {
        parsedPoint -= qbcCurrentCost;
        point.innerHTML = formatNumber(parsedPoint);
        
        qbcCount++;
        qbcCurrentCost = Math.ceil(qbcBaseCost * Math.pow(1.15, qbcCount));
        
        calculateTotalPPS();
        updateShopUI();
    }
}

function sellSTB() {
    if (isWiping) return;
    if (qbcCount > 0) {
        let refundAmount = Math.floor(qbcCurrentCost * 0.25);
        parsedPoint += refundAmount;
        point.innerHTML = formatNumber(parsedPoint);

        qbcCount--;
        qbcCurrentCost = Math.ceil(qbcBaseCost * Math.pow(1.15, qbcCount));

        calculateTotalPPS();
        updateShopUI();
    }
}

function checkUnlocks() {
    let pointerFingerElement = document.getElementById("shop-item-pointer-finger");
    if (pointerFingerElement) {
        if (totalBiscuitsBaked >= pointerFingerBaseCost) pointerFingerElement.classList.add("visible");
        else pointerFingerElement.classList.remove("visible");

        if (pointerFingerCount > 0) pointerFingerElement.classList.add("fully-unlocked");
        else pointerFingerElement.classList.remove("fully-unlocked");
    }

    let elderlyManElement = document.getElementById("shop-item-elderly-man");
    if (elderlyManElement) {
        if (totalBiscuitsBaked >= elderlyManBaseCost) elderlyManElement.classList.add("visible"); 
        else elderlyManElement.classList.remove("visible");

        if (elderlyManCount > 0) elderlyManElement.classList.add("fully-unlocked"); 
        else elderlyManElement.classList.remove("fully-unlocked");
    }

    let agPropertyElement = document.getElementById("shop-item-agricultural-property");
    if (agPropertyElement) {
        if (totalBiscuitsBaked >= agriculturalPropertyBaseCost) agPropertyElement.classList.add("visible");
        else agPropertyElement.classList.remove("visible");

        if (agriculturalPropertyCount > 0) agPropertyElement.classList.add("fully-unlocked");
        else agPropertyElement.classList.remove("fully-unlocked");
    }

    let pitElement = document.getElementById("shop-item-pit");
    if (pitElement) {
        if (totalBiscuitsBaked >= pitBaseCost) pitElement.classList.add("visible");
        else pitElement.classList.remove("visible");

        if (pitCount > 0) pitElement.classList.add("fully-unlocked");
        else pitElement.classList.remove("fully-unlocked");
    }

    let assemblyLineElement = document.getElementById("shop-item-assemblyLine");
    if (assemblyLineElement) {
        if (totalBiscuitsBaked >= assemblyLineBaseCost) assemblyLineElement.classList.add("visible");
        else assemblyLineElement.classList.remove("visible");

        if (assemblyLineCount > 0) assemblyLineElement.classList.add("fully-unlocked");
        else assemblyLineElement.classList.remove("fully-unlocked");
    }

    let vaultElement = document.getElementById("shop-item-vault");
    if (vaultElement) {
        if (totalBiscuitsBaked >= vaultBaseCost) vaultElement.classList.add("visible");
        else vaultElement.classList.remove("visible");

        if (vaultCount > 0) vaultElement.classList.add("fully-unlocked");
        else vaultElement.classList.remove("fully-unlocked");
    }

    let shrineElement = document.getElementById("shop-item-shrine");
    if (shrineElement) {
        if (totalBiscuitsBaked >= shrineBaseCost) shrineElement.classList.add("visible");
        else shrineElement.classList.remove("visible");

        if (shrineCount > 0) shrineElement.classList.add("fully-unlocked");
        else shrineElement.classList.remove("fully-unlocked");
    }

    let witchCastleElement = document.getElementById("shop-item-witch-castle");
    if (witchCastleElement) {
        if (totalBiscuitsBaked >= witchCastleBaseCost) witchCastleElement.classList.add("visible");
        else witchCastleElement.classList.remove("visible");

        if (witchCastleCount > 0) witchCastleElement.classList.add("fully-unlocked");
        else witchCastleElement.classList.remove("fully-unlocked");
    }

    let spaceShuttleElement = document.getElementById("shop-item-space-shuttle");
    if (spaceShuttleElement) {
        if (totalBiscuitsBaked >= spaceShuttleBaseCost) spaceShuttleElement.classList.add("visible");
        else spaceShuttleElement.classList.remove("visible");

        if (spaceShuttleCount > 0) spaceShuttleElement.classList.add("fully-unlocked");
        else spaceShuttleElement.classList.remove("fully-unlocked");
    }

    let tmElement = document.getElementById("shop-item-tm");
    if (tmElement) {
        if (totalBiscuitsBaked >= tmBaseCost) tmElement.classList.add("visible");
        else tmElement.classList.remove("visible");

        if (tmCount > 0) tmElement.classList.add("fully-unlocked");
        else tmElement.classList.remove("fully-unlocked");
    }

    let whElement = document.getElementById("shop-item-wh");
    if (whElement) {
        if (totalBiscuitsBaked >= whBaseCost) whElement.classList.add("visible");
        else whElement.classList.remove("visible");

        if (whCount > 0) whElement.classList.add("fully-unlocked");
        else whElement.classList.remove("fully-unlocked");
    }

    let stbElement = document.getElementById("shop-item-stb");
    if (stbElement) {
        if (totalBiscuitsBaked >= stbBaseCost) stbElement.classList.add("visible");
        else stbElement.classList.remove("visible");

        if (stbCount > 0) stbElement.classList.add("fully-unlocked");
        else stbElement.classList.remove("fully-unlocked");
    }

    let qbcElement = document.getElementById("shop-item-qbc");
    if (qbcElement) {
        if (totalBiscuitsBaked >= qbcBaseCost) qbcElement.classList.add("visible");
        else qbcElement.classList.remove("visible");

        if (qbcCount > 0) qbcElement.classList.add("fully-unlocked");
        else qbcElement.classList.remove("fully-unlocked");
    }
}

function calculateTotalPPS() {
    pps = (pointerFingerCount * pointerFingerPPSContribution) + 
          (elderlyManCount * elderlyManPPSContribution) + 
          (agriculturalPropertyCount * agriculturalPropertyPPSContribution) +
          (pitCount * pitPPSContribution) +
          (assemblyLineCount * assemblyLinePPSContribution) +
          (vaultCount * vaultPPSContribution) +
          (shrineCount * shrinePPSContribution) +
          (witchCastleCount * witchCastlePPSContribution) +
          (spaceShuttleCount * spaceShuttlePPSContribution) +
          (tmCount * tmPPSContribution) +
          (whCount * whPPSContribution) +
          (stbCount * stbPPSContribution) +
          (qbcCount * qbcPPSContribution) ;
          
    ppsText.innerHTML = formatPPS(pps);
}

function updateShopUI() {
    let displayFingerCost = storeMode === "buy" ? pointerFingerCurrentCost : Math.floor(pointerFingerCurrentCost * 0.25);
    let displayElderlyCost = storeMode === "buy" ? elderlyManCurrentCost : Math.floor(elderlyManCurrentCost * 0.25);
    let displayAgCost = storeMode === "buy" ? agriculturalPropertyCurrentCost : Math.floor(agriculturalPropertyCurrentCost * 0.25);
    let displayPitCost = storeMode === "buy" ? pitCurrentCost : Math.floor(pitCurrentCost * 0.25);
    let displayLineCost = storeMode === "buy" ? assemblyLineCurrentCost : Math.floor(assemblyLineCurrentCost * 0.25);
    let displayVaultCost = storeMode === "buy" ? vaultCurrentCost : Math.floor(vaultCurrentCost * 0.25);
    let displayShrineCost = storeMode === "buy" ? shrineCurrentCost : Math.floor(shrineCurrentCost * 0.25);
    let displayWitchCastleCost = storeMode === "buy" ? witchCastleCurrentCost : Math.floor(witchCastleCurrentCost * 0.25);
    let displaySpaceShuttleCost = storeMode === "buy" ? spaceShuttleCurrentCost : Math.floor(spaceShuttleCurrentCost * 0.25);
    let displayTMCost = storeMode === "buy" ? tmCurrentCost : Math.floor(tmCurrentCost * 0.25);
    let displayWHCost = storeMode === "buy" ? whCurrentCost : Math.floor(whCurrentCost * 0.25);
    let displaySTBCost = storeMode === "buy" ? stbCurrentCost : Math.floor(stbCurrentCost * 0.25);
    let displayQBCCost = storeMode === "buy" ? qbcCurrentCost : Math.floor(qbcCurrentCost * 0.25);

    let fingerPriceTag = document.getElementById("pointer-finger-price");
    let fingerCountTag = document.getElementById("pointer-finger-count");
    if (fingerPriceTag) {
        fingerPriceTag.innerHTML = formatNumber(displayFingerCost);
        if (storeMode === "buy" && parsedPoint >= pointerFingerCurrentCost) fingerPriceTag.classList.add("affordable");
        else fingerPriceTag.classList.remove("affordable");
    }
    if (fingerCountTag) fingerCountTag.innerHTML = pointerFingerCount;

    let elderlyPriceTag = document.getElementById("elderly-man-price");
    let elderlyCountTag = document.getElementById("elderly-man-count");
    if (elderlyPriceTag) {
        elderlyPriceTag.innerHTML = formatNumber(displayElderlyCost);
        if (storeMode === "buy" && parsedPoint >= elderlyManCurrentCost) elderlyPriceTag.classList.add("affordable");
        else elderlyPriceTag.classList.remove("affordable");
    }
    if (elderlyCountTag) elderlyCountTag.innerHTML = elderlyManCount;

    let agPriceTag = document.getElementById("agricultural-property-price");
    let agCountTag = document.getElementById("agricultural-property-count");
    if (agPriceTag) {
        agPriceTag.innerHTML = formatNumber(displayAgCost);
        if (storeMode === "buy" && parsedPoint >= agriculturalPropertyCurrentCost) agPriceTag.classList.add("affordable");
        else agPriceTag.classList.remove("affordable");
    }
    if (agCountTag) agCountTag.innerHTML = agriculturalPropertyCount;

    let pitPriceTag = document.getElementById("pit-price");
    let pitCountTag = document.getElementById("pit-count");
    if (pitPriceTag) {
        pitPriceTag.innerHTML = formatNumber(displayPitCost);
        if (storeMode === "buy" && parsedPoint >= pitCurrentCost) pitPriceTag.classList.add("affordable");
        else pitPriceTag.classList.remove("affordable");
    }
    if (pitCountTag) pitCountTag.innerHTML = pitCount;

    let assemblyLinePriceTag = document.getElementById("assemblyLine-price");
    let assemblyLineCountTag = document.getElementById("assemblyLine-count");
    if (assemblyLinePriceTag) {
        assemblyLinePriceTag.innerHTML = formatNumber(displayLineCost);
        if (storeMode === "buy" && parsedPoint >= assemblyLineCurrentCost) assemblyLinePriceTag.classList.add("affordable");
        else assemblyLinePriceTag.classList.remove("affordable");
    }
    if (assemblyLineCountTag) assemblyLineCountTag.innerHTML = assemblyLineCount;

    let vaultPriceTag = document.getElementById("vault-price");
    let vaultCountTag = document.getElementById("vault-count");
    if (vaultPriceTag) {
        vaultPriceTag.innerHTML = formatNumber(displayVaultCost);
        if (storeMode === "buy" && parsedPoint >= vaultCurrentCost) vaultPriceTag.classList.add("affordable");
        else vaultPriceTag.classList.remove("affordable");
    }
    if (vaultCountTag) vaultCountTag.innerHTML = vaultCount;

    let shrinePriceTag = document.getElementById("shrine-price");
    let shrineCountTag = document.getElementById("shrine-count");
    if (shrinePriceTag) {
        shrinePriceTag.innerHTML = formatNumber(displayShrineCost);
        if (storeMode === "buy" && parsedPoint >= shrineCurrentCost) shrinePriceTag.classList.add("affordable");
        else shrinePriceTag.classList.remove("affordable");
    }
    if (shrineCountTag) shrineCountTag.innerHTML = shrineCount;

    let witchCastlePriceTag = document.getElementById("witch-castle-price");
    let witchCastleCountTag = document.getElementById("witch-castle-count");
    if (witchCastlePriceTag) {
        witchCastlePriceTag.innerHTML = formatNumber(displayWitchCastleCost);
        if (storeMode === "buy" && parsedPoint >= witchCastleCurrentCost) witchCastlePriceTag.classList.add("affordable");
        else witchCastlePriceTag.classList.remove("affordable");
    }
    if (witchCastleCountTag) witchCastleCountTag.innerHTML = witchCastleCount;

    let spaceShuttlePriceTag = document.getElementById("space-shuttle-price");
    let spaceShuttleCountTag = document.getElementById("space-shuttle-count");
    if (spaceShuttlePriceTag) {
        spaceShuttlePriceTag.innerHTML = formatNumber(displaySpaceShuttleCost);
        if (storeMode === "buy" && parsedPoint >= spaceShuttleCurrentCost) spaceShuttlePriceTag.classList.add("affordable");
        else spaceShuttlePriceTag.classList.remove("affordable");
    }
    if (spaceShuttleCountTag) spaceShuttleCountTag.innerHTML = spaceShuttleCount;

    let tmPriceTag = document.getElementById("tm-price");
    let tmCountTag = document.getElementById("tm-count");
    if (tmPriceTag) {
        tmPriceTag.innerHTML = formatNumber(displayTMCost);
        if (storeMode === "buy" && parsedPoint >= tmCurrentCost) tmPriceTag.classList.add("affordable");
        else tmPriceTag.classList.remove("affordable");
    }
    if (tmCountTag) tmCountTag.innerHTML = tmCount;

    let whPriceTag = document.getElementById("wh-price");
    let whCountTag = document.getElementById("wh-count");
    if (whPriceTag) {
        whPriceTag.innerHTML = formatNumber(displayWHCost);
        if (storeMode === "buy" && parsedPoint >= whCurrentCost) whPriceTag.classList.add("affordable");
        else whPriceTag.classList.remove("affordable");
    }
    if (whCountTag) whCountTag.innerHTML = whCount;

    let stbPriceTag = document.getElementById("stb-price");
    let stbCountTag = document.getElementById("stb-count");
    if (stbPriceTag) {
        stbPriceTag.innerHTML = formatNumber(displaySTBCost);
        if (storeMode === "buy" && parsedPoint >= stbCurrentCost) stbPriceTag.classList.add("affordable");
        else stbPriceTag.classList.remove("affordable");
    }
    if (stbCountTag) stbCountTag.innerHTML = stbCount;

    let qbcPriceTag = document.getElementById("qbc-price");
    let qbcCountTag = document.getElementById("qbc-count");
    if (qbcPriceTag) {
        qbcPriceTag.innerHTML = formatNumber(displayQBCCost);
        if (storeMode === "buy" && parsedPoint >= qbcCurrentCost) qbcPriceTag.classList.add("affordable");
        else qbcPriceTag.classList.remove("affordable");
    }
    if (qbcCountTag) qbcCountTag.innerHTML = qbcCount;
}

function incrementPoints() {
    if (isWiping) return;
    parsedPoint += 1;
    totalBiscuitsBaked += 1; 
    point.innerHTML = formatNumber(parsedPoint);
    updateShopUI();
    checkUnlocks(); 
}

const ticksPerSecond = 30;

setInterval(() => {
    if (isWiping) return;
    if (pps > 0) {
        let ppsPerTick = pps / ticksPerSecond;
        parsedPoint += ppsPerTick;
        totalBiscuitsBaked += ppsPerTick; 
        point.innerHTML = formatNumber(parsedPoint);
    }
    updateShopUI();
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
        if (cleanName.endsWith("saysclosesesame")) {
            devModeActivated = true;
            document.getElementById("dev-badge").style.display = "block";
            document.getElementById("dev-tools-panel").style.display = "block";
        } else {
            if (devModeActivated) {
                document.getElementById("dev-tools-panel").style.display = "none";
            }
        }
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

function devAddBiscuits(amount) {
    if (isWiping) return;
    parsedPoint += amount;
    totalBiscuitsBaked += amount;
    point.innerHTML = formatNumber(parsedPoint);
    checkUnlocks();
}

function devMultiplyBiscuits(factor) {
    if (isWiping) return;
    parsedPoint *= factor;
    totalBiscuitsBaked *= factor;
    point.innerHTML = formatNumber(parsedPoint);
    checkUnlocks();
}

function devMaxUpgrades() {
    if (isWiping) return;
    pointerFingerCount += 10;
    pointerFingerCurrentCost = Math.ceil(pointerFingerBaseCost * Math.pow(1.15, pointerFingerCount));
    
    elderlyManCount += 10;
    elderlyManCurrentCost = Math.ceil(elderlyManBaseCost * Math.pow(1.15, elderlyManCount));
    
    agriculturalPropertyCount += 10;
    agriculturalPropertyCurrentCost = Math.ceil(agriculturalPropertyBaseCost * Math.pow(1.15, agriculturalPropertyCount));
    
    pitCount += 10;
    pitCurrentCost = Math.ceil(pitBaseCost * Math.pow(1.15, pitCount));
    
    assemblyLineCount += 10;
    assemblyLineCurrentCost = Math.ceil(assemblyLineBaseCost * Math.pow(1.15, assemblyLineCount));

    vaultCount += 10;
    vaultCurrentCost = Math.ceil(vaultBaseCost * Math.pow(1.15, vaultCount));
    
    shrineCount += 10;
    shrineCurrentCost = Math.ceil(shrineBaseCost * Math.pow(1.15, shrineCount));
    
    witchCastleCount += 10;
    witchCastleCurrentCost = Math.ceil(witchCastleBaseCost * Math.pow(1.15, witchCastleCount));

    spaceShuttleCount += 10;
    spaceShuttleCurrentCost = Math.ceil(spaceShuttleBaseCost * Math.pow(1.15, spaceShuttleCount));

    tmCount += 10;
    tmCurrentCost = Math.ceil(tmBaseCost * Math.pow(1.15, tmCount));

    whCount += 10;
    whCurrentCost = Math.ceil(whBaseCost * Math.pow(1.15, whCount));

    stbCount += 10;
    stbCurrentCost = Math.ceil(stbBaseCost * Math.pow(1.15, stbCount));

    qbcCount += 10;
    qbcCurrentCost = Math.ceil(qbcBaseCost * Math.pow(1.15, qbcCount));

    totalBiscuitsBaked = Math.max(totalBiscuitsBaked, qbcBaseCost);
    
    calculateTotalPPS();
    updateShopUI();
    checkUnlocks();
}

function devWipeSave() {
    if (isWiping) return;
    isWiping = true;

    devModeActivated = false;
    document.getElementById("dev-tools-panel").style.display = "none";
    document.getElementById("dev-badge").style.display = "none";

    pointerFingerCount = 0;
    elderlyManCount = 0;
    agriculturalPropertyCount = 0;
    pitCount = 0;
    assemblyLineCount = 0;
    vaultCount = 0;
    shrineCount = 0;
    witchCastleCount = 0;
    spaceShuttleCount = 0;
    tmCount = 0;
    whCount = 0;
    stbCount = 0;
    qbcCount = 0;

    pointerFingerCurrentCost = pointerFingerBaseCost;
    elderlyManCurrentCost = elderlyManBaseCost;
    agriculturalPropertyCurrentCost = agriculturalPropertyBaseCost;
    pitCurrentCost = pitBaseCost;
    assemblyLineCurrentCost = assemblyLineBaseCost;
    vaultCurrentCost = vaultBaseCost;
    shrineCurrentCost = shrineBaseCost;
    witchCastleCurrentCost = witchCastleBaseCost;
    spaceShuttleCurrentCost = spaceShuttleBaseCost;
    tmCurrentCost = tmBaseCost;
    whCurrentCost = whBaseCost;
    stbCurrentCost = stbBaseCost;
    qbcCurrentCost = qbcBaseCost;

    calculateTotalPPS();
    updateShopUI();

    let duration = 2000; 
    let intervalTime = 30; 
    let steps = duration / intervalTime;
    let biscuitLossPerStep = parsedPoint / steps;

    let wipeInterval = setInterval(() => {
        parsedPoint = Math.max(0, parsedPoint - biscuitLossPerStep);
        point.innerHTML = formatNumber(parsedPoint);

        if (parsedPoint === 0) {
            clearInterval(wipeInterval);
            totalBiscuitsBaked = 0;
            checkUnlocks();
            isWiping = false;
        }
    }, intervalTime);
}

const dragPanel = document.getElementById("dev-tools-panel");
const dragHeader = document.getElementById("dev-panel-header");

let activeDrag = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

if (dragHeader) {
    dragHeader.addEventListener("mousedown", dragStart);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("mousemove", drag);
}

function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    if (e.target === dragHeader) {
        activeDrag = true;
    }
}

function dragEnd() {
    initialX = currentX;
    initialY = currentY;
    activeDrag = false;
}

function drag(e) {
    if (activeDrag) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        xOffset = currentX;
        yOffset = currentY;
        setTranslate(currentX, currentY, dragPanel);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

updateShopUI();