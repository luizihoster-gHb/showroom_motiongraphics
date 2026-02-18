var _btnExit = document.getElementById("btn-exit"),
  _loadedImages = 0,
  tt,
  _imageArray = [
    "bg.jpg",
    "copy1_1.png",
    "copy2_1.png",
    "copy3_1.png",
    "copy4_1.png",
    "device1_complete.png",
    "device2_complete.png",
    "device4.png",
    "warnings.png",
    "icon.png",
    "cta.png"

  ],
  width = document.querySelector("#loader").offsetWidth,
  height = document.querySelector("#loader").offsetHeight

function loadImages() {
  for (var i = 0; i < _imageArray.length; i++) {
    var _tempImage = new Image();
    _tempImage.addEventListener("load", function () {
      _loadedImages++;
      if (_loadedImages == _imageArray.length) init();
    });
    _tempImage.src = "img/" + _imageArray[i];
  }
}

function init() {
  initAnimations();

  document.querySelector("#btn-exit").addEventListener("click", exits);
}

function initAnimations() {
  tt = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power3.out",
    },
  });

  tt.set('.banner', { display: 'block' })
    .set('#cta', { scale: 1, transformOrigin: '225px 150px' })
    .set(['#device1', '#device2'], { y: '+=300', })
	  .set('#device3', { y: '-=300', })

    .addLabel('f1', 0)
	  .to('#wave', { duration: 7.5, scale: 1.3,yoyo:true,repeat:1, ease: 'sine.inOut'}, 'f1')
    .from(".logo", { duration: 1, y: '+=4', opacity: 0, ease: 'power3.inOut', 'webkitFilter': 'blur(0px)' }, 'f1')
    .to('#icon', { duration: .35, scale:0.47,yoyo:true, repeat:1, ease: 'sine.inOut' }, '>')
    //.to('#icon', { duration: 1, rotation: -360, ease: 'back.out(.65)' }, '>')
    .call(floatDynamic,['#device1_container'],"f1")
    .call(floatDynamic,['#device2_container'],"f1")
    .call(floatDynamic,['#device3_container'],"f1")

    .addLabel('f2', 2)
    .to('.logo',{opacity:0},"f2")
    .from('.f1', { duration: .5, y: '+=4', alpha: 0, stagger:.1, ease: 'power3.inOut' }, 'f2+=.5')

    .addLabel('f3', 4)
    .to('.f1', { duration: .5, y: '-=4', alpha: 0, stagger:-.1, ease: 'power3.inOut' }, 'f3')
    .from('.f2', { duration: .5, y: '+=4', alpha: 0, stagger:.1, ease: 'power3.inOut' }, 'f3+=.5')
    .to('#device1', { duration: 1, y: '-=300', ease: 'power3.inOut' }, 'f3')
  

    .addLabel('f4', 7)
    .to('.f2', { duration: .5, y: '-=4', alpha: 0, stagger:-.1, ease: 'power3.inOut' }, 'f4')
    .to('#device1', { duration: .5, alpha: 0, ease: 'power3.inOut' }, '<')
    .from('.f3', { duration: .5, y: '+=4', alpha: 0, stagger:.1, ease: 'power3.inOut' }, 'f4+=.5')
    .to('#device2', { duration: 1, y: '-=300', ease: 'power3.inOut' }, 'f4')

    .addLabel('f5', 10)
    .to('.f3', { duration: .5, y: '-=4', alpha: 0, stagger:-.1, ease: 'power3.inOut' }, 'f5')
    .to('#device2', { duration: .5, alpha: 0, ease: 'power3.inOut' }, '<')
    .from('.f4', { duration: .5, y: '-=4', alpha: 0, stagger:.1, ease: 'power3.inOut' }, 'f5+=.5')
    .to('#device3', { duration: 1, y: '+=300', ease: 'power3.inOut' }, 'f5')

    .addLabel('f6', 12.5)
    .set("#icon",{scale:1,opacity:1,x:"-=365",y:"+=15"},'f6')
    .to('.f4', { duration: .5, y: '+=4', alpha: 0, stagger:-.1, ease: 'power3.inOut' }, 'f6')
    .to('#device3', { duration: .5, alpha: 0, ease: 'power3.inOut' }, 'f6')
    .to('#icon',{duration:.65,scale:1,x:"+=300",opacity:1,ease:"expo.inOut"},'f6+=.5')
    .from('#device4',{duration:.65,x:"+=300",ease:"expo.inOut"},'f6+=.5')
    //.to(['#icon'], { duration: .5, scale: .83, x: '+=3', y: '-=40', ease: 'none' }, 'f6+=.2')
    .to('#cta', { duration: .5, alpha: 1, ease: 'power3.inOut' }, 'f6+=1')
    .to('#cta', { duration: .25, scale: 1.03, yoyo: true, repeat: 1, ease: 'power1.out', rotation: 0.01, z: 0.01 }, 'f6+=2')
    .set(["#device1_container","#device2_container","#device3_container"],{autoAlpha:0},'>')

}

/*This function is dynamic and receives an element #id name*/
function floatDynamic(element){

  gsap.to(element,{y: "+=6",duration: 1.5,ease: 'sine.inOut',repeat: 9,yoyo: true})
  console.log(element);
}

function exits() {
  window.open(window.clickTag);
}