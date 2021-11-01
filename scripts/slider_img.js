
    // setter slide_index som 0 fordi den endres med en gang timeSlide begynner 
let slide_index = 0

// function currentSlide(i) {  
//     displaySlides(slide_index = i);  
// }  

function displaySlides(n) {  
    let i = 0 
    let slides = document.getElementsByClassName("img_slide")  
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none"  
    }

    slides[slide_index - 1].style.display = "block";  
}

displaySlides(slide_index)

    // endrer slideindex
function nextSlide(i) {  
    displaySlides(slide_index += i)
}  

    // endrer bilder med piltaster
document.onkeydown = keySlide;

function keySlide(keypress){
    if (keypress.keyCode == "37"){
        nextSlide(-1)
        delayTimer()
    }
    else if (keypress.keyCode == "39"){
        nextSlide(1)
        delayTimer()
    }
}

    // Lagt til en timer som endrer bilde-slides
let timeHandle = null

function timeSlide (){
    nextSlide(1)
    timeHandle = setTimeout(timeSlide, 5000)
    console.log("biip.. timer changing slide every 5s")
}

timeSlide()

    // delayTimer forsinket timeren, og kjører den igang igjen etter 30 sek
function delayTimer () {
    clearTimeout(timeHandle)
    console.log("Timer delayed by 30s")
    setTimeout(timeSlide, 30000)
}
    // gjør at bilde-slider stopper når man forlater siden og begynner igjen når man åpner siden
document.addEventListener("visibilitychange", function() {
    if(document.visibilityState=="hidden"){
        clearTimeout(timeHandle)
        console.log("Page hidden. Clear timeout for timeHandle")
    }
    if(document.visibilityState=="visible"){
        // timeSlide()
        timeHandle = setTimeout(timeSlide, 5000)
        console.log("Page visible. Begin timeout 5s")
    }
})

    // insp fra:
    // https://www.c-sharpcorner.com/article/creating-an-image-slider-using-javascript-html-and-css-only/
