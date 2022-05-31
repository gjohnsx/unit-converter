let startingNums = document.getElementsByClassName('startingNumber');

function getValue() {
    let val = Number(document.getElementById("mainNumber").value);
    for (let num of startingNums) {
        console.log(num);
        num.textContent = val;
    }

    // meters to feet
    document.getElementById('metersToFeet').textContent = (val * 3.281).toFixed(3);

    // feet to meters
    document.getElementById('feetToMeters').textContent = (val / 3.281).toFixed(3);
    
    // liters to gallons 
    document.getElementById('litersToGallons').textContent = (val * 0.26417).toFixed(3);
    
    // gallons to liters
    document.getElementById('gallonsToLiters').textContent = (val * 3.785).toFixed(3);
    
    // kilos to pounds
    document.getElementById('kilosToPounds').textContent = (val * 2.205).toFixed(3);
    
    // pounds to kilos
    document.getElementById('poundsToKilos').textContent = (val / 2.205).toFixed(3);
}

// const darkModeToggle = document.getElementById("dark-mode-toggle");
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
    document.body.classList.add('darkMode');
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    document.body.classList.remove('darkMode');
    localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    console.log('clicked!');
    console.log(darkMode);
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})