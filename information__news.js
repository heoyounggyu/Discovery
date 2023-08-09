
$(function () {
		

	

   let tabContentBox=document.querySelector("#tab-content_box");

   tabContentBox.addEventListener('mousemove',function(e){
      document.querySelector('#slidephoto').style.top=`${e.clientY}px`;
      document.querySelector('#slidephoto').style.left=`${e.clientX}px`;
      document.querySelector('#slidephoto').style.transform=`translate(${-e.clientX*0.6}px,${-e.clientY*0.6}px)`
   })
   
   document.querySelector('#chainn_1').addEventListener('mousemove',function(){
       document.querySelector('#slidephotos').style.marginTop="0%"
       document.querySelector('#chainn_1').style.color="rgba(177,177,177)"
   })
   document.querySelector('#chainn_1').addEventListener('mouseleave',function(){
       document.querySelector('#chainn_1').style.color="initial";
   })
   document.querySelector('#chainn_2').addEventListener('mousemove',function(){
      document.querySelector('#slidephotos').style.marginTop="-71%"
      document.querySelector('#chainn_2').style.color="rgba(177,177,177)"
  })
  document.querySelector('#chainn_2').addEventListener('mouseleave',function(){
      document.querySelector('#chainn_2').style.color="initial";
  })
  
  document.querySelector('#chainn_3').addEventListener('mousemove',function(){
      document.querySelector('#slidephotos').style.marginTop="-142%"
      document.querySelector('#chainn_3').style.color="rgba(177,177,177)"
  })
  document.querySelector('#chainn_3').addEventListener('mouseleave',function(){
      document.querySelector('#chainn_3').style.color="initial";
  })
  
  document.querySelector('#chainn_4').addEventListener('mousemove',function(){
      document.querySelector('#slidephotos').style.marginTop="-214%"
      document.querySelector('#chainn_4').style.color="rgba(177,177,177)"
  })
  document.querySelector('#chainn_4').addEventListener('mouseleave',function(){
      document.querySelector('#chainn_4').style.color="initial";
  })
  document.querySelector('#chainn_5').addEventListener('mousemove',function(){
      document.querySelector('#slidephotos').style.marginTop="-285%"
      document.querySelector('#chainn_5').style.color="rgba(177,177,177)"
  })
  document.querySelector('#chainn_5').addEventListener('mouseleave',function(){
      document.querySelector('#chainn_5').style.color="initial";
  })
  
  document.querySelector('#chainn_6').addEventListener('mousemove',function(){
      document.querySelector('#slidephotos').style.marginTop="-356%"
      document.querySelector('#chainn_6').style.color="rgba(177,177,177)"
  })
  document.querySelector('#chainn_6').addEventListener('mouseleave',function(){
      document.querySelector('#chainn_6').style.color="initial";
  })
  
  
  
  
  });
  