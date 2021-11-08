let slide_index = 1;

function displaySlides(n) {
    let slides = document.getElementsByClassName("img_slide"); // henter ut alle slides
    if (n > slides.length) {
        slide_index = 1;
    } // hvis slide_index er større enn antall slides, så sett til 1
    if (n < 1) {
        slide_index = slides.length;
    } // hvis slide_index er mindre enn 1, så sett til antall slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slide_index - 1].style.display = "block";
}

displaySlides(slide_index);

// endrer slideindex
function nextSlide(i) {
    displaySlides((slide_index += i));
}

// endrer bilder med piltaster
document.onkeydown = keySlide;

function keySlide(keypress) {
    if (keypress.keyCode == "37") {
        nextSlide(-1);
        delayTimer();
    } else if (keypress.keyCode == "39") {
        nextSlide(1);
        delayTimer();
    }
}

// Lagt til en timer som endrer bilde-slides
let timeHandle = null;
console.log("tutut timer om 5s");

function timeSlide() {
    timeHandle = setTimeout(function () {
        clearTimeout(timeHandle);
        nextSlide(1);
        console.log("biip.. timer changing slide every 5s");
        timeSlide();
    }, 5000);
}

timeSlide();

// delayTimer forsinket timeren, og kjører den igang igjen etter 30 sek
function delayTimer() {
    clearTimeout(timeHandle);
    console.log("Manuell endring. Timer forsinket m/ 30s");
    setTimeout(timeSlide, 30000);
}
// gjør at bilde-slider stopper når man forlater siden og begynner igjen når man åpner siden
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState == "hidden") {
        clearTimeout(timeHandle);
        console.log("Page hidden. Clear timeout for timeHandle");
    }
    if (document.visibilityState == "visible") {
        timeHandle = setTimeout(timeSlide, 5000);
        console.log("Page visible. Begin timeout 5s");
    }
});
