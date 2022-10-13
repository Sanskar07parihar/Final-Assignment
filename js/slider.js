// This js file contains code for the slider

var index = 0;

var ImageArray = document.getElementsByClassName('sliderImg');

// Loads the slider on the website.
function loadSlider() {
    ImageArray[0].style.display = "initial";
}

// Change image to next image when clicked right arrow.
function changeImgRight() {

    ImageArray[index].style.display = "none";

    // Starts the slider from the begining when it reaches to end.
    if (index == ImageArray.length - 1) {
        index = -1;
    }

    index++;
    ImageArray[index].style.display = "initial";
}

// Change image to previous image when clicked left arrow.
function changeImgLeft() {

    ImageArray[index].style.display = "none";

    // Starts the slider from the end when user clicks left arrow at the starting of slider.
    if (index == 0) {
        index = ImageArray.length;
    }

    index--;
    ImageArray[index].style.display = "initial";
}