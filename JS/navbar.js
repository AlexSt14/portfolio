window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementsByClassName("fa-house-user")[0].style.fontSize = "25px";
        document.getElementById("navbar").style.backgroundColor = "rgba(52, 58, 64, 1)";
    } else {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementsByClassName("fa-house-user")[0].style.fontSize = "25px";
        document.getElementById("navbar").style.backgroundColor = "rgba(52, 58, 64, 0.5)";
    }

}

