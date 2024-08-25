async function fetchMenu() {
    const response = await fetch('http://localhost:3005/api/menu');
    if (response.ok) {
        const menuItems = await response.json();
        const menuDiv = document.getElementById('menu');

        // Gruppar menyalternativ baserat på kategori
        const categories = {};

        menuItems.forEach(item => {
            if (!categories[item.category]) {
                categories[item.category] = [];
            }
            categories[item.category].push(item);
        });

        // Rendera kategorier och deras menyalternativ
        Object.keys(categories).forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('meny-div');
            const categoryHeader = document.createElement('h2');
            categoryHeader.innerText = category;
            categoryDiv.appendChild(categoryHeader);

            categories[category].forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('menu-item');
                itemDiv.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                `;
                categoryDiv.appendChild(itemDiv);
            });

            menuDiv.appendChild(categoryDiv);
        });
    } else {
        console.error('Failed to fetch menu items:', response.status);
    }
}

fetchMenu();
