// scorlling to ticket section
const buyTickets = document.getElementById("buy-ticket");
const seatAndBill = document.getElementById("seat-bill");

buyTickets.addEventListener("click",function(){
    seatAndBill.scrollIntoView();
})

// seat button color
const allSeat = document.getElementsByClassName("btn-seat");
let count = 0;
for(const seat of allSeat){
    seat.addEventListener("click", function(){
        seat.style.backgroundColor = "#1DD100";
    })
}
