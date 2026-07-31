function checkURL() {
    if (location.href === "https://bloxd.io/") {
        location.replace("https://jasonfrentuk.github.io/Trype/Home.html");
    }
}

// This is for detecting when someone clicks one of the arrow things which is never
window.addEventListener("popstate", checkURL);

// If someone goes to bloxd.io from leaving the game or whatever
for (const method of ["pushState", "replaceState"]) {
    const original = history[method];

    history[method] = function (...args) {
        original.apply(this, args);
        checkURL();
    };
}
//checkURL();

// btw ts is not ai
let draggableHealth = 0;
let menuOpen = 0;
let menuFS = 0;
let legalOn = 0;

let tonersOn = 0;
let minimalUItoggle = 0;
let healthWarning = 0;
let stableCHOn = 0;
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
let UpgradedChatOn = 0;
let capesOn = 0;
// safe DOM setter
function safeSetInner(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

const legal = document.createElement('div');
legal.style.display = 'none';
legal.style.width = '55vw';
legal.style.height = '70vh';
legal.style.backgroundImage = 'url(https://i.ibb.co/3YvVtF9D/LegalBG.png)';
legal.style.backgroundRepeat = 'no-repeat';
legal.style.backgroundSize = 'cover';
legal.style.color = 'white';
legal.style.fontFamily = 'sans-serif';
legal.style.border = '1.32px solid rgb(86, 86, 86)';
legal.style.position = 'absolute';
legal.style.left = '22.5vw';
legal.style.top = '15vh';
legal.style.filter = "hue-rotate(264deg)";
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
    <p class="RuleText">Absolutely NO parts or segments of Trype's code shall be used in any places or contexts aside from the base client provided in Trype's official discord server without explicit permission from Jelix. Any loopholes or exploits in the provided rules will be disregarded. </p>
    <div class="ruleSet">
        <img style="height: 95px;"class="LegalBar"src="https://i.ibb.co/WNMqwKfF/LegalBar.png"><h1 class="rules">7. Authority / Jurisdiction</h1>
    </div>
    <p class="RuleText">By using Trype, we (Trype) reserve the right to terminate anyones permission to use Trype based on anything we conjecture you might be engaged in.</p>
    <div style="height: 95px;"class="ruleSet">
        <img class="LegalBar"src="https://i.ibb.co/WNMqwKfF/LegalBar.png"><h1 class="rules">8. Transaction And Piracy</h1>
    </div>
    <p class="RuleText">By using Trype, you agree not to sell, transact, transfer, or exchange the code to Trype. Sharing, copying, and third-party releasing will count as piracy; see Authority/Jurisdiction (6).</p>

    </div>

`;
document.body.appendChild(legal);


const friday = document.createElement('div');
friday.style.width = '55vw';
friday.style.height = '70vh';
friday.style.left = '22.5vw';
friday.style.top = '15vh';

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
friday.style.zIndex = "9999";
friday.style.borderRadius = '5px';
friday.id = 'trype-menu';
friday.innerHTML = `
<div id="tosPrompt" style="
position:absolute;width:100%;height:100%;background:#121212;z-index:10005;
display:flex;justify-content:center;align-items:center;color:white;font-family:Arial;
">
    <div style="
    background:#181818;padding:35px;border-radius:15px;text-align:center;
    box-shadow:0 0 25px #0084ff55;width:450px;
    ">
        <h1 style="text-shadow:0 0 10px #0084ff55;">
            Wait! One more thing before you get started
        </h1>

        <label style="
        display:flex;justify-content:center;gap:10px;
        margin:20px;color:#ddd;
        ">
            <input id="agreementCheckbox" type="checkbox" style="
            width:18px;height:18px;accent-color:#0084ff;
            transform:scale(1.2);cursor:pointer;
            ">
            I have read, acknowledged, and agree to the Terms Of Service
        </label>

        <button onclick="tos()" style="
        background:#0084ff;color:white;border:0;padding:12px 25px;
        border-radius:10px;cursor:pointer;
        box-shadow:0 5px 15px #0084ff55;
        transition:.2s;margin:5px;
        "
        onmouseover="this.style.transform='scale(1.05)'"
        onmouseout="this.style.transform='scale(1)'">
            Yes
        </button>

        <button onclick="More()" style="
        background:#0084ff;color:white;border:0;padding:12px 25px;
        border-radius:10px;cursor:pointer;
        box-shadow:0 5px 15px #0084ff55;
        transition:.2s;margin:5px;
        "
        onmouseover="this.style.transform='scale(1.05)'"
        onmouseout="this.style.transform='scale(1)'">
            View TOS
        </button>
    </div>
</div>




    <div style="padding: 25px;" class="TMenu">
        <div class="navigator">
            <h1 style="font-size: 41px;color: #f5f9ff;text-shadow: 0 0 6px rgba(56,134,255,0.95), 0 0 12px rgba(56,134,255,0.85), 0 0 20px rgba(56,134,255,0.7);">Trype</h1>
            <span class="navtext" id="UIselector" onclick="selector = 1; changeSelector();">UI</span>
            <span class="navtext" id="videoSelector" onclick="selector = 2; changeSelector();">Visual</span>
            <span class="navtext" id="modsSelector" onclick="selector = 3; changeSelector();">Mods</span>
            <div style="position: absolute; bottom: 10px;">
            <div onclick="More()" class="Options">
                <img class="MIcon"src="https://i.ibb.co/1pyjbCV/Three-Dots.webp">
            </div>
                <div onclick="fullScreenMenu()"class="Options">
                <img class="FSIcon"src="https://cdn-icons-png.flaticon.com/512/483/483333.png">
            </div>
            </div>
        </div>
        <div class="HealthWarningSettings">
            <h1 style="text-align: center;">Health Warning Settings</h1>
            <div style="width: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 20px; margin-top:40px;">
                <button onclick="HealthWarningSettings()"style="background: #191919; border:none; position: absolute; top: 5px; right: 5px; width: 45px; height: 45px;"><img src="https://raw.githubusercontent.com/JasonFrentuk/Trype/refs/heads/main/close-icon.png" style="width: 40px;filter: invert(1);cursor: pointer;"></button>
                <div>
                <span style="margin-right: 10px;">Intensity:</span>
                <input id="HealthWarningIntensity" min="70" max="99" value="94" class="slider" type="range"> <span id="intensityValue">94</span><br>
                </div>
                <div>
                <span style="margin-right: 10px;">Boundary:</span>
                <input id="HealthWarningBoundary" min="2" max="100" value="30" class="slider" type="range"> <span id="boundaryValue">94</span>
                </div>
            </div>
        </div>
        <div class="crosshairPlusSettings">
            <h1 style="text-align: center;">Crosshairs</h1>
            <div style="width: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 20px; margin-top:40px;">
                <button onclick="crosshairPlusSettings()"style="background: #191919; border:none; position: absolute; top: 5px; right: 5px; width: 45px; height: 45px;"><img src="https://raw.githubusercontent.com/JasonFrentuk/Trype/refs/heads/main/close-icon.png" style="width: 40px;filter: invert(1);cursor: pointer;"></button>
                <div>
                <span style="margin-right: 10px;">Crosshair:</span>
                <input id="crosshairsPlusSelector" min="1" max="8" value="1" step="1"class="slider" type="range"> <span id="crosshairsPlusSelectorValue">1</span><br>
                </div>
                <div>
                <span style="margin-right: 10px;">Size:</span>
                <input id="CrosshairSize" min="1" max="10" value="4" class="slider" type="range"> <span id="CrosshairSizeValue">4</span>
                </div>
            </div>
        </div>
        <div id="UIhideCard" class="container videoMod disabled" onclick="UI()">
            <p>UI hide</p>
            <img class="img"src="https://i.ibb.co/y4VfWQ0/UIhide.png">
            <div style="width: 100%;text-align: center;display: flex;justify-content: center;position: absolute;bottom: 4vh;">
                <span>Pure cinima</span>
            </div>
        </div>

        <div id="BhideCard" class="container UImod disabled" onclick="clearBB()">
            <p>Hide Buttons</p>
            <img class="img"src="https://raw.githubusercontent.com/JasonFrentuk/Trype/refs/heads/main/client/HideButtons.png" alt="hide-Bad-Buttons">
            <div style="width: 100%;text-align: center;display: flex;justify-content: center;position: absolute;bottom: 4vh;">
                <span>Hide all the useless buttons</span>
            </div>
        </div>
        <!-- Old: https://i.ibb.co/tXNCjxk/hide-Bad-Buttons.png -->
        <div id="KhideCard" class="container UImod disabled" onclick="HideKills()">
            <p>Hide Kills</p>
            <img class="img"src="https://i.ibb.co/3FFRdpb/hide-Kill-Messages.png" alt="hide-kills">
            <div style="width: 100%;text-align: center;display: flex;justify-content: center;position: absolute;bottom: 4vh;">
                <span>Hides the kills notifications</span>
            </div>
        </div>

        <div id="crosshairsCard" class="container modMod disabled" onclick="crosshairsPlus()">
            <p>Crosshairs+</p>
            <img class="img"src="https://i.ibb.co/SydSTHS/Crosshairs-Mod.png" alt="Crosshairs-Mod"><br>
            <button onclick="crosshairPlusSettings();"class="settings-btn" aria-label="Settings">
                <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24"width="24"height="24"><path fill="currentColor"fill-rule="evenodd"clip-rule="evenodd"d="M13.008,23.247h-2.434c-0.464,0-0.598,0-1.862-3.128l-0.843-0.343c-2.598,1.179-2.91,1.179-3.044,1.179c-0.172,0-0.365-0.075-0.486-0.196l-1.721-1.685c-0.343-0.338-0.431-0.425,0.934-3.521l-0.34-0.803C0,13.601,0,13.462,0,12.981v-2.385c0-0.477,0-0.599,3.201-1.838l0.34-0.805C2.1,4.916,2.199,4.818,2.545,4.477l1.724-1.685C4.39,2.674,4.583,2.599,4.753,2.599c0.125,0,0.45,0,3.092,1.115l0.838-0.341c1.175-3.141,1.324-3.141,1.789-3.141h2.434c0.463,0,0.598,0,1.861,3.13l0.842,0.34c2.596-1.176,2.908-1.176,3.044-1.176c0.171,0,0.363,0.074,0.484,0.192l1.725,1.683c0.336,0.331,0.431,0.425-0.934,3.523l0.339,0.808c3.213,1.147,3.213,1.285,3.213,1.764v2.384c0,0.478-0.001,0.601-3.203,1.841l-0.338,0.805c1.442,3.035,1.342,3.134,0.999,3.475l-1.728,1.688c-0.122,0.119-0.314,0.193-0.484,0.193c-0.123,0-0.446,0-3.088-1.117l-0.842,0.341C13.621,23.247,13.484,23.247,13.008,23.247z M10.924,21.945h1.725c0.23-0.492,0.673-1.604,1.029-2.562c0.063-0.171,0.196-0.308,0.365-0.376l1.357-0.55c0.159-0.064,0.34-0.063,0.499,0.005c0.976,0.415,2.129,0.879,2.651,1.055l1.208-1.184c-0.194-0.512-0.684-1.596-1.119-2.509c-0.079-0.167-0.084-0.361-0.013-0.533l0.559-1.328c0.069-0.163,0.201-0.292,0.366-0.354c0.983-0.38,2.127-0.849,2.628-1.087v-1.656c-0.507-0.226-1.642-0.656-2.618-1.003c-0.173-0.061-0.312-0.191-0.383-0.361l-0.559-1.33c-0.069-0.166-0.068-0.353,0.005-0.517c0.418-0.943,0.884-2.058,1.067-2.577l-1.209-1.181c-0.518,0.187-1.641,0.671-2.589,1.104c-0.161,0.074-0.349,0.079-0.514,0.011l-1.357-0.548c-0.163-0.066-0.295-0.197-0.36-0.361c-0.387-0.963-0.864-2.083-1.108-2.571H10.83c-0.231,0.493-0.673,1.605-1.028,2.562C9.74,4.266,9.606,4.404,9.437,4.471l-1.353,0.55c-0.161,0.065-0.34,0.064-0.5-0.004C6.608,4.602,5.451,4.138,4.93,3.965L3.722,5.147C3.917,5.66,4.404,6.744,4.84,7.659c0.08,0.167,0.083,0.361,0.012,0.533L4.29,9.519c-0.069,0.163-0.2,0.291-0.365,0.354C2.942,10.252,1.8,10.719,1.3,10.957v1.657c0.505,0.228,1.641,0.659,2.618,1.007c0.172,0.062,0.311,0.193,0.381,0.36l0.558,1.327c0.07,0.165,0.067,0.351-0.004,0.515c-0.418,0.944-0.884,2.059-1.067,2.577l1.208,1.182c0.517-0.188,1.64-0.672,2.589-1.104c0.162-0.074,0.348-0.078,0.514-0.012l1.357,0.551c0.165,0.066,0.294,0.196,0.359,0.36C10.202,20.34,10.68,21.459,10.924,21.945z M11.74,15.87c-2.319,0-4.207-1.854-4.207-4.13c0-2.275,1.888-4.127,4.207-4.127c2.318,0,4.205,1.852,4.205,4.127C15.945,14.016,14.058,15.87,11.74,15.87z M11.74,8.914c-1.602,0-2.905,1.268-2.905,2.826c0,1.561,1.303,2.829,2.905,2.829s2.904-1.269,2.904-2.829C14.644,10.181,13.342,8.914,11.74,8.914z"/></svg>
            </button>
            <!-- <input style="width: 60px;" class="button input"type="number" min="1" max="9" onclick="event.stopPropagation()" id="crosshairsPlusSelectorA"> -->
            <div style="width: 100%;text-align: center;display: flex;justify-content: center;position: absolute;bottom: 4vh;">
                <span>Non-basic</span>
            </div>
        </div>

        <div id="hotbarsCard" class="container videoMod disabled" onclick="hotbarsPlus()">
            <p>Inventory Theme</p>
            <img class="img"src="https://i.ibb.co/6rvRCHF/hotbars-Mod.png" alt="Hotbars-Mod">
            <div style="margin-top: 1.3vh;">
            <input class="button SmallInput"type="color" id="hotbarsPlusSelector" onclick="event.stopPropagation()">
            <input class="button SmallInput"type="color" id="hotbarsOutlinePlusSelector" onclick="event.stopPropagation()">
            <input class="button SmallInput"type="color" id="selectedHotbarsPlusSelector" onclick="event.stopPropagation()">
            <input class="button SmallInput"type="color" id="selectedHotbarsPlusOutlineSelector" onclick="event.stopPropagation()">
            </div>
        </div>

        <div id="upgradedChatCard" class="container UImod disabled" onclick="upgradedChat()">
            <p>Upgraded Chat</p>
            <img class="img"src="https://i.ibb.co/2NZ5kwR/motion-Blur.png" alt="upgraded-chat">
            <div style="width: 100%;text-align: center;display: flex;justify-content: center;position: absolute;bottom: 3vh;">
                <span>Cleanse your eyes</span>
            </div>
        </div>

        <div id="socialsCard" class="container UImod disabled" onclick="showSocials()">
            <p>Hide Socials</p>
            <img class="img"src="https://i.ibb.co/bJsvTwd/2.png" alt="SocialsHide">
            <div style="width: 100%;text-align: center;display: flex;justify-content: center;position: absolute;bottom: 4vh;">
                <span>I have no friends anyways</span>
            </div>
        </div>  

        <div id="keysCard" class="container modMod disabled" onclick="keystrokes()">
            <p>Keystrokes</p>
            <img class="img"src="https://i.ibb.co/qFxhtf70/Keystrokes.png" alt="keys">
            <div style="width: 100%;text-align: center;display: flex;justify-content: center;position: absolute;bottom: 4vh;">
                <span>Poor keyboard</span>
            </div>
        </div>  

        <div id="cpsCard" class="container modMod disabled" onclick="cpsShow()">
            <p>CPS Counter</p>
            <img class="img"src="https://i.ibb.co/15Ln8KK/cps-Show-AT.png" alt="keys">
            <div style="width: 100%;text-align: center;display: flex;justify-content: center;position: absolute;bottom: 4vh;">
                <span>look how fast I click</span>
            </div>
        </div>  

        <div id="boostFPSCard" class="container videoMod disabled" onclick="boostFPS()">
            <p>Pixel Scale</p>
            <img class="img"src="https://i.ibb.co/VLHN94n/4.png" alt="fpsBoost">
            <div style="width: 100%;text-align: center;display: flex;justify-content: center;position: absolute;bottom: 3vh;">
                <span>Changes are being made to this mod...</span>
            </div>
        </div>  
        <!--
        <div id="filterCard" class="container videoMod disabled" onclick="boostFPS()">
            <p>Filter</p>
            <img class="img"src="https://i.ibb.co/VLHN94n/4.png" alt="fpsBoost">

        </div>
        -->
        <div id="armorCard" class="container modMod disabled" onclick="armor()">
            <p>Armor show</p>
            <img class="img"src="https://i.ibb.co/VLHN94n/4.png" alt="armorShow">
            <div style="width: 100%;text-align: center;display: flex;justify-content: center;position: absolute;bottom: 2vh;">
                <span>Far too lazy to check my inventory</span>
            </div>
        </div>
        <div id="draggableHealth" class="container modMod disabled" onclick="health()">
            <p>Draggable Health</p>
            <img class="img"src="https://i.ibb.co/VLHN94n/4.png" alt="armorShow">
            <div style="width: 100%;text-align: center;display: flex;justify-content: center;position: absolute;bottom: 1vh; font-size: 12px;">
                <span>Open the settings menu and press \'Left Alt\' to toggle draggable health.</span>
            </div>
        </div>
        <div id="StableCrosshair" class="container videoMod disabled" onclick="ShowHideSCH()">
            <p>Stable Crosshair</p>
            <img class="img"src="https://i.ibb.co/VLHN94n/4.png" alt="armorShow">
            <div style="width: 100%;text-align: center;display: flex;justify-content: center;position: absolute;bottom: 1vh; font-size: 12px;">
                <span>Hold still, stop moving! (Change settings from Crosshairs Plus mod)</span>
            </div>
        </div>
        <div id="HealthWarnings" class="container modMod disabled" onclick="HealthWarnings()">
            <p>Health Warning</p>
            <button onclick="HealthWarningSettings();"class="settings-btn" aria-label="Settings">
                <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24"width="24"height="24"><path fill="currentColor"fill-rule="evenodd"clip-rule="evenodd"d="M13.008,23.247h-2.434c-0.464,0-0.598,0-1.862-3.128l-0.843-0.343c-2.598,1.179-2.91,1.179-3.044,1.179c-0.172,0-0.365-0.075-0.486-0.196l-1.721-1.685c-0.343-0.338-0.431-0.425,0.934-3.521l-0.34-0.803C0,13.601,0,13.462,0,12.981v-2.385c0-0.477,0-0.599,3.201-1.838l0.34-0.805C2.1,4.916,2.199,4.818,2.545,4.477l1.724-1.685C4.39,2.674,4.583,2.599,4.753,2.599c0.125,0,0.45,0,3.092,1.115l0.838-0.341c1.175-3.141,1.324-3.141,1.789-3.141h2.434c0.463,0,0.598,0,1.861,3.13l0.842,0.34c2.596-1.176,2.908-1.176,3.044-1.176c0.171,0,0.363,0.074,0.484,0.192l1.725,1.683c0.336,0.331,0.431,0.425-0.934,3.523l0.339,0.808c3.213,1.147,3.213,1.285,3.213,1.764v2.384c0,0.478-0.001,0.601-3.203,1.841l-0.338,0.805c1.442,3.035,1.342,3.134,0.999,3.475l-1.728,1.688c-0.122,0.119-0.314,0.193-0.484,0.193c-0.123,0-0.446,0-3.088-1.117l-0.842,0.341C13.621,23.247,13.484,23.247,13.008,23.247z M10.924,21.945h1.725c0.23-0.492,0.673-1.604,1.029-2.562c0.063-0.171,0.196-0.308,0.365-0.376l1.357-0.55c0.159-0.064,0.34-0.063,0.499,0.005c0.976,0.415,2.129,0.879,2.651,1.055l1.208-1.184c-0.194-0.512-0.684-1.596-1.119-2.509c-0.079-0.167-0.084-0.361-0.013-0.533l0.559-1.328c0.069-0.163,0.201-0.292,0.366-0.354c0.983-0.38,2.127-0.849,2.628-1.087v-1.656c-0.507-0.226-1.642-0.656-2.618-1.003c-0.173-0.061-0.312-0.191-0.383-0.361l-0.559-1.33c-0.069-0.166-0.068-0.353,0.005-0.517c0.418-0.943,0.884-2.058,1.067-2.577l-1.209-1.181c-0.518,0.187-1.641,0.671-2.589,1.104c-0.161,0.074-0.349,0.079-0.514,0.011l-1.357-0.548c-0.163-0.066-0.295-0.197-0.36-0.361c-0.387-0.963-0.864-2.083-1.108-2.571H10.83c-0.231,0.493-0.673,1.605-1.028,2.562C9.74,4.266,9.606,4.404,9.437,4.471l-1.353,0.55c-0.161,0.065-0.34,0.064-0.5-0.004C6.608,4.602,5.451,4.138,4.93,3.965L3.722,5.147C3.917,5.66,4.404,6.744,4.84,7.659c0.08,0.167,0.083,0.361,0.012,0.533L4.29,9.519c-0.069,0.163-0.2,0.291-0.365,0.354C2.942,10.252,1.8,10.719,1.3,10.957v1.657c0.505,0.228,1.641,0.659,2.618,1.007c0.172,0.062,0.311,0.193,0.381,0.36l0.558,1.327c0.07,0.165,0.067,0.351-0.004,0.515c-0.418,0.944-0.884,2.059-1.067,2.577l1.208,1.182c0.517-0.188,1.64-0.672,2.589-1.104c0.162-0.074,0.348-0.078,0.514-0.012l1.357,0.551c0.165,0.066,0.294,0.196,0.359,0.36C10.202,20.34,10.68,21.459,10.924,21.945z M11.74,15.87c-2.319,0-4.207-1.854-4.207-4.13c0-2.275,1.888-4.127,4.207-4.127c2.318,0,4.205,1.852,4.205,4.127C15.945,14.016,14.058,15.87,11.74,15.87z M11.74,8.914c-1.602,0-2.905,1.268-2.905,2.826c0,1.561,1.303,2.829,2.905,2.829s2.904-1.269,2.904-2.829C14.644,10.181,13.342,8.914,11.74,8.914z"/></svg>
            </button>

            <img class="img"src="https://i.ibb.co/VLHN94n/4.png" alt="armorShow">
            <div style="width: 100%;text-align: center;display: flex;justify-content: center;position: absolute; bottom: 1vh;">
                <span>Tells you when you're low</span>
            </div>
        </div>
        <div id="MinimalUI" class="container modMod disabled" onclick="minimalUI()">
            <p>Minimal UI</p>
            <button onclick="minimalUIsettings();"class="settings-btn" aria-label="Settings">
                <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24"width="24"height="24"><path fill="currentColor"fill-rule="evenodd"clip-rule="evenodd"d="M13.008,23.247h-2.434c-0.464,0-0.598,0-1.862-3.128l-0.843-0.343c-2.598,1.179-2.91,1.179-3.044,1.179c-0.172,0-0.365-0.075-0.486-0.196l-1.721-1.685c-0.343-0.338-0.431-0.425,0.934-3.521l-0.34-0.803C0,13.601,0,13.462,0,12.981v-2.385c0-0.477,0-0.599,3.201-1.838l0.34-0.805C2.1,4.916,2.199,4.818,2.545,4.477l1.724-1.685C4.39,2.674,4.583,2.599,4.753,2.599c0.125,0,0.45,0,3.092,1.115l0.838-0.341c1.175-3.141,1.324-3.141,1.789-3.141h2.434c0.463,0,0.598,0,1.861,3.13l0.842,0.34c2.596-1.176,2.908-1.176,3.044-1.176c0.171,0,0.363,0.074,0.484,0.192l1.725,1.683c0.336,0.331,0.431,0.425-0.934,3.523l0.339,0.808c3.213,1.147,3.213,1.285,3.213,1.764v2.384c0,0.478-0.001,0.601-3.203,1.841l-0.338,0.805c1.442,3.035,1.342,3.134,0.999,3.475l-1.728,1.688c-0.122,0.119-0.314,0.193-0.484,0.193c-0.123,0-0.446,0-3.088-1.117l-0.842,0.341C13.621,23.247,13.484,23.247,13.008,23.247z M10.924,21.945h1.725c0.23-0.492,0.673-1.604,1.029-2.562c0.063-0.171,0.196-0.308,0.365-0.376l1.357-0.55c0.159-0.064,0.34-0.063,0.499,0.005c0.976,0.415,2.129,0.879,2.651,1.055l1.208-1.184c-0.194-0.512-0.684-1.596-1.119-2.509c-0.079-0.167-0.084-0.361-0.013-0.533l0.559-1.328c0.069-0.163,0.201-0.292,0.366-0.354c0.983-0.38,2.127-0.849,2.628-1.087v-1.656c-0.507-0.226-1.642-0.656-2.618-1.003c-0.173-0.061-0.312-0.191-0.383-0.361l-0.559-1.33c-0.069-0.166-0.068-0.353,0.005-0.517c0.418-0.943,0.884-2.058,1.067-2.577l-1.209-1.181c-0.518,0.187-1.641,0.671-2.589,1.104c-0.161,0.074-0.349,0.079-0.514,0.011l-1.357-0.548c-0.163-0.066-0.295-0.197-0.36-0.361c-0.387-0.963-0.864-2.083-1.108-2.571H10.83c-0.231,0.493-0.673,1.605-1.028,2.562C9.74,4.266,9.606,4.404,9.437,4.471l-1.353,0.55c-0.161,0.065-0.34,0.064-0.5-0.004C6.608,4.602,5.451,4.138,4.93,3.965L3.722,5.147C3.917,5.66,4.404,6.744,4.84,7.659c0.08,0.167,0.083,0.361,0.012,0.533L4.29,9.519c-0.069,0.163-0.2,0.291-0.365,0.354C2.942,10.252,1.8,10.719,1.3,10.957v1.657c0.505,0.228,1.641,0.659,2.618,1.007c0.172,0.062,0.311,0.193,0.381,0.36l0.558,1.327c0.07,0.165,0.067,0.351-0.004,0.515c-0.418,0.944-0.884,2.059-1.067,2.577l1.208,1.182c0.517-0.188,1.64-0.672,2.589-1.104c0.162-0.074,0.348-0.078,0.514-0.012l1.357,0.551c0.165,0.066,0.294,0.196,0.359,0.36C10.202,20.34,10.68,21.459,10.924,21.945z M11.74,15.87c-2.319,0-4.207-1.854-4.207-4.13c0-2.275,1.888-4.127,4.207-4.127c2.318,0,4.205,1.852,4.205,4.127C15.945,14.016,14.058,15.87,11.74,15.87z M11.74,8.914c-1.602,0-2.905,1.268-2.905,2.826c0,1.561,1.303,2.829,2.905,2.829s2.904-1.269,2.904-2.829C14.644,10.181,13.342,8.914,11.74,8.914z"/></svg>
            </button>

            <img class="img"src="https://i.ibb.co/VLHN94n/4.png" alt="armorShow">
            <div style="width: 100%;text-align: center;display: flex;justify-content: center;position: absolute;bottom: 4vh;">
                <span>Off with the junk!</span>
            </div>
        </div>
        <div id="Capes" class="container modMod disabled" onclick="capes()">
            <p>Capes</p>
            <button onclick="CapeSettings();"class="settings-btn" aria-label="Settings">
                <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24"width="24"height="24"><path fill="currentColor"fill-rule="evenodd"clip-rule="evenodd"d="M13.008,23.247h-2.434c-0.464,0-0.598,0-1.862-3.128l-0.843-0.343c-2.598,1.179-2.91,1.179-3.044,1.179c-0.172,0-0.365-0.075-0.486-0.196l-1.721-1.685c-0.343-0.338-0.431-0.425,0.934-3.521l-0.34-0.803C0,13.601,0,13.462,0,12.981v-2.385c0-0.477,0-0.599,3.201-1.838l0.34-0.805C2.1,4.916,2.199,4.818,2.545,4.477l1.724-1.685C4.39,2.674,4.583,2.599,4.753,2.599c0.125,0,0.45,0,3.092,1.115l0.838-0.341c1.175-3.141,1.324-3.141,1.789-3.141h2.434c0.463,0,0.598,0,1.861,3.13l0.842,0.34c2.596-1.176,2.908-1.176,3.044-1.176c0.171,0,0.363,0.074,0.484,0.192l1.725,1.683c0.336,0.331,0.431,0.425-0.934,3.523l0.339,0.808c3.213,1.147,3.213,1.285,3.213,1.764v2.384c0,0.478-0.001,0.601-3.203,1.841l-0.338,0.805c1.442,3.035,1.342,3.134,0.999,3.475l-1.728,1.688c-0.122,0.119-0.314,0.193-0.484,0.193c-0.123,0-0.446,0-3.088-1.117l-0.842,0.341C13.621,23.247,13.484,23.247,13.008,23.247z M10.924,21.945h1.725c0.23-0.492,0.673-1.604,1.029-2.562c0.063-0.171,0.196-0.308,0.365-0.376l1.357-0.55c0.159-0.064,0.34-0.063,0.499,0.005c0.976,0.415,2.129,0.879,2.651,1.055l1.208-1.184c-0.194-0.512-0.684-1.596-1.119-2.509c-0.079-0.167-0.084-0.361-0.013-0.533l0.559-1.328c0.069-0.163,0.201-0.292,0.366-0.354c0.983-0.38,2.127-0.849,2.628-1.087v-1.656c-0.507-0.226-1.642-0.656-2.618-1.003c-0.173-0.061-0.312-0.191-0.383-0.361l-0.559-1.33c-0.069-0.166-0.068-0.353,0.005-0.517c0.418-0.943,0.884-2.058,1.067-2.577l-1.209-1.181c-0.518,0.187-1.641,0.671-2.589,1.104c-0.161,0.074-0.349,0.079-0.514,0.011l-1.357-0.548c-0.163-0.066-0.295-0.197-0.36-0.361c-0.387-0.963-0.864-2.083-1.108-2.571H10.83c-0.231,0.493-0.673,1.605-1.028,2.562C9.74,4.266,9.606,4.404,9.437,4.471l-1.353,0.55c-0.161,0.065-0.34,0.064-0.5-0.004C6.608,4.602,5.451,4.138,4.93,3.965L3.722,5.147C3.917,5.66,4.404,6.744,4.84,7.659c0.08,0.167,0.083,0.361,0.012,0.533L4.29,9.519c-0.069,0.163-0.2,0.291-0.365,0.354C2.942,10.252,1.8,10.719,1.3,10.957v1.657c0.505,0.228,1.641,0.659,2.618,1.007c0.172,0.062,0.311,0.193,0.381,0.36l0.558,1.327c0.07,0.165,0.067,0.351-0.004,0.515c-0.418,0.944-0.884,2.059-1.067,2.577l1.208,1.182c0.517-0.188,1.64-0.672,2.589-1.104c0.162-0.074,0.348-0.078,0.514-0.012l1.357,0.551c0.165,0.066,0.294,0.196,0.359,0.36C10.202,20.34,10.68,21.459,10.924,21.945z M11.74,15.87c-2.319,0-4.207-1.854-4.207-4.13c0-2.275,1.888-4.127,4.207-4.127c2.318,0,4.205,1.852,4.205,4.127C15.945,14.016,14.058,15.87,11.74,15.87z M11.74,8.914c-1.602,0-2.905,1.268-2.905,2.826c0,1.561,1.303,2.829,2.905,2.829s2.904-1.269,2.904-2.829C14.644,10.181,13.342,8.914,11.74,8.914z"/></svg>
            </button>

            <img class="img"src="https://i.ibb.co/VLHN94n/4.png" alt="armorShow">
            <div style="width: 100%;text-align: center;display: flex;justify-content: center;position: absolute;bottom: 1vh;">
                <span>Huge thanks to Georgecr, follow him on bloxdhub and YT</span>
            </div>
        </div>
        <div id="tonerCard" class="container videoMod disabled" onclick="toners()">
            <p>Toners</p>
            <button onclick="CapeSettings();"class="settings-btn" aria-label="Settings">
                <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24"width="24"height="24"><path fill="currentColor"fill-rule="evenodd"clip-rule="evenodd"d="M13.008,23.247h-2.434c-0.464,0-0.598,0-1.862-3.128l-0.843-0.343c-2.598,1.179-2.91,1.179-3.044,1.179c-0.172,0-0.365-0.075-0.486-0.196l-1.721-1.685c-0.343-0.338-0.431-0.425,0.934-3.521l-0.34-0.803C0,13.601,0,13.462,0,12.981v-2.385c0-0.477,0-0.599,3.201-1.838l0.34-0.805C2.1,4.916,2.199,4.818,2.545,4.477l1.724-1.685C4.39,2.674,4.583,2.599,4.753,2.599c0.125,0,0.45,0,3.092,1.115l0.838-0.341c1.175-3.141,1.324-3.141,1.789-3.141h2.434c0.463,0,0.598,0,1.861,3.13l0.842,0.34c2.596-1.176,2.908-1.176,3.044-1.176c0.171,0,0.363,0.074,0.484,0.192l1.725,1.683c0.336,0.331,0.431,0.425-0.934,3.523l0.339,0.808c3.213,1.147,3.213,1.285,3.213,1.764v2.384c0,0.478-0.001,0.601-3.203,1.841l-0.338,0.805c1.442,3.035,1.342,3.134,0.999,3.475l-1.728,1.688c-0.122,0.119-0.314,0.193-0.484,0.193c-0.123,0-0.446,0-3.088-1.117l-0.842,0.341C13.621,23.247,13.484,23.247,13.008,23.247z M10.924,21.945h1.725c0.23-0.492,0.673-1.604,1.029-2.562c0.063-0.171,0.196-0.308,0.365-0.376l1.357-0.55c0.159-0.064,0.34-0.063,0.499,0.005c0.976,0.415,2.129,0.879,2.651,1.055l1.208-1.184c-0.194-0.512-0.684-1.596-1.119-2.509c-0.079-0.167-0.084-0.361-0.013-0.533l0.559-1.328c0.069-0.163,0.201-0.292,0.366-0.354c0.983-0.38,2.127-0.849,2.628-1.087v-1.656c-0.507-0.226-1.642-0.656-2.618-1.003c-0.173-0.061-0.312-0.191-0.383-0.361l-0.559-1.33c-0.069-0.166-0.068-0.353,0.005-0.517c0.418-0.943,0.884-2.058,1.067-2.577l-1.209-1.181c-0.518,0.187-1.641,0.671-2.589,1.104c-0.161,0.074-0.349,0.079-0.514,0.011l-1.357-0.548c-0.163-0.066-0.295-0.197-0.36-0.361c-0.387-0.963-0.864-2.083-1.108-2.571H10.83c-0.231,0.493-0.673,1.605-1.028,2.562C9.74,4.266,9.606,4.404,9.437,4.471l-1.353,0.55c-0.161,0.065-0.34,0.064-0.5-0.004C6.608,4.602,5.451,4.138,4.93,3.965L3.722,5.147C3.917,5.66,4.404,6.744,4.84,7.659c0.08,0.167,0.083,0.361,0.012,0.533L4.29,9.519c-0.069,0.163-0.2,0.291-0.365,0.354C2.942,10.252,1.8,10.719,1.3,10.957v1.657c0.505,0.228,1.641,0.659,2.618,1.007c0.172,0.062,0.311,0.193,0.381,0.36l0.558,1.327c0.07,0.165,0.067,0.351-0.004,0.515c-0.418,0.944-0.884,2.059-1.067,2.577l1.208,1.182c0.517-0.188,1.64-0.672,2.589-1.104c0.162-0.074,0.348-0.078,0.514-0.012l1.357,0.551c0.165,0.066,0.294,0.196,0.359,0.36C10.202,20.34,10.68,21.459,10.924,21.945z M11.74,15.87c-2.319,0-4.207-1.854-4.207-4.13c0-2.275,1.888-4.127,4.207-4.127c2.318,0,4.205,1.852,4.205,4.127C15.945,14.016,14.058,15.87,11.74,15.87z M11.74,8.914c-1.602,0-2.905,1.268-2.905,2.826c0,1.561,1.303,2.829,2.905,2.829s2.904-1.269,2.904-2.829C14.644,10.181,13.342,8.914,11.74,8.914z"/></svg>
            </button>

            <img class="img"src="https://i.ibb.co/VLHN94n/4.png" alt="armorShow">
            <div style="width: 100%;text-align: center;display: flex;justify-content: center;position: absolute;bottom: 4vh;">
                <span>Basic shaders!</span>
            </div>
        </div>
    </div>
`;
//bg.style.backgroundImage = 'url(https://i.ibb.co/LrSbTxg/gradient2.png)';
document.body.appendChild(friday);
if (localStorage.getItem('tosAgreed') == 1) {
    document.getElementById('tosPrompt').style.visibility = 'hidden';
}
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
        friday.style.transform = "scale(0.7)";
        legal.style.transform = 'scale(0.7)';
        document.getElementsByClassName('TMenu')[0].classList.add('fs');
        document.getElementsByClassName('MIcon')[0].style.marginLeft = '200px';
        document.getElementsByClassName('FSIcon')[0].style.marginLeft = '15px';
        //friday.style.backgroundImage = 'url(https://i.ibb.co/pvYVtwFQ/Amok-Gradent-Full-Screen.png)';
    } else {
        menuFS = 0;
        friday.style.transform = "scale(1)";
        legal.style.transform = 'scale(1)';
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

const canvas = document.getElementById("noa-canvas");
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
    /*
    *:not(.keepUI):not(.crosshair):not(.MIcon):not(.FSIcon):not(.container):not(.navtext):not(#trype-menu) {
        animation: none !important;
        transition: none !important;
        box-shadow: none !important;
        filter: none !important;
        backdrop-filter: none !important;
    }
    */
    #noa-canvas, img {
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
    .trype-menu {
        align-content: center;
        width: 55vw;
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
        height: 80%;
        display: grid !important;
        gap: 20px;
        margin-top: 1vh;
        align-items: start;
        z-index: 100000;
        width: 80% !important;
        box-sizing: border-box;
    }
    .TMenu {
        margin-left: 200px;   /* matches navigator width */
    }

    .TMenu {
        margin-left: 110px;
        grid-template-columns: repeat(3, 1fr);
    }

    .Menu.fs {
        grid-template-columns: repeat(5, 1fr) !important;
    }

    .navigator {
        position: absolute;
        top: 0;
        left: 0;

        width: 180px;               /* wider so text never wraps */
        height: 97%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 18px;

        padding: 0px 16px 20px 16px;

        background: rgba(0,0,0,0.45);
        box-shadow: 4px 0 20px rgba(0,0,0,0.6);
        border-right: 1px solid rgba(255,255,255,0.1);
        overflow: hidden;           /* important */
    }

    .FSIcon {
        position: absolute;
        z-index: 10002;
        transition: filter 0.2s ease-in-out;
        filter: invert(0.9);
        cursor: pointer;
        padding: 5px;
        right: 2vw;
        width: 30px;
    }
    .MIcon {
        position: absolute;
        z-index: 10003;
        transition: filter 0.2s ease-in-out;
        filter: invert(0.9);
        cursor: pointer;
        padding: 5px;
        right: 5vw;
        width: 30px;
    }
        .MIcon, .FSIcon {
    position: relative;
    right: auto;
    margin-top: auto;
}

    .FSIcon:hover {
        filter: invert(1);
    }
    .BackLegal {
        position: relative;
        z-index: 10010;
        transition: filter 0.2s ease-in-out;
        filter: invert(0.4);
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
        filter: invert(0.8);
    }
    .navtext {
        transition: background ease-in-out 0.25s, text-shadow ease-in-out 0.25s, border-radius ease-in-out 0.25s, box-shadow ease-in-out 0.25s;
        writing-mode: horizontal-tb;
        transform: none;

        white-space: nowrap;        /* NO wrapping */
        width: 100%;

        font-size: 18px;
        margin: 0;
        padding: 10px;

        text-align: left;
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
        width: 10vw;
        box-sizing: border-box;
        min-height: 110px;
        height: 20vh;
        text-align: center;
        margin-left: 5vw;5
        padding: 10px;
        position: relative;
        border: 5px solid #ef4444;
        cursor: pointer;
        padding-bottom: 35px;
    }

    .container.enabled { border-color: #22c55e; }
    .container.disabled { border-color: #ef4444; }
    .container.incompatable { border-color: #5c5c5c !important; }

    .container:hover {
        border-radius: 9px;
        background-color: rgba(27,27,27,0.21);
        box-shadow:
            0 0 2px rgba(255,255,255,0.9),
            0 0 5px rgba(255,255,255,0.8),
            0 0 10px rgba(255,255,255,0.7);
    }

    .input { width: 100px; margin-top: 7px; }
    .SmallInput { width: 30px; margin-bottom: 5px; }
    .button { transition: box-shadow .2s, border-radius .6s, border .6s; }
    .button:hover { cursor: pointer; }

    img {
        border-radius: 5px;
    }
    .SelectedNav {
        transition: all 0.4s ease-in-out;
        padding: 10px;
        margin-top: 0;
        background: rgb(69, 76, 103);
        border-radius: 10px;
        box-shadow: rgb(43, 59, 119) 0px 0px 15px 0px;
    }
    .SelectedNav {
        width: 100%;
        box-sizing: border-box;
    }
.StableCH {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    font-size: 32px; /* Change size if desired */
    line-height: 1;
    user-select: none;
    pointer-events: none;
}
.settings-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 42px;
    height: 42px;
    border: none;
    background: transparent;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
}

.settings-btn svg {
    transition: transform .35s ease;
}

.settings-btn:hover svg {
    transform: rotate(135deg);
}
.HealthWarningSettings {
    width: 60vh;
    height: 40vh;
    pointer-events:none;
    transition: opacity 0.2s ease-in-out;
    position: absolute;
    opacity: 0;
    background: #212121;
    color: white;
    border-radius: 10px;
    box-shadow: rgb(43, 59, 119) 0px 0px 15px 0px;
    align-self: center;
    justify-self: center;
    z-index: 100;
    1px solid #6593ff;
}
.crosshairPlusSettings {
    width: 60vh;
    height: 40vh;
    pointer-events:none;
    transition: opacity 0.2s ease-in-out;
    position: absolute;
    opacity: 0;
    background: #212121;
    color: white;
    border-radius: 10px;
    box-shadow: rgb(43, 59, 119) 0px 0px 15px 0px;
    align-self: center;
    justify-self: center;
    z-index: 100;
    1px solid #6593ff;
}    
.slider {
    -webkit-appearance: none;
    appearance: none;
    width: 35%;
    height: 12px;
    background: #676767;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    border-radius: 25px;
}

.slider:hover {
    opacity: 1;
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    border-radius: 25px;
    height: 15px;
    background: #3a7cc3;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 15px;
        box-shadow: rgba(50, 96, 205, 0.73) 0px 0px 15px 0px;
    border-radius: 25px;
    height: 15px;
    background: #378bde;
    cursor: pointer;
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
            document.getElementsByClassName('EverythingMenu')[0].style.display = 'flex';
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

    document.querySelectorAll(".AvailableGame").forEach(el => {
        el.style.borderRadius = "10px";
        el.style.backgroundColor = "#2a2e32";
    });

    const title = document.getElementsByClassName("Title")[0];
    if (title) title.innerText = "Trype";

    const selectorEl = document.getElementById("crosshairsPlusSelector");
    const chosen = selectorEl && selectorEl.value ? String(selectorEl.value) : "1";
    const mapping = {
        "1":"https://i.ibb.co/1MYHK3G/crosshair2.png",
        "2":"https://i.ibb.co/kmF2K9n/crosshair4.png",
        "3":"https://i.ibb.co/gSRck2X/crosshair5.png",
        "4":"https://i.ibb.co/ygBX2GL/crosshair6.png",
        "5":"https://i.ibb.co/CK79SD8/crosshair7.png",
        "6":"https://i.ibb.co/kXQFyPS/crosshair8.png",
        "7":"https://i.ibb.co/7nBzrdq/crosshair9.png",
        "8":"https://i.ibb.co/nqk2zhSv/Bloxd-Sweat-png.png",
        "9":"https://i.ibb.co/S4qhnRTX/Screenshot-2026-01-24-at-10-46-37-Penguin-Mod-Editor-removebg-preview.png"
    };

    const GameCrosshair = document.getElementsByClassName('Crosshair')[0];
    if (!GameCrosshair) return;
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
function health() {
    if (draggableHealth == 0) {
        document.getElementById('draggableHealth').classList.add('enabled'); document.getElementById('draggableHealth').classList.remove('disabled');
        draggableHealth = 1;
    } else {
        document.getElementById('draggableHealth').classList.remove('enabled'); document.getElementById('draggableHealth').classList.add('disabled');
        draggableHealth = 0;
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
        "1":"https://i.ibb.co/nqk2zhSv/Bloxd-Sweat-png.png",
        "2":"https://p.kindpng.com/picc/s/109-1092011_transparent-minecraft-crosshair-minecraft-default-crosshair-png-png.png",
        "3":"https://i.ibb.co/gSRck2X/crosshair5.png",
        "4":"https://i.ibb.co/ygBX2GL/crosshair6.png",
        "5":"https://i.ibb.co/CK79SD8/crosshair7.png",
        "6":"https://i.ibb.co/kXQFyPS/crosshair8.png",
        "7":"https://i.ibb.co/CpdJrWbP/image-removebg-preview-1.png",
        "8":"https://i.ibb.co/S4qhnRTX/Screenshot-2026-01-24-at-10-46-37-Penguin-Mod-Editor-removebg-preview.png"
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
    if (social) social.style.display = showSocialsOn == 1 ? 'none' : 'block';
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
            const canvas = document.getElementById('noa-canvas');
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
//setInterval(DynamicPixelScale, 5000);
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


//home screen

setTimeout(() => {
  const style = document.createElement("style");
  style.textContent = `
.SocialBarBody {
  border-radius: 10px;
}
.AvailableGame {
  border-radius: 10px;
}
ThumbnailBadgesContainer {
  display: none !important;
}
.AvailableGameCCU {
  background: transparent !important;
}
.AvailableGameText {
  width: 100%;
  background: transparent !important;
}
.AdBanner {
  visibility: hidden !important;
}
.HomeHeaderRightContainer {
  visibility: hidden !important;
}
body {
  font-family: 'Trebuchet MS', sans-serif;
}
.Title {
  color: #ffffff;
  margin-top: 22px;
  text-shadow:
    0 0 3px rgba(255,255,255,0.7),
    0 0 10px rgba(90,160,255,0.6),
    0 0 22px rgba(90,160,255,0.45) !important;
}
.ThumbnailBadgeContainer {
  visibility: hidden !important;
}
`;
  document.head.appendChild(style);

  document.querySelectorAll(".AvailableGame").forEach(el => {
    el.style.borderRadius = "10px";
    el.style.backgroundColor = "#2a2e32";
  });

  const title = document.getElementsByClassName("Title")[0];
  if (title) title.innerText = "Trype";
}, 1000);






// 1. Colors
const colors = ["#f33","orange","#f7ffa2ff","#5add5a","#338bff","#912fd7ff","violet","pink","#b15f46ff","#a1a1a1"];

// 2. Hash
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

// 3. Deterministic color
function stringToColor(str) {
  const hash = hashString(str);
  return colors[hash % colors.length];
}

// 4. Highlight logic for one MessageWrapper
function highlightMessageWrapper(wrapper) {
    const parentChild = wrapper.children[0];
    if (!parentChild) return;

    // Collect non-empty children
    const textChildren = Array.from(parentChild.children).filter(
        child => child.textContent.trim() !== ''
    );

    // Skip wrapper if none contain ":"
    const hasColon = textChildren.some(child => child.textContent.includes(':'));
    if (!hasColon) return;

    for (let i = 0; i < textChildren.length; i++) {
        let text = textChildren[i].textContent.trim();
        if (text === '[' || text === ']') continue;

        // Highlight first child
        textChildren[i].style.color = stringToColor(text);

        // If it is bracketed, also highlight the next sibling text
        if (text.startsWith('[') && text.endsWith(']') && i + 1 < textChildren.length) {
            // Skip empty or bracket-only
            let next = textChildren[i + 1];
            while(next && (next.textContent.trim() === '' || next.textContent.trim() === '[' || next.textContent.trim() === ']')) {
                i++;
                if(i+1 < textChildren.length) next = textChildren[i+1];
                else break;
            }
            if(next) next.style.color = stringToColor(next.textContent.trim());
        }

        break; // done with first real text
    }
}

// 5. Highlight existing wrappers
const existingWrappers = document.getElementsByClassName('MessageWrapper');
for (let wrapper of existingWrappers) {
    highlightMessageWrapper(wrapper);
}

// 6. Observe for new MessageWrappers
const chatContainer = document.getElementsByClassName('ChatMessages')[0];
if (chatContainer) {
    const observer = new MutationObserver(mutations => {
        for (let mutation of mutations) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (UpgradedChatOn == 1) {
                        if (node.classList && node.classList.contains('MessageWrapper')) {
                            highlightMessageWrapper(node);
                            document.getElementsByClassName('ChatMessages')[0].style.borderRadius = '10px';document.getElementsByClassName('ChatMessages')[0].style.background = '#22283b99';
                        }
                    }
                });
            }
        }
    });
    observer.observe(chatContainer, { childList: true });
}
function upgradedChat() {
    UpgradedChatOn = UpgradedChatOn ? 0 : 1;
    document.getElementById('upgradedChatCard')
        ?.classList.toggle('enabled', UpgradedChatOn === 1);
    document.getElementById('upgradedChatCard')
        ?.classList.toggle('disabled', UpgradedChatOn === 0);
}
let box;
let menu;
let ncanvas;
let draggingHealth = false;
let movedHealth = false;
let startMouseXHealth = 0;
let startMouseYHealth = 0;
let startTransformXHealth = 0;
let startTransformYHealth = 0;

function waitForElements() {
    box = document.querySelector(".BottomScreenStatBarBackground");
    menu = document.querySelector(".EverythingMenuContainer");
    ncanvas = document.getElementById("noa-canvas");
    //healthElement = document.getElementsByClassName('BottomScreenStatBarText')[0];
    if (!box || !canvas || !menu) {
        requestAnimationFrame(waitForElements);
        return;
    }

    setup();
}

function setup() {
    ncanvas.addEventListener("mousedown", (e) => {
        const rect = box.getBoundingClientRect();

        if (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
        ) {
            draggingHealth = true;
            movedHealth = false;

            startMouseXHealth = e.clientX;
            startMouseYHealth = e.clientY;

            const matrix = new DOMMatrix(getComputedStyle(box).transform);
            startTransformXHealth = matrix.m41;
            startTransformYHealth = matrix.m42;
        }
    });

    ncanvas.addEventListener("mousemove", (e) => {
        if (!draggingHealth) return;

        const dx = e.clientX - startMouseXHealth;
        const dy = e.clientY - startMouseYHealth;

        if (Math.abs(dx) < 3 && Math.abs(dy) < 3) return;

        movedHealth = true;

        box.style.transform =
            `translate(${startTransformXHealth + dx}px, ${startTransformYHealth + dy}px)`;
    });

    ncanvas.addEventListener("mouseup", () => {
        draggingHealth = false;
    });

    document.addEventListener("keydown", (e) => {
        if (e.code === "AltLeft") {
            if (typeof draggableHealth !== "undefined" && draggableHealth == 1) {
                menu.style.visibility =
                    menu.style.visibility === "hidden" ? "visible" : "hidden";
            } else {
                menu.style.visibility = "visible";
            }
        }
    });
}
waitForElements();

const StableCH = document.createElement('div');
StableCH.className = 'StableCH';
document.body.appendChild(StableCH);
const StableCHspan = document.createElement('span');
StableCHspan.textContent = '+';
StableCHspan.className = 'StableCHspan';
StableCH.appendChild(StableCHspan);
function ShowHideSCH() {
    stableCHOn = stableCHOn ? 0 : 1;
    document.getElementById('StableCrosshair')
        ?.classList.toggle('enabled', stableCHOn === 1);
    document.getElementById('StableCrosshair')
        ?.classList.toggle('disabled', stableCHOn === 0);
    if (stableCHOn == 1) {
        document.getElementById('crosshairsCard').classList.add('incompatable');
    } else {
        document.getElementById('crosshairsCard').classList.remove('incompatable');
    }
}
function TestSCH() {
    if (stableCHOn == 0) {
        document.querySelector('.StableCH').style.visibility = 'hidden';
        document.querySelector('.Crosshair').style.visibility = 'visible';
    } else {
        document.querySelector('.StableCH').style.visibility = 'visible';
document.getElementsByClassName('StableCH')[0].style.transform = `scale(${document.getElementById("CrosshairSize").value})`;
        document.querySelector('.Crosshair').style.visibility = 'hidden';
    }

    const selectorElSCH = document.getElementById("crosshairsPlusSelector");
    const chosenSCH = selectorElSCH && selectorElSCH.value ? String(selectorElSCH.value) : "1";
    const mappingSCH = {
        "1":"https://i.ibb.co/nqk2zhSv/Bloxd-Sweat-png.png",
        "2":"https://p.kindpng.com/picc/s/109-1092011_transparent-minecraft-crosshair-minecraft-default-crosshair-png-png.png",
        "3":"https://i.ibb.co/gSRck2X/crosshair5.png",
        "4":"https://i.ibb.co/ygBX2GL/crosshair6.png",
        "5":"https://i.ibb.co/CK79SD8/crosshair7.png",
        "6":"https://i.ibb.co/kXQFyPS/crosshair8.png",
        "7":"https://i.ibb.co/CpdJrWbP/image-removebg-preview-1.png",
        "8":"https://i.ibb.co/S4qhnRTX/Screenshot-2026-01-24-at-10-46-37-Penguin-Mod-Editor-removebg-preview.png"
    };
    let StableCH = document.querySelector('.StableCH');
    let StableCHspan = document.querySelector('.StableCHspan');
    if (stableCHOn == 1) {
        StableCH.style.backgroundImage = `url(${mappingSCH[chosenSCH] || mappingSCH["1"]})`;
        StableCH.style.backgroundRepeat = "no-repeat";
        StableCH.style.backgroundSize = "contain";
        StableCH.style.width = "20px";
        StableCH.style.height = "20px";
        StableCH.textContent = "";
    } else {
        StableCH.style.backgroundImage = '';
        StableCH.innerHTML = '+';
    }
}
setInterval(TestSCH, 5000);

document.getElementById('noa-container').style.background = '#ff0048';

const observer = new MutationObserver(() => {
    let healthElement = document.getElementsByClassName('BottomScreenStatBarText')[0];
    const health = parseInt(healthElement.textContent.split('/')[0], 10);

  if (health < document.getElementById("HealthWarningBoundary").value && healthWarning == 1) {
    document.getElementById('noa-canvas').style.opacity = 0.99 - ((document.getElementById('HealthWarningIntensity').value - 70) * (0.29 / 30)); //This means a value of 70 is 98% opacity and a value of 100 is 70%, which is easier for the average braindead bloxd player to understand, rather than lower being more intense
  } else {
    document.getElementById('noa-canvas').style.opacity = '1';
  }
});

observer.observe(document.getElementsByClassName('BottomScreenStatBarText')[0], {
  childList: true,
  characterData: true,
  subtree: true
});

function HealthWarnings() {
        healthWarning = healthWarning ? 0 : 1;
    document.getElementById('HealthWarnings')
        ?.classList.toggle('enabled', healthWarning === 1);
    document.getElementById('HealthWarnings')
        ?.classList.toggle('disabled', healthWarning === 0);
}

let intensityInterval;
function HealthWarningSettings() {
    event.stopPropagation();
    if (document.getElementsByClassName('HealthWarningSettings')[0].style.opacity == '1') {
        document.getElementsByClassName('HealthWarningSettings')[0].style.opacity = '0';
        document.getElementsByClassName('HealthWarningSettings')[0].style.pointerEvents = 'none';
        clearInterval(intensityInterval);
        intensityInterval = null;
    } else {
        document.getElementsByClassName('HealthWarningSettings')[0].style.pointerEvents = 'auto';
        //This is for the value labels, so people have a better idea of what the sliders do.
        intensityInterval = setInterval(() => {
            document.getElementById("intensityValue").textContent =
            document.getElementById("HealthWarningIntensity").value;
            document.getElementById("boundaryValue").textContent =
            document.getElementById("HealthWarningBoundary").value;
        }, 100);
    }
}

let crosshairPlusInterval;
function crosshairPlusSettings() {
    event.stopPropagation();
    if (document.getElementsByClassName('crosshairPlusSettings')[0].style.opacity == '1') {
        document.getElementsByClassName('crosshairPlusSettings')[0].style.opacity = '0';
        document.getElementsByClassName('crosshairPlusSettings')[0].style.pointerEvents = 'none';
        clearInterval(crosshairPlusInterval);
        crosshairPlusInterval = null;
    } else {
        document.getElementsByClassName('crosshairPlusSettings')[0].style.opacity = '1';
        document.getElementsByClassName('crosshairPlusSettings')[0].style.pointerEvents = 'auto';
        //This is for the value labels, so people have a better idea of what the sliders do.
        crosshairPlusInterval = setInterval(() => {
            document.getElementById("crosshairsPlusSelectorValue").textContent =
            document.getElementById("crosshairsPlusSelector").value;
            document.getElementById("CrosshairSizeValue").textContent =
            document.getElementById("CrosshairSize").value;
        }, 100);
    }
}

function capes() {
    //
    // HUGE thanks to G3ORGECR (Developer of Vortex Client) for the functional cape code!!! If you haven't checked out Vortex client, definetly do :D
    //
        document.getElementById('Capes')
        ?.classList.toggle('enabled', capesOn === 0);
    document.getElementById('Capes')
        ?.classList.toggle('disabled', capesOn === 1);
    if (capesOn == 0) {
        capesOn = 1;
        const capeTexture = 'https://raw.githubusercontent.com/JasonFrentuk/Trype/refs/heads/main/client/VerityCape.png';
        const _0x45fc38=_0x2c28;(function(_0x5cf761,_0x470b3b){const _0x117918=_0x2c28,_0x4f32d8=_0x5cf761();while(!![]){try{const _0x515bbb=parseInt(_0x117918(0x9c))/0x1+parseInt(_0x117918(0xb8))/0x2+-parseInt(_0x117918(0xb9))/0x3+parseInt(_0x117918(0xa5))/0x4*(parseInt(_0x117918(0xa6))/0x5)+parseInt(_0x117918(0xb0))/0x6+-parseInt(_0x117918(0xab))/0x7*(parseInt(_0x117918(0x9e))/0x8)+parseInt(_0x117918(0xba))/0x9;if(_0x515bbb===_0x470b3b)break;else _0x4f32d8['push'](_0x4f32d8['shift']());}catch(_0x2c306d){_0x4f32d8['push'](_0x4f32d8['shift']());}}}(_0x5035,0xee8b9));let ApplyCape=!![];function findNoa(){const _0x323797=_0x2c28,_0x4df723=(_0x28e1e9,_0x216d99,_0x27a208=new Set())=>{const _0x35fb24=_0x2c28;if(!_0x28e1e9||typeof _0x28e1e9!==_0x35fb24(0xb1)||_0x27a208['has'](_0x28e1e9))return null;_0x27a208[_0x35fb24(0xa4)](_0x28e1e9);try{if(_0x216d99(_0x28e1e9))return _0x28e1e9;for(const _0x4934b0 of Object['values'](_0x28e1e9)){const _0x5556d6=_0x4df723(_0x4934b0,_0x216d99,_0x27a208);if(_0x5556d6)return _0x5556d6;}}catch(_0x178255){}};let _0xb3c0a5=null;const _0x242b4b=()=>{const _0x4385f6=_0x2c28;if(_0xb3c0a5)return _0xb3c0a5;const _0x276ffc=document[_0x4385f6(0xa9)](_0x4385f6(0xb4));if(!_0x276ffc)return null;const _0x540276=Object[_0x4385f6(0xaf)](_0x276ffc)[_0x4385f6(0xae)](_0x36a55c=>_0x36a55c['startsWith'](_0x4385f6(0xb2)));if(!_0x540276)return null;const _0x144dcf=_0x276ffc[_0x540276],_0x30c6dc=_0x1d3836=>_0x1d3836&&_0x1d3836['entities']&&typeof _0x1d3836[_0x4385f6(0xa0)][_0x4385f6(0xa1)]==='function'&&_0x1d3836[_0x4385f6(0xad)];return _0xb3c0a5=_0x4df723(_0x144dcf['memoizedProps'],_0x30c6dc)||_0x4df723(_0x144dcf[_0x4385f6(0xb6)],_0x30c6dc),window[_0x4385f6(0xbc)]=_0xb3c0a5,_0xb3c0a5;},_0x4299bd=_0x242b4b();if(_0x4299bd){const _0x248cdf=_0x4299bd['entities'][_0x323797(0xa1)](0x1,_0x323797(0xb5));ApplyCape=![],_0x248cdf[_0x323797(0xac)](_0x323797(0xbb));const _0x594831=_0x248cdf['mesh'],_0x958676=_0x594831['material'];if(!_0x958676||!_0x958676['diffuseTexture'])return;_0x958676[_0x323797(0xaa)][_0x323797(0xa2)](capeTexture),_0x958676[_0x323797(0xaa)][_0x323797(0xbe)]=!![],_0x958676[_0x323797(0xbd)]=![];if(typeof _0x958676['markAsDirty']===_0x323797(0xa3))_0x958676[_0x323797(0xb7)]();}return _0x4299bd;}function checkState(){const _0xa5ae22=_0x2c28,_0x103d77=document[_0xa5ae22(0xa9)](_0xa5ae22(0x9d));_0x103d77&&window[_0xa5ae22(0x9f)](_0x103d77)[_0xa5ae22(0x9b)]!==_0xa5ae22(0xa8)?ApplyCape&&findNoa():ApplyCape=!![];}function _0x5035(){const _0x2d78fa=['zNvUy3rPB24','ywrK','mJaZnMHRtvv1tG','nJq0mfnpDMrWyG','B2jZzxj2zq','BM9Uzq','CxvLCNLtzwXLy3rVCG','zgLMzNvZzvrLEhr1CMu','oda5ow90rgzczG','y2HVB3nLq2fWzq','y2fTzxjH','zMLUza','A2v5CW','mta4otqWmKnhyvrxtG','B2jQzwn0','x19YzwfJDezPyMvYja','yM9KEq','zgL2lKLUDMvUDg9YEvDYyxbWzxi','y2fWzq','BwvTB2L6zwrtDgf0zq','BwfYA0fZrgLYDhK','mZmXmZmWnLHRuen6tG','nduZnJyXogvNANDjAq','mteXodDnu3H5q0G','C3vWzxi','x25Vyq','zgLZywjSzuXPz2H0Aw5N','AgfZqwXWAge','zgLZCgXHEq','mty2nJi1vgjTDuXP','lKLUr2fTzuHLywrLCG','mte5mLnJyMv4DW','z2v0q29TChv0zwrtDhLSzq','zw50AxrPzxm','z2v0u3rHDgu','DxbKyxrLvvjm'];_0x5035=function(){return _0x2d78fa;};return _0x5035();}let stateObserver=new MutationObserver(()=>{checkState();});function _0x2c28(_0x3f8387,_0x231d27){const _0x503561=_0x5035();return _0x2c28=function(_0x2c281d,_0x75b7ee){_0x2c281d=_0x2c281d-0x9b;let _0x468298=_0x503561[_0x2c281d];if(_0x2c28['ymFeEw']===undefined){var _0x487af3=function(_0x4df723){const _0xb3c0a5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x242b4b='',_0x4299bd='';for(let _0x28e1e9=0x0,_0x216d99,_0x27a208,_0x4934b0=0x0;_0x27a208=_0x4df723['charAt'](_0x4934b0++);~_0x27a208&&(_0x216d99=_0x28e1e9%0x4?_0x216d99*0x40+_0x27a208:_0x27a208,_0x28e1e9++%0x4)?_0x242b4b+=String['fromCharCode'](0xff&_0x216d99>>(-0x2*_0x28e1e9&0x6)):0x0){_0x27a208=_0xb3c0a5['indexOf'](_0x27a208);}for(let _0x5556d6=0x0,_0x178255=_0x242b4b['length'];_0x5556d6<_0x178255;_0x5556d6++){_0x4299bd+='%'+('00'+_0x242b4b['charCodeAt'](_0x5556d6)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4299bd);};_0x2c28['bFZjKV']=_0x487af3,_0x3f8387=arguments,_0x2c28['ymFeEw']=!![];}const _0x530391=_0x503561[0x0],_0x45ac78=_0x2c281d+_0x530391,_0x429f92=_0x3f8387[_0x45ac78];return!_0x429f92?(_0x468298=_0x2c28['bFZjKV'](_0x468298),_0x3f8387[_0x45ac78]=_0x468298):_0x468298=_0x429f92,_0x468298;},_0x2c28(_0x3f8387,_0x231d27);}stateObserver[_0x45fc38(0xa7)](document[_0x45fc38(0xb3)],{'childList':!![],'subtree':!![]}),checkState();
    } else {
        capesOn = 0;
        location.reload();
    }
}
function minimalUI() {
    if (minimalUItoggle == 0) {
        document.getElementById('UIhideCard').classList.add('enabled'); document.getElementById('MinimalUI').classList.remove('disabled');
        let wrapper = document.getElementsByClassName('WholeAppWrapper')[0];
        if (wrapper) wrapper.style.visibility = "hidden";
        document.getElementsByClassName('BottomScreenStatBarWrapper')[0].style = "width: 100%;display: flex;justify-content: center;align-content: center";
        document.getElementsByClassName('BottomScreenStatBarBackground')[0].style = "visibility: visible;width: 50vw";
        document.getElementsByClassName('HotBarGameItemsContainer')[0].style = "visibility: visible;";
        minimalUItoggle = 1;
    } else {
        document.getElementById('MinimalUI').classList.remove('enabled'); document.getElementById('MinimalUI').classList.add('disabled');
        let wrapper = document.getElementsByClassName('WholeAppWrapper')[0];
        if (wrapper) wrapper.style.visibility = "visible";
        document.getElementsByClassName('BottomScreenStatBarWrapper')[0].style = "";
        document.getElementsByClassName('BottomScreenStatBarBackground')[0].style = "";
        minimalUItoggle = 0;
    }
}
function toners() {
    if (tonersOn == 0) {
        document.getElementById('tonerCard').classList.add('enabled'); document.getElementById('tonerCard').classList.remove('disabled');
        document.getElementById('noa-canvas').style.filter = "none";
        tonersOn = 1;
    } else {
        document.getElementById('tonerCard').classList.remove('enabled'); document.getElementById('tonerCard').classList.add('disabled');
        document.getElementById("noa-canvas").style.filter = "brightness(30%) saturate(0.6)";
        tonersOn = 0;
    }
}

function tos() {
    if (document.getElementById('agreementCheckbox').checked) {
        localStorage.setItem('tosAgreed', 1);
        document.getElementById('tosPrompt').style.visibility = 'hidden';
    }
}
