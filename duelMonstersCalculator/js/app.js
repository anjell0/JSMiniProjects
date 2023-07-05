let info = document.getElementById("info")
let info2 = document.getElementById("info2")
let info3 = document.getElementById("info3")
let info4 = document.getElementById("info4")
let change = document.getElementById("change")
let pName1 = document.getElementById("pName1")
let pName2 = document.getElementById("pName2")
let player1name = "Player 1"
let player2name = "Player 2"
let player1lifePoints = 8000
let player2lifePoints = 8000

info.innerHTML = player1name;
info.style.fontSize = "45px";
info.style.margin = "50px";
info.style.float = "left";

info2.innerHTML = player2name;
info2.style.fontSize = "45px";
info2.style.margin = "50px";

info3.innerHTML = player1lifePoints;
info3.style.fontSize = "45px";
info3.style.margin = "50px";
info3.style.float = "left";

info4.innerHTML = player2lifePoints;
info4.style.fontSize = "45px";
info4.style.margin = "50px";
info4.style.float = "left";

function submitName1(){
    let newplayer1name = pName1.value

    player1name = newplayer1name

    info.innerHTML = player1name;
    info.style.fontSize = "45px";
    info.style.margin = "50px";
    info.style.float = "left";

    pName1.value = ""
}

function submitName2(){
    let newplayer2name = pName2.value

    player2name = newplayer2name

    info2.innerHTML = player2name;
    info2.style.fontSize = "45px";
    info2.style.margin = "50px";

    pName2.value = ""
}

function calculatePlus1() {
    let newLP = player1lifePoints + Number(change.value);

    player1lifePoints = newLP

    info3.innerHTML = player1lifePoints;
    info3.style.fontSize = "45px";
    info3.style.margin = "50px";
    info3.style.float = "left";

    change.value = ""
}
function calculateMinus1() {
    let newLP = player1lifePoints - Number(change.value);

    player1lifePoints = newLP

    info3.innerHTML = player1lifePoints;
    info3.style.fontSize = "45px";
    info3.style.margin = "50px";
    info3.style.float = "left";

    if(player1lifePoints <= 0 && player1name != "Jalen"){
        let p2win = document.createElement('div')

        p2win.innerHTML = player2name + " wins the duel!"
        p2win.style.fontSize = "50px"

        document.body.appendChild(p2win)
    } else if(player1lifePoints <= 0 && player1name == "Jalen") {
        let p2win = document.createElement('div')

        p2win.innerHTML = "Jalen fucking sucks! In your face loser! FUCK Charm of Shabti!"
        p2win.style.fontSize = "50px"

        document.body.appendChild(p2win)
    }

    change.value = ""
}
function calculatePlus2() {
    let newLP = player2lifePoints + Number(change.value);

    player2lifePoints = newLP

    info4.innerHTML = player2lifePoints;
    info4.style.fontSize = "45px";
    info4.style.margin = "50px";
    info4.style.float = "left";

    change.value = ""
}
function calculateMinus2() {
    let newLP = player2lifePoints - Number(change.value);

    player2lifePoints = newLP

    info4.innerHTML = player2lifePoints;
    info4.style.fontSize = "45px";
    info4.style.margin = "50px";
    info4.style.float = "left";

    if(player2lifePoints <= 0 && player2name != "Jalen"){
        let p1win = document.createElement('div')

        p1win.innerHTML = player1name + " wins the duel!"
        p1win.style.fontSize = "50px"

        document.body.appendChild(p1win)
    } else if(player2lifePoints <= 0 && player2name == "Jalen") {
        let p1win = document.createElement('div')

        p1win.innerHTML = "Jalen fucking sucks! In your face loser! FUCK Charm of Shabti!"
        p1win.style.fontSize = "50px"

        document.body.appendChild(p1win)
    }

    change.value = ""
}