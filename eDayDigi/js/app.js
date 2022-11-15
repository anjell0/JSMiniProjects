//Angelo Allen
//Nov 15, 2022

let playerName = document.getElementById('cardID')              //Lines 5-15 get all elements from the HTML
let playerHP = document.getElementById('diceResult') 
let rewCons = [
    "Adopt-A-Puppy Photo Op! Gain 10 urban supporters.",
    "Your speech today will be well received! Gain an additional 10 supporters with your roll.",
    "You were interviewed by the local news! Gain 10 urban supporters.",
    "You held the grand opening for a new shop downtown! Gain 10 downtown supporters.",
    "You kissed a baby on its forehead. He smiled. Gain 10 suburban supporters.",
    "You had a press conference at Yarns N Ignobles! Gain 10 downtown supporters.",
    "You had the biggest rutabaga in the show! Gain 10 rural supporters.",
    "You deliver a heartfelt story at the county fair! Gain 10 rural supporters.",
    "Your whole family was seen being wholesome at the park. Gain 10 suburban supporters.",
    "Your supporters have an iron will and message! On your next rally, you can use this card to change your first roll from a losing supporters roll to a gaining supporters roll.",
    "You survive an assassination attempt! Gain 10 supporters each from any two areas.",
    "Miss congeniality! During preliminaries, this card counts for 20 supporters.",
    "Slander is normal, but your opponents took it too far on you. Take 10 supporters from each remaining candidate.",
    "You wanted to be hip and cool and it worked! Gain an additional 20 supporters with your roll.",
    "You got in a bad car accident on your way to your speech! Miss this speech and you can only rally next turn, but take 10 supporters each from any four areas.",
    "Exposed! Liar! Lose 20 downtown supporters.",
    "Caught on Karen Camera! Lose 10 urban followers.",
    "Your old, problematic flit resurfaced! Lose any 10 supporters.",
    "Someone dug up a video of you in college stomping on a garden! Lose 20 rural supporters.",
    "You were caught slandering your opponents in bad taste! Give any 10 supporters to each of your opponents still in play.",
    "Your speech was set up by the previous candidate to fail! Decrease your incoming gained supporters by 20.",
    "(It may have been true but) someone overheard you calling a lady a complainer! Lose 10 suburban suburbans.",
    "You thought buying Flitter would make people like you…it definitely didn’t! Lose 20 urban supporters.",
    "You were witnessed saying “Gay Rights!”...at Barget! Lose 20 suburban supporters.",
    "Your personal assistant spilled iced coffee on you and you yelled at her. She’s only 17 dude… Lose 10 downtown supporters.",
    "Someone saw you stealing an afternoon snack from the corn field. BIG mistake! Lose 10 rural supporters.",
    "“DID YOU JUST CALL HER A %#$@&?!” Lose ALL urban supporters.",
    "You accidentally released the town mascot goat and it got eaten by the combine! Lose ALL rural supporters.",
    "One of your competitors leaked that you plan to dismantle unions if elected! Lose ALL downtown supporters.",
    "You crashed your car into the local BarStucks…at the start of Christian Girl Autumn! Lose ALL suburban supporters."
]

let card = document.createElement('div')

card.innerHTML = "Reward/Consequence: "
card.style.fontSize = "30px"

document.body.appendChild(card)

let dRes = document.createElement('div')

dRes.innerHTML = "Roll: "
dRes.style.fontSize = "30px"

document.body.appendChild(dRes)

function drawCard() {
    let i = Math.floor(Math.random() * 30 + 1)

    if (i < 16) {
        card.innerHTML = "Reward: " + rewCons[i]
    }else if (i > 15) {
        card.innerHTML = "Consequence: " + rewCons[i]
    }
}

function rollDie() {
    let result = Math.floor(Math.random() * 6 + 1)

    dRes.innerHTML = "Roll: " + result
}