window.onload = function() {
    setTimeout(function() {
        document.querySelector(".preloader").style.display = "none";
    }, 1000);
    let slides = document.querySelectorAll('.showcaseSlides .scSlide');;
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    let slideActive = 0;
    let lengthSlides = slides.length;
    next.onclick = function() {
        let slideActiveOld = document.querySelector('.showcaseSlides .scSlide.scActive');
        slideActive =  slideActive + 1;
        if (slideActive >= lengthSlides) {
            slideActive = 0;
        }   
        slideActiveOld.classList.remove('scActive');
        slides[slideActive].classList.add('scActive');
    }
    prev.onclick = function() {
        let slideActiveOld = document.querySelector('.showcaseSlides .scSlide.scActive');
        slideActive = slideActive - 1;
        if (slideActive < 0) {
            slideActive = lengthSlides - 1;
        }
        slideActiveOld.classList.remove('scActive');
        slides[slideActive].classList.add('scActive');
    }
}