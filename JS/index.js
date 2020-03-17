"use strict"


function Focus(){
    let element = document.getElementById("uname");
    element.style.borderBottom = "2px solid black";
}

function FocusOut(){
    let element = document.getElementById("uname");
    element.style.borderBottom = "2px solid #d2d2d2";
}

function FocusIn(){
    let element = document.getElementById("pass");
    element.style.borderBottom = "2px solid black";
}

function FocusOuut(){
    let element = document.getElementById("pass");
    element.style.borderBottom = "2px solid #d2d2d2";
}