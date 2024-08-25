document.getElementById('bookingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    const specialRequests = document.getElementById('specialRequests').value;

    const response = await fetch('https://localhost:3005/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, date, time, guests, specialRequests })
    });

    const data = await response.json();
    if (response.ok) {
        alert('Booking confirmed');
        document.getElementById('bookingForm').reset();
    } else {
        alert('Booking failed: ' + data.error);
    }
});
