document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("open-profile").addEventListener("click", function(event) {
        event.preventDefault(); 
        var profile = document.getElementById("mini-profile");
        profile.style.display = "flex"; 
    });

    document.getElementById("close-profile").addEventListener("click", function() {
        var profile = document.getElementById("mini-profile");
        profile.style.display = "none"; 
    });


    window.addEventListener("click", function(event) {
        var profile = document.getElementById("mini-profile");
        if (event.target === profile) {
            profile.style.display = "none"; 
        }
    });
});
document.getElementById("open-profile").onclick = function() {
    document.getElementById("mini-profile").style.display = "block";
}
document.getElementById("close-profile").onclick = function() {
    document.getElementById("mini-profile").style.display = "none";
}


function toggleMenu() {
    var navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}
