/* Add your JavaScript to this file */

'use strict';

window.onload = loadPage;

function loadPage(){
    let submit = document.querySelectorAll(".btn")[1];

    console.log(submit);
        
    submit.addEventListener('click', clicker);
}

function clicker(event){
    event.preventDefault();

    var emailAddress = document.getElementById("email").value;

    if(emailAddress !== ""){

        console.log(emailAddress);

        document.getElementsByClassName("message")[0].innerHTML = "Thank You! Your email address " +emailAddress+ " has been added to our mailing list";
        console.log(document.getElementsByClassName("message")[0].innerHTML);
    }
    document.getElementsByClassName("message")[0].innerHTML = ""
}