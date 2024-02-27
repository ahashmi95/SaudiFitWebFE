import { AlertTypes, showAlert, dismissAlertByCode } from './alertModule.js';
import KeenSlider from 'https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm'

// Function to handle the click event on buttons
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

// // Function to handle setting product data
// function setProductData(container, title, price, imageUrl) {
//     container.querySelector('#productImage').src = imageUrl;
//     container.querySelector('#productImage').alt = 'Product Image';
//     container.querySelector('#productTitle').innerText = title;
//     container.querySelector('#productPrice').innerText = price;
//     container.querySelector('#productDescreption').innerText = "جدول تمارين المقاومة مصمم خصيصاً للمبتدئين سواءً كنت تتمرن لأول مرة أو تمرنت سابقاً بدون استمرارية لأكثر من شهر.";
// }

// // Execute this code when the DOM content is fully loaded
// document.addEventListener("DOMContentLoaded", function () {
//     // Get the product card template container
//     const productCardTemplateContainer = document.createElement('div');
//     productCardTemplateContainer.innerHTML = document.getElementById('productCard').innerHTML;

//     // Get the product list container
//     const productListContainer = document.getElementById('product-list');

//     // Get the small images container
//     const smallImagesContainer = document.getElementById('smallImagesContainer');

//     // Add event listener to each image within the small images container
//     smallImagesContainer.querySelectorAll('img').forEach(img => {
//         img.addEventListener('click', function () {
//             // Get the ID of the corresponding radio input
//             const radioId = img.getAttribute('for');

//             // Get the radio input element
//             const radio = document.getElementById(radioId);

//             // Toggle the checked state of the radio input
//             if (radio) {
//                 radio.checked = true;
//             }
//         });
//     });

//     // Iterate over each product card template and set its data
//     for (let i = 1; i <= 20; i++) {
//         // Clone the product card template
//         const productCardClone = productCardTemplateContainer.cloneNode(true);

//         // Set the data for the product card
//         setProductData(productCardClone, `جدول تمارين للمبتدئين ${i} أيام في النادي`, `200.00 ر.س`, "/assests/images/card-placeholder.png");

//         // Append the product card to the product list container
//         productListContainer.appendChild(productCardClone);
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    const smallImagesContainer = document.getElementById('smallImagesContainer');
    const bigImage = document.getElementById('bigImage');

    // Event delegation to handle clicks on small images
    smallImagesContainer.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            const clickedImage = event.target;
            bigImage.src = clickedImage.src;
            console.log("selected image: " + clickedImage)
        }
    });
});

// Creating Review Slider based on API Call
document.addEventListener("DOMContentLoaded", function () {
    const reviewContainer = document.getElementById('review-item-template');
    const reviewSlider = document.getElementById('review-slider-template');
    const sliderContainer = document.getElementById('sliderContainer');
    const cloneSlide = reviewContainer.cloneNode(true);
    const sliderClone = reviewSlider.cloneNode(true);
    sliderClone.id = "review-slider"

    // Sample review data array
    const reviews = [
        {
            title: "جدول تمرين مميز جد جدول تمرين مميز جد جدول تمرين مميز جد جدول تمرين مميز جدا",
            date: "10 سبتمبر 2022",
            rating: 5,
            text: "جدول تمرين مميز جدا و التدرج في التطور وحجم تمرين مناسب وزيادة الكتله العضليه واضح جدا و لله الحمد و اfffffffffffلله اني محظوظ",
            user: {
                fullName: "منى أحمد",
                country: "الكويت",
                imageUrl: "https://cdn.devdojo.com/images/may2023/adam.jpeg"
            }
        },
        {
            title: "جدول تمرين مميز جد جدول تمرين مميز جد جدول تمرين مميز جد جدول تمرين مميز جدا",
            date: "10 سبتمبر 2022",
            rating: 5,
            text: "جدول تمرين مميز جدا و التدرج في التطور وحجم تمرين مناسب وزيادة الكتله العضليه واضح جدا و لله الحمد و اfffffffffffلله اني محظوظ",
            user: {
                fullName: "منى أحمد",
                country: "الكويت",
                imageUrl: "https://cdn.devdojo.com/images/may2023/adam.jpeg"
            }
        },
        {
            title: "جدول تمرين مميز جد جدول تمرين مميز جد جدول تمرين مميز جد جدول تمرين مميز جدا",
            date: "10 سبتمبر 2022",
            rating: 5,
            text: "جدول تمرين مميز جدا و التدرج في التطور وحجم تمرين مناسب وزيادة الكتله العضليه واضح جدا و لله الحمد و اfffffffffffلله اني محظوظ",
            user: {
                fullName: "منى أحمد",
                country: "الكويت",
                imageUrl: "https://cdn.devdojo.com/images/may2023/adam.jpeg"
            }
        },
        // Add more review objects here
    ];

    // Function to set review data
    function setReviewData(container, title, date, rating, text, userFullName, userCountry, userImageUrl) {
        container.querySelector('#title').innerText = title;
        container.querySelector('#date').innerText = date;
        container.querySelector('#ratingValue').innerText = `${rating}.0`;

        // Add rating stars dynamically
        const ratingContainer = container.querySelector('#ratingContainer');
        const starsContainer = ratingContainer.querySelector('#stars');
        for (let i = 0; i < rating; i++) {
            const starSvg = document.createElement('img');
            starSvg.src = "/assests/icons/star-active.svg";
            starSvg.classList.add('h-5', 'w-5');
            starsContainer.appendChild(starSvg);
        }

        container.querySelector('#reviewText').innerText = text;
        container.querySelector('#user-fullname').innerText = userFullName;
        container.querySelector('#user-country').innerText = userCountry;
        container.querySelector('#user-image-area').src = userImageUrl;
        container.querySelector('#user-image-area').alt = 'User Image';
    }

    reviews.forEach(function (review) {
        const reviewItemClone = reviewContainer.cloneNode(true);
        setReviewData(reviewItemClone, review.title, review.date, review.rating, review.text, review.user.fullName, review.user.country, review.user.imageUrl);
        sliderClone.appendChild(reviewItemClone);
    });

    reviewContainer.style.display = 'none';
    reviewSlider.style.display = 'none';
    sliderContainer.appendChild(sliderClone)
    createSlider("review-slider");
});

function createSlider(sliderId) {
    const keenSlider = new KeenSlider(
        `#${sliderId}`,
        {
            loop: false,
            rtl: true,
            slides: {
                origin: 'auto',
                perView: 1.25,
                spacing: 16,
            },
            breakpoints: {
                '(min-width: 1024px)': {
                    slides: {
                        origin: 'auto',
                        perView: 1.5,
                        spacing: 16,
                    },
                },
            },
        },
        []
    )

    const keenSliderPrevious = document.getElementById(`${sliderId}-previous`)
    const keenSliderNext = document.getElementById(`${sliderId}-next`)

    keenSliderPrevious.addEventListener('click', () => keenSlider.prev())
    keenSliderNext.addEventListener('click', () => keenSlider.next())
}