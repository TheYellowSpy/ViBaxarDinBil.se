function baxa() {
    document.getElementById("vanta").innerHTML = "Vänta";
    document.getElementById("vanta").style.opacity = 1;
    setTimeout(function() {
        document.getElementById("vanta").innerHTML = "<b> Baxad! </b>";
    }, 3000);
}