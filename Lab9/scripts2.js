var exactDate = new Date();

var loadTime =exactDate.getTime()

console.log("Page load start")

var myAge = prompt("What is your age?");

console.log(myAge);


console.log(exactDate);
console.log("Pull pices from exactDate");


var year =exactDate.getFullYear()

console.log("Year:" +year)


var diff = year - myAge

console.log(diff)


function output()
{document.getElementById("YEARHERE").innerHTML = diff;
}


alert(diff)
