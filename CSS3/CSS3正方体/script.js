
    function rotate(){
        var content = document.getElementById("content");
        var rotexspan = document.getElementById("rotax-span");
        var roteyspan = document.getElementById("rotay-span");
        var rotezspan = document.getElementById("rotaz-span");
        
        var rotex = document.getElementById("rotatex").value;
        var rotey = document.getElementById("rotatey").value;
        var rotez = document.getElementById("rotatez").value;
        
       
        
        content.style.transform="rotateX("+rotex+"deg) rotateY("+rotey+"deg) rotate("+rotez+"deg)"; 
        rotexspan.innerHTML=rotex;
        roteyspan.innerHTML=rotey;
        rotezspan.innerHTML=rotez;
    }
