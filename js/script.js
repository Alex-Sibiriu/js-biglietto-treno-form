const username = document.querySelector('.username');
const kmTravel = document.querySelector('.km');
const ageUser = document.querySelector('.user-age');
const priceKm = 0.21;
// let ticketPrice = +kmTravel.value * priceKm;
const adultAge = 18;
const discountYoung = 20;
const discountSenior = 40;
let message;

console.log(kmTravel.value);
console.log(priceKm);
// console.log(ticketPrice);

const createTicket = document.querySelector('.create-ticket');

createTicket.addEventListener('click', function(event) {
  event.preventDefault();

  let ticketPrice = kmTravel.value * priceKm;

  if (ageUser.value < adultAge) {
    ticketPrice -= (ticketPrice / 100 * discountYoung);
    message = 
    `
    Visto che hai ${ageUser.value} anni<br>
    hai diritto al 20% di sconto!<br>
    Il prezzo del tuo biglietto è di:<br>
    <strong>${ticketPrice.toFixed(2)} €</strong>
    ` 
  } else if (ageUser.value >= 65) {
    ticketPrice -= (ticketPrice / 100 * discountSenior);
    message = 
    `
    Visto che hai ${ageUser.value} anni<br>
    hai diritto al 40% di sconto!<br>
    il prezzo del tuo biglietto è di:<br>
    <strong>${ticketPrice.toFixed(2)} €</strong>
    ` 
  } else {
    message = 
    `
    Visto che hai ${ageUser.value} anni <br>
    il prezzo del tuo biglietto è di:<br>
    <strong>${ticketPrice.toFixed(2)} €</strong>
    ` 
  }

  console.log(priceKm);

  console.log(ticketPrice)

  console.log(kmTravel.value);

  console.log(message);
})

