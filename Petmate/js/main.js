function myFun() {
  var emailCheck = document.getElementById('emailCheck').value;
  var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (pattern.test(emailCheck)) {
    document.getElementById('message').innerHTML = "Your email will be entered into the petmate mailing list.you may unsubscribe at any time";
  } else {
    document.getElementById('message').innerHTML = "Please enter a valid email address.";
  }
}




function shopOpen() {
  document.getElementById("shopby").style.display = "block";
}

function shopClose() {
  document.getElementById("shopby").style.display = "none";
}

function suppClose() {
  document.getElementById("Support").style.display = "none";
}
function suppOpen() {
  document.getElementById("Support").style.display = "block";
}

function compOpen() {
  document.getElementById("Company").style.display = "block";
}

function compClose() {
  document.getElementById("Company").style.display = "none";
}

function AccOpen() {
  document.getElementById("Account").style.display = "block";
}

function AccClose() {
  document.getElementById("Account").style.display = "none";
}


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}