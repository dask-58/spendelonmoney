'use strict';

let remainingMoney = 236000000000;
const audio = document.getElementById('myAudio');
const purchasedItems = [];
let totalSpent = 0;

function buyItem(itemContainer) {
  const cost = parseInt(itemContainer.getAttribute('data-cost'));
  const quantity = parseInt(itemContainer.querySelector('input').value);
  const totalCost = cost * quantity;
  const itemName = itemContainer.querySelector('span').textContent.split(' - ')[0];

  if (remainingMoney >= totalCost) {
    remainingMoney -= totalCost;
    updateRemainingMoney();
    audio.play();

    const existingItem = purchasedItems.find(item => item.name === itemName);
    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.totalCost += totalCost;
    } else {
      purchasedItems.push({ name: itemName, cost: cost, quantity: quantity, totalCost: totalCost });
    }

    totalSpent += totalCost;
    updateReceipt();
  } else {
    alert("Not enough money to buy this quantity of items!");
  }
}

function updateRemainingMoney() {
  document.getElementById('remaining-money').innerText = `$${remainingMoney.toLocaleString()}`;
}

function updateReceipt() {
  const receiptList = document.getElementById('receipt-list');
  receiptList.innerHTML = '';

  purchasedItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.quantity}x ${item.name} - $${item.totalCost.toLocaleString()}`;
    receiptList.appendChild(listItem);
  });

  document.getElementById('total-spent').textContent = `Total Spent: $${totalSpent.toLocaleString()}`;
}

const buyButtons = document.querySelectorAll('.item button');
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    buyItem(button.parentElement);
  });
});