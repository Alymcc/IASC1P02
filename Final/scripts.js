

window.onload = Intromusic;
window.onload = updateTime;

setInterval(updateTime, 1000);

function updateTime() {
  var date = new Date();
  var dateTime = date.toLocaleString();
  document.getElementById("datetime").innerHTML = dateTime;
}

  function Intromusic() {
    var audio = document.getElementById("myAudio");
    audio.load();
    audio.play();
  }

function popUp() {
  var message = "You found our secret easter egg!!! Well done!!!";
  var w = window.innerWidth;
  var h = window.innerHeight;
  var left = (w - 300) / 2;
  var top = (h - 200) / 2;
  window.open("", "Easter Egg", "width=300, height=200, left=" + left + ", top=" + top).document.write(message);
}

function changeText() {
  var button = document.getElementById("myButton");
  button.innerHTML = "Coming Soon";
}

function changeText2() {
  var button2 = document.getElementById("myButton2");
  button2.innerHTML = "Coming Soon";
}

function changeText3() {
  var button3 = document.getElementById("myButton3");
  button3.innerHTML = "Coming Soon";
}

function showName(img) {
  var name = img.alt;
  var span = document.createElement("span");
  span.id = "name";
  span.className = "name";
  span.textContent = name;
  document.body.appendChild(span);
}

function hideName(img) {
  var span = document.getElementById("name");
  document.body.removeChild(span);
}

function showName2(img) {
  var name2 = img.alt;
  var span = document.createElement("span");
  span.id = "name2";
  span.className = "name2";
  span.textContent = name2;
  document.body.appendChild(span);
}

function hideName2(img) {
  var span = document.getElementById("name2");
  document.body.removeChild(span);
}

function showName3(img) {
  var name3 = img.alt;
  var span = document.createElement("span");
  span.id = "name3";
  span.className = "name3";
  span.textContent = name3;
  document.body.appendChild(span);
}

function hideName3(img) {
  var span = document.getElementById("name3");
  document.body.removeChild(span);
}
