// products-workout.js

import { AlertTypes, showAlert, dismissAlertByCode } from './alertModule.js';

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const radioId = button.getAttribute('for');

        // Get the radio element based on the "for" attribute
        const radio = document.getElementById(radioId);

        // Toggle the checked state of the radio element
        if (radio) {
            radio.checked = !radio.checked;
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Function to set product data
    function setProductData(container, title, price, imageUrl) {
        container.querySelector('#productImage').src = imageUrl;
        container.querySelector('#productImage').alt = 'Product Image';
        container.querySelector('#productTitle').innerText = title;
        container.querySelector('#productPrice').innerText = price;
        container.querySelector('#productDescreption').innerText = "جدول تمارين المقاومة مصمم خصيصاً للمبتدئين سواءً كنت تتمرن لأول مرة أو تمرنت سابقاً بدون استمرارية لأكثر من شهر.";
        // Add event listener to the "Buy Now" button
        container.querySelector('#buyButton').addEventListener('click', function () {
            // You can customize the action to be taken when the button is clicked
            alert(`Buy ${title} for ${price}`);
        });
    }

    // Get the product card template container
    const productCardTemplateContainer = document.createElement('div');
    productCardTemplateContainer.innerHTML = document.getElementById('productCard').innerHTML;

    // Iterate 20 times and create product cards with fixed data
    const productListContainer = document.getElementById('product-list');
    for (let i = 1; i <= 20; i++) {
        // Create a clone of the product card template and append it to the product list
        const productCardClone = productCardTemplateContainer.cloneNode(true);
        setProductData(productCardClone, `جدول تمارين للمبتدئين ${i} أيام في النادي`, `200.00 ر.س`, "/assests/images/card-placeholder.png");
        productListContainer.appendChild(productCardClone);
    }
});

// New code for filters button and container
document.addEventListener("DOMContentLoaded", function () {
    const filtersToggleButton = document.getElementById('filtersToggleButton');
    const filtersContainer = document.getElementById('filtersContainer');
    const svgIcon = filtersToggleButton.querySelector('path');

    filtersToggleButton.addEventListener('click', function () {
        // Toggle the visibility of filtersContainer
        filtersContainer.classList.toggle('hidden');
        filtersContainer.classList.toggle('flex');

        // Toggle button styles
        const isFlex = filtersContainer.classList.contains('flex');
        filtersToggleButton.classList.toggle('bg-white', !isFlex);
        filtersToggleButton.classList.toggle('text-black', !isFlex);
        filtersToggleButton.classList.toggle('bg-black', isFlex);
        filtersToggleButton.classList.toggle('text-white', isFlex);

        // Toggle SVG icon color
        svgIcon.setAttribute('stroke', isFlex ? 'white' : '#1D1D1B');
        // You may also need to adjust the color of the SVG fill here
    });
});

document.getElementById('product-list').addEventListener('scroll', function () {
    const productList = this;
    const scrollIndicator = document.getElementById('scrollIndicator');

    // Calculate the remaining scroll height
    const remainingScroll = productList.scrollHeight - (productList.scrollTop + productList.clientHeight);

    // Toggle the visibility classes based on scroll position
    if (remainingScroll < 200) {
        scrollIndicator.classList.remove('hidden');
        scrollIndicator.classList.add('flex');
    } else {
        scrollIndicator.classList.remove('flex');
        scrollIndicator.classList.add('hidden');
    }
});
