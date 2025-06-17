"use strict";
var jumping =false;
const player=document.querySelector("#player");
var left=false; 
var right=false;
var positionX=0;
function movement()
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
          player.style.bottom="0px"; 
          jumping=false;
        },200);
        
    }

    
});

    document.addEventListener("keydown",function(e){
        if(e.code=="KeyD")
        {
            console.log("Moving Right")
            right=true;
        }
       if(e.code=="KeyA")
        {
            console.log("Moving left")
            left=true;
        }
    });

    document.addEventListener("keyup",function(e){
        if(e.code=="KeyD")
        {
            console.log("not Moving Right");
            right=false;
        }
       if(e.code=="KeyA")
        {
            console.log("not Moving left");
            left=false;
        }
    });

    setInterval(()=>
    {
        if(right)
        {
            positionX+=5;
            player.style.transform=`translateX(${positionX}px)`;
        }
        if(left)
        {
            positionX-=5;
            player.style.transform=`translateX(${positionX}px)`;
        }
    },16)

}
movement();