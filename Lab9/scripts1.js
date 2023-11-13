 var date = new Date();


   var start = date;

   var stop = new Date();


   function formatTime(time) {

     var milliseconds = Math.floor(start.getMilliseconds());

     return milliseconds;}


   function stopTime() {


     var currentTime = date.getTime();


     var difference = stop.getTime() - start.getTime();



     alert("You have been on this page for : " + formatTime(difference));}
