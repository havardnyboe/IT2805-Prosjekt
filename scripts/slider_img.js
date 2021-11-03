
    // setter slide_index som 0 fordi den endres med en gang timeSlide begynner 
// let slide_index = 0

    // ligger inne noe kommentert-ut kode fordi jeg sliter med at timer løper løpsk av og til.. 
            // prøver å finne det ut, men tror den fungerer som den skal nå
    //edit som jeg tror beholdes, setter til 1 fordi timeSlide funksjonen er gjort om
slide_index = 1

// function currentSlide(i) {  
//     displaySlides(slide_index = i);  
// }  

function displaySlides(n) {  
    let slides = document.getElementsByClassName("img_slide")  
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (let i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none"  
    }

    slides[slide_index - 1].style.display = "block";  
}

            // insp fra:
            // https://www.c-sharpcorner.com/article/creating-an-image-slider-using-javascript-html-and-css-only/

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
console.log("tutut timer om 5s")

function timeSlide (){
    timeHandle = setTimeout(function(){
        clearTimeout(timeHandle)
        nextSlide(1)
        console.log("biip.. timer changing slide every 5s")
        timeSlide()
    }, 5000)
    // clearTimeout(timeHandle)
    // nextSlide(1)
    // timeHandle = setTimeout(timeSlide, 5000)
    // console.log("biip.. timer changing slide every 5s")
}

timeSlide()

    // delayTimer forsinket timeren, og kjører den igang igjen etter 30 sek
function delayTimer () {
    clearTimeout(timeHandle)
    console.log("Manuell endring. Timer forsinket m/ 30s")
    setTimeout(timeSlide, 30000)
}
    // gjør at bilde-slider stopper når man forlater siden og begynner igjen når man åpner siden
document.addEventListener("visibilitychange", function() {
    if(document.visibilityState == "hidden"){
        clearTimeout(timeHandle)
        console.log("Page hidden. Clear timeout for timeHandle")
    }
    if(document.visibilityState == "visible"){
        // timeSlide()
        timeHandle = setTimeout(timeSlide, 5000)
        console.log("Page visible. Begin timeout 5s")
    }
})
