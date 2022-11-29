


// με αυτό τον τρόπο αν πατηθεί "Enter" στο κουτί εισαγωγής κειμένου θα εκτελεστεί η διαδικασία! 
var enter = document.getElementById("userInput");

enter.addEventListener("keypress", function(event){
    if(event.key === "Enter") {
        // event.preventDefault; Das ist nur für Formular, damit nicht mit Enter das Formular gesendet wurde.
        document.getElementById("submitBtn").click();
    }});


    // SPIEL NUMMER 1 ##############################################################################
function doSomthingForThorsten(){
    //nimmt die text vom der Nutzer
    const input = document.getElementById("userInput");
    // Variable für die output
    const output = document.getElementById("outputText");
    const movingOutput = document.getElementById("movin-text");

    output.innerHTML = " ";
    movingOutput.innerHTML ="";
    
    if (input.value != ""){
        
        movingOutput.innerHTML = input.value;
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
            output.innerHTML += "<span class>" + splitText[index] + "</span>";
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
        movingOutput.innerHTML = "Du hast nicht geschrieben!"
    }
    
}

/*************************************************************************************************************************************
 * 
 * ***********************************************************************************************************************************
 *   ---------second Task-------------------!SECTION money game
 *  
 * */


function getMoney(){

    const money = document.getElementById("item3-userInput");
    
    // check users input
    if (isNaN(money.value)){
        alert("False input! \n You must write a number!")
        // set the value of the input field in default.
        money.value = " ";   
    } 
    else{

        let euro2coins = 0;
        let euro1coins = 0;
        let cent50coins = 0;
        let cent20coins = 0;
        let cent10coins = 0;
        let cent5coins = 0;
        let cent2coins = 0;
        let cent1coins = 0;
        let restMoneyCoins = 0;

        // 2 euro coins
        euro2coins = money.value / 200;
        let stringEuro2coins = euro2coins.toString().split(".")[0];
        restMoneyCoins = money.value % 200; 
        document.getElementById("euro-2-output").textContent = "x " + stringEuro2coins;
        let nummerEuro2coins = parseInt(stringEuro2coins);
        
        //1€ coins
        euro1coins = restMoneyCoins / 100;
        document.getElementById("euro-1-output").textContent ="x " + euro1coins.toString().split(".")[0];
        restMoneyCoins = restMoneyCoins % 100;

        //50 Cents cois
        cent50coins = restMoneyCoins / 50;
        document.getElementById("cents-50-output").textContent = "x " + cent50coins.toString().split(".")[0];
        restMoneyCoins = restMoneyCoins % 50;

        cent20coins = restMoneyCoins / 20;
        document.getElementById("cents-20-output").textContent = "x " + cent20coins.toString().split(".")[0];
        restMoneyCoins = restMoneyCoins % 20;

        cent10coins = restMoneyCoins / 10;
        document.getElementById("cents-10-output").textContent = "x " + cent10coins.toString().split(".")[0];
        restMoneyCoins = restMoneyCoins % 10;

        cent5coins = restMoneyCoins / 5;
        document.getElementById("cents-5-output").textContent = "x " + cent5coins.toString().split(".")[0];
        restMoneyCoins = restMoneyCoins % 5;

        cent2coins = restMoneyCoins / 2;
        document.getElementById("cents-2-output").textContent = "x " + cent2coins.toString().split(".")[0];
        restMoneyCoins = restMoneyCoins % 2;

        cent1coins = restMoneyCoins / 1;
        document.getElementById("cents-1-output").textContent = "x " + cent1coins.toString().split(".")[0];
        restMoneyCoins = restMoneyCoins % 1;
        

        showThe2Euro(nummerEuro2coins);
       
    }


}


function showThe2Euro(a){

    if (a === 0){
        
        showThe2Euro(1);
    }
    else{

        // delete the alt images before i make again the new one.
        // i do that with a while loop, until it hit the last child of the element, he will delet the first.
        let images = document.getElementById('skata');
        while(images.lastElementChild){
            images.firstElementChild.remove();
        }
    
        // add the new image
        for (let index = 0; index < a; index++) {
            
            let whereTheImageGoes = document.getElementById("skata");
            let img = new Image();
            img.src = "../pictures/2euro.png"
            img.className = "bigCoins";
            
            whereTheImageGoes.appendChild(img)
        }
    }

}
