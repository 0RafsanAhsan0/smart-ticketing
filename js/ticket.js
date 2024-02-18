// scorlling to ticket section
const buyTickets = document.getElementById("buy-ticket");
const seatAndBill = document.getElementById("seat-bill");

buyTickets.addEventListener("click", function () {
  seatAndBill.scrollIntoView();
});

// -------eventListenar--------
const allSeat = document.getElementsByClassName("btn-seat");
let count = 0;
let count2 = 40;
for (const seat of allSeat) {
  seat.addEventListener("click", function () {
    count = count + 1;
    count2 = count2 - 1;


    // set button color
    seat.style.backgroundColor = "#1DD100";

    //selected ticket no.
    document.getElementById("seat-add").innerText = count;

    // reduced total seat no.
    document.getElementById("seat-count").innerText = count2;
  });
}
