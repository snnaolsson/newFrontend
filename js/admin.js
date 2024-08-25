document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    console.log("Token found:", token);

    if (!token) {
        window.location.href = '/login.html';
    } else {
        // Endast om token finns fortsätter vi att hämta data
        fetchMenuItems(token);
        fetchBookings(token);
    }
});

    document.getElementById('logoutButton').addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = '/login.html';
    });




    document.getElementById('addNewItemButton').addEventListener('click', () => {
        document.getElementById('menuFormContainer').style.display = 'block';
        document.getElementById('menuForm').reset();
        document.getElementById('menuId').value = '';
    });
    document.getElementById('addNewBookingButton').addEventListener('click', () => {
        document.getElementById('bookingFormContainer').style.display = 'block';
        document.getElementById('bookingForm').reset();
        document.getElementById('bookingId').value = '';  // Se till att bookingId sätts till ett tomt värde
    });

    document.getElementById('menuForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const menuId = document.getElementById('menuId').value;
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const category = document.getElementById('category').value;
        const token = localStorage.getItem('token');

        const menuItem = { name, description, category };

        let url = 'http://localhost:3005/api/menu';
        let method = 'POST';

        if (menuId) {
            url += `/${menuId}`;
            method = 'PUT';
        }

        const response = await fetch(url, {
            method: method,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(menuItem)
        });

        if (response.ok) {
            fetchMenuItems(token);
            document.getElementById('menuFormContainer').style.display = 'none';
            showNotification(menuId ? `${name} har uppdaterats!` : `${name} har lagts till!`);
        } else {
            console.error('Failed to save menu item:', response.status);
        }
    });

    document.getElementById('bookingForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const bookingId = document.getElementById('bookingId').value;
        const name = document.getElementById('bookingName').value;
        const phone = document.getElementById('bookingPhone').value;
        const email = document.getElementById('bookingEmail').value;
        const date = document.getElementById('bookingDate').value;
        const time = document.getElementById('bookingTime').value;
        const guests = document.getElementById('bookingGuests').value;
        const specialRequests = document.getElementById('bookingSpecialRequests').value;
        const token = localStorage.getItem('token');
       

        //Kombinerar datum och tid för att konvertera till ISO 1601-format som databasen har för att kunna skapa bokningar frn gränssnittet
        const datetime = new Date(`${date}T${time}:00Z`).toISOString();
        console.log(datetime);
        const booking = { name, phone, email, date:datetime, time, guests, specialRequests };
        console.log(booking);

        let url = 'http://localhost:3005/api/bookings';
        let method = 'POST';

        if (bookingId) {
            url += `/${bookingId}`;
            method = 'PUT';
        }

        const response = await fetch(url, {
            method: method,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        });

        if (response.ok) {
            fetchBookings(token);
            document.getElementById('bookingFormContainer').style.display = 'none';
            showNotification(bookingId ? 'Booking updated successfully!' : 'New booking added!');
        } else {
            const errorData = await response.json();
            console.error('Failed to save booking:', response.status);
            console.error('Error details:', errorData);
     
        }
    });

    document.getElementById('cancelButton').addEventListener('click', () => {
        document.getElementById('menuFormContainer').style.display = 'none';
    });
    document.getElementById('cancelBookingButton').addEventListener('click', () => {
        document.getElementById('bookingFormContainer').style.display = 'none';
    });




async function fetchMenuItems(token) {
    const response = await fetch('http://localhost:3005/api/menu', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.ok) {
        const menuItems = await response.json();
        renderMenuItems(menuItems);
    } else {
        console.error('Failed to fetch menu items:', response.status);
    }
}

function renderMenuItems(menuItems) {
    const menuDiv = document.getElementById('menuItems');
    menuDiv.innerHTML = '';
    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.id = `menuItem-${item._id}`;  // Unikt ID för varje menyalternativ
        itemDiv.classList.add('menu-item-div');
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <button class='edit-buttons' onclick="editMenuItem('${item._id}')">Uppdatera</button>
            <button class='delete-buttons' onclick="deleteMenuItem('${item._id}')">Ta bort</button>
        `;
        menuDiv.appendChild(itemDiv);
    });
}

function editMenuItem(id) {
    const token = localStorage.getItem('token');
    fetch(`http://localhost:3005/api/menu/${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(item => {
        // Ta bort tidigare uppdateringsformulär om det finns
        const existingForm = document.getElementById(`editForm-${item._id}`);
        if (existingForm) {
            existingForm.remove();
        }

        // Skapa ett nytt formulär
        const editForm = document.createElement('form');
        editForm.id = `editForm-${item._id}`;
        editForm.innerHTML = `
            <label for="name-${item._id}">Namn:</label>
            <input type="text" id="name-${item._id}" value="${item.name}" required>
            <label for="description-${item._id}">Beskrivning:</label>
            <input type="text" id="description-${item._id}" value="${item.description}" required>
            <label for="category-${item._id}">Kategori:</label>
            <input type="text" id="category-${item._id}" value="${item.category}" required>
            <button type="submit">Spara</button>
            <button type="button" onclick="cancelEdit('${item._id}')">Avbryt</button>
        `;

        // Lägg till en event listener för att hantera formulärsubmits
        editForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const updatedName = document.getElementById(`name-${item._id}`).value;
            const updatedDescription = document.getElementById(`description-${item._id}`).value;
            const updatedCategory = document.getElementById(`category-${item._id}`).value;

            const updatedItem = { name: updatedName, description: updatedDescription, category: updatedCategory };

            const response = await fetch(`http://localhost:3005/api/menu/${item._id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedItem)
            });

            if (response.ok) {
                fetchMenuItems(token);  // Uppdatera menyn efter ändringen
                showNotification(menuId ? 'Menyalternativet har uppdaterats!' : 'Nytt menyalternativ har lagts till!');
            } else {
                showNotification('Något gick fel, försök igen!', false);
                console.error('Failed to update menu item:', response.status);
            }
        });

        // Hämta elementet för menyalternativet och lägg till formuläret under det
        const itemDiv = document.getElementById(`menuItem-${item._id}`);
        itemDiv.appendChild(editForm);
    })
    .catch(error => console.error('Failed to fetch menu item:', error));
}

function cancelEdit(id) {
    const editForm = document.getElementById(`editForm-${id}`);
    if (editForm) {
        editForm.remove();  // Ta bort formuläret om användaren avbryter redigeringen
    }
}
async function deleteMenuItem(id) {
    if (confirm('Är du säker på att du vill ta bort denna menyartikel?')) {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3005/api/menu/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            fetchMenuItems(token);
            showNotification('Menu item deleted successfully!');


        } else {
            console.error('Failed to delete menu item:', response.status);
        }
    }
}


async function fetchBookings(token) {
    const response = await fetch('http://localhost:3005/api/bookings', {
        method: 'GET',
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const bookings = await response.json();
        renderBookings(bookings);
    } else {
        console.error('Failed to fetch bookings:', response.status);
    }
}

function renderBookings(bookings) {
    const bookingsDiv = document.getElementById('bookings');
    bookingsDiv.innerHTML = '';
    bookings.forEach(booking => {
        const bookingDiv = document.createElement('div');
        bookingDiv.classList.add('booking-item-div');
        bookingDiv.id = `booking-${booking._id}`;
        const bookingDate = new Date(booking.date).toLocaleDateString('sv-SE');
        bookingDiv.innerHTML = `
            <h3>Bokning för ${booking.name}</h3>
            <p>E-mail: ${booking.email}</p>
            <p>Phone: ${booking.phone}</p>
            <p>Datum: ${bookingDate}</p>
            <p>Tid: ${booking.time}</p>
            <p>Gäster: ${booking.guests}</p>
            <p>Speciella önskemål: ${booking.specialRequests}</p>
             <button class='edit-buttons' onclick="editBooking('${booking._id}')">Uppdatera</button>
            <button class='delete-buttons' onclick="deleteBooking('${booking._id}')">Ta bort</button>
        `;
        bookingsDiv.appendChild(bookingDiv);
    });
}


function editBooking(id) {
    const token = localStorage.getItem('token');
    fetch(`http://localhost:3005/bookings/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(booking => {
        // Ta bort tidigare uppdateringsformulär om det finns
        const existingForm = document.getElementById(`editBookingForm-${booking._id}`);
        if (existingForm) {
            existingForm.remove();
        }

        // Skapa ett nytt formulär
        const editForm = document.createElement('form');
        editForm.id = `editBookingForm-${booking._id}`;
        editForm.innerHTML = `
            <label for="bookingName-${booking._id}">Namn:</label>
            <input type="text" id="bookingName-${booking._id}" value="${booking.name}" required>
            <label for="bookingPhone-${booking._id}">Telefon:</label>
            <input type="text" id="bookingPhone-${booking._id}" value="${booking.phone}" required>
            <label for="bookingEmail-${booking._id}">Email:</label>
            <input type="email" id="bookingEmail-${booking._id}" value="${booking.email}" required>
            <label for="bookingDate-${booking._id}">Datum:</label>
            <input type="date" id="bookingDate-${booking._id}" value="${booking.date}" required>
            <label for="bookingTime-${booking._id}">Tid:</label>
            <input type="time" id="bookingTime-${booking._id}" value="${booking.time}" required>
            <label for="bookingGuests-${booking._id}">Gäster:</label>
            <input type="number" id="bookingGuests-${booking._id}" value="${booking.guests}" required>
            <label for="bookingSpecialRequests-${booking._id}">Speciella önskemål:</label>
            <textarea id="bookingSpecialRequests-${booking._id}" required>${booking.specialRequests}</textarea>
            <button type="submit">Spara</button>
            <button type="button" onclick="cancelBookingEdit('${booking._id}')">Avbryt</button>
        `;

        // Lägg till en event listener för att hantera formulärsubmits
        editForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const updatedName = document.getElementById(`bookingName-${booking._id}`).value;
            const updatedPhone = document.getElementById(`bookingPhone-${booking._id}`).value;
            const updatedEmail = document.getElementById(`bookingEmail-${booking._id}`).value;
            const updatedDate = document.getElementById(`bookingDate-${booking._id}`).value;
            const updatedTime = document.getElementById(`bookingTime-${booking._id}`).value;
            const updatedGuests = document.getElementById(`bookingGuests-${booking._id}`).value;
            const updatedSpecialRequests = document.getElementById(`bookingSpecialRequests-${booking._id}`).value;

            const updatedBooking = {
                name: updatedName,
                phone: updatedPhone,
                email: updatedEmail,
                date: updatedDate,
                time: updatedTime,
                guests: updatedGuests,
                specialRequests: updatedSpecialRequests
            };

            const response = await fetch(`http://localhost:3005/api/bookings/${booking._id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedBooking)
            });

            if (response.ok) {
                fetchBookings(token);  // Uppdatera listan med bokningar efter ändringen
                showNotification('Booking updated successfully!');
            } else {
                showNotification('Något gick fel. Försök igen.', false);
                console.error('Failed to update booking:', response.status);
            }
        });

        // Hämta elementet för bokningen och lägg till formuläret under det
        const bookingDiv = document.getElementById(`booking-${booking._id}`);
        bookingDiv.appendChild(editForm);
    })
    .catch(error => console.error('Failed to fetch booking:', error));
}

function cancelBookingEdit(id) {
    const editForm = document.getElementById(`editBookingForm-${id}`);
    if (editForm) {
        editForm.remove();  // Ta bort formuläret om användaren avbryter redigeringen
    }
}

async function deleteBooking(id) {
    if (confirm('Är du säker på att du vill ta bort denna bokning?')) {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3005/api/bookings/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            fetchBookings(token);  // Uppdatera listan med bokningar efter radering
            showNotification(`Booking deleted successfully!`);
        } else {
            console.error('Failed to delete booking:', response.status);
        }
    }
}

function showNotification(message, isSuccess = true) {
    const notificationDiv = document.getElementById('notification');
    notificationDiv.style.backgroundColor = isSuccess ? '#4CAF50' : '#f44336'; // Grön för framgång, röd för fel
    notificationDiv.textContent = message;
    notificationDiv.style.display = 'block';
    
    setTimeout(() => {
        notificationDiv.style.display = 'none';
    }, 3000); // Visar meddelandet i 3 sekunder
}