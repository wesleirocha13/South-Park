
window.onscroll = function() {rolar()};

function rolar() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
		
        document.getElementById("seta").className = "aparece";
		
    } else {
        document.getElementById("seta").className = "";
    }
}