var _btnExit = document.getElementById("btn-exit"),
  _loadedImages = 0,
  tt,
  _imageArray = [
    "bg.jpg",
    "copy1_1.png",
    "copy1_2.png",
    "copy2_1.png",
    "copy2_2.png",
    "copy3_1.png",
    "copy4_1.png",
    "copy5.png",
    "device1.png",
    "device2.png",
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
    .set('.box', { y: '-=300' })
    .set('#cta', { scale: 1, transformOrigin: '196px 165px' })
    .set(['#device1', '#device2'], { y: '+=250', })
    .set('#device3', { y: '-=250', })

    .addLabel('f1', 0)
    .to('#wave', { duration: 7.5, scale: 1.3, yoyo: true, repeat: 1, ease: 'sine.inOut' }, 'f1')
    .from(".logo", { duration: 1, y: '+=4', opacity: 0, ease: 'power3.inOut', 'webkitFilter': 'blur(0px)' }, 'f1')
    //.to('#icon', { duration: .35, scale: 0.44, yoyo: true, repeat: 1, ease: 'sine.inOut' }, '>')
    .to('#iqos', { opacity: 0 }, ">")
    .to('#icon', { duration: .7, scale: 5, ease: 'sine.inOut' }, '>-=.4')
    .call(floatDynamic, ['#device1_container'], "f1")
    .call(floatDynamic, ['#device2_container'], "f1")
    .call(floatDynamic, ['#device3_container'], "f1")

    .addLabel('f2', 1.5)
    //.to('.logo', { opacity: 0 }, "f2")
    .from('.f1', { duration: .5, y: '+=4', alpha: 0, stagger: .1, ease: 'power3.inOut' }, 'f2+=.25')

    .addLabel('f3', 4)
    .to('.f1', { duration: .5, y: '-=4', alpha: 0, stagger: -.1, ease: 'power3.inOut' }, 'f3')
    .from('.f2', { duration: .5, y: '+=4', alpha: 0, stagger: .1, ease: 'power3.inOut' }, 'f3+=.5')
    .to('#device1', { duration: 1, y: '-=250', ease: 'power3.inOut' }, 'f3')


    .addLabel('f4', 7)
    .to('.f2', { duration: .5, y: '-=4', alpha: 0, stagger: -.1, ease: 'power3.inOut' }, 'f4')
    .to('#device1', { duration: .5, alpha: 0, ease: 'power3.inOut' }, '<')
    .from('.f3', { duration: .5, y: '+=4', alpha: 0, stagger: .1, ease: 'power3.inOut' }, 'f4+=.5')
    .to('#device2', { duration: 1, y: '-=250', ease: 'power3.inOut' }, 'f4')

    .addLabel('f5', 10)
    .to('.f3', { duration: .5, y: '-=4', alpha: 0, stagger: -.1, ease: 'power3.inOut' }, 'f5')
    .to('#device2', { duration: .5, alpha: 0, ease: 'power3.inOut' }, '<')
    .from('.f4', { duration: .5, y: '-=4', alpha: 0, stagger: .1, ease: 'power3.inOut' }, 'f5+=.5')
    .to('#device3', { duration: 1, y: '+=250', ease: 'power3.inOut' }, 'f5')



    .addLabel('f6', 12.5)
    //.set("#icon", { scale: 1, opacity: 1, x: "-=357", y: 5 }, 'f6')
    .set("#icon", { scale: 6, opacity: 1, x: "-=73", y: 10 }, 'f6')
    .to('.f1', { duration: .5, y: '-=4', alpha: 0, stagger: -.1, ease: 'power3.inOut' }, 'f6')
    .to('.f4', { duration: .5, y: '+=4', alpha: 0, stagger: -.1, ease: 'power3.inOut' }, 'f6')
    .to('#device3', { duration: .5, alpha: 0, ease: 'power3.inOut' }, 'f6')
    .to('.box', { duration: 1, scale: 1, y: "0", ease: "elastic.inOut(1,1.7)", stagger: .2 }, 'f6+=.3')
    .to('#icon', { duration: .7, scale: 1, opacity: 1, ease: "sine.inOut" }, 'f6+=.4')
    .from('#device4', { duration: .65, x: "+=300", ease: "expo.inOut" }, 'f6+=.8')
    .from('.f5', { duration: .5, y: '-=4', alpha: 0, stagger: .1, ease: 'power3.inOut' }, 'f6+=.8')
    .to('#cta', { duration: .5, alpha: 1, ease: 'power3.inOut' }, 'f6+=1')
    .to('#cta', { duration: .25, scale: 1.03, yoyo: true, repeat: 1, ease: 'power1.out', rotation: 0.01, z: 0.01 }, 'f6+=2')
    .set(["#device1_container", "#device2_container", "#device3_container"], { autoAlpha: 0 }, '>')

}

/*This function is dynamic and receives an element #id name*/
function floatDynamic(element) {

  gsap.to(element,{y: "+=6",duration: 1.5,ease: 'sine.inOut',repeat: 9,yoyo: true})
  console.log(element);
}

function exits() {
  window.open(window.clickTag);
}