let homeScoreEl = document.getElementById('home-score-el')
let guestScoreEl = document.getElementById('guest-score-el')
let homeScore = 0
let guestScore = 0


function homePlusOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homePlusTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homePlusThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}



function guestPlusOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestPlusTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestPlusThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}