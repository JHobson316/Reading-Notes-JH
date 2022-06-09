"use strict"
// Imma be honest, I need some way to relax so I'm making it video game questions.
//function GuessingGame(){
//    alert("Hello! It seems like you want to play a game.");
//    let User = prompt("First off, what's your name?");
//    alert("Alright, " + User + "! All you have to do to answer these questions is type 'y' if you think the statement is true or type 'n' if you thin that it's false. Let's get to the questions!");
//    let Answer1 = prompt("Nintendo's flagship character, Mario, was initially named Jumpman.");
//    let Answer1L = Answer1.toLowerCase(string);
//    if (Answer1L == "y"){
//        console.log("correct");
//    }
//    else if (Answer1L == "n"){
//        console.log("incorrect");
//    }
//    let Answer2 = prompt("Sony bought Bungie Studios in 2022 for $4.8 Billion.");
//    let Answer2L = Answer1.toLowerCase(string);
//   if (Answer2L == "y"){
//        console.log("incorrect");
//    }
//   else if (Answer2L == "n"){
//        console.log("correct");
//    }
//    let Answer3 = prompt("Call of Duty: Modern Warfare 2 featured a controversial mission named 'No German.'");
//   let Answer3L = Answer1.toLowerCase(string);
//    if (Answer3L == "y"){
//        console.log("incorrect");
//    }
//   else if (Answer3L == "n"){
//        console.log("correct");
//    }
//    let Answer4 = prompt("In Bungie's Game, Destiny 2, a gun named 'Telesto' is known by the community for repeatedly breaking the game.");
//    let Answer4L = Answer1.toLowerCase(string);
//    if (Answer4L == "y"){
//        console.log("correct");
//    }
//    else if (Answer4L == "n"){
//        console.log("incorrect");
//    }
//    let Answer5 = prompt("I'm glad that I'm done with this.");
//    let Answer5L = Answer1.toLowerCase(string);
//    if (Answer5L == "y"){
//        console.log("correct");
//    }
//    else if (Answer5L == "n"){
//      console.log("incorrect");
//    }
//}
// START HERE This function acts as an introduction once the user presses the button
let points = 0;
function GameIntro(){
    alert("Hello! It seems like you want to play a game.");
    //This prompt asks the user to input their name
    let User = prompt("First off, what's your name?");
    // Name is used in the next alert message
    alert("Alright, " + User + "! All you have to do to answer these questions is type 'y' if you think the statement is true or type 'n' if you thin that it's false. Let's get to the questions!");
    q1();
}
function q1(){
    // The prompt asks for the user to input y or n. If the input matches one of these, 
    let Answer1 = prompt("Nintendo's flagship character, Mario, was initially named Jumpman.");
    let Answer1L = Answer1.toLowerCase();
    if (Answer1L == "y"){
        console.log("correct");
        let points = points++;
        alert(points); 
        q2();
    }
    else if (Answer1L == "n"){
        console.log("incorrect");
        q2();
    }
    else {
        q1();
    }
}
function q2(){
    let Answer2 = prompt("Sony bought Bungie Studios in 2022 for $4.8 Billion.");
    let Answer2L = Answer2.toLowerCase();
    if (Answer2L == "y"){
        console.log("incorrect");
        q3();
    }
    else if (Answer2L == "n"){
        console.log("correct");
        q3();
    }
    else {
        q2();
    }
}
function q3(){
    let Answer3 = prompt("Call of Duty: Modern Warfare 2 featured a controversial mission named 'No German.'");
    let Answer3L = Answer3.toLowerCase();
    if (Answer3L == "y"){
        console.log("incorrect");
        q4();
    }
    else if (Answer3L == "n"){
        console.log("correct");
        q4();
    }
    else {
        q3();
    }
}
function q4(){
    let Answer4 = prompt("In Bungie's Game, Destiny 2, a gun named 'Telesto' is known by the community for repeatedly breaking the game.");
    let Answer4L = Answer4.toLowerCase();
    if (Answer4L == "y"){
        console.log("correct");
        q5();
    }
    else if (Answer4L == "n"){
        console.log("incorrect");
        q5();
    }
    else {
        q4();
    }
}
function q5(){
    let Answer5 = prompt("I'm glad that I'm done with this.");
    let Answer5L = Answer5.toLowerCase();
    if (Answer5L == "y"){
        console.log("correct");
    }
    else if (Answer5L == "n"){
        console.log("incorrect");
    }
    else {
        q5();
    }
}