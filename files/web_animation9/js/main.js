var _btnExit = document.getElementById("btn-exit"),
  _loadedImages = 0,
  tt,
  _imageArray = [
    "imgMain.png",
    "copy1.png",
    "copy2.png",
    "copy3.png",
    "graphicDate.png",
    "disclaimer.png",
    "logoPMI.png",
    "oval1.svg",
    "oval2.svg",
    "cta1.png",
    "qs_active_q1.png",
    "qs_active_q2.png",
    "qs_active_q3.png",
    "qs_active_q4.png",
    "qs_inactive.png"
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
  gsap.registerPlugin(MorphSVGPlugin);
  tt = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: "power3.out",
    },
  });
  tt.set('.banner', { display: 'block' })

    .set('#graphicDate', { alpha: 0 })
    .set('#cta', { y: "+=5", alpha: 0 })
    .set(['.qss', '#q5'], { opacity: 0 })
    .set('svg', { display: "block" })
    .set('#logo', { y: "+=10", alpha: 0 })
    .set(['.st2', '#numberContainer'], { alpha: 0 })
    .set('#off', { transformOrigin: '150px 300px' })
    .set('.copy1', { transformOrigin: '222px 70px' })
    .set('#copy2', { alpha: 0, transformOrigin: '76px 78px' })
    .set(['#line1', '#line2', '.st2', '#line3'], { drawSVG: '0%' })
    .set('#numberContainer', { alpha: 0, 'webkitFilter': 'blur(5px)' })
    .set('#oval1', { alpha: 0, scale: 0.5, transformOrigin: '27px 462px' })
    .set('#oval2', { alpha: 0, scale: 0.5, transformOrigin: '273px 241px' })
    .set(['.copy1', '#copy2', '#date', '.copy3'], { y: '+=10', alpha: 0, 'webkitFilter': 'blur(5px)' })
    .set('#containerGraphic', { alpha: 0, 'webkitFilter': 'blur(0px)', transformOrigin: '150px 131px' })




    .addLabel('f1', 0.5)
    .add(qsAnimation, "f1")
    .to('#line1', { duration: 0.8, drawSVG: '100%', ease: 'sine.inOut' }, 'f1')
    .to('#line2', { duration: 1.8, drawSVG: '100%', ease: 'sine.inOut' }, 'f1')
    .to('#line3', { duration: 1, drawSVG: '100%', ease: 'sine.inOut' }, 'f1+=0.7')
    .to('.copy1', { duration: 0.6, y: '-=10', alpha: 1, ease: 'sine.out', 'webkitFilter': 'blur(0px)' }, 'f1')

    .to('#logo', { duration: 1, alpha: 1, y: '-=10', ease: 'power3.out' }, 'f1')

    .addLabel('f2', 4)
    .to('.copy1', { alpha: 0, x: '-=300', ease: 'power3.inOut', 'webkitFilter': 'blur(5px)' }, 'f2')
    .to('.graphic', { alpha: 1, ease: 'sine.inOut' }, 'f2+=0.5')
    .to('#numberContainer2', { alpha: 1 }, 'f2+=0.3')
    .to('#oval1', { alpha: 1, scale: 1, ease: "bounce.out" }, 'f2+=0.2')
    .to('#lineGraphic', { duration: 1, width: 226, ease: 'circ.inOut' }, 'f2+=0.4')
    .to('#numberContainer', { duration: 2, opacity: 1, 'webkitFilter': 'blur(0px)', ease: 'power1.inOut', snap: { textContent: 1 } }, 'f2+=1.7')
    .to('#number', { textContent: 42, duration: 2, ease: 'power1.inOut', snap: { textContent: 1 } }, 'f2+=1.7')
    .to('#number2', { textContent: 2, duration: 1, ease: 'power1.inOut', snap: { textContent: 0 } }, 'f2+=1.4')
    .to(['#containerGraphic', '#graphicDate', '#oval1', '#numberContainer2'], { duration: 1, ease: 'power1.inOut' }, 'f2+=1.4')
    .from('#containerGraphic', { duration: 1, alpha: 0, scaleX: 1, scaleY: 0.1, 'webkitFilter': 'blur(5px)', ease: 'power1.inOut', transformOrigin: '25px 474px' }, 'f2+=1.4')
    .to("#Path2", { duration: 2, morphSVG: "#Path1", ease: "back.out(.2)" }, "<+=0.40")
    .to('#graphicDate', { duration: 2, alpha: 1, ease: 'sine.inOut' }, 'f2+=1.7')
    .to('#numberContainer2', { duration: 2, opacity: 1, 'webkitFilter': 'blur(0px)', ease: 'power1.inOut', snap: { textContent: 1 } }, 'f2+=1.7')
    .to('#lineGraphic', { duration: 0.3, alpha: 0, 'webkitFilter': 'blur(0px)' }, '<')
    .to('#oval2', { alpha: 1, scale: 1, yoyo: true, ease: "bounce.out" }, 'f2+=3.3')
    .to('#copy2', { duration: 1.3, y: '-=10', alpha: 1, ease: 'power3.inOut', 'webkitFilter': 'blur(0px)' }, 'f2+=2')
    .from('#disclaimer', { duration: 1.3, x: '300', alpha: 1, ease: 'power3.inOut', 'webkitFilter': 'blur(0px)' }, 'f2+=2.2')

    .addLabel('f3', 12)
    .to(['#off', '#oval1', '#oval2', '#containerGraphic', '#graphicDate', '#disclaimer', '.graphic'], { duration: 2.4, scale: 1.1, alpha: 0, ease: 'power3.inOut', 'webkitFilter': 'blur(10px)' }, 'f3')
    .to('.copy3', { duration: 1, y: '-=10', alpha: 1, ease: 'power3.inOut', 'webkitFilter': 'blur(0px)' }, 'f3+=0.6')
    .to('#cta', { duration: 1, alpha: 1, y: '-=5', ease: 'power3.out' }, 'f3+=1')
    .to('#cta1', { duration: 0.2, x: 1, y: 1.2, ease: 'power3.out', repeat: 1, yoyo: true }, 'f3+=2')
  console.log(tt.duration())
}

function qsAnimation() {
  tt2 = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: "power3.out",
    },
  });
  tt2
    .addLabel('time')
    .to('.qss', { alpha: 1, stagger: .3 }, 'time')
    .to('.qss', { alpha: 0, stagger: .3 }, 'time+=.3')
    .to('#q5', { alpha: 1 }, ">-=.4")
    .to('#shine1', { duration: 1, x: "+=120", ease: 'sine.inOut' }, "<-=.2")
}

function exits() {
  window.open(window.clickTag);
}