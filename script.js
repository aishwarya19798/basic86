var dropdown = document.getElementById('dropdown')
var navlinks = document.getElementById("menu-links")
var close = document.getElementById("menu-close")

dropdown.addEventListener("click", function() {
	navlinks.classList.toggle("hide-mobile")

})

close.addEventListener("click", function(){
	navlinks.classList.toggle("hide-mobile")
})