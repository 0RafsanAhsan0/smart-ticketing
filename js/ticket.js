// scorlling to ticket section
const buyTickets = document.getElementById("buy-ticket");
const seatAndBill = document.getElementById("seat-bill");

buyTickets.addEventListener("click", function () {
  seatAndBill.scrollIntoView();
});

// -------Seat eventListenar--------
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

    // showing seat and price description
    const seatName = seat.innerText;
    const TicketPrice = document.getElementById("t-price").innerText
    const convertedTicketPrice = parseInt(TicketPrice);

    const tDescription = document.getElementById("t-description")

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = seatName;
    const p2 = document.createElement("p");
    p2.innerText = convertedTicketPrice;

    li.appendChild(p);
    li.appendChild(p2);
    tDescription.appendChild(li);

    // total price
    const totalPrice = document.getElementById("total-price").innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    document.getElementById("total-price").innerText = convertedTotalPrice + convertedTicketPrice;
    
    //grand total
    const grandTotal = document.getElementById("grand-total").innerText;
    const convertedGrandTotal = parseInt(grandTotal);
    document.getElementById("grand-total").innerText = convertedGrandTotal + convertedTicketPrice;
  });
}
