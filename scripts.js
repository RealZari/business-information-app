let categories = JSON.parse(localStorage.getItem('categories')) || ["Restaurants", "Real Estate", "Schools", "Clinics", "Law Firms"];
let cities = JSON.parse(localStorage.getItem('cities')) || [];
let businesses = JSON.parse(localStorage.getItem('businesses')) || [];

// Sample credentials
const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
];

// Function to dynamically add categories to the dropdowns and list
function populateCategories() {
    const categoryList = document.getElementById('category-list');
    const businessCategory = document.getElementById('business-category');
    
    if (categoryList) {
        categoryList.innerHTML = ''; // Clear the existing list
        categories.forEach(category => {
            let li = document.createElement('li');
            li.textContent = category;
            categoryList.appendChild(li);
        });
    }

    if (businessCategory) {
        businessCategory.innerHTML = ''; // Clear existing options
        categories.forEach(category => {
            let option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            businessCategory.appendChild(option);
        });
    }
}

// Function to dynamically add cities to the city dropdown
function populateCities() {
    const businessCity = document.getElementById('business-city');

    if (businessCity) {
        businessCity.innerHTML = ''; // Clear existing options
        cities.forEach(city => {
            let option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            businessCity.appendChild(option);
        });
    }
}

// Function to display businesses
function displayBusinesses() {
    const businessList = document.getElementById('business-list');

    if (businessList) {
        businessList.innerHTML = ''; // Clear the existing list
        businesses.forEach(business => {
            let li = document.createElement('li');
            li.textContent = `${business.name} - ${business.category} - ${business.city} - ${business.address} - ${business.contact}`;
            businessList.appendChild(li);
        });
    }
}

// Add event listeners to forms
document.addEventListener('DOMContentLoaded', function () {
    populateCategories();
    populateCities();
    displayBusinesses();

    // Add City Form
    const addCityForm = document.getElementById('add-city-form');
    if (addCityForm) {
        addCityForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const cityName = document.getElementById('city-name').value;
            cities.push(cityName);
            localStorage.setItem('cities', JSON.stringify(cities));
            populateCities();
            alert('City/Town added successfully');
        });
    }

    // Add Category Form
    const addCategoryForm = document.getElementById('add-category-form');
    if (addCategoryForm) {
        addCategoryForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const categoryName = document.getElementById('category-name').value;
            categories.push(categoryName);
            localStorage.setItem('categories', JSON.stringify(categories));
            populateCategories();
            alert('Category added successfully');
        });
    }

    // Add Business Form
    const addBusinessForm = document.getElementById('add-business-form');
    if (addBusinessForm) {
        addBusinessForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const businessName = document.getElementById('business-name').value;
            const businessCategory = document.getElementById('business-category').value;
            const businessCity = document.getElementById('business-city').value;
            const businessAddress = document.getElementById('business-address').value;
            const businessContact = document.getElementById('business-contact').value;

            const business = {
                name: businessName,
                category: businessCategory,
                city: businessCity,
                address: businessAddress,
                contact: businessContact
            };
            businesses.push(business);
            localStorage.setItem('businesses', JSON.stringify(businesses));
            displayBusinesses();
            alert('Business profile added successfully');
        });
    }

    // Login Form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const role = document.getElementById('role').value;

            const user = users.find(user => user.username === username && user.password === password && user.role === role);

            if (user) {
                if (role === 'admin') {
                    window.location.href = 'admin.html';
                } else {
                    window.location.href = 'index.html';
                }
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }
});
