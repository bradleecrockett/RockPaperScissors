# Rock Paper Scissors

This project is designed to have you practice  using selection (if-else statements)

In completing this assignement, you will also learn how to load and display images.

The program should display the winner at the bottom of the screen.

As soon as the user presses r, p or s, the program should switch to the appropriate rock, pape or scissors image. The program should also generate a random value for the computer choice, and switch the computer to that image.

Finally the program needs to determine who the winner is and generate an appropriate response at the bottom of the screen.

For extra credit you can add a score tracker to keep track of wins, ties and losses.

You could also expand the program to cover Rock Paper Scissors Lizzard Spock.

## Grading

|Requirement | Possible | 
|---|:---:|
|Key presses switch the player image and the computer choice. Only r,p,s trigger changes. | 2 |
|The player can switch correctly to R/P/S | 3 |
|A random choice is generated and displayed for the computer. | 3 |
|The win message at the bottom correctly displays who won the game | 7 |
|**Extra Credit**|
|Win/Loss/Tie Tracking and display | 2 |
|Expand to Rock paper scissors lizard spock | 3 |
|**Total**| 15 |

RPSLS - explanation - https://youtu.be/6s9k5rwBWB4?t=38 


```javascript
// Name: 

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
    //     3 is scissors
    // The || symbol means OR
    // The && symbol means AND




}
```