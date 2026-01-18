// ...existing code...
let menuOpen = 0;
let menuFS = 0;
let legalOn = 0;

let keysOn = 0;
let UItoggle = 0;
let hideBB = 0;
let KillsHide = 0;
let mBlur = 0;
let selector = 1;
let crosshairsPlusOn = 0;
let crosshairUsed = 1;
let hotbarsPlusOn = 0;
let hotbarsInterval = null;
let showSocialsOn = 0;
let showAmbiantOn = 0;
let boostFPSon = 0;
let armorOn = 0;
// safe DOM setter
function safeSetInner(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

const legal = document.createElement('div');
legal.style.display = 'none';
legal.style.width = '30%';
legal.style.height = '96%';
legal.style.backgroundImage = 'url(https://i.ibb.co/3YvVtF9D/LegalBG.png)';
legal.style.backgroundRepeat = 'no-repeat';
legal.style.backgroundSize = 'cover';
legal.style.color = 'white';
legal.style.fontFamily = 'sans-serif';
legal.style.border = '1.32px solid rgb(86, 86, 86)';
legal.style.position = 'absolute';
legal.style.left = '35%';
legal.style.top = '2%';
legal.style.overflow = 'hidden';
legal.style.zIndex = "10000";
legal.style.borderRadius = '5px';
legal.style.overflow = 'auto';
legal.innerHTML = `
<div onclick="More()" class="LegalBack">
    <img class="BackLegal" src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/back-arrow-icon.png">
</div>
<p></p>
<br>
<div class="legalContent">
    <div class="ruleSet">
        <img style="height: 95px;"class="LegalBar"src="https://i.ibb.co/WNMqwKfF/LegalBar.png"><h1 class="rules">1. Approval of Terms</h1>
    </div>
    <p class="RuleText">By accessing and using Trype, you accept these Terms of Service, with all relevant laws and regulations that may apply.</p>
    <div class="ruleSet">
        <img style="height: 95px;"class="LegalBar"src="https://i.ibb.co/WNMqwKfF/LegalBar.png"><h1 class="rules">2. Access and Usage Guidelines</h1>
    </div>
    <p class="RuleText">Nothing from this publication may be reproduced, stored, or transmitted in any form by any means, through any publication, website, app, or otherwise without the initial consent from the developer.</p>
    <div class="ruleSet">
        <img style="height: 95px;"class="LegalBar"src="https://i.ibb.co/WNMqwKfF/LegalBar.png"><h1 class="rules">3. Data Security</h1>
    </div>
    <p class="RuleText">Trype does not sell, share, copy, or store user information. By using Trype, your details will stay completely private and secure.</p>
    <div class="ruleSet">
        <img style="height: 95px;"class="LegalBar"src="https://i.ibb.co/WNMqwKfF/LegalBar.png"><h1 class="rules">4. Disclaimer</h1>
    </div>
    <p class="RuleText">This service is and will be provided 'as is' without any warranties, express nor implied.</p>
    <div class="ruleSet">
        <img style="height: 95px;"class="LegalBar"src="https://i.ibb.co/WNMqwKfF/LegalBar.png"><h1 class="rules">5. Contact</h1>
    </div>
    <p class="RuleText">Any questions about Trype, or our terms of service will preferably be asked through our Discord server.</p>
    <div class="ruleSet">
        <img style="height: 95px;"class="LegalBar"src="https://i.ibb.co/WNMqwKfF/LegalBar.png"><h1 class="rules">6. Usage</h1>
    </div>
    <p class="RuleText">By using Trype, you agree not to use any sort of user scripts, user-modified code, browser extensions, client side scripts, or user modifications in any way paired or with Trype. Any loopholes or exploits in the provided rules will be disregarded. </p>
    <div class="ruleSet">
        <img style="height: 95px;"class="LegalBar"src="https://i.ibb.co/WNMqwKfF/LegalBar.png"><h1 class="rules">7. Authority / Jurisdiction</h1>
    </div>
    <p class="RuleText">By using Trype, we (Trype) reserve the right to terminate or ban any suspicious or malicious activity we conjecture you may be engaged in.</p>
    <div style="height: 95px;"class="ruleSet">
        <img class="LegalBar"src="https://i.ibb.co/WNMqwKfF/LegalBar.png"><h1 class="rules">8. Transaction And Piracy</h1>
    </div>
    <p class="RuleText">By using Trype, you agree not to sell, transact, transfer, or exchange the code to Trype. Sharing, copying, and third-party releasing will count as piracy; see Authority/Jurisdiction (6).</p>

    </div>

`;
document.body.appendChild(legal);


const friday = document.createElement('div');
friday.style.width = '30%';
friday.style.height = '95.5vh';
friday.style.overflow = 'auto';
// old screen: --> friday.style.backgroundImage = 'url("https://i.ibb.co/vwmPL8F/Gradient.png")';
friday.style.backgroundRepeat = 'no-repeat';
friday.style.backgroundSize = 'cover';
friday.style.color = 'white';
friday.style.background = 'linear-gradient(140deg, #33343e, black)';
friday.style.fontFamily = 'sans-serif';
friday.style.border = '1.32px solid rgb(86, 86, 86)';
friday.style.backdropFilter = 'grayscale(100%)';
friday.style.position = 'absolute';
friday.style.left = '35%';
friday.style.top = '2%';
friday.style.zIndex = "9999";
friday.style.borderRadius = '5px';
friday.id = 'trype-menu';
friday.innerHTML = `
    <div style="padding: 25px;" class="TMenu">
        <div class="navigator">
            <span class="navtext" id="UIselector" onclick="selector = 1; changeSelector();">UI</span>
            <span class="navtext" id="videoSelector" onclick="selector = 2; changeSelector();">Video</span>
            <span class="navtext" id="modsSelector" onclick="selector = 3; changeSelector();">Mods</span>
            <div onclick="More()"class="Options">
                <img class="MIcon"src="https://i.ibb.co/1pyjbCV/Three-Dots.webp">
            </div>
            <div onclick="fullScreenMenu()"class="Options">
                <img class="FSIcon"src="https://cdn-icons-png.flaticon.com/512/483/483333.png">
            </div>
        </div>

        <div id="UIhideCard" class="container videoMod disabled" onclick="UI()">
            <p>GUI hide</p>
            <img class="img"src="https://i.ibb.co/y4VfWQ0/UIhide.png">
            <p style="color: black;"> ━━━━━ </p>
        </div>

        <div id="BhideCard" class="container UImod disabled" onclick="clearBB()">
            <p>Hide Buttons</p>
            <img class="img"src="https://i.ibb.co/tXNCjxk/hide-Bad-Buttons.png" alt="hide-Bad-Buttons">
            <p style="color: black;"> ━━━━━ </p>
        </div>

        <div id="KhideCard" class="container UImod disabled" onclick="HideKills()">
            <p>Hide Kills</p>
            <img class="img"src="https://i.ibb.co/3FFRdpb/hide-Kill-Messages.png" alt="hide-kills">
            <p style="color: black;"> ━━━━━ </p>
        </div>

        <div id="crosshairsCard" class="container modMod disabled" onclick="crosshairsPlus()">
            <p>Crosshairs+</p>
            <img class="img"src="https://i.ibb.co/SydSTHS/Crosshairs-Mod.png" alt="Crosshairs-Mod">
            <p style="color: black;"> ━━━━━ </p>
            <input style="width: 60px;" class="button input"type="number" min="1" max="9" onclick="event.stopPropagation()" id="crosshairsPlusSelector">
        </div>

        <div id="hotbarsCard" class="container modMod disabled" onclick="hotbarsPlus()">
            <p>Inventory Theme</p>
            <img class="img"src="https://i.ibb.co/6rvRCHF/hotbars-Mod.png" alt="Hotbars-Mod">
            <p style="color: black;"> ━━━━━ </p>

            <input class="button SmallInput"type="color" id="hotbarsPlusSelector" onclick="event.stopPropagation()">
            <input class="button SmallInput"type="color" id="hotbarsOutlinePlusSelector" onclick="event.stopPropagation()">
            <input class="button SmallInput"type="color" id="selectedHotbarsPlusSelector" onclick="event.stopPropagation()">
            <input class="button SmallInput"type="color" id="selectedHotbarsPlusOutlineSelector" onclick="event.stopPropagation()">
        </div>

        <div id="BlurMotionCard" class="container videoMod disabled" onclick="motionBlur()">
            <p>Motion Blur</p>
            <img class="img"src="https://i.ibb.co/2NZ5kwR/motion-Blur.png" alt="motion-Blur">
            <p style="color: black;"> ━━━━━ </p>
        </div>

        <div id="socialsCard" class="container UImod disabled" onclick="showSocials()">
            <p>Hide Socials</p>
            <img class="img"src="https://i.ibb.co/bJsvTwd/2.png" alt="SocialsHide">
            <p style="color: black;"> ━━━━━ </p>
        </div>  

        <div id="keysCard" class="container videoMod disabled" onclick="keystrokes()">
            <p>Keystrokes</p>
            <img class="img"src="https://i.ibb.co/qFxhtf70/Keystrokes.png" alt="keys">
            <p style="color: black;"> ━━━━━ </p>
        </div>  

        <div id="cpsCard" class="container videoMod disabled" onclick="cpsShow()">
            <p>CPS Counter</p>
            <img class="img"src="https://i.ibb.co/15Ln8KK/cps-Show-AT.png" alt="keys">
            <p style="color: black;"> ━━━━━ </p>
        </div>  

        <div id="boostFPSCard" class="container modMod disabled" onclick="boostFPS()">
            <p>Boost FPS</p>
            <img class="img"src="https://i.ibb.co/VLHN94n/4.png" alt="fpsBoost">
            <p style="color: black;"> ━━━━━ </p>
        </div>  

        <div id="filterCard" class="container modMod disabled" onclick="boostFPS()">
            <p>Filter</p>
            <img class="img"src="https://i.ibb.co/VLHN94n/4.png" alt="fpsBoost">
            <p style="color: black;"> ━━━━━ </p>
        </div>
        <div id="armorCard" class="container modMod disabled" onclick="armor()">
            <p>Armor show</p>
            <img class="img"src="https://i.ibb.co/VLHN94n/4.png" alt="armorShow">
            <p style="color: black;"> ━━━━━ </p>
        </div>
    </div>
`;
//bg.style.backgroundImage = 'url(https://i.ibb.co/LrSbTxg/gradient2.png)';
document.body.appendChild(friday);
const blurBG = document.createElement('div');
blurBG.id = 'trype-blur-bg';
blurBG.style.position = 'fixed';
blurBG.style.top = '0';
blurBG.style.left = '0';
blurBG.style.width = '100%';
blurBG.style.height = '100%';
blurBG.style.zIndex = '999'; // sit below friday (9999) but above page content
blurBG.style.pointerEvents = 'auto'; // don't block clicks
blurBG.style.background = '#00000045';
blurBG.style.backdropFilter = 'blur(6px)';
blurBG.style.display = 'block';
document.body.insertBefore(blurBG, friday);

function fullScreenMenu() {
    if (menuFS == 0) {
        menuFS = 1;
        friday.style.width = '90%';
        friday.style.left = '5%';
        friday.style.height = '95%';
        legal.style.width = '90%';
        legal.style.left = '5%';
        document.getElementsByClassName('TMenu')[0].classList.add('fs');
        legal.style.height = '95%';
        document.getElementsByClassName('MIcon')[0].style.marginLeft = '200px';
        document.getElementsByClassName('FSIcon')[0].style.marginLeft = '15px';
        //friday.style.backgroundImage = 'url(https://i.ibb.co/pvYVtwFQ/Amok-Gradent-Full-Screen.png)';
    } else {
        menuFS = 0;
        friday.style.width = '30%';
        friday.style.height = 'auto';
        friday.style.left = '35%';
        legal.style.width = '30%';
        legal.style.left = '35%';
        document.getElementsByClassName('TMenu')[0].classList.remove('fs');
        document.getElementsByClassName('FSIcon')[0].style.marginLeft = '1px';
        document.getElementsByClassName('MIcon')[0].style.marginLeft = '5px';
        //friday.style.backgroundImage = 'url(https://i.ibb.co/LrSbTxg/gradient2.png)';
    }
}
function More() {
    if (legalOn == 0) {
        legalOn = 1;
        legal.style.display = 'block';
    } else {
        legalOn = 0;
        legal.style.display = 'none';
    }
}

const canvas = document.querySelector("canvas");
if (canvas) {
  canvas.width  = innerWidth * 0.5;
  canvas.height = innerHeight * 0.5;

  canvas.style.width  = "100vw";
  canvas.style.height = "100vh";

  canvas.style.imageRendering = "auto";   // IMPORTANT
}

var elementsToHide = document.querySelectorAll('#gameadsbanner, .AdContainer, #cmpbox, .CookieConsent, [id*="fc-"], [class*="fc-"]');
elementsToHide.forEach(el => {
    el.style.opacity = '0';
    el.style.width = '0';
    el.style.height = '0';
});
['LogoContainer','cube'].forEach(className => { document.querySelectorAll('.' + className).forEach(el => el.remove()); });

const style = document.createElement("style");
style.textContent = `
    *:not(.keepUI):not(.crosshair):not(.MIcon):not(.FSIcon) {
        animation: none !important;
        transition: none !important;
        box-shadow: none !important;
        filter: none !important;
        backdrop-filter: none !important;
    }
    canvas, img {
        image-rendering: pixelated !important; /* cheaper scaling */
        transform: translateZ(0);             /* force GPU layer */
        will-change: transform;                /* hint browser for smoother movement */
    }
    .TopRightIcon, .HotBarItem {
    transform: translateZ(0); 
    will-change: transform; /* hints browser: this will move, optimize it */
    }

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 1px white;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #ffffffff;
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #ffffffff;
        border-radius: 5px;
    }

    p {
        font-size: 25px;
        cursor: default;
        text-shadow: rgba(255, 255, 255, 1) 0px 0px 8px;
    }
    h1 {
        cursor: default;
    }
    .TMenu {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-top: 5vh;
        align-items: start;
        z-index: 100000;
        width: 100% !important;
        box-sizing: border-box;
    }
    .Menu.fs {
        grid-template-columns: repeat(5, 1fr) !important;
    }

    .navigator {
        display: grid;
        top: 0;
        left: 0;
        width: 100%;
        height: 25px;
        background-color: transparent;
        padding-bottom: 20px;
        position: absolute;
        grid-template-columns: repeat(5, 1fr);
        text-align: center;
        top: 15px;
    }
    .FSIcon {
        position: absolute;
        z-index: 10002;
        transition: filter 0.3s ease-in-out;
        filter: invert(0.9);
        cursor: pointer;
        padding: 5px;
        right: 2vw;
        width: 30px;
    }
    .MIcon {
        position: absolute;
        z-index: 10003;
        transition: filter 0.3s ease-in-out;
        filter: invert(0.9);
        cursor: pointer;
        padding: 5px;
        right: 5vw;
        width: 30px;
    }
    .FSIcon:hover {
        filter: invert(1);
    }
    .BackLegal {
        position: relative;
        z-index: 10010;
        transition: filter 0.3s ease-in-out;
        filter: invert(0.6);
        cursor: pointer;
        margin-top: 10px;
        padding: 5px;
        margin-left: 10px;
        width: 55px;
    }
    .legalBar {
        margin-left: 0px;
        height: 95px;
        width: 11px;
        filter: grayscale(100%);
    }
    .rules {
        transition: color 0.5s ease-in-out, padding 0.5s ease-in-out;
        color: #dbdbdb;
        padding-left: 15px;
    }
    .rules:hover {
        color:rgb(255, 255, 255);
        padding-left: 30px;
    }
    .RuleText {
        transition: text-shadow 0.5s ease-in-out;
        text-shadow: rgba(223, 223, 223, 1) 0px 0px 8px;
        margin-left: 10px;
    }
    .RuleText:hover {
        text-shadow: rgba(226, 226, 226, 1) 0px 0px 45px;
        margin-left: 10px;
    }
    .ruleSet {
        display: flex;
        margin-left: 10px;
    }
    .BackLegal:hover {
        filter: invert(1);
    }
    .navtext {
        text-decoration-line: underline;
        text-decoration-style: "solid";
        text-decoration-color: rgba(235, 235, 235, 1);
        text-decoration-thickness: 0px;

        margin-top: .7vh;
        transition: text-shadow 0.2s ease-in-out;
        text-shadow: 0 0 0px #c9c9c9ff, 0 0 0px #b7b7b7ff;
        color: #dbdbdb;
        font-weight: 525;
        margin-left: 15%;
        font-size: 20px;
    }
    .navtext:hover {
        text-shadow: 
            0 0 2px rgba(233, 240, 255, 0.9),
            0 0 5px rgba(233, 240, 255, 0.8),
            0 0 10px rgba(233, 240, 255, 0.7),
            0 0 12px rgba(233, 240, 255, 0.6),
            0 0 15px rgba(233, 240, 255, 0.5);
        color: white;
        cursor: pointer;
    }
    .span {
        display: block;
        width: 100px;
        padding: 5px;
    }
    .img {
        border: transparent;
        outline: none;
        width: 40%;
        max-width: 150px;
    }
    .container {
        transition: box-shadow .2s, background-color .2s, border-radius .2s;
        gap: 12px;
        line-height: 1.2;
        border-radius: 7px;
        background-color: rgba(0,0,0,0.43);
        width: 100%;             /* fill grid cell */
        box-sizing: border-box;
        min-height: 110px;       /* reasonable minimum height */
        height: auto;            /* allow content to determine height */
        text-align: center;
        padding: 10px;
        position: relative;
        border: 5px solid #ef4444; /* default red border */
        cursor: pointer;
    }

    .container.enabled { border-color: #22c55e !important; }
    .container.disabled { border-color: #ef4444 !important; }

    .container:hover {
        border-radius: 9px;
        background-color: rgba(27,27,27,0.21);
        box-shadow:
            0 0 2px rgba(255,255,255,0.9),
            0 0 5px rgba(255,255,255,0.8),
            0 0 10px rgba(255,255,255,0.7);
    }

    .input { width: 100px; margin-bottom: 7px; }
    .SmallInput { width: 30px; margin-bottom: 5px; }
    .button { transition: box-shadow .2s, border-radius .6s, border .6s; }
    .button:hover { cursor: pointer; }

    img {
        border-radius: 5px;
    }
    .SelectedNav {
        transition: all 0.4s ease-in-out;
        transition: text-shadow 0.2s ease-in-out;
        padding: 10px;
        margin-top: 0;
        background: rgb(69, 76, 103);
        border-radius: 10px;
        box-shadow: rgb(43, 59, 119) 0px 0px 15px 0px;
    }
`;
document.head.appendChild(style);

const oKeyDown = new KeyboardEvent('keydown', {
  key: 'o',           // The key value
  code: 'KeyO',       // The physical key on the keyboard
  keyCode: 79,        // Legacy keyCode for O
  which: 79,          // Legacy which
  bubbles: true,      // So it propagates
  cancelable: true
});

// Dispatch it on the document


// Optionally, also fire "keyup" if needed
const oKeyUp = new KeyboardEvent('keyup', {
  key: 'o',
  code: 'KeyO',
  keyCode: 79,
  which: 79,
  bubbles: true,
  cancelable: true
});

document.addEventListener('keydown', function(event) {
    if (event.key === "+" || event.code === "ShiftRight") {
        if (menuOpen == 0) {

            //Close the menu that was opened and show it
            document.getElementsByClassName('EverythingMenu')[0].style.display = 'block';
            document.dispatchEvent(oKeyDown);
            setTimeout(() => {
                document.dispatchEvent(oKeyUp);
            }, 5);

            friday.style.display = "none";
            const btn = document.getElementsByClassName('NewButton BlueButton SettingsResumeExitButton')[0];
            if (btn) btn.click()
            if (document.exitPointerLock) document.exitPointerLock();
            blurBG.style.display = 'none';
            menuOpen = 1;
        } else {
            //Open the menu and hide it, inducing no pointer lock
            document.dispatchEvent(oKeyDown);
            setTimeout(() => {
                document.dispatchEvent(oKeyUp);
            }, 5);
            document.getElementsByClassName('EverythingMenu')[0].style.display = 'none';

            friday.style.display = "block";
            const btn = document.getElementsByClassName('NewButton BlueButton SettingsResumeExitButton')[0];
            if (btn) btn.click();

            if (document.exitPointerLock) document.exitPointerLock();
            blurBG.style.display = 'block';
            menuOpen = 0;
        }
    }
});

const UImodslist = document.querySelectorAll('.UImod');
const videoModsList = document.querySelectorAll('.videoMod');
const modmodList = document.querySelectorAll('.modMod');

const UImodsSelector = document.getElementById('UIselector');
const videoModsSelector = document.getElementById('videoSelector');
const modmodSelector = document.getElementById('modsSelector');

function changeSelector() {
    if (selector == 1){
        UImodslist.forEach(el => el.style.display = 'block');
        videoModsList.forEach(el => el.style.display = 'none');
        modmodList.forEach(el => el.style.display = 'none');
        
        UImodsSelector.classList.add('SelectedNav');
        videoModsSelector.classList.remove('SelectedNav');
        modmodSelector.classList.remove('SelectedNav');
    } else if (selector == 2) {
        UImodslist.forEach(el => el.style.display = 'none');
        videoModsList.forEach(el => el.style.display = 'block');
        modmodList.forEach(el => el.style.display = 'none');
        
        UImodsSelector.classList.remove('SelectedNav');
        videoModsSelector.classList.add('SelectedNav');
        modmodSelector.classList.remove('SelectedNav');
    } else if (selector == 3) {
        UImodslist.forEach(el => el.style.display = 'none');
        videoModsList.forEach(el => el.style.display = 'none');
        modmodList.forEach(el => el.style.display = 'block');
        
        UImodsSelector.classList.remove('SelectedNav');
        videoModsSelector.classList.remove('SelectedNav');
        modmodSelector.classList.add('SelectedNav');
    }
}
function loop() {
    crosshairsPlus();
    setTimeout(() => {
        crosshairsPlus();
    }, 5);
    updateDisplay();
}

setInterval(loop, 5000);

changeSelector();

// KEYSTROKES
var c = document.createElement('div');
c.className = 'keystrokeCon';
c.style.display = 'none';
c.style.cssText = 'position:fixed;bottom:10px;left:10px;background-color:transparent;color:white;padding:5px;font-family:Arial;font-size:14px;z-index:100;';
// Row 1
var r1 = document.createElement('div');
r1.style.cssText = 'display:flex;justify-content:center;';
c.appendChild(r1);
// Function to create a key element
function k(t) {
    var e = document.createElement('div');
    e.style.cssText = 'background-color:black;color:white;padding:5px;margin:2px;border:3.1px solid #171717ff;border-radius:5px;font-family:Arial;font-size:20px;';
    e.textContent = t;
    return e;
}
// Key Elements - Row 1
var up = k('W');
r1.appendChild(up);
// Row 2
var r2 = document.createElement('div');
r2.style.cssText = 'display:flex;justify-content:center;';
c.appendChild(r2);
// Key Elements - Row 2
var left = k('A');
var sprint = k('S');
var right = k('D');
r2.appendChild(left);
r2.appendChild(sprint);
r2.appendChild(right);
// Row 3
var r3 = document.createElement('div');
r3.style.cssText = 'display:flex;justify-content:center;';
c.appendChild(r3);
// Key Elements - Row 3
var shift = k('Shift');
var crouch = k('Z/C');
var space = k('');
space.style.cssText += 'background-image:url(https://i.ibb.co/B53mvYyw/up-Arrow-Asset.png);background-repeat:no-repeat;background-size:contain;background-position:center;width:25px;';
r3.appendChild(shift);
r3.appendChild(crouch);
r3.appendChild(space);
// Row 4
var r4 = document.createElement('div');
r4.style.cssText = 'display:flex;justify-content:center;';
c.appendChild(r4);
// Key Elements - Row 4
var lmb = k('LMB');
var rmb = k('RMB');
r4.appendChild(lmb);
r4.appendChild(rmb);
document.body.appendChild(c);
function h(key, color) {
    var el;
    switch (key) {
        case 'w': el = up; break;
        case 'a': el = left; break;
        case 's': el = sprint; break;
        case 'd': el = right; break;
        case 'z':
        case 'c': el = crouch; break;
        case 'shift': el = shift; break;
        case ' ':
        case 'space':
        case 'spacebar': el = space; break;
        case 'lmb': el = lmb; break;
        case 'rmb': el = rmb; break;
    }
    if (el) el.style.backgroundColor = color;
}
// Event Listeners (normalize keys)
document.addEventListener('keydown', function (e) {
    let key = e.key;
    if (key === ' ') key = 'space';
    key = key.toLowerCase();
    h(key, '#3043b0');
});
document.addEventListener('keyup', function (e) {
    let key = e.key;
    if (key === ' ') key = 'space';
    key = key.toLowerCase();
    h(key, 'black');
});
document.addEventListener('mousedown', function (e) {
    if (e.button === 0) { // Left mouse button
        h('lmb', '#3043b0');
    } else if (e.button === 2) { // Right mouse button
        h('rmb', '#3043b0');
    }
});
document.addEventListener('mouseup', function (e) {
    if (e.button === 0) { // Left mouse button
        h('lmb', 'black');
    } else if (e.button === 2) { // Right mouse button
        h('rmb', 'black');
    }
});

//CPS COUNTER
var cps = document.createElement('div');
cps.style.cssText = 'position:fixed;top:10px;right:10px;background-color:#0000007e;color:white;padding:5px;font-size:14px;z-index:101;';
cps.textContent = 'LMB CPS: 0';
cps.style.display = 'none';
document.body.appendChild(cps);
var ct = [];
function cc() {
    ct.push(new Date().getTime());
    var now = new Date().getTime(), oneSecondAgo = now - 1000, count = 0;
    for (var i = ct.length - 1; i >= 0; i--) {
        if (ct[i] >= oneSecondAgo) count++; else break;
    }
    cps.textContent = 'LMB CPS: ' + count;
}
document.addEventListener('mousedown', function (e) {
    if (e.button === 0) { // Left mouse button (0)
        cc();
    }
});
var myCPS = document.querySelector("body > div:nth-child(10)");
if (myCPS) {
    myCPS.style.cssText = 'font-size:40px;background-color:rgba(0, 0, 0, 0.5);';
}
var rmbCPS = document.createElement('div');
rmbCPS.style.cssText = 'position:fixed;top:50px;right:10px;background-color:#0000007e;color:white;padding:5px;font-family:Arial;font-size:14px;z-index:101;';
rmbCPS.textContent = 'RMB CPS: 0';
rmbCPS.style.display = 'none';
document.body.appendChild(rmbCPS);
var rmbCT = [];
function rc() {
    rmbCT.push(new Date().getTime());
    var now = new Date().getTime(), oneSecondAgo = now - 1000, count = 0;
    for (var i = rmbCT.length - 1; i >= 0; i--) {
        if (rmbCT[i] >= oneSecondAgo) count++; else break;
    }
    rmbCPS.textContent = 'RMB CPS: ' + count;
}
document.addEventListener('mousedown', function (e) {
    if (e.button === 2) { // Right mouse button (2)
        rc();
    }
});
const cpsCounter = document.querySelector("body > div:nth-child(10)")
if (cpsCounter) {
    cpsCounter.style.fontSize = '40px';
}

c.style.display = 'none';

function UI() {
    if (UItoggle == 0) {
        document.getElementById('UIhideCard').classList.add('enabled'); document.getElementById('UIhideCard').classList.remove('disabled');
        const wrapper = document.getElementsByClassName('WholeAppWrapper')[0];
        if (wrapper) wrapper.style.display = "none";
        UItoggle = 1;
    } else {
        document.getElementById('UIhideCard').classList.remove('enabled'); document.getElementById('UIhideCard').classList.add('disabled');
        const wrapper = document.getElementsByClassName('WholeAppWrapper')[0];
        if (wrapper) wrapper.style.display = "block";
        UItoggle = 0;
    }
}
function clearBB() {
    hideBB = hideBB ? 0 : 1;

    const show = hideBB === 0;
    const display = show ? 'block' : 'none';

    // Card state
    const card = document.getElementById('BhideCard');
    if (card) {
        card.classList.toggle('enabled', !show);
        card.classList.toggle('disabled', show);
    }

    // Helper
    const setDisplay = (elements) => {
        for (const el of elements) el.style.display = display;
    };

    // Groups
    setDisplay(document.getElementsByClassName('BottomLeftIcons'));
    setDisplay(document.getElementsByClassName('HotBarItem'));
    setDisplay(document.getElementsByClassName('TopRightIcons'));
    setDisplay(document.getElementsByClassName('HotBarItem ButtonHotBarItem'));
    setDisplay(document.getElementsByClassName('TopRightIcon'));
}

function HideKills() {
    if (KillsHide == 0) {
        document.getElementById('KhideCard').classList.add('enabled'); document.getElementById('KhideCard').classList.remove('disabled');
        document.querySelectorAll('.Killfeed').forEach(function(e) { e.style.display = 'none'; });
        KillsHide = 1;
    } else {
        document.getElementById('KhideCard').classList.remove('enabled'); document.getElementById('KhideCard').classList.add('disabled');
        document.querySelectorAll('.Killfeed').forEach(function(e) { e.style.display = 'block'; });
        KillsHide = 0;
    }
}

let blurTimeout = null;

function motionBlur() {
    mBlur = mBlur ? 0 : 1;

    const card = document.getElementById('BlurMotionCard');
    card.classList.toggle('enabled', mBlur === 1);
    card.classList.toggle('disabled', mBlur === 0);

    const target = document.getElementById('noa-canvas');
    if (!mBlur && target) {
        target.style.filter = 'none';
        clearTimeout(blurTimeout);
    }
}

function onMouseMove(e) {
    if (!mBlur || menuOpen !== 0) return;

    const target = document.getElementById('noa-canvas');
    if (!target) return;

    const dx = e.movementX || 0;
    const dy = e.movementY || 0;
    const distance = Math.hypot(dx, dy);

    const blur = Math.min(distance / 2, 6);

    target.style.filter = blur > 0 ? `blur(${blur}px)` : 'none';

    // HARD RESET after movement stops
    clearTimeout(blurTimeout);
    blurTimeout = setTimeout(() => {
        target.style.filter = 'none';
    }, 16); // one frame
}

document.addEventListener('mousemove', onMouseMove);



function crosshairsPlus() {
    crosshairsPlusOn = crosshairsPlusOn ? 0 : 1;
    const card = document.getElementById('crosshairsCard');
    card.classList.toggle('enabled', crosshairsPlusOn==1);
    card.classList.toggle('disabled', crosshairsPlusOn==0);

    const selectorEl = document.getElementById("crosshairsPlusSelector");
    const chosen = selectorEl && selectorEl.value ? String(selectorEl.value) : "1";
    const mapping = {
        "1":"https://i.ibb.co/1MYHK3G/crosshair2.png",
        "2":"https://i.ibb.co/kmF2K9n/crosshair4.png",
        "3":"https://i.ibb.co/gSRck2X/crosshair5.png",
        "4":"https://i.ibb.co/ygBX2GL/crosshair6.png",
        "5":"https://i.ibb.co/CK79SD8/crosshair7.png",
        "6":"https://i.ibb.co/kXQFyPS/crosshair8.png",
        "7":"https://i.ibb.co/7nBzrdq/crosshair9.png"
    };

    const GameCrosshair = document.getElementsByClassName('Crosshair')[0];
    if (crosshairsPlusOn == 1) {
        GameCrosshair.style.backgroundImage = `url(${mapping[chosen] || mapping["1"]})`;
        GameCrosshair.style.backgroundRepeat = "no-repeat";
        GameCrosshair.style.backgroundSize = "contain";
        GameCrosshair.style.width = "20px";
        GameCrosshair.style.height = "20px";
        GameCrosshair.textContent = "";
    } else {
        GameCrosshair.style.backgroundImage = '';
        GameCrosshair.innerHTML = '+';
    }
}

function hotbarsPlus() {
    hotbarsPlusOn = hotbarsPlusOn ? 0 : 1;
    const card = document.getElementById('hotbarsCard');
    card.classList.toggle('enabled', hotbarsPlusOn==1);
    card.classList.toggle('disabled', hotbarsPlusOn==0);

    const getColor = id => {
        const el = document.getElementById(id);
        return el && el.value ? el.value : null;
    };
    let hotbarUsed = getColor("hotbarsPlusSelector") || '#3d4b79';
    let hotbarOutlineUsed = getColor("hotbarsOutlinePlusSelector") || '#303a59';
    let SelectedHotbarUsed = getColor("selectedHotbarsPlusSelector") || hotbarUsed;
    let SelectedHotbarOutlineUsed = getColor("selectedHotbarsPlusOutlineSelector") || hotbarOutlineUsed;

    let hotItems = document.getElementsByClassName('InvenItem');
    let selected = document.getElementsByClassName('Selected');

    function applyHotbarStyles() {
        for (let i=0;i<hotItems.length;i++){
            hotItems[i].style.backgroundColor = hotbarsPlusOn ? hotbarUsed : '#3d4b79';
            hotItems[i].style.border = (hotbarsPlusOn ? ('2px solid ' + hotbarOutlineUsed) : '2px solid #303a59');
        }
        if (selected[0]) {
            selected[0].style.border = (hotbarsPlusOn ? ('2px solid ' + SelectedHotbarOutlineUsed) : '2px solid #303a59');
            selected[0].style.backgroundColor = (hotbarsPlusOn ? SelectedHotbarUsed : '#3d4b79');
        }
    }

    applyHotbarStyles();

    if (hotbarsPlusOn) {
        if (!hotbarsInterval) {
            hotbarsInterval = setInterval(applyHotbarStyles, 5000);
        }
    } else {
        if (hotbarsInterval) { clearInterval(hotbarsInterval); hotbarsInterval = null; }
    }
}

function showSocials() {
    showSocialsOn = showSocialsOn ? 0 : 1;
    document.getElementById('socialsCard').classList.toggle('enabled', showSocialsOn==1);
    document.getElementById('socialsCard').classList.toggle('disabled', showSocialsOn==0);
    const social = document.getElementById('SocialBarOuter');
    if (social) social.style.display = showSocialsOn == 1 ? 'block' : 'none';
}
function boostFPS() {
    boostFPSon = boostFPSon ? 0 : 1;
    document.getElementById('boostFPSCard').classList.toggle('enabled', boostFPSon==1);
    document.getElementById('boostFPSCard').classList.toggle('disabled', boostFPSon==0);
    const canvas = document.getElementById('noa-canvas');
    if (canvas) {
        if (boostFPSon == 1) {
            canvas.width = window.innerWidth * 1;
            canvas.height = window.innerHeight * 1;
        } else {
            const canvas = document.querySelector("canvas");
            if (canvas) {
                canvas.width  = innerWidth * 0.5;
                canvas.height = innerHeight * 0.5;

                canvas.style.width  = "100vw";
                canvas.style.height = "100vh";

                canvas.style.imageRendering = "auto";   // IMPORTANT
            }

        }
    }
}

// KEYSTROKES card toggle
function keystrokes() {
    keysOn = keysOn ? 0 : 1;
    document.getElementById('keysCard').classList.toggle('enabled', keysOn==1);
    document.getElementById('keysCard').classList.toggle('disabled', keysOn==0);
    c.style.display = keysOn ? 'block' : 'none';
}

// CPS card toggle
function cpsShow() {
    const show = (cps.style.display === 'none');
    document.getElementById('cpsCard').classList.toggle('enabled', show);
    document.getElementById('cpsCard').classList.toggle('disabled', !show);
    cps.style.display = show ? 'block' : 'none';
    rmbCPS.style.display = show ? 'block' : 'none';
}
// ...existing code...



const ArmorDisplay = document.createElement("div");
ArmorDisplay.id = "armorDisplayClone";

Object.assign(ArmorDisplay.style, {
    position: "fixed",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    display: "none",
    flexDirection: "column",
    gap: "8px",
    zIndex: 9999,
    pointerEvents: "none"
});

document.body.appendChild(ArmorDisplay);

function armor() {
    armorOn = armorOn ? 0 : 1;
    document.getElementById('armorCard')
        ?.classList.toggle('enabled', armorOn === 1);
    document.getElementById('armorCard')
        ?.classList.toggle('disabled', armorOn === 0);

    ArmorDisplay.style.display = armorOn ? 'flex' : 'none';
}

function getArmorSource() {
    return document.querySelector(".ArmourItemSlots");
}

function updateDisplay() {
    const ArmorSource = getArmorSource();
    if (!ArmorSource || !armorOn) return;

    ArmorDisplay.innerHTML = "";

    [...ArmorSource.children].forEach(slot => {
        const inner = slot.querySelector("div");
        if (!inner) return;

        const clone = inner.cloneNode(true);

        Object.assign(clone.style, {
            width: "40px",
            height: "40px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "6px",
            opacity: "0.95"
        });

        ArmorDisplay.appendChild(clone);
    });
}
