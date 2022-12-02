


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



// με αυτό τον τρόπο αν πατηθεί "Enter" στο κουτί εισαγωγής κειμένου θα εκτελεστεί η διαδικασία! 
var enter = document.getElementById("item3-userInput");

enter.addEventListener("keypress", function(event){
    if(event.key === "Enter") {
        // event.preventDefault; Das ist nur für Formular, damit nicht mit Enter das Formular gesendet wurde.
        document.getElementById("submitBtnCoins").click();
    }});



function getMoney(){

    const money = document.getElementById("item3-userInput");
    
    // i wonna change the "," to "." so they pass through the isNaN
    let moneyValue = money.value;
    
    if((moneyValue).includes(",")){
        
        // make it string so i play with komma
        moneyValue = moneyValue.toString();
        
        // get only two digit after the komma 
        moneyValue1 = moneyValue.split(",")[0];
        moneyValue2 = moneyValue.split(",")[1];
        moneyValue4 = moneyValue2.split("")[0];
        moneyValue5 = moneyValue2.split("")[1];
        moneyValue3 = moneyValue1 + "," + moneyValue4 + moneyValue5; 
        moneyValue=(moneyValue3).replace(",","");

        moneyValue;
        moneyValue = parseInt(moneyValue);
        money.value = moneyValue3;
        
    }
    else if ((moneyValue).includes(".")){
        // make it string so i play with komma
        moneyValue = moneyValue.toString();

        // get only two digit after the komma 
        moneyValue1 = moneyValue.split(".")[0];
        moneyValue2 = moneyValue.split(".")[1];
        moneyValue4 = moneyValue2.split("")[0];
        moneyValue5 = moneyValue2.split("")[1];
        moneyValue3 = moneyValue1 + "." + moneyValue4 + moneyValue5; 

        moneyValue=(moneyValue3).replace(".","");

        moneyValue;
        moneyValue = parseInt(moneyValue);
        money.value = moneyValue3;
    }



    // check users input
    if (isNaN(moneyValue)){
        alert("False input! \n You must write a number!")
        // set the value of the input field in default.
        money.value = " ";   
    } 
    else{

        // reset the images and the coins number    
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
        euro2coins = moneyValue / 200;
        let stringEuro2coins = euro2coins.toString().split(".")[0];
        restMoneyCoins = moneyValue % 200; 
        document.getElementById("euro-2-output").textContent = "x " + stringEuro2coins;
        let numberEuro2coins = parseInt(stringEuro2coins);
        // function to render the amount of coins
        // function showTheCoins(numberOfCoins,whatCoin,pictureSource,pictureClass)
        showTheCoins(numberEuro2coins, "euro2coin","../pictures/2euro.png","bigCoins");


        //1€ coins
        euro1coins = restMoneyCoins / 100;
        let stringEuro1coins = euro1coins.toString().split(".")[0];
        document.getElementById("euro-1-output").textContent ="x " + stringEuro1coins;
        restMoneyCoins = restMoneyCoins % 100;
        showTheCoins(parseInt(stringEuro1coins), "euro1coins", "../pictures/1-euro.png", "bigCoins")

        //50 Cents cois
        cent50coins = restMoneyCoins / 50;
        let stringCent50coins = cent50coins.toString().split(".")[0];
        document.getElementById("cents-50-output").textContent = "x " + stringCent50coins;
        restMoneyCoins = restMoneyCoins % 50;
        showTheCoins(parseInt(stringCent50coins), "cent50coins", "../pictures/50-euro-cent.png", "middleCoins")
        
        cent20coins = restMoneyCoins / 20;
        let stringCent20coins = cent20coins.toString().split(".")[0];
        document.getElementById("cents-20-output").textContent = "x " + stringCent20coins ;
        restMoneyCoins = restMoneyCoins % 20;
        showTheCoins(parseInt(stringCent20coins), "cent20coins", "../pictures/20-euro-cent.png", "middleCoins")

        cent10coins = restMoneyCoins / 10;
        let stringCent10coins = cent10coins.toString().split(".")[0];
        document.getElementById("cents-10-output").textContent = "x " + stringCent10coins;
        restMoneyCoins = restMoneyCoins % 10;
        showTheCoins(parseInt(stringCent10coins), "cent10coins", "../pictures/10-euro-cent.png", "middleCoins")

        cent5coins = restMoneyCoins / 5;
        let stringcent5coins = cent5coins.toString().split(".")[0];
        document.getElementById("cents-5-output").textContent = "x " + stringcent5coins;
        restMoneyCoins = restMoneyCoins % 5;
        showTheCoins(parseInt(stringcent5coins), "cent5coins", "../pictures/five-euro-cent.png", "smallCoins")

        cent2coins = restMoneyCoins / 2;
        let stringCent2coins = cent2coins.toString().split(".")[0];
        document.getElementById("cents-2-output").textContent = "x " + stringCent2coins;
        restMoneyCoins = restMoneyCoins % 2;
        showTheCoins(parseInt(stringCent2coins), "cent2coins", "../pictures/two-euro-cent.png", "smallCoins")

        cent1coins = restMoneyCoins / 1;
        let stringCent1coins = cent1coins.toString().split(".")[0];
        document.getElementById("cents-1-output").textContent = "x " + stringCent1coins;
        restMoneyCoins = restMoneyCoins % 1;
        showTheCoins(parseInt(stringCent1coins), "cent1coins", "../pictures/one-euro-cent-colored.png", "smallCoins")
        

       
    }


}


function showTheCoins(numberOfCoins,whatCoin,pictureSource,pictureClass){
    // if there is no 2€, then i need 1 for my site.
    if (numberOfCoins === 0){
        showTheCoins(1,whatCoin,pictureSource,pictureClass);
    }
    else{

        // delete the alt images before i make again the new one.
        // i do that with a while loop, until it hit the last child of the element, he will delet the first.
        let images = document.getElementById(whatCoin);
        while(images.lastElementChild){
            images.firstElementChild.remove();
        }
    
        // add the new image
        for (let index = 0; index < numberOfCoins; index++) {
            
            let whereTheImageGoes = document.getElementById(whatCoin);
            let img = new Image();
            img.src = pictureSource;
            img.className = pictureClass;
            
            whereTheImageGoes.appendChild(img)
        }
    }

}
