const sliderBar = document.querySelector('.slider-bar');
var sliderValue = document.getElementById('used');
const progress = document.querySelector('.slider-progress') ;
var sliderLeft = document.getElementById('left');

sliderValue.innerHTML = sliderBar.value;

sliderBar.oninput = function () {
    sliderValue.innerHTML = this.value;
    sliderLeft.innerHTML = "1000" - this.value;
    progress.style.width = this.value / 10 + "%";
}
