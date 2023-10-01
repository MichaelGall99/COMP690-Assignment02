/*
    M3 Assignment02 - Part 2: The Word Translator
    Date: 9/30/2023
    Author: Michael Gall
    Language Code Resource:  https://www.andiamo.co.uk/resources/iso-language-codes/
*/

//  VARIABLES
let languageCode = ""
let promptText = ""

// DISPLAY THE NAME OF THIS PART OF THE ASSIGNMENT
document.writeln("<h3>The Word Translator</h3>")

// ASK USER FOR TO ENTER A LANGUAGE CODE
promptText = "Say \'Hello World\' in one of the following four (4) languages using one of these language codes:\n"
promptText += "- fr = French\n"
promptText += "- de = German\n"
promptText += "- es = Spanish\n"
promptText += "- en = English\n\n"
promptText += "Please enter one of the above four (4) language codes here:"
languageCode = prompt(promptText)

// DISPLAY HELLO IN THE LANGUAGE SELECTED
switch (languageCode.toLowerCase()) {
    case 'fr':
        document.writeln("\'Hello World\' translated in French is:  \'Bonjour le monde\'")
        break;
    case 'de':
            document.writeln("\'Hello World\' translated in German is:  \'Hallo Welt\'")
        break;
    case 'es':
        document.writeln("\'Hello World\' translated in Spanish is:  \'Hola Mundo\'")
        break;
    case 'en':
    default:
        document.writeln("\'Hello World translated in English is still \'Hello World\'")
        break;
}
