  const menu=document.querySelector(".responsive-menu-conretner");
const menuicerik=document.querySelector(".menu-none-1");



const body=document.querySelector("body");
const menuCikis=document.querySelector(".menu-Cikis-1");

menu.addEventListener("click",e=>{
    
    menuicerik.style.display="block";
    menu.style.display="none";

    body.style.overflow="hidden"; 
   


})

menuCikis.addEventListener("click",e=>{
    
    menuicerik.style.display="none";
    menu.style.display="block";

    body.style.overflow="auto"; 
   

})


      var viewall=document.querySelector(".view-all");
      var postconterner=document.querySelector(".post-conterner");
      var post=document.querySelector(".post");
      
      var postcontent=document.querySelector(".post-content-1");
      var postcontent2=document.querySelector(".post-content-2");
      var postcontent3=document.querySelector(".post-content-3");
      var postcontent4=document.querySelector(".post-content-4");
      var clossall =document.querySelector(".close-all ");

    
   
    
      viewall.addEventListener("click",e=>{

  postcontent.style.display="block";
        postcontent2.style.display="block";
           postcontent3.style.display="block";
            postcontent4.style.display="block";
          post.style.height="auto";
       postconterner.style.height="auto";
      
       
   postconterner.classList.add("new");
   

        
   
         
           console.log("basıldı");

      clossall.style.display="block";
      viewall.style.display="none";

        

      })




      clossall.addEventListener("click",e=>{

      postcontent.style.display="none";
        postcontent2.style.display="none";
           postcontent3.style.display="none";
            postcontent4.style.display="none";
        
      
       
        postconterner.classList.add(".close-allreturn");
        postconterner.classList.remove("new");


   
         
           console.log("basıldı");

      clossall.style.display="none";
      viewall.style.display="block";

        

      })











      window.addEventListener('scroll',function(){
    var header=document.querySelector('.responsive-menu-conretner');
    header.classList.toggle('sticky',window.scrollY >0);

})