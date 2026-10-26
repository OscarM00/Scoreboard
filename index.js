let homeScoreEl = document.getElementById("home-Score");
let guestScoreEl = document.getElementById("guest-Score");
let resetScoreBoard = document.getElementById("resetButton");
let homeScore = 0;
let guestScore = 0;

//Home scoreboard functions 
function addHomeOne() {
homeScore += 1
homeScoreEl.innerText = homeScore
}
function addHomeTwo() {
    homeScore += 2
    homeScoreEl.innerText = homeScore
}

function addHomeThree() {
    homeScore += 3 
    homeScoreEl.innerText = homeScore
}

//Start of guest scoreboard functions
function addGuestOne() {
    guestScore += 1
    guestScoreEl.innerText = guestScore
}

function addGuestTwo() {
    guestScore += 2 
    guestScoreEl.innerText = guestScore
}

function addGuestThree() {
    guestScore += 3 
    guestScoreEl.innerText = guestScore
}

//Reset button for both home score and guest score, need to initialize the global varialbe first to be at 0 and not count back to the #
function resetHomeScore() {
homeScore = 0
document.getElementById("home-Score").innerText = 0
}



function resetGuestScore() {
guestScore = 0
document.getElementById("guest-Score").innerText = 0
 }