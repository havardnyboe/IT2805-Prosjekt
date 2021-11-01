
let slide_index = 0;

displaySlides(slide_index);  

function nextSlide(i) {  
    displaySlides(slide_index += i);
    // clearTimeout(timeHandle)
}  

// function currentSlide(i) {  
//     displaySlides(slide_index = i);  
// }  

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
        clearTimer()
    }
    else if (keypress.keyCode == "39"){
        nextSlide(1)
        clearTimer()
    }
}

// Lagt til en timer som slutter om skiftning av bilder skjer manuelt

function timeSlide (){
    nextSlide(1);
    timeHandle = setTimeout(timeSlide, 5000);
    console.log("biip.. timer changing slide")
}

    // clearTimer stopper timeren, og kjører den igang igjen etter 30 sek
function clearTimer () {
    clearTimeout(timeHandle)
    console.log("Timer cleared")
    setTimeout(timeSlide, 30000)
}

timeSlide()


    // insp fra:
    // https://www.c-sharpcorner.com/article/creating-an-image-slider-using-javascript-html-and-css-only/
