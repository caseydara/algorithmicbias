// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// the sticky class to the navbar when you reach its scroll position.Remove "sticky"
//when you leave the scroll position

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        document.getElementById("pleasework").style.color = "blue"
        document.getElementById("navbar").style.marginLeft = "0%"
        document.getElementById("navbar").style.marginRight = "0%"
    } else {
        navbar.classList.remove("sticky");
        document.getElementById("pleasework").style.color = "pink"
        document.getElementById("navbar").style.marginLeft = "11%"
        document.getElementById("navbar").style.marginRight = "11%"
    }
}