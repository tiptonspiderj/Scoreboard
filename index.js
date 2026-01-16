const home = document.getElementById("home-score")
const away = document.getElementById("away-score")

let homeScore = 0
let awayScore = 0


function homeAddScore(increment) {
    homeScore += increment
    home.textContent = homeScore
}

function awayAddScore(increment) {
    awayScore += increment
    away.textContent = awayScore
}

function resetScores() {
    homeScore = 0
    home.textContent = homeScore
    awayScore = 0
    away.textContent = awayScore
}