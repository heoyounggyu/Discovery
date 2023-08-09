


(function(){
    var SliderBox__i = 0;

    setInterval(function () {
        $(".slider-box").attr("data-index", ++SliderBox__i % 3);
    }, 3000);

    filterSelection("all")
    
    function filterSelection(c){
      //console.log("실행")
      let x=document.getElementsByClassName("column");
      if(c=="all"){c=""}
      for(let i=0; i< x.length; i++){
        //console.log("최초:" + x[i].className)
        w3RemoveClass(x[i],"show");
       if (x[i].className.indexOf(c) > -1) {w3AddClass(x[i], "show")};
      }
    }
    
    function w3AddClass(element,name){
      let arr1;
      arr1=element.className.split(" ");
      //console.log("arr1 : " + arr1)
      //arr2=name.split(" ");//띄워쓰기부분으로 나누어서 배열로 표현한다
        if(arr1.indexOf(name) == -1){element.className += " " + name}
        //console.log("arr1*** : " + arr1)
    }
    
    function w3RemoveClass(element,name){
      //show클래스 지우기
      let arr1;
     
      arr1=element.className.split(" ")//console.log(arr1)//['column', 'cars']배열형태로
      //console.log("지금은:"+arr1)
      for(let i=0; i<1; i++){
        while(arr1.indexOf(name)>-1){
          arr1.splice(arr1.indexOf(name),1);//index번호로부터 하나 없애기
        }
      }
      element.className=arr1.join(" ")  //item사이사이에 띄워쓰기
    }
    
      //splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
      //.splice(4, 1); index번호 4 하나를 지운다
    
      //버튼 클래스이동
      var btnContainer=document.getElementById("myBtnContainer");
      var btns = btnContainer.getElementsByClassName('btn');
    
      for (let i=0; i<btns.length; i++){
        btns[i].addEventListener("click",function(){
          var current = document.getElementsByClassName("active");
          current[0].classList.remove("active");
          this.classList.add("active")
    
        })
      }
    
    
    
    })();