"use strict";
var jumping =false;
const player=document.querySelector("#player");
var left=false; 
var right=false;
var posX=0;
var posY=0;

function transformplayer()
{
    player.style.transform=`translate(${posX}px,${posY}px)`;
}

function movement()
{
    //checking if a key is pressed
    document.addEventListener("keydown", function (event) {
    //checking the space key was pressed
    if (!event.repeat && event.code=="Space"&& !jumping)
    {   
        jumping=true;
        console.log("jumped");
        //changing the posistion to indicate jumping
        posY-=60;
        transformplayer()
        
        //landing after a certian time
        setTimeout(()=>{
            posY+=60;
            transformplayer()           
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
            posX+=5;
            transformplayer()

        }
        if(left)
        {
            posX-=5;
            transformplayer()
        }
    },16)

}
movement();