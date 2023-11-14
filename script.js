

// skapar en funktion vid namn buttonClick med hjälp utav 'querySelector' 
let buttonClick = document.querySelector("#button-contact").addEventListener("click", function() 
{
    // läser av texten med id = "email" (altså inputen)
    let emailText = document.getElementById("email").value // value gör så den får ett värde 

    // detta skrivs ut när jag klickar på knappen (kallar på funktionen)
    console.log(emailText); 
});

//----------------------------------------------------------------------------------------------------------------------------

