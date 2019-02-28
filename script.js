p1.onclick = function(){
    portfolioBar.className = 'portfolioBar-1';
}
p2.onclick = function(){
    portfolioBar.className = 'portfolioBar-2';
}
p3.onclick = function(){
    portfolioBar.className = 'portfolioBar-3';
}
listenScroll()
listentomouseonnavBar()
quitloading() 
function quitloading(){
    var welcome = document.getElementById('welcome')
    welcome.classList.remove('welcomeactive')
    console.log('loadingover')
}

function listenScroll () {
    document.onscroll = function navscroll (xxx) {
        var topHead = document.getElementById('topHead')
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
            let y = element.offsetTop
            window.scrollTo(0, y-70)
        }
    }
}
