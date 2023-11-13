// Define a function to add two numbers

  function addNumbers() {

    // Get the values of the input boxes

    var num1 = document.getElementById("num1").value;

    var num2 = document.getElementById("num2").value;



    // Convert the values to numbers

    num1 = Number(num1);

    num2 = Number(num2);



    // Calculate the sum of the numbers

    var sum = num1 + num2;

    output.innerHTML = sum;}
