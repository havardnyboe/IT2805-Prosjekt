
let slide_index = 1;

displaySlides(slide_index);  

function nextSlide(n) {  
    displaySlides(slide_index += n);

}  

function currentSlide(n) {  
    displaySlides(slide_index = n);  
}  

function displaySlides(n) {  
    let i;  
    let slides = document.getElementsByClassName("img_slide");  
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }

    slides[slide_index - 1].style.display = "block";  
}

document.onkeydown = keySlide;

function keySlide(keypress){
    if (keypress.keyCode == "37"){
        nextSlide(-1)
    }
    else if (keypress.keyCode == "39"){
        nextSlide(1)
    }
}

    // insp fra:
    // https://www.c-sharpcorner.com/article/creating-an-image-slider-using-javascript-html-and-css-only/
