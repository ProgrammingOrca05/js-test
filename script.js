"use strict";
var jumping =false;
var player=document.querySelector("#player");
function jump()
{
    //checking if a key is pressed
    document.addEventListener("keydown", function (event) {
    //checking the space key was pressed
    if (event.code=="Space"&& !jumping)
    {   
        jumping=true;
        console.log("jumped");
        //changing the posistion to indicate jumping
        player.style.bottom="60px";
        
        //landing after a certian time
        setTimeout(()=>{
          player.style. bottom="0px" 
          jumping=false;
        },500);
        
    }
});
}
jump();