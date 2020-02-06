function about(e) {
    window.location.href="#about";
    e.preventDefault();
    e.stopPropagation(); 
}

function parts(e) {
    window.location.href="#part";
    e.preventDefault();
    e.stopPropagation(); 
}

function faq(e) {
    window.location.href="#faq";
    e.preventDefault();
    e.stopPropagation(); 
}
function popup() {
    const et = document.querySelector(".egg-text");
    et.style.display = "block";
    
}
function popout() {
    const et = document.querySelector(".egg-text");
    et.style.display = "none";
    
}

function bg() {
    const imb = document.querySelector(".party");
    imb.style.boxShadow  = "20px -20px white";
    imb.style.transition="box-shadow 0.3s ease-in-out";
    
  }
  
function bgout() {
    const imb = document.querySelector(".party");
    imb.style.boxShadow  = "0px 0px white";

}
  

window.onload=function(){
    const bodyCol =  document.getElementsByTagName("body");
    const head =  document.getElementsByTagName("header");
    const scroll =document.getElementById("myBar");
    const btt=document.querySelector(".button");
 
    const colors = ['#DC0707', '#0C07DC', '#F47229', '#000000'];
    for (i = 0; i < bodyCol.length; i++) {
        const col=colors[Math.floor(Math.random() * colors.length)];
        bodyCol[i].style.background = col;
        head[i].style.background = col;
        scroll.style.background = col;
        btt.style.background = col;
    }

    function getRandomPosition() {
        const w =   screen.width+200;
        const h = screen.height+700;
        const randomX = Math.floor(Math.random()*w);
        const randomY = Math.floor(Math.random()*h);
        return [randomX,randomY];
    }


    const eggBox = document.querySelectorAll('.egg-img');
    for(y=0;y<eggBox.length;y++){
        var xy = getRandomPosition();
        eggBox[y].style.top = xy[0]+ 'px';
        eggBox[y].style.left = xy[1]+ 'px';
    }
};


window.onscroll = function(ev) {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.height = scrolled + "%";

};



function enter(ele) {
    if(event.key === 'Enter') {
        alert(ele.value);        
    }
}
window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
      document.getElementById("eggy").remove();
      document.querySelector(".egg-text").remove();
    }
  });

