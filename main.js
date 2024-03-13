AOS.init();

console.log("Script is running");



let slider = document.querySelector('.background-image');
let sliderGridItems = [...document.querySelectorAll('.grid-item')];

let sliderImage = sliderGridItems.map(gridItem => gridItem.dataset.image);

let currentImage = 0;

setInterval(() => {
    changeSliderImage();
}, 5000);

const changeSliderImage = () => {
    for (const [index, gridItem] of sliderGridItems.entries()) {
        setTimeout(() => {
            gridItem.classList.remove('hide');

            setTimeout(() => {
                if (index === sliderGridItems.length - 1) {
                    if (currentImage >= sliderImage.length - 1) {
                        currentImage = 0;
                    } else {
                        currentImage++;
                    }
                    slider.src = sliderImage[currentImage];
                    sliderGridItems.forEach((item, i) => {
                        setTimeout(() => {
                            item.classList.add('hide');
                        }, i * 100);
                    });
                }
            }, 100);
        }, index * 100);
    }
};
//navbar
function toggleBookingForm() {
    var bookingContainer = document.getElementById("bookingContainer");
    
    // Toggle the visibility of the booking form
    if (bookingContainer.style.display === "none") {
        bookingContainer.style.display = "block";
    } else {
        bookingContainer.style.display = "none";
    }
}

function bookTicket() {
    // You can add your booking logic here
    alert('Ticket booked successfully!');
    // Optionally, you can hide the form after booking
    document.getElementById("bookingContainer").style.display = "none";
}

function expandImage(img) {
    img.classList.toggle('expanded');
}