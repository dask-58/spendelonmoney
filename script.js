let remainingMoney = 236000000000;

function buyItem(itemContainer){
    const cost = parseInt(itemContainer.getAttribute('data-cost'));
    const quantity = parseInt(itemContainer.querySelector('input').value);
    const totalCost = cost * quantity;

    const audio = document.getElementById('myAudio');

    if(remainingMoney >= totalCost){
        remainingMoney -= totalCost;
        updateRemainingMoney();
        audio.play();

    } else {
        alert("Not enough money to buy this quantity of items!");
    }
}

function updateRemainingMoney(){
    document.getElementById('remaining-money').innerText = `$${remainingMoney.toLocaleString()}`;
}