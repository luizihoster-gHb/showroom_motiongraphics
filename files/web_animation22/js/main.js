var _btnExit = document.getElementById("btn-exit"),
  _loadedImages = 0,
  tt,
  newscroller,
  _imageArray = [
      "bar_na.png",
      "bg_sea.png",
      "bg1.jpg",
      "bg2.jpg",
      "copy1_1.png",
      "copy2_1.png",
      "copy4_1.png",
      "couple.png",
      "cover.png",
      "cta.png",
      "isi_logo.png",
      "logo.png",
      "pi.png",
      "plants.png",
      "sprite4.png",
      "sun.png"
        ],
  width = document.querySelector("#loader").offsetWidth,
  height = document.querySelector("#loader").offsetHeight

function loadImages() {
  _imageArray.forEach(imageName => {
    var _tempImage = new Image();
    _tempImage.addEventListener("load", imageLoaded);
    _tempImage.src = "img/" + imageName; // Modify this line if the path structure differs on Ads Creative Studio
  })
}

function imageLoaded() {
  _loadedImages++;
  if (_loadedImages === _imageArray.length) {
    init();
  }
}

function init() {
  _btnExit.addEventListener("click", exits);
  //pi_btn.addEventListener("click", exits);
  //pi_link.addEventListener("click", exits);

  newscroller = new Scroller({
    container: "#isi-container",
    content: "#isi",
    autoscroll: true,
    speed: 60,
    delay: 15,
    specificWord: ["specific word 1", "specific word 2"],
  });

  /// calling autoscroll function after 5 seconds:
  //setTimeout(function(){newscroller.autoscroll(30)},5000)
  
  initAnimations();
}

function initAnimations() {
  tt = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power3.out",
    },
  });
  const maskDuration = 4.9,
    maskInterval = 0.4

  tt.set(".banner", { display: "block" })
  //.set('#cta',{transformOrigin:'66px 125px',})
  .set('#pi',{y:'-=2'})
  //.set(["#isi-container","#pi-bg"],{ autoAlpha:0})
  .set("#coupleSprite",{opacity:1,x:728,y:6,scaleX:-.9,scaleY:.9})

  //.set("#isi-container",{y:"+=58"})

  .addLabel('f1', 0.85)
  .to("#coverCont",{x:`-=${2*width}`},"f1")
  //.from("#beach",{y:"+=10"},'f1')
  .to("#plants",{duration:.35,opacity:0},"f1+=.2")
  //.to(["#isi-container","#pi-bg"],{duration:.3, autoAlpha:1},"f1+=.2")
  //.to("#whiteBar",{duration:.35,opacity:0},">")
  //logo shrink
  //.to("#logo",{x:"0",y:"0",scale:1},"f1+=.3")
  //.to("#bar",{x:"0",y:"0",scale:1},"f1+=.3")


  .addLabel('f2', 2.75)
  .to(['#beach','#couple'],{duration:.5,x:"-=15",opacity:0},'f2')
  .from('#dock',{duration:.5,x:"+=15",opacity:0},'f2')
  //position couple
  //.set("#couple",{opacity:1,x:142,y:3,scaleX:-.88,scaleY:.88},">")
  //couple walk
  //.to("#couple",{duration:10,x:"-=66",ease: "linear"},'f2+=.5')
  .set("#coupleSprite",{x:485,},'f2')

  .to("#coupleSprite",{duration:10,x:"-=92",ease: "linear"},'f2+=.5')
  .to("#sprite",{duration:1.5,x:"-=1079",ease:"steps(13)",repeat:6},'<')
  ///.to("#sprite",{duration:1.5,x:"-=1165",ease:"steps(14)",repeat:6},'<')
  .to("#isi-container",{y:0},'f2')
  .from(".s1",{opacity:0,y:`+=${height}`,stagger:.15},'f2+=.5')

  //sunrise
  .to("#sun",{duration:12,y:"-=60",ease:"sine.inOut"},'f2')

  .addLabel('f3', 7)
  .to("#bar",{x:"-=150"},'f3')
  .to("#copy1_1",{y:`-=${height}`},'f3')
  .from("#copy2_1",{y:`+=${height}`},'f3')
  //.to("#sun",{y:"-=5"},'f3')
  .to("#cta",{x:"-=122"},'f3')

  //position couple
  //.to(['.copy2'],{ duration: .5,opacity:0, ease: "power2.inOut"},'f3-=.5')
  //.from('#copy3',{opacity:0, ease: "power2.inOut"},'f3+=.2')

  .addLabel('f4', 13.5)
  .to("#copy2_1",{y:`-=${height}`},'f4')
  .from("#copy4_1",{y:`+=${height}`,stagger:.1},'f4')
  //.to("#sun",{y:"-=4"},'f4')
  //entersCouple
  //.to("#couple",{x:"-=30"},'f4')
    
  // .addLabel('f5', 14)
  // .to("#copy3_1",{y:"==6",opacity:0},'f5')
  // .to("#copy3_2",{opacity:0},'f5')
  // .from("#copy4_1",{opacity:0,y:"+=6"},'f5')
  // .to("#couple",{x:"-=36"},'f5')
  // .to("#sun",{y:"-=51"},'f5')


}


function exits(e) {
  
  switch (e.target.id) {
    case "pi_btn":
    case "pi_link" :  
      window.open(window.clickTag2);
      console.log("clicktag2");
      break;
    
    // case "fda_link":
    //   window.open(window.clickTag3);
    //   console.log("clicktag3");
    //   break;
    // case "medGuide":
    // case "CTAGuide":
    //   window.open(window.clickTag4);
    //   console.log("clicktag4");
    //   break;
    // case "jonayLink":
    //   window.open(window.clickTag5);
    //   console.log("clicktag5");
    //   break;

    default: window.open(window.clickTag1);
      console.log("clicktag1");
  }
}
