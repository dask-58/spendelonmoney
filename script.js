'use strict';

let remainingMoney = 236000000000;
const audio = document.getElementById('myAudio');

function buyItem(itemContainer) {
  const cost = parseInt(itemContainer.getAttribute('data-cost'));
  const quantity = parseInt(itemContainer.querySelector('input').value);
  const totalCost = cost * quantity;

  if (remainingMoney >= totalCost) {
    remainingMoney -= totalCost;
    updateRemainingMoney();
    audio.play();
  } else {
    alert("Not enough money to buy this quantity of items!");
  }
}

function updateRemainingMoney() {
  document.getElementById('remaining-money').innerText = `$${remainingMoney.toLocaleString()}`;
}

const buyButtons = document.querySelectorAll('.item button');
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    buyItem(button.parentElement);
  });
});