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

// function moveBox(e) {
//     box.style.left = e.clientX + 'px';
//     box.style.top = e.clientY + 'px';
// }

// const debouncedMoveBox = _.debounce(moveBox, 100);

// document.addEventListener('mousemove', debouncedMoveBox);
