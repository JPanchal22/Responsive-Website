let hamburger_icon = document.querySelector(".hamburger-menu"); 
let navbar = document.querySelector(".navbar"); 
let navlist = document.querySelector(".nav-list"); 
let right_nav = document.querySelector(".right-nav"); 

hamburger_icon.addEventListener("click", ()=>{
	navbar.classList.toggle("resp-navbar-height");
	navlist.classList.toggle("resp-visibility");
	right_nav.classList.toggle("resp-visibility");
})