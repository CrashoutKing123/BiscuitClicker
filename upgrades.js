const UPGRADE_TIERS = 5;
const UPGRADE_COST_MULTS = [10, 50, 200, 2000, 20000];
const UPGRADE_UNLOCK_COUNTS = [1, 5, 25, 50, 100];
const CLICK_UPGRADE_COSTS = [50, 500, 5000, 500000, 50000000];
const CLICK_UNLOCK_BAKED = [1, 100, 1000, 100000, 10000000];

// per click

let clickPower = 1;

// base upgrade levels

let upgradeLevel = {
    click: 0, pointerFinger: 0, elderlyMan: 0, agriculturalProperty: 0,
    pit: 0, assemblyLine: 0, vault: 0, shrine: 0, witchCastle: 0,
    spaceShuttle: 0, tm: 0, wh: 0, stb: 0, qbc: 0, ck: 0,
    gb: 0, rs: 0, bm: 0, dm: 0, bh: 0, me: 0,
};

// biscuits per second multipliers

let ppsMultipliers = {
    pointerFinger: 1, elderlyMan: 1, agriculturalProperty: 1,
    pit: 1, assemblyLine: 1, vault: 1, shrine: 1, witchCastle: 1,
    spaceShuttle: 1, tm: 1, wh: 1, stb: 1, qbc: 1, ck: 1,
    gb: 1, rs: 1, bm: 1, dm: 1, bh: 1, me: 1,
};

// configuration for all upgrades

const UPGRADE_CONFIGS = [
    { id: 'click',                name: 'Click Power',             img: 'b4842fc5e82ce3fd5d6fb074a720f938586a7837-removebg-preview.png', getCost: (t) => CLICK_UPGRADE_COSTS[t], getUnlockCount: (t) => CLICK_UNLOCK_BAKED[t], getCurrentCount: () => totalBiscuitsBaked },
    { id: 'pointerFinger',        name: 'Pointer Finger',          img: 'Adobe Express - file (1).png',       baseCost: pointerFingerBaseCost,        getCurrentCount: () => pointerFingerCount },
    { id: 'elderlyMan',           name: 'Elderly Man',             img: 'elderly-man.png',                    baseCost: elderlyManBaseCost,            getCurrentCount: () => elderlyManCount },
    { id: 'agriculturalProperty', name: 'Agricultural Property',   img: 'agricultural-property.png',          baseCost: agriculturalPropertyBaseCost,  getCurrentCount: () => agriculturalPropertyCount },
    { id: 'pit',                  name: 'Pit',                     img: 'pit.png',                            baseCost: pitBaseCost,                   getCurrentCount: () => pitCount },
    { id: 'assemblyLine',         name: 'Assembly Line',           img: 'assembly-line.png',                  baseCost: assemblyLineBaseCost,          getCurrentCount: () => assemblyLineCount },
    { id: 'vault',                name: 'Vault',                   img: 'vault.png',                          baseCost: vaultBaseCost,                 getCurrentCount: () => vaultCount },
    { id: 'shrine',               name: 'Shrine',                  img: 'shrine.png',                         baseCost: shrineBaseCost,                getCurrentCount: () => shrineCount },
    { id: 'witchCastle',          name: "Witch's Castle",          img: "witch's-castle.png",                 baseCost: witchCastleBaseCost,           getCurrentCount: () => witchCastleCount },
    { id: 'spaceShuttle',         name: 'Space Shuttle',           img: 'space-shuttle.png',                  baseCost: spaceShuttleBaseCost,          getCurrentCount: () => spaceShuttleCount },
    { id: 'tm',                   name: 'Transmutation Oven',      img: 'transmutation-oven.png',             baseCost: tmBaseCost,                    getCurrentCount: () => tmCount },
    { id: 'wh',                   name: 'Wormhole',                img: 'wormhole.png',                       baseCost: whBaseCost,                    getCurrentCount: () => whCount },
    { id: 'stb',                  name: 'SpaceTime Bender',        img: 'space-time-bender.png',              baseCost: stbBaseCost,                   getCurrentCount: () => stbCount },
    { id: 'qbc',                  name: 'Quantum Baking Chamber',  img: 'quantum-baking-chamber.png',         baseCost: qbcBaseCost,                   getCurrentCount: () => qbcCount },
    { id: 'ck',                   name: 'Cookie Kaleidoscope',     img: 'cookie-kaleidoscope.png',            baseCost: ckBaseCost,                    getCurrentCount: () => ckCount },
    { id: 'gb',                   name: 'Gambler',                 img: 'gambler.png',                        baseCost: gbBaseCost,                    getCurrentCount: () => gbCount },
    { id: 'rs',                   name: 'Reality Synthesizer',     img: 'reality-synthesizer.png',            baseCost: rsBaseCost,                    getCurrentCount: () => rsCount },
    { id: 'bm',                   name: 'Biscuit Matrix',          img: 'biscuit-matrix.png',                 baseCost: bmBaseCost,                    getCurrentCount: () => bmCount },
    { id: 'dm',                   name: 'Dough-mension',           img: 'dough-mension.png',                  baseCost: dmBaseCost,                    getCurrentCount: () => dmCount },
    { id: 'bh',                   name: 'Biscuit Hivemind',        img: 'biscuit-hivemind.png',               baseCost: bhBaseCost,                    getCurrentCount: () => bhCount },
    { id: 'me',                   name: 'Me',                      img: 'me.png',                             baseCost: meBaseCost,                    getCurrentCount: () => meCount },
];

function getUpgradeCost(cfg, tier) {
    if (cfg.getCost) return cfg.getCost(tier);
    return Math.ceil(cfg.baseCost * UPGRADE_COST_MULTS[tier]);
}

function getUpgradeUnlockCount(cfg, tier) {
    if (cfg.getUnlockCount) return cfg.getUnlockCount(tier);
    return UPGRADE_UNLOCK_COUNTS[tier];
}

function isUpgradeVisible(cfg, tier) {
    if (upgradeLevel[cfg.id] !== tier) return false;
    if (tier >= UPGRADE_TIERS) return false;
    return cfg.getCurrentCount() >= getUpgradeUnlockCount(cfg, tier);
}

function purchaseUpgrade(id) {
    if (isWiping) return;
    const cfg = UPGRADE_CONFIGS.find(c => c.id === id);
    if (!cfg) return;
    const tier = upgradeLevel[id];
    if (tier >= UPGRADE_TIERS) return;
    if (!isUpgradeVisible(cfg, tier)) return;
    const cost = getUpgradeCost(cfg, tier);
    if (parsedPoint < cost) return;

    parsedPoint -= cost;
    point.innerHTML = formatNumber(parsedPoint);
    upgradeLevel[id]++;

    if (id === 'click') {
        clickPower *= 2;
    } else {
        ppsMultipliers[id] *= 2;
    }

    calculateTotalPPS();
    updateShopUI();
    renderUpgradePanel();
}

function renderUpgradePanel() {
    const panel = document.getElementById('upgrade-panel');
    if (!panel) return;
    panel.innerHTML = '';

    let anyVisible = false;

    UPGRADE_CONFIGS.forEach(cfg => {
        const tier = upgradeLevel[cfg.id];
        if (tier >= UPGRADE_TIERS) return;
        if (!isUpgradeVisible(cfg, tier)) return;

        anyVisible = true;
        const cost = getUpgradeCost(cfg, tier);
        const affordable = parsedPoint >= cost;
        const multiplier = Math.pow(2, tier + 1);

        const btn = document.createElement('div');
        btn.className = 'upgrade-btn' + (affordable ? ' affordable' : '');
        btn.title = `${cfg.name} Upgrade (${tier + 1}/${UPGRADE_TIERS}) — Cost: ${formatNumber(cost)} biscuits — Effect: ×${multiplier} production`;
        btn.onclick = () => purchaseUpgrade(cfg.id);

        let dotsHTML = '';
        for (let i = 0; i < UPGRADE_TIERS; i++) {
            let cls = i < tier ? 'dot-done' : (i === tier ? 'dot-current' : 'dot-empty');
            dotsHTML += `<span class="upg-dot ${cls}"></span>`;
        }

        btn.innerHTML = `
            <div class="upg-icon-box">
                <img src="${cfg.img}" class="upg-icon" draggable="false">
                <span class="upg-tier-badge">×${multiplier}</span>
            </div>
            <div class="upg-name">${cfg.name}</div>
            <div class="upg-cost-row">
                <img src="b4842fc5e82ce3fd5d6fb074a720f938586a7837-removebg-preview.png" class="upg-mini-biscuit" draggable="false">
                <span class="upg-cost">${formatNumber(cost)}</span>
            </div>
            <div class="upg-dots">${dotsHTML}</div>
        `;

        panel.appendChild(btn);
    });

    if (!anyVisible) {
        panel.innerHTML = `
            <div class="upgrade-empty">
                <img src="b4842fc5e82ce3fd5d6fb074a720f938586a7837-removebg-preview.png" class="upgrade-empty-icon" draggable="false">
                <p>No upgrades available yet.</p>
                <span>Buy buildings to unlock upgrades.</span>
            </div>`;
    }
}

const _origCalculateTotalPPS = calculateTotalPPS;
calculateTotalPPS = function() {
    pps = (pointerFingerCount * pointerFingerPPSContribution * ppsMultipliers.pointerFinger) +
          (elderlyManCount * elderlyManPPSContribution * ppsMultipliers.elderlyMan) +
          (agriculturalPropertyCount * agriculturalPropertyPPSContribution * ppsMultipliers.agriculturalProperty) +
          (pitCount * pitPPSContribution * ppsMultipliers.pit) +
          (assemblyLineCount * assemblyLinePPSContribution * ppsMultipliers.assemblyLine) +
          (vaultCount * vaultPPSContribution * ppsMultipliers.vault) +
          (shrineCount * shrinePPSContribution * ppsMultipliers.shrine) +
          (witchCastleCount * witchCastlePPSContribution * ppsMultipliers.witchCastle) +
          (spaceShuttleCount * spaceShuttlePPSContribution * ppsMultipliers.spaceShuttle) +
          (tmCount * tmPPSContribution * ppsMultipliers.tm) +
          (whCount * whPPSContribution * ppsMultipliers.wh) +
          (stbCount * stbPPSContribution * ppsMultipliers.stb) +
          (qbcCount * qbcPPSContribution * ppsMultipliers.qbc) +
          (ckCount * ckPPSContribution * ppsMultipliers.ck) +
          (gbCount * gbPPSContribution * ppsMultipliers.gb) +
          (rsCount * rsPPSContribution * ppsMultipliers.rs) +
          (bmCount * bmPPSContribution * ppsMultipliers.bm) +
          (dmCount * dmPPSContribution * ppsMultipliers.dm) +
          (bhCount * bhPPSContribution * ppsMultipliers.bh) +
          (meCount * mePPSContribution * ppsMultipliers.me);
    ppsText.innerHTML = formatPPS(pps);
};

const _origIncrementPoints = incrementPoints;
incrementPoints = function() {
    if (isWiping) return;
    parsedPoint += clickPower;
    totalBiscuitsBaked += clickPower;
    point.innerHTML = formatNumber(parsedPoint);
    updateShopUI();
    checkUnlocks();
    renderUpgradePanel();
};

const _origDevWipeSave = devWipeSave;
devWipeSave = function() {
    Object.keys(upgradeLevel).forEach(k => upgradeLevel[k] = 0);
    Object.keys(ppsMultipliers).forEach(k => ppsMultipliers[k] = 1);
    clickPower = 1;
    _origDevWipeSave();
};

renderUpgradePanel();