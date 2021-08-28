console.log("HELLO!!");

let heading = document.querySelector("h1");


heading.style.fontSize = "30px";
heading.style.color = "Purple";
heading.style.textDecoration = "underline";
heading.style.fontStyle = "italic";
heading.style.textTransform = "uppercase";


let anchor = document.querySelector(".container a");

let currentHref = anchor.getAttribute("href");

let currentId = anchor.getAttribute("id");

anchor.setAttribute("href", "https://malaysia.yahoo.com/?p=us");
anchor.setAttribute("id", "yahooo");

anchor.innerText = "yahooo!";


// Use an access method to select a DOM node and save it in a variable
let image = document.querySelector("img");
// Manipulate that DOM Node
let currentSrc = image.getAttribute("src");

image.style.width = "100px";
image.style.border = "10px solid purple";
// Change the image's width to be "200px"
// Change the image's border to be "10px solid blue"









