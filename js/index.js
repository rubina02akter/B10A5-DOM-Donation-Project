
// [CARD - ONE]

function getValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

  const donateButton = document.getElementById("donate-button");
  donateButton.addEventListener("click", function () {
  const firstDonate = getValueById("first-input");
  const donateNoakhali = parseFloat(
    document.getElementById("donate-amount-noakhali").innerText
  );
  const mainBalance = parseFloat(document.getElementById("balance").innerText);
 
  
  // [INVALID INPUT CONDITION]
  
  if (firstDonate <= 0 || firstDonate > mainBalance || isNaN(firstDonate)) {
    let donationInput = document.getElementById("first-input");
    donationInput.value = "";
    alert("Invalid Input");
    return;
  }

  const sum = firstDonate + donateNoakhali;
  const donation = document.getElementById("donate-amount-noakhali");
  donation.innerText = sum.toFixed(2);

  const remainBalance = mainBalance - firstDonate;
  const remaining = document.getElementById("balance");
  remaining.innerText = remainBalance.toFixed(2);

  document.getElementById("first-input").value = "";

  my_modal_1.showModal();

  // [Creating a div for history of Donation]

  const div = document.createElement("div");
  div.innerHTML = `
    <p class="text-xl py-3 border px-4 rounded-lg text-gray-500">${firstDonate.toFixed(2)} Taka is Donated for Flood Relief in Noakhali, Bangladesh </br>${new Date().toLocaleDateString()} time: ${new Date().toLocaleTimeString()}</p>
  `;

  const historyContainer = document.getElementById("history-show");
  historyContainer.appendChild(div);
});

//  [SECOND - CARD ]


  const donateButtonFeni = document.getElementById('donate-btn-feni');
  donateButtonFeni.addEventListener('click', function () {

  const secondDonate = getValueById('second-input');
  const donateFeni = parseFloat(document.getElementById('donate-ammount-feni').innerText);
  const mainBalance = parseFloat(document.getElementById('balance').innerText);

  // [INVALID INPUT CONDITION]

  if (secondDonate <= 0 || secondDonate > mainBalance || isNaN(secondDonate)) {
    let donationInput = document.getElementById("second-input");
    donationInput.value = "";
    alert("Invalid Input");
    return;
  }

  const sumTwo = secondDonate + donateFeni;
  const donation = document.getElementById('donate-ammount-feni')
  donation.innerText = sumTwo.toFixed(2);

  //  Main balance show

  const ramainBalanceTwo = mainBalance - secondDonate;
  const ramaining = document.getElementById('balance');
  ramaining.innerText = ramainBalanceTwo.toFixed(2);

  // Reset the input field
  document.getElementById('second-input').value = '';

  my_modal_2.showModal();

   // [Creating a div for history of Donation]

   const div = document.createElement("div");
   div.innerHTML = `
     <p class="text-xl py-3 border px-4 rounded-lg  text-gray-500">${secondDonate.toFixed(2)} Taka is Donated for Flood Relief in Feni, Bangladesh </br>${new Date().toLocaleDateString()} time: ${new Date().toLocaleTimeString()}</p>
   `;
   const historyContainer = document.getElementById("history-show");
   historyContainer.appendChild(div);

});

// [card - 3]

const aidButton = document.getElementById('aid-button');
aidButton.addEventListener('click', function () {

  const thirdDonate = getValueById('third-input');
  const donateForAid = parseFloat(document.getElementById('aid-amount').innerText);
  const mainBalance = parseFloat(document.getElementById('balance').innerText);

 // [INVALID INPUT CONDITION]

 if (thirdDonate <= 0 || thirdDonate > mainBalance || isNaN(thirdDonate)) {
  let donationInput = document.getElementById("third-input");
  donationInput.value = "";
  alert("Invalid Input");
  return;
}
 const sumThree = thirdDonate + donateForAid;
  const donation = document.getElementById('aid-amount')
  donation.innerText = sumThree.toFixed(2);

  const ramainBalanceThree = mainBalance - thirdDonate;
  const remaining = document.getElementById("balance");
  remaining.innerText = ramainBalanceThree.toFixed(2);

  document.getElementById("third-input").value = "";

  my_modal_3.showModal();

  // [Creating a div for history of Donation]


  const div = document.createElement("div");
  div.innerHTML = `
    <p class="text-xl py-3 border px-4 rounded-lg text-gray-500">${thirdDonate.toFixed(2)} Taka isAid for Injured in the Quota Movement, Bangladesh </br>${new Date().toLocaleDateString()} time: ${new Date().toLocaleTimeString()}</p>
  `;
  const historyContainer = document.getElementById("history-show");
  historyContainer.appendChild(div);
});


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


