// Get the current date and time

   var date = new Date();



   // Get the start and end times of the alert

   var startTime = date;

   var endTime = new Date();



   // Create a function to format the time as mm:ss

   function formatTime(time) {

     var milliseconds = Math.floor(startTime.getMilliseconds());

     return milliseconds;

   }



   // Create a function to display the alert

   function stopTime() {

     // Get the current time in milliseconds

     var currentTime = date.getTime();



     // Calculate the difference between the start and end times in milliseconds

     var difference = endTime.getTime() - startTime.getTime();



     // Display the alert with the formatted time

     alert("You have been on this page for : " + formatTime(difference));

   }
