var y;
function myfunction(y,z) {
    var x = document.getElementById(y);
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.borderBottom = "solid";
        document.getElementById(z).style.borderBottom = "dotted";
    } else {
        x.style.display = "none";
        x.style.borderBottom = "none";
        document.getElementById(z).style.borderBottom = "none";
    }
}
function mytable(y,z)
{
    var x = document.getElementById(y);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
