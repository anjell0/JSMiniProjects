//Angelo Allen
//June 8, 2022
//N220-11088

let txtTipper = document.getElementById("txtTipper")            //Line 5 gets the element "txtTipper" from the HTML

function tip() {                                                //Lines 7-25 create a function "tip" that will take
    let billTotal = Number(txtTipper.value);                    //(only) a number input and multiply it by .18. It
    let tipAmount = Math.round((billTotal * .18) * 100) / 100;  //will then display a "Tip" amount and an overall
    let tip = document.createElement('div')                     //"Total" when "Calculate" is pressed. The text box
                                                                //is then emptied
    tip.innerHTML = "Tip: $" + tipAmount
    tip.style.fontSize = "30px"

    document.body.appendChild(tip)

    let total = document.createElement('div')

    total.innerHTML = "Total: $" + (tipAmount + billTotal)
    total.style.fontSize = "30px"

    document.body.appendChild(total)

    txtTipper.value = "";
}