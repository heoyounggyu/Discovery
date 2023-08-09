(function(){

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



window.addEventListener('load',function(){
    init()
})


})();


