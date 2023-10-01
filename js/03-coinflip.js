/*
    M3 Assignment02 - Part 3: The "Coin Flip" Game
    Date: 9/30/2023
    Author: Michael Gall
*/

//  VARIABLES
let coinFlip = Math.round(Math.floor(Math.random() * 10))             // returns a random number 0-9
let choice

// DISPLAY THE NAME OF THIS PART OF THE ASSIGNMENT
// document.writeln("<h3>The \"Coin Flip\" Game</h3>")

// ASK USER FOR TO ENTER THEIR CHOICE:  Heads of Tails
choice = prompt("Please enter Heads or Tails:")

// DISPLAY THE OUTCOME OF THE GAME TO THE USER VIA AN ALERT BOX
if (choice.toUpperCase() != "HEADS" && choice.toUpperCase() != "TAILS") {
    alert("You must enter \'Heads\' or \'Tails\' (game is not case-sensitive)")
} else {
    
    if (coinFlip <= 4) {                                                   // Heads
        if (choice.toUpperCase() == "HEADS") {
            alert("The filp was heads and you chose heads...you win!")
        } else {
            alert("The filp was heads but you chose tails...you lose!")
        }    
    } else {                                                               // Tails
        if (choice.toUpperCase() == "TAILS") {
            alert("The filp was tails and you chose tails...you win!")
        } else {
            alert("The filp was tails but you chose heads...you lose!")
        }
    }
}
