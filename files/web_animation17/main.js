
function startAd() {

    var adContainer = document.getElementById("container");

    TweenMax.defaultOverwrite = "false";
    document.getElementById("banner").style.visibility = "visible";

    if(isIE==true)
        {
           forIE11();
        }
    else
        {
            init();
        }

}

function init() {

  TweenMax.set($("#box"), {
    css: {
      perspective: "800px"
    }
  });
  TweenMax.set($(".box"), {
    css: {
      transformStyle: "preserve-3d"
    }
  });
  TweenMax.set($(".box div"), {
    css: {
      transformOrigin: "50% 50% -142.5px",
      transformPerspective: "800px"
    }
  });

  var tl = new TimelineMax({
    paused: true,
     });

  // side 1
  tl.fromTo($(".front"), 1, {immediateRender: false,rotationX: "0deg",rotationY: "-90deg",rotationZ: "0deg"},
            {rotationX: "0deg",rotationY: "-180deg",rotationZ: "0deg", ease: Back.easeOut}, "cube");
  // side 2
  tl.fromTo($(".back"), 1, {immediateRender: false,rotationX: "0deg",rotationY: "-270deg",rotationZ: "0deg"},
            {rotationX: "0deg", rotationY: "-360deg",rotationZ: "0deg",ease: Back.easeOut }, "cube");
  // side 5
  tl.fromTo($(".top"), 1, {immediateRender: false,rotationX: "0deg",rotationY: "0deg",rotationZ: "0deg"},
            {rotationX: "0deg",rotationY: "-90deg",rotationZ: "0deg", ease: Back.easeOut}, "cube");
  // side 6
  tl.fromTo($(".bottom"), 1, {immediateRender: false,rotationX: "0deg",rotationY: "-180deg",rotationZ: "0deg"},
            {rotationX: "0deg",rotationY: "-270deg",rotationZ: "0deg",ease: Back.easeOut}, "cube");

  tl.progress(1).progress(0);
  //tl.play(0);

    var tl1 = new TimelineMax();
    tl1
    .addLabel('frame2', 0)
    .add(function(){tl.play(0)},'frame2+=2')
    .to("#niddle",.7,{ force3D:true,delay:.7,rotation:20,transformOrigin:"50% 50%",ease:Back.easeOut,easeParams:[15]},'frame2+=2')
    .to("#niddle",.7,{force3D:true, delay:1.4,rotation:50,transformOrigin:"50% 50%",ease:Back.easeOut,easeParams:[12]},'frame2+=2')
    .to("#niddle",.7,{ force3D:true,delay:2.1,rotation:100,transformOrigin:"50% 50%",ease:Back.easeOut,easeParams:[6]},'frame2+=2')

    .addLabel('frame3', 'frame2+=2')
    .to($(".front"), 1, {immediateRender: false,ease: Back.easeOut,rotationX: "0deg",rotationY: "-=90deg",rotationZ: "0deg"},'frame3+=3')
    .to($(".back"), 1, {immediateRender: false,ease: Back.easeOut,rotationX: "0deg",rotationY: "-=90deg",rotationZ: "0deg"},'frame3+=3')
    .to($(".top"), 1, {immediateRender: false,ease: Back.easeOut,rotationX: "0deg",rotationY: "-=90deg",rotationZ: "0deg"},'frame3+=3')
    .to($(".bottom"), 1, {immediateRender: false,ease: Back.easeOut,rotationX: "0deg",rotationY: "-=90deg",rotationZ: "0deg"},'frame3+=3')

    .addLabel('frame4', 'frame3+=2')
    .to($(".front"), 1, {immediateRender: false,ease: Back.easeOut,rotationX: "0deg",rotationY: "-=90deg",rotationZ: "0deg"},'frame4+=3')
    .to($(".back"), 1, {immediateRender: false,ease: Back.easeOut,rotationX: "0deg",rotationY: "-=90deg",rotationZ: "0deg"},'frame4+=3')
    .to($(".top"), 1, {immediateRender: false,ease: Back.easeOut,rotationX: "0deg",rotationY: "-=90deg",rotationZ: "0deg"},'frame4+=3')
    .to($(".bottom"), 1, {immediateRender: false,ease: Back.easeOut,rotationX: "0deg",rotationY: "-=90deg",rotationZ: "0deg"},'frame4+=3')

    .to("#cta_a", 0.5, {alpha:0},'frame4+=5')
    .to("#call", 0.5, {alpha:1}, 'frame4+=5')
    .add(mouseHover, 'frame4+=5.5')
    .add(listeners,'frame4+=5.5')
};
function forIE11(){

     var tl = new TimelineMax();
    tl


    .set($(".front"), {autoAlpha:0})
    .set($(".back"), {autoAlpha:0})
    .set($(".top"), {autoAlpha:1})
    .set($(".bottom"), {autoAlpha:0})

    .addLabel('frame2', 0)
    .to($(".top"),.5, {autoAlpha:0},'frame2+=2')
    .to($(".back"), .5,{autoAlpha:1},'frame2+=2.5')
    .to("#niddle",.7,{ force3D:true,delay:.7,rotation:20,transformOrigin:"50% 50%",ease:Back.easeOut,easeParams:[15]},'frame2+=2.5')
    .to("#niddle",.7,{force3D:true, delay:1.4,rotation:50,transformOrigin:"50% 50%",ease:Back.easeOut,easeParams:[12]},'frame2+=2.5')
    .to("#niddle",.7,{ force3D:true,delay:2.1,rotation:100,transformOrigin:"50% 50%",ease:Back.easeOut,easeParams:[6]},'frame2+=2.5')

    .addLabel('frame3', 'frame2+=3.5')
    .to($(".back"),.5, {autoAlpha:0},'frame3+=2')
    .to($(".bottom"), .5,{autoAlpha:1},'frame3+=2.5')

    .addLabel('frame4', 'frame3+=2.5')
    .to($(".bottom"),.5, {autoAlpha:0},'frame4+=2')
    .to($(".front"), .5,{autoAlpha:1},'frame4+=2.5')

    .to("#cta_a", 0.5, {alpha:0},'frame4+=3')
    .to("#call", 0.5, {alpha:1}, 'frame4+=3')
    .add(mouseHover, 'frame4+=3.5')
    .add(listeners,'frame4+=3.5')

}



function listeners(){
    console.log("OVER")
    document.getElementById("container").addEventListener('mouseenter', mouseHover, false);

}
function mouseHover(){
    var tl = new TimelineMax();
        tl.fromTo('#sheen', 1, {x:"-80px 0px"},{x:"230px 0px"})
        return tl;

    }
