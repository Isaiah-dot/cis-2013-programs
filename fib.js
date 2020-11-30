//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
};

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intNumber = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validates user's input (intCount is a number and intCount is not less than 2 or intCount not greater than 100)
    while(intNumber < 2 || isNaN(intNumber) || intNumber >= 100)
      {
        alert("Invalid number!! Try again."));
      }
	
	var i=0;  // sets the first number in the Fibonacci series to 0
	var j=1;  //sets the second number in the Fibonacci series to 1
	var k;    //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = "0 1 ";//initialize the Fibonacci series output to include the first two numbers

    intCount = 2; 
	// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM
    
    
    while (intCount <= intNumber)
    {
        k = i + j;  //to set the next fib number
        i=j; // sets i to j
        j=k; // sets j to k
        stringOutput = stringOutput + k; // adds k to the string output
        intCount++; // increases the count so the loop can continue or exit
    }
	$("output").value = stringOutput;
};

window.onload = function () 
{
    $("total_fib").value = ""; // gets the value that is entered
    $("output").value = ""; // gets the output 
    $("generate").onclick = generate; //runs the generate function when clicked
};  
