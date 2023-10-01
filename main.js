var sideBar = document.getElementById("sideBar");

function showMenu(){
    sideBar.style.right = "0%";
    sideBar.style.transition = "all ease 0.7s";
}
function hideMenu(){
    sideBar.style.right = "-60%";
}

function clicked(){
    sideBar.style.right = "-60%";
}

let allMenus = document.getElementById("allMenus");
let breakFast = document.getElementById("breakFast");
let Dessert = document.getElementById("Dessert");
let Lunch = document.getElementById("Lunch");
let Freshfood = document.getElementById("Freshfood");

let bg1 = document.getElementById("bg1");
let bg2 = document.getElementById("bg2");
let bg3 = document.getElementById("bg3");
let bg4 = document.getElementById("bg4");
let bg5 = document.getElementById("bg5");

let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");
let color5 = document.getElementById("color5");

function a(){
    breakFast.style.display = "none";
    Dessert.style.display = "none";
    allMenus.style.display = "flex";
    Lunch.style.display = "none";
    Freshfood.style.display = "none";

    bg5.style.backgroundColor = "transparent";
    bg2.style.backgroundColor = "transparent";
    bg3.style.backgroundColor = "transparent";
    bg4.style.backgroundColor = "transparent";
    bg1.style.backgroundColor = "rgb(32, 32, 47)";

    color1.style.color = "white";
    color2.style.color = "rgb(32, 32, 47)";
    color3.style.color = "rgb(32, 32, 47)";
    color4.style.color = "rgb(32, 32, 47)";
    color5.style.color = "rgb(32, 32, 47)";

}

function breakfast(){

    breakFast.style.display = "flex";
    Dessert.style.display = "none";
    allMenus.style.display = "none";
    Lunch.style.display = "none";
    Freshfood.style.display = "none";

    bg1.style.backgroundColor = "transparent";
    bg5.style.backgroundColor = "transparent";
    bg3.style.backgroundColor = "transparent";
    bg4.style.backgroundColor = "transparent";
    bg2.style.backgroundColor = "rgb(32, 32, 47)";

    color2.style.color = "white";
    color1.style.color = "rgb(32, 32, 47)";
    color3.style.color = "rgb(32, 32, 47)";
    color4.style.color = "rgb(32, 32, 47)";
    color5.style.color = "rgb(32, 32, 47)";
}
function dessert(){
    breakFast.style.display = "none";
    Dessert.style.display = "flex";
    allMenus.style.display = "none";
    Lunch.style.display = "none";
    Freshfood.style.display = "none";

    bg1.style.backgroundColor = "transparent";
    bg2.style.backgroundColor = "transparent";
    bg5.style.backgroundColor = "transparent";
    bg4.style.backgroundColor = "transparent";
    bg3.style.backgroundColor = "rgb(32, 32, 47)";

    color3.style.color = "white";
    color2.style.color = "rgb(32, 32, 47)";
    color1.style.color = "rgb(32, 32, 47)";
    color4.style.color = "rgb(32, 32, 47)";
    color5.style.color = "rgb(32, 32, 47)";
}
function lunch(){
    breakFast.style.display = "none";
    Dessert.style.display = "none";
    allMenus.style.display = "none";
    Lunch.style.display = "flex";
    Freshfood.style.display = "none";

    bg1.style.backgroundColor = "transparent";
    bg2.style.backgroundColor = "transparent";
    bg3.style.backgroundColor = "transparent";
    bg5.style.backgroundColor = "transparent";
    bg4.style.backgroundColor = "rgb(32, 32, 47)";

    color4.style.color = "white";
    color2.style.color = "rgb(32, 32, 47)";
    color3.style.color = "rgb(32, 32, 47)";
    color1.style.color = "rgb(32, 32, 47)";
    color5.style.color = "rgb(32, 32, 47)";
}
function freshfood(){
    breakFast.style.display = "none";
    Dessert.style.display = "none";
    allMenus.style.display = "none";
    Lunch.style.display = "none";
    Freshfood.style.display = "flex";
   
    bg1.style.backgroundColor = "transparent";
    bg2.style.backgroundColor = "transparent";
    bg3.style.backgroundColor = "transparent";
    bg4.style.backgroundColor = "transparent";
    bg5.style.backgroundColor = "rgb(32, 32, 47)";

    color5.style.color = "white";
    color2.style.color = "rgb(32, 32, 47)";
    color3.style.color = "rgb(32, 32, 47)";
    color4.style.color = "rgb(32, 32, 47)";
    color1.style.color = "rgb(32, 32, 47)";
}

