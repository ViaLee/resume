
portrolioBar() //作品集滚动条
listenScroll()  //页面滚动事件
listentomouseonnavBar()  //导航条鼠标监听
quitloading()    //loading页面


// ---------------------------------------------------
function portrolioBar () {
    p1.onclick = function(){
        portfolioBar.className = 'portfolioBar-1';
    }
    p2.onclick = function(){
        portfolioBar.className = 'portfolioBar-2';
    }
    p3.onclick = function(){
        portfolioBar.className = 'portfolioBar-3';
    }
}
function listenScroll () {
    // document.onscroll = function navscroll (xxx) {
    window.onscroll = function navscroll (xxx) {
        highNightLi()
        listenNavBar()
    }
}
function quitloading(){
    var welcome = document.getElementById('welcome')
    welcome.classList.remove('welcomeactive')
    console.log('loadingover')
}
function highNightLi(){
    let targetElement = document.querySelectorAll('[data-x]')
    let minindex = 0
    for(var i=1;i<targetElement.length;i++){
        var x = Math.abs(targetElement[i].offsetTop-window.scrollY)
        var y = Math.abs(targetElement[minindex].offsetTop-window.scrollY)
        // console.log()
        if(x<y){
            minindex = i
        }
        // var top1 = Math.abs(targetElement[0].offsetTop-window.scrollY)
        // var top2 = Math.abs(targetElement[1].offsetTop-window.scrollY)
        // var top3 = Math.abs(targetElement[2].offsetTop-window.scrollY)
        // var x=top1
        //     if(top2<x){
        //         if(top3<x){
        //             x=top3
        //             console.log('top3')
        //         } else {
        //             x=top2
        //             console.log('top2')
        //         }
        //     }else{console.log('top1')}
    }
    // console.log(minindex)
    let targetId = targetElement[minindex].id
    // let list = document.querySelectorAll('.navBar > ul > li > a')
    // if(list[0].getAttribute('href') === '#'+ targetId)
    let a = document.querySelector('a[href="#'+targetId+'"]')
    var list = a.parentNode.parentNode.childNodes
    for(let i=0;i<list.length;i++){
        if(list[i].tagName == 'LI'){
        list[i].classList.remove('active')
        }
    }
     a.parentNode.classList.add('active')
}
function listenNavBar () {
    let topHead = document.getElementById('topHead')
    let list = document.querySelectorAll('#topHead .navBar li > a')
//    console.log(list)
    if(window.scrollY > 0){
        topHead.classList.add('navScroll')
        for(let i =0;i<7;i++){
            list[i].classList.add('navBarfont')
        }
    }else if(window.scrollY==0){
        topHead.classList.remove('navScroll')
        for(let i =0;i<7;i++){
            list[i].classList.remove('navBarfont')
        }
    }
}

function listentomouseonnavBar () {
    let list = document.querySelectorAll('.navBar > ul > li')
    for(let i=0;i<list.length;i++){
        let element = list[i].lastElementChild
        list[i].onmouseenter = function () {
            // list[i].classList.add('navBarbottom')
            if(element.tagName==='UL'){
                element.classList.add('navBarActive')
            }
        }
        list[i].onmouseleave = function () {
            // list[i].classList.remove('navBarbottom') 只能从上往下过渡，要求是从左往右
            if(element.tagName==='UL'){
                element.classList.remove('navBarActive')
            }
        }
        list[i].onclick = function (x) {
            x.preventDefault()
            let href = x.target.getAttribute('href')
            // console.log(list[i].offsetTop)   //这获取的是navBar离顶部的距离，不可
            let element = document.querySelector(href)   //querySelector和querySelectorAll的区别
            let y = element.offsetTop          //元素离页面top的距离
            // console.log(y)
            scrollAnimation(y)

            // let targetElement = document.querySelectorAll(['data-x'])
            // console.log(elementtop)
        }
    }
}
function scrollAnimation (targettop) {
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);
    let starttop = window.scrollY
    let currenttop = targettop -70
    let t = Math.abs((currenttop - starttop)*1.5)
    let coords = {y: starttop }; // Start at
    let tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
        // .to({ y: currenttop }, （top/100）*1000) // 到达所有地点的时间都是1s，不能做到全部匀速
        .to({ y: currenttop }, t)
        .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
        .onUpdate(function() { // Called after tween.js updates 'coords'.
            // Move 'box' to the position described by 'coords' with a CSS translation.
            // console.log(coords.y)
            window.scrollTo(0, coords.y)
        })
        .start(); // Start the tween immediately.

}
