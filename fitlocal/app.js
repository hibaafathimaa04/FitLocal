// ===========================
// AUTHENTICATION FUNCTIONS
// ===========================

function signup() {
    const user = {
        username: username.value,
        password: password.value,
        location: location.value,
        size: size.value
    };
    localStorage.setItem("user_" + user.username, JSON.stringify(user));
    alert("Signup successful!");
}

function login() {
    const stored = localStorage.getItem("user_" + username.value);
    if (!stored) return alert("User not found");

    const user = JSON.parse(stored);

    if (user.password === password.value) {
        localStorage.setItem("currentUser", user.username);
        window.location = "home.html";
    } else {
        alert("Wrong password");
    }
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location = "index.html";
}

// ===========================
// AFFORDABLE PRODUCTS DATABASE
// ===========================

const REALISTIC_PRODUCTS = [
  {
    id: 1,
    name: "Soft Cotton Kurthi",
    description: "Comfortable daily-wear cotton kurthi with simple print. Perfect for everyday wear and home. Lightly used, excellent condition.",
    size: "M",
    location: "Ernakulam",
    type: "Sell",
    seller: "Anu P.",
    price: 299,
    highestBid: 299,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    createdAt: new Date().toISOString(),
    sold: false,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 300'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F5E6D3;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23E8D4B8;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='300' fill='url(%23grad1)'/%3E%3Ccircle cx='100' cy='50' r='20' fill='%23D7CCC8'/%3E%3Cpath d='M75 85 Q100 120 125 85 L115 220 L85 220 Z' fill='%23BCAAA4'/%3E%3Crect x='60' y='90' width='80' height='120' fill='%23A1887F' opacity='0.3'/%3E%3C/svg%3E"
  },
  {
    id: 2,
    name: "Daily-wear Anarkali",
    description: "Simple and elegant daily-wear Anarkali in solid color. Great for college or casual outings. Well-maintained.",
    size: "S",
    location: "Thiruvananthapuram",
    type: "Auction",
    seller: "Meera K.",
    price: 399,
    highestBid: 399,
    endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    createdAt: new Date().toISOString(),
    sold: false,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 300'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFE0E6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23F8BCC9;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='300' fill='url(%23grad2)'/%3E%3Ccircle cx='100' cy='50' r='18' fill='%23F5B3C5'/%3E%3Cpath d='M80 80 Q100 100 120 80 L110 230 Q100 240 90 230 Z' fill='%23F09AC9'/%3E%3Crect x='75' y='85' width='50' height='30' fill='%23EC8FB0' opacity='0.2'/%3E%3C/svg%3E"
  },
  {
    id: 3,
    name: "Casual Printed Saree",
    description: "Beautiful printed saree in cotton blend. Easy to wear and wash. Suitable for daily and casual occasions. Gently used.",
    size: "One Size",
    location: "Kottayam",
    type: "Sell",
    seller: "Divya V.",
    price: 499,
    highestBid: 499,
    endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    createdAt: new Date().toISOString(),
    sold: false,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 300'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFF9E6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23F5E8CC;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='300' fill='url(%23grad3)'/%3E%3Crect x='30' y='80' width='140' height='200' fill='%23EDD5B0' opacity='0.6'/%3E%3Ccircle cx='60' cy='120' r='5' fill='%23D4AF6F' opacity='0.5'/%3E%3Ccircle cx='140' cy='160' r='5' fill='%23D4AF6F' opacity='0.5'/%3E%3C/svg%3E"
  },
  {
    id: 4,
    name: "Basic Cotton T-Shirt",
    description: "No-fuss cotton t-shirt in plain color. Lightweight and versatile. Perfect for layering or casual wear. Very gently used.",
    size: "M",
    location: "Alappuzha",
    type: "Sell",
    seller: "Priya J.",
    price: 199,
    highestBid: 199,
    endTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
    createdAt: new Date().toISOString(),
    sold: false,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 300'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23E0E0E0;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23BDBDBD;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='300' fill='url(%23grad4)'/%3E%3Ccircle cx='100' cy='60' r='18' fill='%23B0BEC5'/%3E%3Crect x='60' y='90' width='80' height='120' fill='%239EADC4' opacity='0.5'/%3E%3C/svg%3E"
  },
  {
    id: 5,
    name: "Simple Top with Pattern",
    description: "Cute basic top with simple geometric print. Good for everyday wear. Comfortable fit, lightly used.",
    size: "M",
    location: "Ernakulam",
    type: "Sell",
    seller: "Nisha L.",
    price: 249,
    highestBid: 249,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    createdAt: new Date().toISOString(),
    sold: false,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 300'%3E%3Cdefs%3E%3ClinearGradient id='grad5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FCE4EC;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23F8BBD0;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='300' fill='url(%23grad5)'/%3E%3Ccircle cx='100' cy='50' r='18' fill='%23F59CBE'/%3E%3Crect x='65' y='85' width='70' height='120' fill='%23F599C1' opacity='0.4'/%3E%3Crect x='75' y='95' width='8' height='8' fill='%23F4658D' opacity='0.6'/%3E%3Crect x='95' y='110' width='8' height='8' fill='%23F4658D' opacity='0.6'/%3E%3C/svg%3E"
  },
  {
    id: 6,
    name: "Casual Printed Dress",
    description: "Light printed dress in comfortable fabric. Great for casual outings and gatherings. Barely worn, like new condition.",
    size: "S",
    location: "Kozhikode",
    type: "Auction",
    seller: "Riya N.",
    price: 349,
    highestBid: 349,
    endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    createdAt: new Date().toISOString(),
    sold: false,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 300'%3E%3Cdefs%3E%3ClinearGradient id='grad6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFF3E0;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23FFE0B2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='300' fill='url(%23grad6)'/%3E%3Ccircle cx='100' cy='55' r='18' fill='%23FFCC80'/%3E%3Cpath d='M75 90 L125 90 L115 220 L85 220 Z' fill='%23FFB74D' opacity='0.5'/%3E%3C/svg%3E"
  },
  {
    id: 7,
    name: "Cotton Dupatta",
    description: "Simple cotton dupatta in solid color. Versatile accessory for any outfit or occasion. Easy to maintain and wear.",
    size: "One Size",
    location: "Thrissur",
    type: "Sell",
    seller: "Kavya S.",
    price: 199,
    highestBid: 199,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    createdAt: new Date().toISOString(),
    sold: false,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 300'%3E%3Cdefs%3E%3ClinearGradient id='grad7' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23E8F5E9;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23C8E6C9;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='300' fill='url(%23grad7)'/%3E%3Cpath d='M40 80 Q60 150 40 220' stroke='%23A5D6A7' stroke-width='4' fill='none' opacity='0.6'/%3E%3Cpath d='M160 80 Q140 150 160 220' stroke='%23A5D6A7' stroke-width='4' fill='none' opacity='0.6'/%3E%3C/svg%3E"
  },
  {
    id: 8,
    name: "Casual Cotton Shirt",
    description: "Simple everyday cotton shirt. Good for casual wear and office. Well-maintained with no stains or damage.",
    size: "M",
    location: "Palakkad",
    type: "Auction",
    seller: "Asha M.",
    price: 349,
    highestBid: 349,
    endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    createdAt: new Date().toISOString(),
    sold: false,
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 300'%3E%3Cdefs%3E%3ClinearGradient id='grad8' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F3E5F5;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23E1BEE7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='200' height='300' fill='url(%23grad8)'/%3E%3Ccircle cx='100' cy='55' r='18' fill='%23CE93D8'/%3E%3Crect x='60' y='90' width='35' height='120' fill='%23BA68C8' opacity='0.4'/%3E%3Crect x='105' y='90' width='35' height='120' fill='%23BA68C8' opacity='0.4'/%3E%3C/svg%3E"
  }
];

// Initialize demo products on first visit
function initializeDemoData() {
    const items = localStorage.getItem("items");
    if (!items) {
        localStorage.setItem("items", JSON.stringify(REALISTIC_PRODUCTS));
    }
}

// ===========================
// INVENTORY MANAGEMENT
// ===========================

function addItem() {
    const items = JSON.parse(localStorage.getItem("items")) || [];

    const newItem = {
        name: itemName.value,
        size: itemSize.value,
        location: itemLocation.value,
        type: itemType.value,
        basePrice: basePrice.value,
        highestBid: basePrice.value,
        endTime: Date.now() + 60000
    };

    items.push(newItem);
    localStorage.setItem("items", JSON.stringify(items));

    alert("Item Added!");
    window.location = "home.html";
}

// ===========================
// MODERN PRODUCT DISPLAY
// ===========================

function loadItems() {
    const container = document.getElementById("items");
    if (!container) return;

    const items = JSON.parse(localStorage.getItem("items")) || [];
    const filterLocation = document.getElementById("filterLocation")?.value || "";
    const filterSize = document.getElementById("filterSize")?.value || "";
    const filterType = document.getElementById("filterType")?.value || "";
    const currentUser = localStorage.getItem("currentUser");
    const user = currentUser ? JSON.parse(localStorage.getItem("user_" + currentUser)) || {} : {};
    const saved = JSON.parse(localStorage.getItem("saved")) || [];

    container.innerHTML = "";

    const filteredItems = items.filter(item => {
        if (filterLocation && item.location !== filterLocation) return false;
        if (filterSize && item.size !== filterSize) return false;
        if (filterType && item.type !== filterType) return false;
        return true;
    });

    if (filteredItems.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <p style="font-size: 18px; color: var(--color-text-light);">No items found matching your filters</p>
            </div>
        `;
        return;
    }

    filteredItems.forEach((item, index) => {
        const isSaved = saved.some(s => s.id === item.id);
        let fitBadge = '';

        if (user.size && user.size === item.size) {
            fitBadge = '<span class="badge badge-perfect">Perfect Fit</span>';
        } else if (user.size) {
            fitBadge = '<span class="badge badge-fit">Might Fit</span>';
        }

        const priceDisplay = item.type === 'Auction' 
            ? `Current Bid: ₹${item.highestBid}`
            : `Price: ₹${item.price}`;

        let auctionPart = '';
        if (item.type === 'Auction') {
            const timeLeft = Math.max(0, Math.floor((item.endTime - Date.now()) / 1000));
            auctionPart = `
                <input type="number" id="bid${index}" placeholder="Enter bid" min="${Number(item.highestBid) + 100}" step="50">
                <button class="btn btn-primary btn-small" onclick="placeBid(${index})">Place Bid</button>
            `;
        }

        const realItem = items.find(i => i.id === item.id);
        const itemIndex = items.indexOf(realItem);

        container.innerHTML += `
            <div class="product-card">
                <div class="product-image">
                    <img src="${item.image}" alt="${item.name}">
                    <button class="wishlist-btn ${isSaved ? 'active' : ''}" onclick="toggleWishlistHeart(event, ${itemIndex})">
                        ${isSaved ? '❤️' : '🤍'}
                    </button>
                </div>
                <div class="product-info">
                    <div class="product-badges">
                        ${fitBadge}
                        <span class="badge badge-district">${item.location}</span>
                    </div>
                    <h3 class="product-name">${item.name}</h3>
                    <div class="product-meta-row">
                        <span class="seller-name">by ${item.seller}</span>
                        <span class="product-meta">Size: ${item.size}</span>
                    </div>
                    <div class="product-price">${priceDisplay}</div>
                    ${auctionPart}
                    <div class="product-actions" style="margin-top: auto;">
                        <button class="btn btn-secondary btn-small" onclick="toggleSaveItem(${itemIndex})">
                            ${isSaved ? 'Remove' : 'Save'}
                        </button>
                        ${item.seller === currentUser ? `
                            <button class="btn btn-warning btn-small" onclick="editItem(${itemIndex})" style="background-color: #ff9800; color: white;">Edit</button>
                            <button class="btn btn-danger btn-small" onclick="deleteItem(${itemIndex})" style="background-color: #f44336; color: white;">Delete</button>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    });

    if (document.getElementById("welcome")) {
        document.getElementById("welcome").innerText = "Welcome " + (currentUser || "User");
    }
}

// ===========================
// WISHLIST & SAVING
// ===========================

function toggleWishlistHeart(event, index) {
    event.stopPropagation();
    const items = JSON.parse(localStorage.getItem("items")) || [];
    const saved = JSON.parse(localStorage.getItem("saved")) || [];
    const item = items[index];
    
    const isSaved = saved.some(s => s.id === item.id);
    
    if (isSaved) {
        // Remove from saved
        const filtered = saved.filter(s => s.id !== item.id);
        localStorage.setItem("saved", JSON.stringify(filtered));
    } else {
        // Add to saved
        saved.push(item);
        localStorage.setItem("saved", JSON.stringify(saved));
    }
    
    // Reload to update UI
    loadItems();
}

function toggleWishlist(button, index) {
    button.classList.toggle('active');
    button.textContent = button.classList.contains('active') ? '❤️' : '🤍';
    
    if (button.classList.contains('active')) {
        saveItem(index);
    } else {
        unsaveItem(index);
    }
}

function toggleSaveItem(index) {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    const saved = JSON.parse(localStorage.getItem("saved")) || [];
    const item = items[index];
    
    const isSaved = saved.some(s => s.id === item.id);
    
    if (isSaved) {
        // Remove
        const filtered = saved.filter(s => s.id !== item.id);
        localStorage.setItem("saved", JSON.stringify(filtered));
    } else {
        // Add
        saved.push(item);
        localStorage.setItem("saved", JSON.stringify(saved));
    }
    
    loadItems();
}

function saveItem(index) {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    const saved = JSON.parse(localStorage.getItem("saved")) || [];
    
    const itemToSave = items[index];
    
    // Check if already saved
    const exists = saved.some(s => s.id === itemToSave.id);
    
    if (!exists) {
        saved.push(itemToSave);
        localStorage.setItem("saved", JSON.stringify(saved));
        alert("Added to wishlist! ❤️");
    }
}

function unsaveItem(index) {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    const saved = JSON.parse(localStorage.getItem("saved")) || [];
    const itemToRemove = items[index];
    
    const filtered = saved.filter(s => s.id !== itemToRemove.id);
    localStorage.setItem("saved", JSON.stringify(filtered));
}

// ===========================
// DELETE & EDIT FUNCTIONALITY
// ===========================

function deleteItem(index) {
    if (confirm("Are you sure you want to delete this item?")) {
        const items = JSON.parse(localStorage.getItem("items")) || [];
        items.splice(index, 1);
        localStorage.setItem("items", JSON.stringify(items));
        alert("Item deleted successfully!");
        loadItems();
    }
}

function editItem(index) {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    const item = items[index];
    
    // Store the item to edit in localStorage
    localStorage.setItem("editingItem", JSON.stringify({item, index}));
    window.location = "edit.html";
}

// ===========================
// AUCTION FUNCTIONALITY
// ===========================

function placeBid(index) {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    const bidValue = document.getElementById("bid" + index).value;
    const currentUser = localStorage.getItem("currentUser");

    if (!bidValue) {
        alert("Please enter a bid amount");
        return;
    }

    if (Number(bidValue) > Number(items[index].highestBid)) {
        items[index].highestBid = bidValue;
        items[index].lastBidder = currentUser;
        localStorage.setItem("items", JSON.stringify(items));
        alert("Bid placed successfully! 🎉");
        loadItems();
    } else {
        alert("Bid too low! Must exceed ₹" + items[index].highestBid);
    }
}

// ===========================
// LOAD ON PAGE READY
// =========================== 

window.onload = function() {    // Initialize demo data on first visit
    initializeDemoData();
        // Load items if on home page
    if (document.getElementById("items")) {
        loadItems();
    }

    // Auto-update auctions every 30 seconds
    if (document.body.innerHTML.includes("auction")) {
        setInterval(function() {
            if (window.location.pathname.includes("auction")) {
                // Auction page handles its own updates
            }
        }, 30000);
    }
};

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Get user profile
function getCurrentUser() {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) return null;
    return JSON.parse(localStorage.getItem("user_" + currentUser));
}

// ===========================
// REALISTIC PRODUCT DATA
// =========================== 

// Function to get current user profile
function getCurrentUser() {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) return null;
    return JSON.parse(localStorage.getItem("user_" + currentUser));
}
