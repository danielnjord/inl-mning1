
// skapar variabeln buttonClick och tilldelar den värdet med id'et "button-contact" från html koden
// altså variabeln buttonClick är lika med "button-contact" från html koden
let buttonClick = document.querySelector("#button-contact")
// lägger till en eventlyssnare "click" som startar en funktion när användaren klickar på knappen
buttonClick.addEventListener("click", function() 
{
    // läser av texten med id = "email" (altså inputen)
    let emailText = document.getElementById("email").value; // value gör så den får ett värde 
    // detta skrivs ut när jag klickar på knappen (kallar på funktionen)
    console.log(emailText); 
});

// skapar en funktion vid namn createParagraph som tar emot en text 
function createParagraph(text){
    // skapr en p tag med den inskickade texten
    let paragraph = document.createElement("p");
    // utan denna skapas endast p taggar utan innehåll
    paragraph.textContent = text; 
    // skriver ut p taggen (som sparats i variabeln "paragraph") i console.log
    console.log(paragraph);
    // retunerar variabeln "paragraph"
    return paragraph;
  }

  // denna funktion anropas varje gång värdet på id'et phoneInput ändras
  function changePhone(phoneValue){
    // anropar min andra funktion "createParagraph" och skickar med värdet phoneValue
    createParagraph(phoneValue);
  }
  
  // kopplar phoneInput variabeln till "phoneInput" variabeln från html koden
  let phoneInput = document.getElementById("phoneInput"); 
  // funktion som anropas varje gång den får input (via id phoneInput)
  phoneInput.addEventListener("input", function() { 
    // anropar changePhone funktionen 
    changePhone(phoneInput.value);
  });

