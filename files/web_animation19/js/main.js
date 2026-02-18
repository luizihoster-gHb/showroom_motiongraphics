var _btnExit = document.getElementById("btn-exit"),
  _loadedImages = 0,
  tt,
  _imageArray = [
    "copy1_1.png",
    "copy1_2.png",
    "copy1_3.png",
    "copy1_4.png",
    "copy2_1.png",
    "copy2_2.png",
    "copy3_1.png",
    "copy3_2.png",
    "logo.png",
    "bg1.jpg",
    "bg2.jpg",
    "cta.png"
  ],
  width,
  height

this.addEventListener("DOMContentLoaded", function () {
  for (var i = 0; i < _imageArray.length; i++) {
    var _tempImage = new Image();
    _tempImage.addEventListener("load", function () {
      _loadedImages++;
      if (_loadedImages == _imageArray.length) init();
    });
    _tempImage.src = "img/" + _imageArray[i];
  }
});

function init() {
  loadOffset();

  document.querySelector("#btn-exit").addEventListener("click", exits);
}

const loadOffset = () => {
  if (document.querySelector("#loader").offsetWidth > 0) {
    width = document.querySelector("#loader").offsetWidth
    height = document.querySelector("#loader").offsetHeight
    initAnimations()
  }
  else {
    setTimeout(() => {
      loadOffset()
    }, 1)
  }
}

function initAnimations() {
  tt = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power3.out",
    },
  });

  tt.set(".banner", { display: "block" })
  .set("#cta", { scale: 1.2, transformOrigin: "150px 202px" })
  .set('#gradient',{x:'-=330'})
  //.set('#',{'webkitFilter': 'blur(0px)' })

  .addLabel('f1', 0)
  .call(zoomImg,['#bg1'],"f1")
  //.from('.copy1', { duration: 1, x:`-=${width}`, ease: "power3.inOut", stagger:.1 }, "f1+=1" )
  .from('.copy1', { duration: 1, y:`+=4`,opacity:0, ease: "power3.inOut", stagger:.1 }, "f1+=1" )
  .from('#disclaimer',{opacity:0},">")
  //.from('#gradient',{ duration:14, x:`-=${width}`})
  .to('#gradient',{duration:2,x:'+=260'},"f1")
  .from('#logo',{ opacity:0, x:`-=${width}`},"f1+=.5")

  .addLabel('f2', 5.5)
  .to('.copy1',{duration:.5,y:'-=4',opacity:0,stagger:-.1},"f2")
  .to('#disclaimer',{opacity:0},"<")
  .from('.copy2', { duration: 1, y:`+=4`,opacity:0, ease: "power3.inOut", stagger:.1 }, "f2" )


  .addLabel('f3', 8.5)
  .call(zoomImg,['#bg2'],"f3")
  .to('#gradient',{duration:2,x:'+=70'},"f3")
  .from("#bg2",{opacity:0,'webkitFilter': 'blur(20px)'},"f3")
  .to("#bg1",{opacity:0,'webkitFilter': 'blur(20px)'},"f3")
  .to('.copy2',{duration:.5,y:'-=4',opacity:0,stagger:-.1},"f3")
  .from('.copy3', { duration: 1, y:`+=4`,opacity:0, ease: "power3.inOut", stagger:.1 }, "f3" )
  .from("#cta", {  scale: 1.1, opacity:0, ease: "back.out" }, 'f3')
  //bounce
  .to("#cta", {  scale: 1.05,duration:.35, ease: "sine.inOut" ,repeat:1,yoyo:true}, 'f3+=2.5')

}

/*This function is dynamic and receives an element #id name*/
function zoomImg(element){

  gsap.to(element,{scale: 1.15,duration: 6,ease: 'none'})
  console.log(element);
}

function exits() {
  window.open(window.clickTag);
}