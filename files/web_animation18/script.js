// AdBegins
//QUIZ
var lightQ = [lightQ_01,lightQ_02,lightQ_03,lightQ_04,lightQ_05,lightQ_06,lightQ_07,lightQ_08,lightQ_09,lightQ_10,lightQ_11,lightQ_12,lightQ_13,lightQ_14];
var lightU = [lightU_01,lightU_02,lightU_03,lightU_04,lightU_05,lightU_06,lightU_07,lightU_08,lightU_09,lightU_10,lightU_11];
var lightI = [lightI_01,lightI_02,lightI_03,lightI_04,lightI_05];
var lightZ = [lightZ_01,lightZ_02,lightZ_03,lightZ_04,lightZ_05,lightZ_06,lightZ_07,lightZ_08,lightZ_09,lightZ_10,lightZ_11,lightZ_12];
//$34.90 OFFER
var lightDollar = [lightDollar_01,lightDollar_02,lightDollar_03,lightDollar_04,lightDollar_05,lightDollar_06,lightDollar_07,lightDollar_08,lightDollar_09,lightDollar_10,lightDollar_11];
var light3 = [light3_01,light3_02,light3_03,light3_04,light3_05,light3_06,light3_07,light3_08,light3_09,light3_10];
var light4 = [light4_01,light4_02,light4_03,light4_04,light4_05,light4_06,light4_07,light4_08,light4_09,light4_10,light4_11];
var light9 = [light9_01,light9_02,light9_03,light9_04,light9_05,light9_06,light9_07,light9_08,light9_09,light9_10,light9_11];
var light0 = [light0_01,light0_02,light0_03,light0_04,light0_05,light0_06,light0_07,light0_08,light0_09,light0_10,light0_11];
var quizFormFake = [cl2,cb2,att2,ver2];
var quiz = [svgQuiz,quizBig];
var offerFF = [svgOffer,offer];
var adContainer = document.getElementById("container");
var ctaBtn = document.getElementById("cta");

var noChoise = null; /* Our timeout ID */
var startTimeout = new Date(); /* When the timer starts */
var timeLeft = 4000; /* How much time is left */
var timeDelay = 500; /* How long the timer should be */

function startAd(){
     
    function listeners(){
        adContainer.addEventListener('mouseenter', ctaOver, false);
        adContainer.addEventListener('mouseleave', ctaOut, false);
        // ctaBtn.addEventListener('mouseenter', ctaOver, false);
        // ctaBtn.addEventListener('mouseleave', ctaOut, false);


        document.getElementById("lop1").addEventListener('mouseenter', clOver, false);
        document.getElementById("lop1").addEventListener('mouseleave', clOut, false);
        document.getElementById("lop2").addEventListener('mouseenter', cbOver, false);
        document.getElementById("lop2").addEventListener('mouseleave', cbOut, false);
        document.getElementById("lop3").addEventListener('mouseenter', attOver, false);
        document.getElementById("lop3").addEventListener('mouseleave', attOut, false);
        document.getElementById("lop4").addEventListener('mouseenter', verOver, false);
        document.getElementById("lop4").addEventListener('mouseleave', verOut, false);


        document.getElementById("cl").addEventListener('mouseenter', clOver, false);
        document.getElementById("cl").addEventListener('mouseleave', clOut, false);
        document.getElementById("cb").addEventListener('mouseenter', cbOver, false);
        document.getElementById("cb").addEventListener('mouseleave', cbOut, false);
        document.getElementById("att").addEventListener('mouseenter', attOver, false);
        document.getElementById("att").addEventListener('mouseleave', attOut, false);
        document.getElementById("ver").addEventListener('mouseenter', verOver, false);
        document.getElementById("ver").addEventListener('mouseleave', verOut, false);
    }   

    function ctaOver(){
    TweenLite.to(shine, .45, {left:130, ease:Sine.easeIn});
    }

    function ctaOut(){
    TweenLite.to(shine, 0, {left:-130, ease:Sine.easeIn});
    }


    function clOver(){
    document.getElementById("cl").src = 'CenturyLink.png';
    document.getElementById("op1").checked = true;
    }

    function clOut(){
    document.getElementById("cl").src = 'CenturyLink_reg.png';
    document.getElementById("op1").checked = false;
    }

    function cbOver(){
    document.getElementById("cb").src = 'ComcastBusiness.png';
    document.getElementById("op2").checked = true;
    }

    function cbOut(){
    document.getElementById("cb").src = 'ComcastBusiness_reg.png';
    document.getElementById("op2").checked = false;
    }

    function attOver(){
    document.getElementById("att").src = 'at&t.png';
    document.getElementById("op3").checked = true;
    }

    function attOut(){
    document.getElementById("att").src = 'at&t_reg.png';
    document.getElementById("op3").checked = false;
    }

    function verOver(){
    document.getElementById("ver").src = 'Verizon.png';
    document.getElementById("op4").checked = true;
    }

    function verOut(){
    document.getElementById("ver").src = 'Verizon_reg.png';
    document.getElementById("op4").checked = false;
    }


    TweenMax.set([check1,check2,check3,check4], { autoAlpha:0});
    TweenMax.set([lightQ,lightU,lightI,lightZ,cta2,quizFormFake,quiz,blackBar_01], { opacity:0});
    TweenMax.set([blackBar_02, copy2], { left:"+=300"});
    TweenMax.set([blackBar_right,right_copy,blackBar_wrong,wrong_copy,noAnswer,offerSignal,headline_ef,blackBar_03,blackBar_04 ], { left:"+=300"});
    TweenMax.set("p" , { left:'+=300'});




TweenMax.defaultOverwrite = "false";
document.getElementById("banner").style.visibility = "visible";
document.getElementById("ct1").style.visibility = "visible";


init();
listeners();


}

function init(){
    setTimeout (function(){animation01()}, 0);
}

// Animations
function lightsQuizOn(){

    TweenMax.staggerTo(lightQ, 0.001, {opacity:1, repeat:20, yoyo:true, repeatDelay:0.2},.1);
    TweenMax.staggerTo(lightU, 0.001, {opacity:1, repeat:20, yoyo:true, repeatDelay:0.2},.1);
    TweenMax.staggerTo(lightI, 0.001, {opacity:1, repeat:20, yoyo:true, repeatDelay:0.2},.1);
    TweenMax.staggerTo(lightZ, 0.001, {opacity:1, repeat:20, yoyo:true, repeatDelay:0.2},.1);
}
function lightsOfferOn(){
    TweenMax.staggerTo(lightDollar, 0.001, {opacity:0, repeat:30, yoyo:true, repeatDelay:0.2},.1);
    TweenMax.staggerTo(light3, 0.001, {opacity:0, repeat:30, yoyo:true, repeatDelay:0.2},.1);
    TweenMax.staggerTo(light4, 0.001, {opacity:0, repeat:30, yoyo:true, repeatDelay:0.2},.1);
    TweenMax.staggerTo(light9, 0.001, {opacity:0, repeat:30, yoyo:true, repeatDelay:0.2},.1);
    TweenMax.staggerTo(light0, 0.001, {opacity:0, repeat:30, yoyo:true, repeatDelay:0.2},.1);
}
function lightsOfferOff (){
    console.log("TIMES_UP");
    TweenMax.to([lightDollar,light3,light4,light9,light0],.1,{opacity:0,delay:14.8,onComplete:time_UpF})
}
function time_UpF(){
    console.log("15secs");
    TweenMax.set([light3_02,light3_07,light4_10], { opacity:1});
    TweenMax.set([light3_06,light3_10], { opacity:1});
    TweenMax.set([light4_01,light4_04,light4_08], { opacity:1});
    TweenMax.set([lightDollar,light9,light0], { opacity:1});
}
 function animation01(){

    var tl = new TimelineMax();
    TweenMax.set([quiz,blackBar_01], { opacity:1});    
    
    tl
        .add("frame1")
        .from(blackBar_01, 0.3, {opacity:0,top:"+=5", rotationZ:0.01, z:-0.01, ease:Power2.easeOut,onStart:lightsOfferOff},"frame1+=0.2") 
        .from(quiz, 0.3, {opacity:0, rotationZ:0.01, z:-0.01, ease:Power2.easeOut,onStart:lightsQuizOn},"frame1+=0.3")
        .add("frame2","+=1")
        .to([blackBar_01,quizSignal], .5, {left:'-=300', ease:Power2.easeIn},"frame2")
        .to([blackBar_02,copy2], .5, {left:'-=300', ease:Power2.easeOut},"frame2+=.4")
        .add("frame3","+=1.5")
        .to([blackBar_02,copy2], .5, {left:'-=300', ease:Power2.easeIn,onComplete:frame4},"frame3")
}
 function frame4(){
    startTimeout = new Date();
 	noChoise = setTimeout(no_choise, 4000);
    adContainer.addEventListener('mouseenter', pauseTimeout, false);

    document.getElementById("ct1").style.visibility = "hidden";
 	var tl = new TimelineMax();

 	tl
 		.add("frame4")
    	.to("p", .4, {left:'-=300', ease: Power2.easeOut},"frame4")
    	.staggerTo(quizFormFake, .5, {opacity:1,repeat:1, ease: Sine.easeInOut,yoyo:true},.2,"frame4+=.4") 
}

 function resolveQuiz(){
    
     TweenMax.to(quizForm, .3, {delay:0.4,left:-300, ease:Power2.easeIn}); 
     
}
 function ef_right(){
    console.log("RIGHT");
     var tl = new TimelineMax();
     tl
        .add("rightScene")
        .to(blackBar_right, 0.3, {left:"-=300", ease: Power2.easeOut},"rightScene+=.2")
        .to(right_copy, 0.5, {left:"-=300", ease: Power2.easeOut },"rightScene+=.3")
        .to([blackBar_right,right_copy],.5,{left:"-=300", ease: Power2.easeIn},"rightScene+=3")
        .add(endFrame,"rightScene+=3")
}

function ef_wrong(){
    console.log("WRONG");
    var tl = new TimelineMax();
    tl
        .add("wrongScene")
        .to(blackBar_wrong, 0.3, {left:"-=300", ease: Power2.easeOut},"wrongScene+=.2")
        .to(wrong_copy, 0.3, {left:"-=300", ease: Power2.easeOut },"wrongScene+=.3")
        .to([blackBar_wrong,wrong_copy],.5,{left:"-=300", ease: Power2.easeIn},"wrongScene+=3")
        .add(endFrame,"wrongScene+=3")
}
function ef_noAnswer(){
    console.log("NO_ANSWER");
    var tl = new TimelineMax();
    tl
        .add("naScene")
        .to(blackBar_04, 0.3, {left:"-=300", ease: Power2.easeOut},"naScene+=.2")
        .to(noAnswer, 0.3, {left:"-=300", ease: Power2.easeOut},"naScene+=.3")
        .to([blackBar_04,noAnswer],.5,{left:"-=300", ease: Power2.easeIn},"naScene+=3")
        .add(endFrame,"naScene+=3")
}
function endFrame(){
    console.log("ENDFRAME");
    var tl = new TimelineMax();
    tl
        .add("endFrame")
        .to([offerSignal,headline_ef,blackBar_03], 0.5, {left:"-=300", ease: Power2.easeOut,onStart:lightsOfferOn},"endFrame+=.5")
        .to(ctaWhite,.3,{opacity:0,ease:Sine.easeIn},"endFrame+=1")
        .to(cta2,.3,{opacity:1,ease:Sine.easeOut},"endFrame+=1")
        .to(shine, .3, {left:130, ease:Sine.easeIn},"endFrame+=1.5")
        .to(shine, 0, {left:-130, ease:Sine.easeIn},"endFrame+=1.8")  
}

    //Quiz Form
function btn1(){
    console.log("btn1");
    clearTimeout(noChoise);
    document.getElementById("op1").checked = true;
    resolveQuiz();
    setTimeout (function(){ef_wrong()}, 700);
    TweenMax.set(check1, { autoAlpha:1});
    document.getElementById("ct2").style.visibility = "visible";
    adContainer.removeEventListener('mouseenter', pauseTimeout, false);
}

function btn2(){
    console.log("btn2");
    clearTimeout(noChoise);
    document.getElementById("op2").checked = true;
    resolveQuiz();
    setTimeout (function(){ef_right()}, 700);
    TweenMax.set(check2, { autoAlpha:1});
    document.getElementById("ct3").style.visibility = "visible";
    adContainer.removeEventListener('mouseenter', pauseTimeout, false);
}

function btn3(){
    console.log("btn3");
    clearTimeout(noChoise);
    document.getElementById("op3").checked = true;
    resolveQuiz();
    setTimeout (function(){ef_wrong()}, 700);
    TweenMax.set(check3, { autoAlpha:1});
    document.getElementById("ct4").style.visibility = "visible";
    adContainer.removeEventListener('mouseenter', pauseTimeout, false);
}

function btn4(){
    console.log("btn4");
    clearTimeout(noChoise);
    document.getElementById("op4").checked = true;
    resolveQuiz();
    setTimeout (function(){ef_wrong()}, 700);
    TweenMax.set(check4, { autoAlpha:1});
    document.getElementById("ct5").style.visibility = "visible";
    adContainer.removeEventListener('mouseenter', pauseTimeout, false);
}

function no_choise(){
    console.log("NO_CHOISE");
    resolveQuiz();
    setTimeout (function(){ef_noAnswer()}, 700);
    document.getElementById("ct6").style.visibility = "visible";
    adContainer.removeEventListener('mouseenter', pauseTimeout, false);
}


////


    function pauseTimeout() {
        console.log('pause');
        console.log(startTimeout);
        timeLeft -= new Date() - startTimeout;
        timeLeft +=timeDelay;
        console.log(timeLeft);
        /* Clear the timer */
        clearTimeout( noChoise );
        noChoise = setTimeout( no_choise, timeLeft );
        adContainer.removeEventListener('mouseenter', pauseTimeout, false);

    }
