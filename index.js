let homeScoreEl = document.getElementById("home-Score");
let guestScoreEl = document.getElementById("guest-Score");
let resetScoreBoard = document.getElementById("resetButton");
let homeScore = 0;
let guestScore = 0;

//Home scoreboard functions 
function addHomeOne() {
homeScore += 1
homeScoreEl.value = homeScore

window.addHomeOne = addHomeOne // needed to work on netlify, scope to avoid name collisons
}
function addHomeTwo() {
    homeScore += 2
    homeScoreEl.value = homeScore

    window.addHomeTwo = addHomeTwo
}

function addHomeThree() {
    homeScore += 3 
    homeScoreEl.value = homeScore

    window.addHomeThree = addHomeThree
}

//Start of guest scoreboard functions
function addGuestOne() {
    guestScore += 1
    guestScoreEl.value = guestScore

    window.addGuestOne = addGuestOne
}

function addGuestTwo() {
    guestScore += 2 
    guestScoreEl.value = guestScore

    window.addGuestTwo = addGuestTwo
}

function addGuestThree() {
    guestScore += 3 
    guestScoreEl.value = guestScore

    window.addGuestThree = addGuestThree
}

//Reset button for both home score and guest score, need to initialize the global varialbe first to be at 0 and not count back to the #
function resetHomeScore() {
homeScore = 0
document.getElementById("home-Score").value = 0

window.resetHomeScore = resetHomeScore
}



function resetGuestScore() {
guestScore = 0
document.getElementById("guest-Score").value = 0

window.resetGuestScore = resetGuestScore
 }