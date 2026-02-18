function startAd() {

// Items that can be turned on and off depending on feed

    // Phone Number
    var phoneNumber = document.getElementById('phoneNumber');
    var phoneNumberVisible = true;

    if(phoneNumber.innerHTML == '' || null){
      phoneNumberVisible = false;
    };

    // Bolt On2
    var boltOn2 = document.getElementById('boltOn2');
    var boltOn2Visible = true;
    var contract = document.getElementById('contract').innerHTML;
    var contractlines = contract.split("<br>");

    if(contractlines.length >2){
      boltOn2Visible = false;
    };

    var hover = function(event) {
        var tl = new TimelineLite();
        tl.fromTo(ctaBg, .5, { backgroundPosition: "-100px 0px" }, { backgroundPosition: "100px 0px", backgroundRotation: 5 })
        return tl;
    }
    // Variables
    var tlMain = new TimelineMax();
    var elastic = Elastic.easeOut.config(0.5, 0.4);
    var scene1 = [frame1CopyA,frame1CopyB,topBar,bottomBar,logo];
    var scene1Copy = [frame1CopyA,frame1CopyB];
    var barTop = [frame1CopyA,frame1CopyB,topBar];
    var barBottom = [bottomBar];
    var TV_screen = [TVcontent_01];
    var devices = [endTablet,TV_device];
    var prevHeadlines = [frame2CopyA,frame2CopyB];

    //Words animation variables
    var wordAni1Width;
    var wordAni2Width;
    var wordAni3Width;
    var lastWordWidth;
    var wordAni1XAnimValue;
    var wordAni2XAnimValue;
    var wordAni3XAnimValue;

        wordAni1Width = calculateElementWidth('wordAni1');
        wordAni2Width = calculateElementWidth('wordAni2');
        wordAni3Width = calculateElementWidth('wordAni3');
        lastWordWidth = calculateElementWidth('lastWord');

        wordAni1XAnimValue = calculateWordsXAnimationValue(wordAni1Width, wordAni2Width);
        wordAni2XAnimValue = calculateWordsXAnimationValue(wordAni2Width, wordAni3Width) ;
        wordAni3XAnimValue = calculateWordsXAnimationValue(wordAni3Width, lastWordWidth) ;

        setWordsAnimStartingPosition();
        init();


    // Set starting positions
    function init() {

        TweenMax.set([frame1CopyA,frame1CopyB,endFrameHeaderHolder, phoneNumber, legalDisclaimerHolder, ctaBg,frame2CopyC], {autoAlpha:0});
        TweenMax.set(TV_screen,{alpha:0});
        TweenMax.set(TVcontent_03,{x:'+=223'});
        TweenMax.set(legalDisclaimerHolder, {y:'+=30'});
        TweenMax.set(scene1,{y:'+=90'});
        TweenMax.set('.barElements', {x:'-=216'});
        TweenMax.set(endOfferHolder, {autoAlpha:0});
        TweenMax.set([endTablet], {x:'+=300'});
        TweenMax.set([TV_device], {y:'+=250'});
        TweenMax.set([bgWhite],{y:'-=300'});
        animation();
    };


    // Animation
    function frame1() {

        var tl = new TimelineMax();

        tl
            .to(scene1,.3,{y:'-=90',ease:Power1.easeOut,onStart:opacitySet1},'f')
            .to(scene1Copy,.3,{autoAlpha:1,ease:Power1.easeOut},'f')

        return tl;
    };

    function frame2(){

        var tl = new TimelineMax();

        tl
            .to(barTop,.3,{y:'-=220',ease:Power1.easeIn},'f')
            .to(TV_device,.3,{y:'-=250',ease:Power4.easeOut},'f+=.1')
            .to(frame2CopyC,.3,{autoAlpha:1,ease:Power1.easeIn},'f+=0')

        return tl;
    };

    function frame3(){

        var tl = new TimelineMax();

        tl
            .to(TVcontent_03,.3,{x:'-=223',ease:Power4.easeOut},'f')
            .to(TVcontent_02,.3,{x:'-=223',ease:Power4.easeOut},'f')
            .to(frame2CopyC,.3,{autoAlpha:0,ease:Power1.easeIn},'f')
            .to(frame2CopyB,.3,{x:wordAni1XAnimValue,ease:Power1.easeIn,onComplete:opacitySet2},'f')
            //change
            .to(devices,.5,{x:'-=300',ease:Power4.easeOut,onComplete:setupTV},'f+=2')
            .to(frame2CopyB,.3,{x:wordAni2XAnimValue,ease:Power1.easeIn,onComplete:opacitySet3},'f+=2')
            //change
            .to(TV_device,.5,{x:'-=300',ease:Power4.easeOut},'f+=4')
            .to(frame2CopyC,.3,{autoAlpha:1,ease:Power1.easeIn},'f+=2')
            .to(endTablet,.3,{x:'-=60',y:'+=69',scale:.74,ease:Power4.easeOut},'f+=4')
            .to(frame2CopyB,.3,{x:wordAni3XAnimValue,ease:Power1.easeIn,onComplete: function(){opacitySet4();endFrame();}},'f+=4')

        return tl;
    };

    function endFrame() {

        var tl = new TimelineMax();

        tl
            .delay(1.5)
            .to(endTablet, .3, {x:'+=112',y:'-=53',scale:.4, ease:Power1.easeOut, onStart: endElementsIn},'f')
            .to(TV_device,.3,{x:'+=1',y:'-=25',scale:.68,ease:Power1.easeOut},'f')
            .to(prevHeadlines,.3,{autoAlpha:0,ease: Power1.easeIn},'f-=.1')
            .to(ctaBg, .3, {autoAlpha:1,  ease: Power1.easeIn},'f+=.2')
            .to(phoneNumber, .3, {autoAlpha:1,  ease: Power1.easeIn},'f+=.2')
            .to(endFrameHeaderHolder, .3, {autoAlpha: 1, ease:Power1.easeOut},'f+=.1')
            //.to(bottomBar,.3,{y:"-=5",ease:Power1.easeOut},'f+=.1')
            .add(hover,"f+=0.5")

        return tl;
    };


    function animation(){

        tlMain

            .set(container, {visibility: 'visible'})
             .add(frame1(), '+=.2')
             .add(frame2(), '+=1.3')
             .add(frame3(), '+=1')
             //.add(endFrame(), '+=1.5')

        console.log(tlMain.duration());
    };

    function setH(){
        TweenMax.set(endTablet,{delay:.5,y:10});
    }
    function setupTV(){
        TweenMax.set(TVcontent_01,{autoAlpha:1});
        TweenMax.set(TVcontent_02,{x:0,autoAlpha:0});
        TweenMax.set(TVcontent_03,{x:0,autoAlpha:0});
        TweenMax.set(TV_device,{x:300});
    }
    function opacitySet1(){
        TweenMax.to('.wordAni1',.2,{opacity:1});
        TweenMax.to('.wordAni2',.2,{opacity:.25});
        TweenMax.to('.wordAni3',.2,{opacity:.25});
        TweenMax.to('.wordAni4',.2,{opacity:.25});
    }
    function opacitySet2(){
        TweenMax.to('.wordAni1',.2,{opacity:.25});
        TweenMax.to('.wordAni2',.2,{opacity:1});
        TweenMax.to('.wordAni3',.2,{opacity:.25});
        TweenMax.to('.wordAni4',.2,{opacity:.25});
    }
    function opacitySet3(){
        TweenMax.to('.wordAni1',.2,{opacity:.25});
        TweenMax.to('.wordAni2',.2,{opacity:.25});
        TweenMax.to('.wordAni3',.2,{opacity:1});
        TweenMax.to('.wordAni4',.2,{opacity:.25});
    }
    function opacitySet4(){
        TweenMax.to('.wordAni1',.2,{opacity:.25});
        TweenMax.to('.wordAni2',.2,{opacity:.25});
        TweenMax.to('.wordAni3',.2,{opacity:.25});
        TweenMax.to('.wordAni4',.2,{opacity:1,onStart:applyBold});
    }
    function applyBold(){
        lastWord.classList.add("xsb");
    }


    function setWordsAnimStartingPosition() {
        var wordsContainer = document.getElementById('frame2CopyB');
        var bannerWidth = calculateElementWidth('container');
        var firstElemWidth = wordAni1Width;
        var startingPosition = Math.round((bannerWidth - firstElemWidth)/2);

        wordsContainer.style.left = startingPosition + 'px';
    }

    function calculateElementWidth(elem) {
        var elm = document.getElementById(elem);
        var elmWidth = Math.round(elm.getBoundingClientRect().width);

        return elmWidth;
    }

    function calculateWordsXAnimationValue(val1, val2) {
        return ("-=" + (val1/2 + val2/2)).toString();
    }

/* ---------------------------------- Secondary Animations ---------------------------------- */

    function endElementsIn(){

        // Animate either boltOn2 or tablet
        if (boltOn2Visible) {
            TweenMax.to(boltOnHolder2, .3, {x:0, ease: Power2.easeOut})
        }
    };

    function phoneNumberIn(){

        // Animate phone number if available
        if (phoneNumber) {
            TweenMax.to(phoneNumber, .3, {autoAlpha: 1, ease: Power2.easeIn});
        }

    };

};

