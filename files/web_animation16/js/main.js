var _loadedImages=0,
    tt,
    newscroller,
    _imageArray=[
        "copy1_1.png",
        "copy1_2.png",
        "copy2_1.png",
        "copy2_2.png",
		"copy3_1.png",
        "copy3_2.png", 
        "copy4_1.png",
        "copy4_2.png",
        "copy4_3.png", 
        "copy5_1.png",
        "copy5_2.png", 
        "copy6_1.png",
        "copy6_2.png",
        "img.jpg",                                    
        "cta.png"
    ],

  width = document.querySelector("#loader").offsetWidth,
  height = document.querySelector("#loader").offsetHeight    

this.addEventListener('DOMContentLoaded',function(){
        for (var i = 0; i < _imageArray.length; i++) {
        var _tempImage = new Image();
        _tempImage.addEventListener('load',function(){
            _loadedImages++;             
            if(_loadedImages == _imageArray.length) loadCss();
        });
        _tempImage.src = 'img/'+_imageArray[i];
    }
});

function loadCss(){
    var css = document.createElement('link');
    css.setAttribute('rel','stylesheet');
    css.setAttribute('type','text/css');
    css.setAttribute('href',"css/style.css");
    document.getElementsByTagName('head')[0].appendChild(css);
    css.onload = loadGsap;
}

function loadGsap(){
    var js = document.createElement('script');
    js.setAttribute('type','text/javascript');
    js.setAttribute('src',"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js");
    document.getElementsByTagName('head')[0].appendChild(js);
    js.onload = init;
}

function init(){ 


    document.querySelector('#btn-exit').addEventListener('click',exits)
    initAnimations();
}

function initAnimations(){
    tt = gsap.timeline({
        defaults:{
            duration:1,
            ease:'power3.out'
        }})
    
    tt
    .set('.banner',{display:'block'})

	.set('#cta', {transformOrigin: "65px 150px" })
    .set('#whiteCover', {transformOrigin: "0px 0px" })
    .set('#mainContainer',{transformOrigin:"84px 134px"})
    .set(['#bigCircle1','#bigCircle2'],{opacity:0})
		
    /*Start animation*/
    .add(drawingDotts,0)
    .addLabel('f1', 0)
    .from(".copy1",{duration:.85,y: gsap.utils.wrap(["+=0","-=5"]),opacity:0,ease:'power3.out', stagger:.25},'f1+=.15')
    .to("#mainContainer",{duration:6,scale:.5,x:50,y:36,ease:'none'},'f1')
    .to("#mainContainer",{duration:6,scale:.14,x:10,y:-51,ease:'none'},'>')
    .from('#whiteCover',{duration:6,scale:3.4,x:"-=183",y:"-=120",ease:"none"},'f1+=6')
    //.to("#mainContainer",{duration:13,scale:.14,x:10,y:-51,ease:'none'},'f1')
    	
	.addLabel('f2', 2.5)
	.to('.copy1',{duration:.5,opacity:0,stagger:-.1,ease:'power3.out'},'f2')
    .from(".copy2",{duration:.85,y: gsap.utils.wrap(["+=0","-=5"]),opacity:0,ease:'power3.out', stagger:.25},'f2+=.25')

    .addLabel('f3',5)
    .to('.copy2',{duration:.5,opacity:0,stagger:-.1,ease:'power3.out'},'f3')
    .from(".copy3",{duration:.85,y: gsap.utils.wrap(["+=0","-=5"]),opacity:0,ease:'power3.out', stagger:.25},'f3+=.25')
    //swichtVector-Raster
    .to(["#whiteCover2","#svgContainer"],{duration:2,opacity:0},"<")

    .addLabel('f4',7.5)
    .to('.copy3',{duration:.5,opacity:0,stagger:-.1,ease:'power3.out'},'f4')
    .from(".copy4",{duration:.85,y: gsap.utils.wrap(["+=0","-=5","-=5"]),opacity:0,ease:'power3.out', stagger:.25},'f4+=.25')

    .addLabel('f5',10)
    .to('.copy4',{duration:.5,opacity:0,stagger:-.1,ease:'power3.out'},'f5')
    .from(".copy5",{duration:.85,y: gsap.utils.wrap(["+=0","-=5"]),opacity:0,ease:'power3.out', stagger:.25},'f5+=.25')
    .to('#bigCircle1',{opacity:0.2},'f5+=.5')

    .addLabel('f6',12.5)
    .to('#bigCircle2',{duration:2,opacity:1,ease:"sine.out"},'f6')
    .from('#smallCircle1',{duration:2,x:"+=20",y:"-=50",ease:"back.out(1)"},'f6+=.25')
    .from('#cta',{duration:2,opacity:0},'f6-=.5')
    .to('.copy5',{duration:.5,opacity:0,stagger:-.1,ease:'power3.out'},'f6')
    .from(".copy6",{duration:.85,y: gsap.utils.wrap(["-=5","-=0"]),opacity:0,ease:'power3.out', stagger:.25},'f6+=.75')

    //.kill()
    //.add(LightsOFF,14)
}

function drawingDotts(){
     tt2 = gsap.timeline({
        defaults:{
            duration:1,
            ease:'power3.out'
        }})
    
    tt2
    .addLabel("lightsOn")
    .from('.circle', {
        x: () => Math.random() * 600 - 300, // -300px a +300px en eje X
        y: () => Math.random() * 500 - 250, // -200px a +200px en eje Y
        scale: 15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.005,
        ease: "sine.inOut"
      }, "lightsOn")

}

function exits() {
  window.open(window.clickTag);
}