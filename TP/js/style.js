function checkAge() {
    let age = prompt("Please enter your age:");
  
        if (age >= 25) {
        alert("Age is just a number, you are adorable!");
        } else if (age <= 25){
        alert("You are young and must enjoy life!");
        }
        else{
            alert("Error, please try again.")
        }
    }

function checkNum() {
    let num = prompt("Please enter a number:");

        if (num < 100) {
        alert("You entered a number less than 100.");
        } else {
        alert("You entered a number 100 or greater.");
        }
    }
function printNumbers() {
    for (let i = 0; i <= 30; i++) {
        console.log(i);
        }
        alert("Please view console");    
        
    }
function printEvenNumbers() {
        for (let i = 0; i <= 40; i += 2) {
          console.log(i);
        }
        alert("Please view console");  
      }
function printMultiplesOfThree() {
    for (let i = 40; i >= 10; i--) {
        if (i % 3 === 0) {
        console.log(i);
        }
        }
        alert("Please view console");     
    }