//Jason LI CISC 3140 TASK 3.3 JS Event Listeners
var inputField = document.getElementById("inputField"); //index file variables
var wordCountNum = document.getElementById("wordCountNum") //index file variables

function countWord(){ //function used to count words
    let userInput = inputField.value; 
    userInput=userInput.trim(); //Removes whitespace before and after text
    const words = userInput.split(" "); //String is split by delimiter of a whitespace

    if (words[0]==="") { //If there are no words in inputField sets to 0
        wordCountNum.innerText = 0;
    } else { //Otherwise the wordcount provides the number of words
        wordCountNum.innerText = words.length;
    }
}