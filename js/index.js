//  common function [].................

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

  if (firstDonate <= 0 || firstDonate > mainBalance || isNaN(firstDonate)) {
    let donationInput = document.getElementById("first-input");
    donationInput.value = "";
    alert("Invalid Input");
    return;
  }

  const sum = firstDonate + donateNoakhali;
  const donation = document.getElementById("donate-amount-noakhali");
  donation.innerText = sum;

  const remainBalance = mainBalance - firstDonate;
  const remaining = document.getElementById("balance");
  remaining.innerText = remainBalance;

  document.getElementById("first-input").value = "";

  my_modal_1.showModal();
  const div = document.createElement("div");
  div.innerHTML = `
    <p class="text-xl py-3 border  text-gray-500">${firstDonate} Taka is Donated for Flood Relief in Noakhali, Bangladesh </br>${new Date().toLocaleDateString()} time: ${new Date().toLocaleTimeString()}</p>
  `;
  const historyContainer = document.getElementById("history-show");
  historyContainer.appendChild(div);
});





// function getValueById(id) {
//   return parseFloat(document.getElementById(id).value);
// }

// const donateButton = document.getElementById("donate-button");
// donateButton.addEventListener("click", function () {
//   const firstDonate = getValueById("first-input");
//   const donateNoakhali = parseFloat(
//     document.getElementById("donate-amount-noakhali").innerText
//   );
//   const mainBalance = parseFloat(document.getElementById("balance").innerText);

//   const sum = firstDonate + donateNoakhali;
//   const donation = document.getElementById("donate-amount-noakhali");
//   donation.innerText = sum;

//   const remainBalance = mainBalance - sum;
//   const remaining = document.getElementById("balance");
//   remaining.innerText = remainBalance;

//   document.getElementById("first-input").value = "";



//   if ( Math.sign(firstDonate) === -1 || firstDonate <= 0 || firstDonate > mainBalance || isNaN(firstDonate)) {
//     let donationInput = document.getElementById("first-input");
//     donationInput.value = "";
//     alert("Invalid Input");
//     return;
//   } 
//   else {
//     my_modal_1.showModal();
//     const div = document.createElement("div");
//     div.innerHTML = `
//       <p class="text-xl py-3 border  text-gray-500">${firstDonate} Taka is Donated for Flood Relief in Noakhali, Bangladesh </br>${new Date().toLocaleDateString()}</p>
//     `;
//     const historyContainer = document.getElementById("history-show");
//     historyContainer.appendChild(div);
//   }
// });
// /

// function getValueById(id) {
//   return parseFloat(document.getElementById(id).value);
// }

// const donateButton = document.getElementById('donate-button');
// donateButton.addEventListener('click', function ()){
//   const firstDonate = getValueById('first-input');
//   const donateNoakhali = parseFloat(document.getElementById('donate-amount-noakhali').innerText);
//   const mainBalance = parseFloat(document.getElementById('balance').innerText);

//   // donation amount calculation 
//   const sum = firstDonate + donateNoakhali;
//   const donation = document.getElementById('donate-amount-noakhali')
//   donation.innerText = sum;

//   // Main balance show
//   const remainBalance = mainBalance - sum;
//   const remaining = document.getElementById('balance');
//   remaining.innerText = remainBalance;

//   // Reset the input field
//   document.getElementById('first-input').value = '';

//   if(firstDonate <= 0 || firstDonate > mainBalance || isNaN(firstDonate)){
//     let donationInput = document.getElementById('first-input')
//       donationInput.value = " ";
//       alert('Invalid Input');
//       return;
//   }
//   else{


//     const div = document.createElement('div')
//     div.innerHTML=`
//     <p class="text-xl py-3 border text-xs text-gray-500">${firstDonate}Taka is Donated for Flood Relief in Noakhali,Bangladesh </br>${new Date().toLocaleDateString()}</p>
      
//     `
//     const historyContainer = document.getElementById('history-show')
//     historyContainer.appendChild(div)

//   }

// }
  // if(
  //   Math.sign(firstDonate) === -1 ||
  //   firstDonate > mainBalance ||
  //   isNaN(mainBalance) ||
  //   isNaN(firstDonate)
  // ){
  //   let donationInput = document.getElementById('first-input')
  //   donationInput.value = " ";
  //   alert('Invalid Input');
  //   return;
  // }
  
  // else {

  //     const newBalance =  mainBalance - firstDonate;
  //     const minusBalance = donation + firstDonate;
  //     document.getElementById('balance').innerText = newBalance;
  //  const donation = document.getElementById('donate-amount-noakhali')
  //  donation.innerHTML = minusBalance ;
 
   // add to history
   
 


// [card - 2]

// const donateButtonFeni = document.getElementById('donate-btn-feni');
// donateButtonFeni.addEventListener('click', function () {

//   const secondDonate = getValueById('second-input');
//   const donateFeni = parseFloat(document.getElementById('donate-ammount-feni').innerText);
//   const mainBalance = parseFloat(document.getElementById('balance').innerText);


//   const sumTwo = secondDonate + donateFeni;
//   const donation = document.getElementById('donate-ammount-feni')
//   donation.innerText = sumTwo;

//   //  Main balance show

//   const ramainBalanceTwo = mainBalance - sumTwo;
//   const ramaining = document.getElementById('balance')
//   ramaining.innerText = ramainBalanceTwo;

//   // Reset the input field
//   document.getElementById('second-input').value = '';

// });

// [card - 3]

// const aidButton = document.getElementById('aid-button');
// aidButton.addEventListener('click', function () {

//   const thirdDonate = getValueById('third-input');
//   const donateForAid = parseFloat(document.getElementById('aid-amount').innerText);
//   const mainBalance = parseFloat(document.getElementById('balance').innerText);


//   const sumThree = thirdDonate + donateForAid;
//   const donation = document.getElementById('aid-amount')
//   donation.innerText = sumThree;

//   //  Main balance show

//   const ramainBalanceThree = mainBalance - sumThree;
//   const ramaining = document.getElementById('balance')
//   ramaining.innerText = ramainBalanceThree;


//   // Reset the input field
//   document.getElementById('third-input').value = '';

// });

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


// const donateNoakhali = document.getElementById('first-input').value; // Example donation amount

// document.getElementById('history-button').addEventListener('click', function () {
//   const historyItem = document.createElement("div");
//   historyItem.className = "bg-white mx-24 my-5 p-3 rounded-md border border-gray-300"; // Adjusted border class


// });

