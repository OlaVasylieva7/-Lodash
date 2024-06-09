// task 1

const sliderImage = document.querySelector(".slider__image");
const sliderInput = document.querySelector(".slider__input");

function changeImageSize() {
  const scale = sliderInput.value / 50; 
  sliderImage.style.transform = `scale(${scale})`;
}

const debouncedChangeImageSize = _.debounce(changeImageSize, 100);

sliderInput.addEventListener("input", debouncedChangeImageSize);



// task 2

// const box = document.getElementById('box');

// function navigateBox(e) {
//     box.style.left = e.clientX + 'px';
//     box.style.top = e.clientY + 'px';
// }

// const debouncedNavigateBox = _.debounce(navigateBox, 100);

// document.addEventListener('mousemove', debouncedNavigateBox);
