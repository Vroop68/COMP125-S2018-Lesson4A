/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
let app = (function () {
    "use strict"

    //function scope variables


    // About Button Click event handler
    function AboutButtonClick() {
        console.log("About Button Clicked!");
    }

    function AboutButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }

    function AboutButtonOut(event) {
        event.currentTarget.style.opacity = 1.0;
    }

    function HomeContent() {
        let AboutButton = document.getElementById("AboutButton");

        AboutButton.textContent = "About";

        // About Button event listener
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AboutButtonOut);
    }

    function ReturnPI() {
        return Math.PI;
    }

    function AboutContent() {
        let myNumber = ReturnPI();
        console.log("My Funky Number: " + myNumber);

        let paragraph = document.getElementById("paragraph");

        let mySentence = "";

        paragraph.textContent = mySentence;
        
        /*let myArray = []; // means create empty array container

        myArray[0] = "hello world!"
        myArray[1] = 42;
        myArray[2] = true;*/

            //let myArray = new Array(); // equiv to let myAraay = [];

            let myArray = [

                {name: "Tom", age: 25},
                {name: "Bob", age: 35},
                {name: "Mike", age: 45},
                {name: "Juan", age: 55},
                {name: "Smyth", age: 65},
                
            ];

            myArray.push( {name: "Carol", age:15})
            myArray.unshift( {name: "Peter", age:25})
            
        let content = document.getElementsByClassName("content");
        console.log("myArray Length:" +myArray.length);
/* kiit type 1 for loop
        for(let index=0;index<myArray.length;index++){
            console.log(myArray[index].name)
        }
*/

        array.foreach(person=>{
            console.log(person.name);
        })
    }

    function Start() {
        // local variable
       let title = document.title;

        console.log("App Started!");
        console.log("----------------------------");
        console.log("Title: " + title);

        switch (title) {
            case "COMP125 - Home":
                HomeContent();
                break;

            case "COMP125 - About":
                AboutContent();
                break;

            default:
                break;

        return title;
        }
    }

    function Main() {
        title=Start();
    }

    //window.onload = Start;

    window.addEventListener("load", Start);

    return {

        title: document.title,
        myFavoriteNum: 42

    };
})();