/* intro */
var myVar;
        
function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("wrapper").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  document.getElementById("myDiv2").style.display = "block";
  document.getElementById("myDiv3").style.display = "block";
  document.getElementById("myDiv4").style.display = "block";
  document.getElementById("myDiv5").style.display = "block";
  document.getElementById("myDiv6").style.display = "block";
}
/* konec intro */

/* navbar a backtotop button */

window.onscroll = function() {scrollFunction()};
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
  
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "-30px";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* konec navbar a backtotop button */

