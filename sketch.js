// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Global Variables
let winStatement = "";
let playerChoice = 0; 
let computerChoice = -1;
// 0 means the player has not chosen yet
// -1 means the computer has not chosen yet

let PC;
let QUESTION;
let ROCK;


function preload(){
    PC = loadImage('img/computer.jpg');
    QUESTION = loadImage('img/question.jpg');
    ROCK = loadImage('img/rock.jpg');
    // TODO find and load images for paper and    
    // scissors.

    
}

function setup() {
    createCanvas(600, 400);
    background(235);
}

function displayChoice(choice, x, y){
    if (choice == -1){
        image(PC, x, y, 100, 100);
    }
    else if (choice == 0){
        image(QUESTION, x, y, 100, 100);
    }
    // TODO Finish the displayChoice function  
    // for the other options

    
}

function draw() {
    background(235);
    textSize(25);
    text("Type r, p, or s to play Rock-Paper-Scissors", 50, 25);

    // Call displayChoice for the player
    displayChoice(playerChoice, 100, 150);
    // Call displayChoice for the computer
    displayChoice(computerChoice, 350, 150);
    

    determineWinner(playerChoice, computerChoice);
    text(winStatement, 50, 350);
}

function keyPressed(){
    // TODO Use selection to set the playerChoice
    // based on which key the user pressed.
    // to 1 for rock, 2 for paper or 3 for 
    // scissors.



    

    // TODO generate a random selection for 
    // the computerChoice.
    
    
}

function determineWinner(player, comp){
    // Use conitional statements to generate a
    // statement about who won.
    // Example "You win, rock crushes scissors"
    if( player < 1 || comp < 1){
        winStatement = "No winner yet."
    }
    // TODO Finish the determineWinner function
    // It should compare player then update
    // winStatement appropriately
    // Remember 1 is rock, 2 is paper and 
    // 3 is scissors
    // The || symbol means OR
    // The && symbol means AND


    
        
}