var currentGrowth = 0;
setInterval(function(){
   if(currentGrowth<100){
       currentGrowth++;
       document.querySelector("#center h3").textContent = currentGrowth+"%";
       document.querySelector("#progress").style.width = currentGrowth+"%";
    
   }
},100);