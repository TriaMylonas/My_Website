



function doSomthingForThorsten(){
    
    //nimmt die text vom der Nutzer
    const input = document.getElementById("userInput").value;
    // Variable für die output
    const output = document.getElementById("outputText");


    // αλλάζω την τιμή στο output label με το input οταν καλείται αυτή η συνάρτηση, 
    //και καλείται κάθε φορά που πατιέται το κουμπί του Submit.
    output.innerHTML = input;
   
}



