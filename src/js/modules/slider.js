

const slider = (slidesSelector, sliderSelector, currentSlide = 0, activeClass = 'active') => {
    const slides = document.querySelectorAll(slidesSelector),
          slider = document.querySelector(sliderSelector);

    slider.style.transition = '3s';
    slider.parentElement.style.overflow = 'hidden';

    bindActiveSlide();
    function bindActiveSlide() {
        slides.forEach((item, i) => {
            item.classList.remove(activeClass);
            slides[currentSlide].classList.add(activeClass);
        });
    }

    function changeActiveSlide() {
        const changeInterval = setInterval(() => {
            let height = window.getComputedStyle(slides[currentSlide]).height;
            console.log(height);
            if (currentSlide < 1) {
                slider.style.transform = `translateY(-${height})`;
                currentSlide++;
            } else {
                slider.style.transform = `translateY(0px)`;
                currentSlide = 0;
            }
            bindActiveSlide();
        }, 10000);
    }

    changeActiveSlide();
};


export default slider;