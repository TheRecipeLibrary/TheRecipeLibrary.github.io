function myFunction() {
   document.getElementById("test").innerHTML = "Try our fantastic recipes!";
}

$("#example-basic").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    autoFocus: true
});