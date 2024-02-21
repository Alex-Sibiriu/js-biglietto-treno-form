const username = document.querySelector('.as_username');
const kmTravel = document.querySelector('.as_km');
const ageUser = document.querySelector('.as_user-age');
const createTicket = document.querySelector('.as_create-ticket');
const deleteTicket = document.querySelector('.as_delete-ticket');
const ticket = document.querySelector('.as_ticket');

const ticketHead = document.querySelector('.as_ticket-head')
const namePassenger = document.querySelector('.as_name');
const ticketType = document.querySelector('.as_ticket-type');
const wagon = document.querySelector('.as_wagon');
const cpCode = document.querySelector('.as_cp-code');
const finalPrice = document.querySelector('.as_final-price');

const priceKm = 0.21;
const adultAge = 18;
const discountYoung = 20;
const discountSenior = 40;

createTicket.addEventListener('click', function(event) {
  event.preventDefault();

  if((username.value == '') || (username.value == 'undefined')) {
    alert('Inserire nome e cognome');
    ticket.classList.add('d-none');
  } else if ((kmTravel.value == '') || (kmTravel.value == 'undefined')) {
    alert('Inserire i chilometri da percorrere');
    ticket.classList.add('d-none');
  } else {

    let ticketPrice = kmTravel.value * priceKm;

    if (ageUser.value < adultAge) {
      ticketPrice -= (ticketPrice / 100 * discountYoung);
      ticketType.innerHTML = 'Biglietto Ridotto';
      ticketHead.classList.remove('as_bg-gold');
      ticketHead.classList.remove('as_bg-bronze');
      ticketHead.classList.add('as_bg-silver');

    } else if (ageUser.value >= 65) {
      ticketPrice -= (ticketPrice / 100 * discountSenior);
      ticketType.innerHTML = 'Biglietto Senior';
      ticketHead.classList.remove('as_bg-gold');
      ticketHead.classList.remove('as_bg-silver');
      ticketHead.classList.add('as_bg-bronze');

    } else {
      ticketType.innerHTML = 'Biglietto Standard';
      ticketHead.classList.remove('as_bg-silver');
      ticketHead.classList.remove('as_bg-bronze');
      ticketHead.classList.add('as_bg-gold');
    }

    namePassenger.innerHTML = username.value;
    finalPrice.innerHTML = ticketPrice.toFixed(2) + ' €';
    wagon.innerHTML = Math.floor(Math.random() * 10) + 1;
    cpCode.innerHTML = Math.floor(Math.random() * 89999) + 10000;

    ticket.classList.remove('d-none');
  }
})


deleteTicket.addEventListener('click', function() {
  ticket.classList.add('d-none');
})