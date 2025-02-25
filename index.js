// to bring the selectors I wanna use in my js code 

const slides = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const imageId = document.querySelector(".img-id");
const galleryContainerEl = document.querySelector(".gallery-container");

galleryContainerEl.style.gridTemplateColumns = `repeat(${slides.length}, 1fr)`;
// initialize the current slide value
let currentSlide = 0;

// call the function of controls
updateSliderControls();

// create the function that helps u move to the next or previous slide
function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length; // 5 + 7 % 7
    slides[currentSlide].classList.add("active");
    updateSliderControls();
    //update the thumbnail active state
    updateThumbnailActiveState(currentSlide);
};

prevBtn.addEventListener("click", () => {
    goToSlide(currentSlide - 1); // -1
});

nextBtn.addEventListener("click", () => {
    goToSlide(currentSlide + 1); // +1
});

//update the slider controls
function updateSliderControls(){
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;
    imageId.innerHTML = `Image ${currentSlide + 1} of ${slides.length}`;
}

slides.forEach((img, index) => {
    const thumbnail = img.cloneNode(); // get  a copy of every photo
    thumbnail.addEventListener("click", () => { 
        goToSlide(index);
    });
    galleryContainerEl.appendChild(thumbnail);//دخلت ع ال gallery containerواخدت نسخة من كل صورة موجودة هناك 
});

function updateThumbnailActiveState(index) {
    galleryContainerEl.querySelectorAll("img").forEach((img, i) => {
    img.classList.toggle("active", i === index);
    } );
}


