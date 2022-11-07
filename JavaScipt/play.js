


// με αυτό τον τρόπο αν πατηθεί "Enter" στο κουτί εισαγωγής κειμένου θα εκτελεστεί η διαδικασία! 
var enter = document.getElementById("userInput");

enter.addEventListener("keypress", function(event){
    if(event.key === "Enter") {
        event.preventDefault;
        document.getElementById("submitBtn").click();
    }});


function doSomthingForThorsten(){
    
    //nimmt die text vom der Nutzer
    const input = document.getElementById("userInput");
    // Variable für die output
    const output = document.getElementById("outputText");

    output.innerHTML = " ";

    if (input.value != ""){

        // so kann ich den Wert in der Ausgangsbezeichnung in den Wert der Nutzer Eingabe ändern.
        //output.innerHTML = input.value;
       
        // Vomhier fang die Animation an.
        //ich trenne die Buchstaben des Strings
        const strText = input.value;
        console.log(strText);
        const splitText = strText.split("");
        console.log(splitText);
    
    
        // jeden Buchstaben in einen "span" gesetzt, damit ich ihn jederzeit separat anzeigen kann.
        for (let index = 0; index < strText.length; index++) {
            // hier generate die spans
            output.innerHTML += "<span>" + splitText[index] + "</span>";
        }
        
        // jetzt ich packt alle "span" in eine Klass rein, damit ich in CSS mit den arbeiten kann.
        // aber ich mache das mit Zeit interval damit später die Animation Effekt habe.
        function onTick(){
            const allSpans = output.querySelectorAll("span")[char];
            allSpans.classList.add('animation');
            char++;
            if (char === splitText.length){
                clearInterval(timer);
                timer = null;
                return;
            }
        }
        
        
        let char = 0;
        let timer = setInterval(onTick, 50);
        
    }
    else{
        output.innerHTML = "Du hast nicht geschrieben!"
    }
    
}



