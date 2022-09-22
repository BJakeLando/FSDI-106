function sayHello(){
    let message = "Hello There!";
    console.log(message);
}

function sayHi(name) {
    console.log("Hi " + name);
}

function sum(a,b) {

    let total = a + b;
    return total;
}

function testArray(){

    let numbers = [121,4,1,45,23,65,23,8,14,84,92,34,89,1,231,9,64];

    //access by index

    console.log(numbers[0]); //first position

    // add new elements
    numbers.push(99); // add 99 at the end
    
    //replace an element
    numbers[0] = 42; // will remove 121 and add 42

    // travel the array
    for( let i = 0; i < numbers.length; i++ ) { // loop 0 to 4 stops at 5. Always do one more than the count
        console.log(numbers[i]);

    }

    // 1- the number of elements in the array
    console.log(numbers.length);

    //2- the sum of all the numbers in the array
   let total = 0;
   // travel the array
   for( let i = 0; i < numbers.length; i++ ){   
    total = total + numbers[i];
   } // end of for loop
    console.log("The total is: " + total);  

}

function testArray2 () {
    //console log numbers 0 to 20
    // except 7 and 13
    for( let i = 0;i < 21; i++ ){
        if (i != 7 && i != 13){
           console.log(i);
        }
    }
}



// rest of the code goes above this line
function init() {
    //at this point all the html has been rendered
console.log("Intro Page loaded");


    sayHello(); // shoulde console log: "Hello There!"

    sayHi("Brandon"); // shoulde console log: "Hi your name"
    
    let result = sum(21,21);
    console.log(result); //send to IRS// print a report

    testArray(); //function needs to be invoked to execute

    testArray2();
}


// when the browser finish, executte the function
window.onload = init;

