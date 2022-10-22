var listitems = document.querySelectorAll(".shuffle li");
var listbox = document.querySelectorAll(".box");

listitems.forEach(function(li){
    li.addEventListener("click",function(){
        listitems.forEach(function(li){
            li.className=""; })  //can be set to change it
            
            // or li.classlist.remove("active")// can add remove class
       
        li.className="active";

    
         listbox.forEach(function(box){
        box.style.display = "none"; })

        

       document.querySelectorAll(li.dataset.cat).forEach(function(el){
        
        el.style.display = "block";})
           
    
    })

   
});

var toggleMenu = document.querySelector("nav .toggle-menu");
var toggleList = document.querySelector("nav ul");

toggleMenu.addEventListener("click" , function(){
    
    if(toggleList.style.display=="none"){
        toggleList.style.display="flex";
    } else{
        toggleList.style.display="none";
    }

})


