var h4 = document.querySelector("h4");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");

function BackgroundGredient(){
    document.body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    h4.textContent = document.body.style.background;
    
     }
    color1.addEventListener("change", BackgroundGredient);
    color2.addEventListener("change", BackgroundGredient);
    
