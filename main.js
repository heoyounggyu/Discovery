(function(){










// banner

var SliderBox__i = 0;

setInterval(function () {
	$(".slider-box").attr("data-index", ++SliderBox__i % 3);
}, 3000);

// one-for-one




// information__news

$(function () {
		

	



  window.addEventListener('mousemove',function(e){
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









let panoWrap=document.querySelector('.sj_panorama .pano_wrap');
let listWrap=panoWrap.querySelector('.list');
let item=listWrap.children;
console.log(item);
let listClone=null;
let itemWidth=item[0].offsetWidth; //이미지하나의 넓이
let itemLength=item.length;//10개
let listWidth=itemWidth * itemLength;//300px x 10 =3000px
let move =0;
//let controls=document.querySelector('.sj_panorama .controls');
let controls=panoWrap.parentElement.querySelector('.controls');
let timer;

// function init(){}
// var init=function(){}
// var init=()=>{}
let init=function(){
    panoWrap.style.width=listWidth*2+"px";
    listWrap.style.width=listWidth+"px";
    panoWrap.appendChild(listWrap.cloneNode(true))//listWrap를 복사하되 자식까지 포함하여 복사한다.
    listClone=panoWrap.children;
    //console.log(listClone)
    render();
    add();
    //event();
}
let render=function(){
    move +=1;
    //유사배열를 배열로 바꿈
    //console.log(Array.from(listClone))
    Array.from(listClone).forEach(function(clone){
        clone.style.transform=`translateX(${-move}px)`;
    })

  timer=window.requestAnimationFrame(render)
}

let add=function(){
    setInterval(function(){
    panoWrap.appendChild(listWrap.cloneNode(true))
    listClone=panoWrap.children;
    }, 10000);
}

// let event=function(){
//     controls.querySelector('.play_on').addEventListener('click',function(e){
//             e.preventDefault();
//           //  console.log(this)
//           if(this.classList.contains('active')){
//             this.classList.remove('active')
//             window.cancelAnimationFrame(timer)
//           }else{
//             this.classList.add('active')
//             render();
//           }
//     })
// }



window.addEventListener('load',function(){
    init()
})













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