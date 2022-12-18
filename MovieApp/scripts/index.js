// Store the wallet amount to your local storage with key "amount"

document.getElementById("add_to_wallet").addEventListener("click",addToWallet)

function addToWallet(){
    let amount=  +document.getElementById("amount").value;
    console.log(amount);
    let total = +JSON.parse(localStorage.getItem("amount"));
    total += amount;
    localStorage.setItem("amount", total);

    document.getElementById("amount").innerHTML = "";
    console.log(document.getElementById("amount"));
}