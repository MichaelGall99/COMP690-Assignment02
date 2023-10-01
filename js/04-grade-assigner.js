/*
    M3 Assignment02 - Part 4: The "Grade Assigner" Application
    Date: 9/30/2023
    Author: Michael Gall
*/

//  VARIABLES
let inputNum = 0

// DISPLAY THE NAME OF THIS PART OF THE ASSIGNMENT
// document.writeln("<h3>The \"Grade Assigner\" Application</h3>")

// ASK USER FOR TO ENTER THEIR CHOICE:  HEADS OR TAILS
inputNum = parseInt(prompt("Please enter a number between 1 and 100:"))

if (inputNum < 1 || inputNum > 100 || isNaN(inputNum)) {
    console.error("You must enter a number between 1 and 100 to use The \"Grade Assigner\" Application.")
} else {

    // DISPLAY A LETTER GRADE FOR THE NUMBER ENTERED
    switch (true) {
        case (inputNum >= 90 && inputNum <=100):
            console.log("You received a A")
            break;
        case (inputNum >= 80 && inputNum <=89):
            console.log("You received a B")
            break;
        case (inputNum >= 70 && inputNum <=79):
            console.log("You received a C")
            break;
        case (inputNum >= 60 && inputNum <=69):
            console.log("You received a D")
            break;
        default:
            console.log("You received a F")
            break;
    }
}
