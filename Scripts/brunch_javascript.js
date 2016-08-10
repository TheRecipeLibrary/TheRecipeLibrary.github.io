function myFunction() {
   document.getElementById("test").innerHTML = "Paragraph changed.";
}

$("#example-basic").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    autoFocus: true
});