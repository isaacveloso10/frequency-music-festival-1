import { useState } from "react";

function Tickets() {
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [selectedDay, setSelectedDay] = useState("Friday");
    const [quantity, setQuantity] = useState(1);
    const [bookingConfirmed, setBookingConfirmed] = useState(false);
    
    let ticketPrice;

if (selectedTicket === "Day Pass") {
  ticketPrice = 45;
} else {
  ticketPrice = 110;
}

const totalPrice = ticketPrice * quantity;

function handleBooking() {
if (quantity < 1) {
  alert("You must select at least 1 ticket.");
  return;
}
else if (quantity > 10){
alert("You cannot select more than 10 tickets.");
return;
}
setBookingConfirmed(true);
}

  return (
    <div className="tickets-page">
      <h1 className="tickets-title">TICKETS.</h1>
      <div className="tickets-grid">
  <div className="ticket-card">
    <h2>DAY PASS</h2>
    <p className="ticket-description">
      One day. Two stages.
    </p>
    <p className="ticket-price">45€</p>
    <button onClick={() => {
  setSelectedTicket("Day Pass");
  setBookingConfirmed(false);
}}>
  BUY TICKET
</button>
  </div>

  <div className="ticket-card">
    <h2>FULL FESTIVAL PASS</h2>
    <p className="ticket-description">
      Three days. Two stages. The full FREQUENCY experience.
    </p>
    <p className="ticket-price">110€</p>
    <button onClick={() => {
  setSelectedTicket("Full Festival Pass");
  setBookingConfirmed(false);
}}>
  BUY TICKET
</button>
  </div>
</div>
{selectedTicket && (
  <div className="booking-form">
    <h2>YOUR BOOKING.</h2>

    <p>Selected ticket: {selectedTicket}</p>

    {selectedTicket === "Day Pass" && (
      <>
        <label htmlFor="ticket-day">Choose your day:</label>
        <select
  id="ticket-day"
  value={selectedDay}
  onChange={(event) => setSelectedDay(event.target.value)}
>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        </>
    )}
        <label htmlFor="ticket-quantity">Quantity:</label>

<input
  id="ticket-quantity"
  type="number"
  min="1"
  max="10"
  value={quantity}
  onChange={(event) => {
  setQuantity(Number(event.target.value));
  setBookingConfirmed(false);
}}
/>
<p className="booking-total">
  TOTAL: {totalPrice}€
</p>
<button onClick={handleBooking}>
  CONFIRM BOOKING
</button>
{bookingConfirmed && (
    
  <h2 className="booking-success">BOOKING CONFIRMED!</h2>
   
)}
      
  </div>
)}
    </div>
  );
}

export default Tickets;