var _loadedImages=0,
    tt,
    newscroller,
    _imageArray=[
	    "bg.jpg",
        "copy1_1.png",
        "copy1_2.png",
        "copy2_1.png",
		"copy3_1.png",
        "disclaimer.png",
        "cta.png",
        "logo1.png",
        "scroll.png"
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
    js.onload = loadIsi;
}

function loadIsi(){
    var js = document.createElement('script');
    js.setAttribute('type','text/javascript');
    js.setAttribute('src',"js/isi.js");
    document.querySelector('body').appendChild(js);
    js.onload = init;
}

function init(){ 


    document.querySelector('#btn-exit').addEventListener('click',exits)
	document.querySelector('#pi').addEventListener('click',exits)
	document.querySelector('#patient').addEventListener('click',exits)

    newscroller = new Scroller({
        container:'#isi-container',
        content:'#isi',
        autoscroll:true,
        speed:160,
        delay:15,
        specificWord:['specific word 1','specific word 2']
    });

    /// calling autoscroll function after 5 seconds:
    //setTimeout(function(){newscroller.autoscroll(30)},5000)
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
	// .set('#bg',{scale: 1.84, x:-96, y:48})
	.set('#cta', {transformOrigin: "65px 150px" })
		
    /*Start animation*/
    .add(blinkLights,0)
    .addLabel('f1', 0.5)
    .from(".f1",{duration:.85,opacity:0,ease:'power3.out', stagger:1},'f1+=.5')
    .from("#logo1",{opacity:0,ease:'power3.out'},'f1+=1.5')
    .from('#isi-container',{yPercent: 100, ease:'power3.inOut'},'f1+=1')
    .from('#disclaimer1',{opacity:0, ease:'power3.inOut'},'>-=.5')
    //.from(['#pi', '#patient'],{duration:.5,y:100},'>')
		
	.addLabel('f2', 5)
		
	.to('.f1',{duration:.5,opacity:0,stagger:-.1,ease:'power3.out'},'f2')
    .from('#copy2',{duration:.85,opacity:0,ease:'power3.out'},'f2+=.2')
   
	.addLabel('f3', 12)
    .to('#copy2',{duration:.5,opacity:0,ease:'power3.out'},'f3')
    .from(['#copy3', '#cta','#logo2'],{duration:.5,opacity:0, ease:'power3.out'},'f3+=.5')
    .from('#cta',{scale:0.2, ease:"elastic.out(1,0.7)", stagger:.5},'f3+=.5')
    .to("#svgCircles",{opacity:0},"f3+=3")
    .to(['#isi-container', '.knob-arrange'], { height: 170 },'f3+=3')
    // .to('.knob-arrange', { height: 170 },'f3+=3')

    //.kill()
    //.add(LightsOFF,14)
}

function blinkLights(){
     tt2 = gsap.timeline({
        defaults:{
            duration:1,
            ease:'power3.out'
        }})
    
    tt2
    .addLabel("lightsOn")
    .to('.circles',{duration:.05,repeat:320,opacity:.4,yoyo:true},"lightsOn")
    .to('.circleRed',{duration:.1,repeat:150,opacity:.4,yoyo:true},"lightsOn+=.2")
    .to('#roof',{duration:.2,repeatDelay:.2,repeat:100,opacity:.3,yoyo:true},"lightsOn+=.3")
}

function LightsOFF(){
     tt3 = gsap.timeline({
        defaults:{
            duration:1,
            ease:'power3.out'
        }})
    
    tt3
    .addLabel("lightsOff")
    .to('.circles',{duration:.05,opacity:0},"lightsOff")
    .to('.circleRed',{duration:.1,opacity:0},"lightsOff+=.2")
}



function exits(e){
    switch(e.target.id){
        case 'btn-exit':
            window.open(window.clickTag1)
        break;
				case 'isi_link':
            window.open(window.clickTag2)
        break;
				case 'patient':
            window.open(window.clickTag2)
        break;
        case 'fda':
            window.open(window.clickTag3)
        break;
        case 'isi_patient':
            window.open(window.clickTag4)
        break;
				case 'pi':
            window.open(window.clickTag4)
        break;
        default:
        break;
    }
}