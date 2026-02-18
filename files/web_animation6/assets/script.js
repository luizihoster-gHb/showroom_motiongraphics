


/////////////Animation

function startAd() {
    
    /*========================  CLICKTAG  =============================*/
    
    // var clickTag = "http://www.amex.com/";
    // var adBtn = document.getElementById("ad");

    // function OPENW(){
    //     window.open(clickTag);
    // }

    // adBtn.addEventListener("click", OPENW, false);
    /*================================================================*/
    
    var adContainer = document.getElementById("container");
    var ctaShimmer = document.getElementById("ctaShimmer");
    //var ctaWhite = [];
    var ctaBlack = [blackCta,ctaCopyW];
    gsap.set(ctaBlack,{alpha:0});
    
    TweenMax.defaultOverwrite = "false";
    //document.getElementById("banner").style.visibility = "visible";

    init();
    listeners();
    
    
    function listeners(){
        adContainer.addEventListener('mouseenter', ctaOver, false);
        adContainer.addEventListener('mouseleave', ctaOut, false);
    }   
    
    function ctaOver(){
        gsap.to(ctaBlack, {duration:.2,alpha:1, ease:"sine.easeIn"});
        console.log("CTA ENTER")
    }
    
    function ctaOut(){
        gsap.to(ctaBlack, { duration:.1,alpha:0 ,ease:"sine.easeIn"});
        console.log("CTA 0UT")
    }

    
}

function init(){
    setTimeout (function(){animation00()}, 0);
};

function ctaOverOnce(){
    var ctaBlack = [blackCta,ctaCopyW];
    var tl = gsap.timeline();
        tl
            .to(ctaBlack, {alpha:1,duration:.2,  ease:"sine.easeIn"},"t")
            .to(ctaBTN,   {scale:1.1,duration:.2,ease:"sine.easeIn"},"t")
            .to(ctaBlack, {alpha:0,duration:.2,  ease:"sine.easeIn"},"t+=.4")
            .to(ctaBTN,   {scale:1,duration:.2,  ease:"sine.easeIn"},"t+=.4")
}

function secuence1(){
    var tl = gsap.timeline({repeat: 0});
    tl
        .set(steam,{alpha:.8})
        //.to(steam_sprite,{duration:1,backgroundPosition:"-1950px 0",ease:"steppedEase(13)"})
        .to(steam,{duration:6,x:-11100,ease:SteppedEase.config(74)})
}

function steamAlpha(){
    gsap.to(steam_sprite_container,{duration:1,alpha:0.6,repeat:5, yoyo:true,onComplete:steamAlpha2})
}
function steamAlpha2(){
    gsap.to(steam_sprite_container,{duration:1,alpha:0.7})
}
function animation00(){
  //var declare constructor
    var copy12 = [copy1_headline,copy2_subheadline]
	var tl = gsap.timeline();
  	//setCopy
    gsap.set(copy1_headline,{z: 0.01,rotationZ: 0.01,force3D:true});
    gsap.set(copy2_subheadline,{z: 0.01,rotationZ: 0.01,force3D:true});
    //gsap.set(copy3_legal,{z: 0.01,rotationZ: 0.01,force3D:true});
    gsap.set(coffee,{z: 0.01,rotationZ: 0.01,force3D:true});
    gsap.set(steam_sprite_container,{scale:.7,y:"+=20",x:"+=20"});

	//structure//var constructor//sets//tl.add(method)("time")//tl.toFromStaggerToFrom(method)(name,duration,{properties,easing},"time")
	tl
		.set(banner,{autoAlpha:1})
        .add("frame1")
		.from(copy12,{duration:.6,y:"-=150",  ease:"back(0.7,1)"},"frame1+=0")
        .from(steam_sprite_container,{duration:.6,x:"+=150",  ease:"back(0.7,1)",onStart:steamAlpha},"frame1+=0")
        .from(coffee,{duration:.6,x:"+=150",  ease:"back(0.7,1)", onStart:secuence1},"frame1+=0")
        .from(copy3_legal,{duration:1,alpha:0,ease:"power1.easeInOut"},"frame1+=1")
        .from(ctaBTN,{duration:.6,alpha:0,    ease:"power1.easeInOut"},"frame1+=.8")
        .add(ctaOverOnce,"frame1+=3")
//		.add("frame2","+=3.5")

}

function spriteAnimation(){};

function random(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}


