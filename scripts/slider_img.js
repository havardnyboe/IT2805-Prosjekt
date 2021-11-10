window.onload = () => {
    document.getElementById("arrow_left").onclick = forrigeBilde;
    document.getElementById("arrow_right").onclick = nesteBilde;
    document.onkeydown = keySlide; // setter inn bilder ved hjelp av piltast
};

let bildeDiv = document.getElementById("img_slider");
let bildeListe = [
    "img/gård_sommer.jpg",
    "img/gård_vinter.jpg",
    "img/gård_vinter_2.jpg",
    "img/gård_vinter_3.jpg",
    "img/honningpåbord.jpg",
    "img/oppstilthonning.jpg",
    "img/rennendehonning.jpg",
]; // liste med bilder
let bildenr = 0;
let slideShow = nesteBilde;
let millisekunder = 5000; // millisekunder mellom bilder
let intervall = setInterval(slideShow, millisekunder); // setter inn bilder automatisk

// funksjon for å sette inn neste bilde
function nesteBilde() {
    if (bildenr >= bildeListe.length - 1) {
        bildenr = 0;
    } else {
        bildenr++;
    }
    clearInterval(intervall); // stopper automatisk innsetting av bilder
    console.log(bildenr);
    bildeDiv.innerHTML = `<img class="img_slide" src="${bildeListe[bildenr]}" alt="${bildeListe[bildenr]}">`; // setter inn bilde manuelt
    intervall = setInterval(slideShow, millisekunder); // setter inn bilder automatisk
}

// funksjon for å sette inn forrige bilde
function forrigeBilde() {
    if (bildenr <= 0) {
        bildenr = bildeListe.length - 1;
    } else {
        bildenr--;
    }
    clearInterval(intervall); // stopper automatisk innsetting av bilder
    console.log(bildenr);
    bildeDiv.innerHTML = `<img class="img_slide" src="${bildeListe[bildenr]}" alt="${bildeListe[bildenr]}">`; // setter inn bilde manuelt
    intervall = setInterval(slideShow, millisekunder); // setter inn bilder automatisk
}

// funksjon for å sette inn bilder ved hjelp av piltast
function keySlide(keypress) {
    if (keypress.keyCode == "37") { // venstre pil
        forrigeBilde();
    } else if (keypress.keyCode == "39") { // høyre pil
        nesteBilde();
    }
}
