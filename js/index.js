//  common function [].................

function getValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

const donateButton = document.getElementById('donate-button');
donateButton.addEventListener('click', function () {
  const firstDonate = getValueById('first-input');
  const donateNoakhali = parseFloat(document.getElementById('donate-amount-noakhali').innerText);
  const mainBalance = parseFloat(document.getElementById('balance').innerText);


  // donation amount calculation 

  const sum = firstDonate + donateNoakhali;
  const donation = document.getElementById('donate-amount-noakhali')
  donation.innerText = sum;

  //  Main balance show

  const ramainBalance = mainBalance - sum;
  const ramaining = document.getElementById('balance')
  ramaining.innerText = ramainBalance;


})


// [card - 2]

const donateButtonFeni = document.getElementById('donate-btn-feni');
donateButtonFeni.addEventListener('click', function () {

  const secondDonate = getValueById('second-input');
  const donateFeni = parseFloat(document.getElementById('donate-ammount-feni').innerText);
  const mainBalance = parseFloat(document.getElementById('balance').innerText);


  const sumTwo = secondDonate + donateFeni;
  const donation = document.getElementById('donate-ammount-feni')
  donation.innerText = sumTwo;

  //  Main balance show

  const ramainBalanceTwo = mainBalance - sumTwo;
  const ramaining = document.getElementById('balance')
  ramaining.innerText = ramainBalanceTwo;



})

// [card - 3]

const aidButton = document.getElementById('aid-button');
aidButton.addEventListener('click', function () {

  const thirdDonate = getValueById('third-input');
  const donateForAid = parseFloat(document.getElementById('aid-amount').innerText);
  const mainBalance = parseFloat(document.getElementById('balance').innerText);


  const sumThree = thirdDonate + donateForAid;
  const donation = document.getElementById('aid-amount')
  donation.innerText = sumThree;

  //  Main balance show

  const ramainBalanceThree = mainBalance - sumThree;
  const ramaining = document.getElementById('balance')
  ramaining.innerText = ramainBalanceThree;


})

// history tab functionality

const historyTab = document.getElementById('history-button');
const donationTab = document.getElementById('donation-button');

historyTab.addEventListener('click', function () {
  historyTab.classList.add('bg-[#B4F461]');
  donationTab.classList.remove('bg-[#B4F461]');

  document.getElementById('diplay-page').classList.add('hidden');
  document.getElementById('history-show').classList.remove('hidden');


})

donationTab.addEventListener('click', function () {
  donationTab.classList.add('bg-[#B4F461]')
  historyTab.classList.remove('bg-[#B4F461]');

  document.getElementById('history-show').classList.add('hidden');
  document.getElementById('diplay-page').classList.remove('hidden')
})

const donateNoakhali = document.getElementById('first-input').value; // Example donation amount

document.getElementById('history-button').addEventListener('click', function () {
  const historyItem = document.createElement("div");
  historyItem.className = "bg-white mx-24 my-5 p-3 rounded-md border border-gray-300"; // Adjusted border class

  // Create content for the history item
  const donateNoakhali = parseFloat(document.getElementById('donate-amount-noakhali').innerText);



  //  historyItem.innerHTML = `
  //      <p class="text-xs text-gray-500">${donateNoakhali} taka is ${}</p>
  //      <p class="text-xs text-gray-500">Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} +0600 (Bangladesh Standard Time)</p>
  //  `;

  //  // Get the history container and insert the new history item
  //  const historyContainer = document.getElementById('history-show');
  //  historyContainer.insertBefore(historyItem, historyContainer.firstChild);


});

