var exactDate = new Date();

var startTime =exactDate.getTime()


function StopTime()
{console.log("user pressed the Stop time button");
document.getElementById("DATE").innerHTML = year+"/"+month+"/"+date;}




console.log(exactDate);
console.log("Pull pices from exactDate");


var month =exactDate.getMonth() +1;// to avoid 0 based indexing error
var year =exactDate.getFullYear()
var date =exactDate.getDate()




console.log("Month:" +month)
console.log("Year:" +year)
console.log("Date:" +date)





exactDate = new Date();
var endTime = exactDate.getTime();
console.log("page log took" +(endTime-startTime)+"ms")


var myalert = alert("endTime");
console.log(myalert);
