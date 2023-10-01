/*
    M3 Assignment02 - Part 1: Larger or Smaller?
    Date: 9/30/2023
    Author: Michael Gall
*/

//  VARIABLES
let firstNum = 0
let secondNum = 0

// DISPLAY THE NAME OF THIS PART OF THE ASSIGNMENT
// document.writeln("<h3>Larger or Smaller?</h3>")

// ASK USER FOR THEIR CUSTOMER TYPE AND INITIAL INVOICE TOTAL
firstNum = parseFloat(prompt("Enter your first number:"))
secondNum = parseFloat(prompt("Enter your second number:"))

// DISPLAY THE OUTCOME OF THE GAME TO THE USER VIA AN ALERT BOX
if (isNaN(firstNum) || isNaN(secondNum)) {
    alert("You must enter a number for both prompts.  Thank you.")
} else {

    // DISPLAY LARGER OF THE TWO NUMBERS
    if (firstNum > secondNum) {
        document.writeln(firstNum)
    } else if (secondNum > firstNum) {
        document.writeln(secondNum)
    } else {
        document.writeln("You entered the same number twice.  Click your browser's refresh arrow to try again.")
    }
}
