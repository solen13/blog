const menu=document.querySelector(".responsive-menu");
const menuicerik=document.querySelector(".menu-none");
const res=document.querySelector(".responsive-nav-menu");
const body=document.querySelector("body");
const menuCikis=document.querySelector(".menu-Cikis");

menu.addEventListener("click",e=>{
    
    menuicerik.style.display="block";

    body.style.overflow="hidden"; 

})

menuCikis.addEventListener("click",e=>{
    
    menuicerik.style.display="none";

    body.style.overflow="auto"; 

})