
    // funksjon som flytter forsiden ned til under forside-bilde
function moveDownPage() {

    let foo = document.getElementById("main_index")
    foo.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
}
