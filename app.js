
let userSequence = [];
let gameSequence = [];
let btnColor = ["red" , "blue" , "yellow" , "green"];
let started = false;
let level = 0;

let h3 = document.querySelector("h3");


// used to start the game 

document.addEventListener("keypress" , function(){
    if(!started){
    started = true;
    levelUp();
    }
});

// flash button
function flashbutton(btn){
btn.classList.add("flash");
 setTimeout(function(){
   btn.classList.remove("flash");
 } , 500);

}

// reset the game
let highestScore = 0;
function reset(){
    if(highestScore <= level){
        highestScore = level;
    }
    document.querySelector("body").style.backgroundColor = "black";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white"; 
    } , 200);
    h3.innerHTML = `<b>your score : ${level}</b> <br> higest Score : ${highestScore} <br>game over !! Press any key to start`;
    started = false;
    level = 0;
    userSequence = [];
    gameSequence = [];
}
// level up 
function levelUp(){
    userSequence = [];
    level++;
    h3.innerText = `Level = ${level}`;
    let btn = btnColor[Math.floor(Math.random() * 4)];
    gameSequence.push(btn);
    let btncolor = document.querySelector(`.${btn}`);
    flashbutton(btncolor);
}
// matching sequence
function matchingSequence(index){

if(userSequence[index] === gameSequence[index]){
   if(userSequence.length == gameSequence.length){
    setTimeout(levelUp , 1000);
   }
}
else{
    reset();
}


}

// button press
function buttonpress(){
    
    flashbutton(this);
    let userpressColor = this.getAttribute("id");
    userSequence.push(userpressColor);
    matchingSequence(userSequence.length - 1);
}
let btns = document.querySelectorAll(".box");
for(btn of btns){
    btn.addEventListener("click" , buttonpress);
}

