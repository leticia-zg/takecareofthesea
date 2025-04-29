const hamburger = document.querySelector(".menu");

hamburger.onclick = function() {
    const nav = document.querySelector(".desktop"); 
    nav.classList.toggle("active");
    
    if (nav.classList.contains("active")) {
       document.querySelector(".menu").src = "./IMG/fechar-menu.png"; 
    } else {
        document.querySelector(".menu").src = "./IMG/menu-fechado.png";
    }
}

