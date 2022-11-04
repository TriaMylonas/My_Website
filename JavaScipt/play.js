



// das gewünschte Objekt auf der Seite auswählen.
const text = document.querySelector("#outputText");


// Ich wähle den gewünschten Inhalt der Seite aus.
const strText = text.textContent;

// Ich unterteile den Text in eine Arry von Char.
const splitText = strText.split("");

//Ich lösche den ursprünglichen Text, da er zweimal erscheint.
text.textContent = "";

// ich platziere <span> elemente in jede Char.
splitText.forEach(element => {
    text.innerHTML += "<span>" + element + "</span>";
    console.log(element);
});

//Jetzt muss ich die Buchstaben nacheinander anzeigen.

//ein Variable/counter.
let char = 0;
// in jeden 100mlsec wird die "onTick" funktion ausgeruft.
let timer = setInterval(onTick,100);

function onTick(){
    //ich nehme alle span elemente und seine chars
    const span = text.querySelectorAll("span")[char];
    // add alle span in einem Klass, damit wir in CSS Datei spielen
    span.classList.add("animation");
    // Zähler, um die Wiederholung des Prozesses zu stoppen, wenn der Text fertig ist.
    char++;

    if (char === splitText.length){

        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}







