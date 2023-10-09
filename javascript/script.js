  // NAVMENU 
  // display style
  function toggleNavMenu() {
    var navmenu = document.getElementById("navmenu");
    if (navmenu.style.display === "none" || navmenu.style.display === "") {
        navmenu.style.display = "flex";
    } else {
        navmenu.style.display = "none";
    }
}
//EventListebeer
var menumovil = document.getElementById("menumovil");
menumovil.addEventListener("click", toggleNavMenu);

    
var closeLink = document.getElementById("close");
closeLink.addEventListener("click", function (event) {
    event.preventDefault(); 
    toggleNavMenu(); 
});