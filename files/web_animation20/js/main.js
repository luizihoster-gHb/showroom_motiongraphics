var _btnExit = document.getElementById("btn-exit"),
  _loadedImages = 0,
  tt,
  _imageArray = [
      "background.jpg" ,
      "copy1_1.png" ,
      "copy1_2.png" ,
      "copy1_3.png" ,
      "copy2.png" ,
      "copy3.png" ,
      "copy4.png" ,
      "copy5.png" ,
      "copy6_1.png" ,
      "copy6_2.png" ,
      "copy7_1.png" ,
      "copy7_2.png" ,
      "cta.png" ,
      "img_eyebrow1.png" ,
      "img_eyebrow2.png" ,      
      "img2_body.jpg" ,
      "img2_brain.jpg" ,
      "img2_eyes_01.jpg" ,
      "img2_eyes_02.jpg" ,
      "img2_heart.jpg" ,
      "img2_kidney.jpg" ,
      "logobar.png" ,
      "title.png" 
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
  initAnimations();
  document.querySelector("#btn-exit").addEventListener("click", exits);
}
function initAnimations() {
  tt = gsap.timeline({
    defaults: {
      duration: 1.5,
      ease: "power3.out",
    },
  });
  tt.set(".banner", { display: "block" })
    //.set('svg', { display: 'block' })
    .set([ '#copy2','#copy3', '#copy4', '#copy5','#copy6_1','#copy6_2','#copy7_1','#copy7_2'], {  alpha: 0, 'webkitFilter': 'blur(3px)'})
    .set('#cta', { rotation: 0.01, z: 0.01,transformOrigin: '150px 177px', })
    .set('#mask5',{ clipPath:"xywh(150px 125px 0% 0% round 30%)" })
    .set('#mask6',{ clipPath:"xywh(150px 125px 0% 0% round 20%)" })
    .set(['#sha1','#sha4','#sha5','#sha6'],{opacity:1,scale:.1,y:"-=5"})
    //FOLD letters
    .set('#letter_U',{transformOrigin:'0px 129px'})
    .set('#letter_N',{transformOrigin:'52px 129px'})
    .set('#letter_F',{transformOrigin:'93px 129px'})
    .set('#letter_O',{transformOrigin:'133px 129px'})
    .set('#letter_L',{transformOrigin:'170px 129px'})
    .set('#letter_D',{transformOrigin:'208px 129px'})
    .set('#letter_S',{transformOrigin:'248px 129px'})
    
    .addLabel('f0', 0)
    .to('.blur1',{duration:1,x:gsap.utils.wrap(["+=280","-=280"]),'webkitFilter': 'blur(2px)',ease:'power4.in'},'f0+=.5')
    .to('.copy1',{duration:1,opacity:0},">")
   
    .addLabel('f1', 2)
    .to('#copy2',{opacity:1,'webkitFilter': 'blur(0px)'},'f1')
    //.from('#mask1',{opacity:0},'f1')
    // .to('#mask1',{clipPath:"path('M253.2,150.9c-0.4,13.5-9.2,23.4-21,32c-9,5.5-21.4,6.6-36,5c-5.9-2.2-11.9-5.4-18-11c-3.4-2.1-7.7-2.2-13,0l-23,7c-24.1,5-45.6,1.5-64-12c0,0-33.5-24.5-14.5-70c22-41.5,63-40.5,84.5-39s41.9,12.1,48.5,19.5l15,15c6.8,3.3,13,5.5,19,7c7.6,2.1,12.2,5.9,15.5,10.5C253,124.6,255.5,136.5,253.2,150.9z')",ease:"power3.in"},">")
    .to('#mask1',{duration:1,clipPath:"polygon(70% 86%, 77% 83%, 83% 76%, 85% 69%, 84% 61%, 82% 54%, 78% 50%, 71% 48%, 66% 42%, 59% 36%, 51% 34%, 41% 33%, 32% 35%, 25% 39%, 20% 46%, 17% 54%, 17% 63%, 19% 71%, 23% 80%, 31% 85%, 40% 85%, 48% 83%, 56% 81%, 62% 86%)",ease:"power4.out"},"f1")
    .to('#sha1',{duration:.6,scale:1,opacity:0,y:"+=5"},'f1')

    .addLabel('f2', 4)
    //out
    .to('#copy2',{opacity:0,'webkitFilter': 'blur(3px)'},'f2')
    .to('#mask1',{clipPath:"polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)",ease:"power4.in"},"f2-=.75")
    .to('#sha1',{opacity:1,scale:.1,y:"-=5"},'f2+=.1')
    //in
    .from('.eyebrow',{duration:.5,opacity:0},'f2+=.5')
    .to('.eyebrow',{duration:.25,rotation:gsap.utils.wrap([-10,10]),yoyo:true,repeat:1,ease:"power2.out"},'>')
    .to('#copy3',{opacity:1,'webkitFilter': 'blur(0px)'},'f2+=.25')
    .to('#mask2',{clipPath:"polygon(28% 51%, 35% 51%, 44% 48%, 48% 55%, 47% 65%, 40% 73%, 30% 74%, 21% 69%, 18% 62%, 20% 52%)",ease:"power4.out"},'f2+=.25')
    .to('#mask3',{clipPath:"polygon(74% 49%, 80% 52%, 83% 58%, 80% 68%, 74% 72%, 65% 73%, 57% 67%, 53% 57%, 58% 50%, 67% 52%)",ease:"power4.out"},'f2+=.25')
   
    .addLabel('f3', 6)
    //out
    .to('#copy3',{opacity:0,'webkitFilter': 'blur(3px)'},'f3')
    .to('#mask2',{clipPath:"polygon(33% 53%, 33% 53%, 33% 53%, 33% 53%, 33% 53%, 33% 53%, 33% 53%, 33% 53%, 33% 53%, 33% 53%)",ease:"power4.in"},'f3-=.75')
    .to('#mask3',{clipPath:"polygon(66% 53%, 66% 53%, 66% 53%, 66% 53%, 66% 53%, 66% 53%, 66% 53%, 66% 53%, 66% 53%, 66% 53%)",ease:"power4.in"},'f3-=.75')
    .to('.eyebrow',{duration:.5,opacity:0},'f3+=.5')
    //in
    .to('#copy4',{opacity:1,'webkitFilter': 'blur(0px)'},'f3+=.25')
    .to('#mask4',{clipPath:"polygon(50% 32%, 41% 25%, 32% 26%, 26% 30%, 22% 40%, 22% 51%, 27% 62%, 42% 83%, 51% 91%, 60% 82%, 73% 62%, 78% 47%, 76% 32%, 68% 26%, 59% 26%)",ease:"power4.out"},'f3+=.25')
    .to('#sha4',{duration:.6,scale:1,opacity:0,y:"+=5"},'f3+=.25')

    .addLabel('f4', 8)
    //out
    .to('#copy4',{opacity:0,'webkitFilter': 'blur(3px)'},'f4')
    .to('#mask4',{clipPath:"polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)",ease:"power4.in"},'f4-=.75')
    .to('#sha4',{opacity:1,scale:.1,y:"-=5"},'f4+=.1')
    //in
    .to('#copy5',{opacity:1,'webkitFilter': 'blur(0px)'},'f4+=.25')
    //.to('#mask5',{clipPath:"polygon(51% 26%, 60% 30%, 68% 42%, 67% 76%, 62% 87%, 51% 93%, 35% 86%, 32% 74%, 32% 41%, 38% 30%)",ease:"power4.out"},'f4+=.25')
    .to('#mask5',{clipPath:"xywh(100px 68px 32% 63% round 30%)",ease:"power4.out"},'f4+=.25')
    .to('#sha5',{duration:.6,scale:1,opacity:0,y:"+=5"},'f4+=.25')

    .addLabel('f5', 10)
    //out
    .to('#copy5',{opacity:0,'webkitFilter': 'blur(3px)'},'f5')
    //.to('#mask5',{clipPath:"polygon(50% 60%, 50% 60%, 50% 60%, 50% 60%, 50% 60%, 50% 60%, 50% 60%, 50% 60%, 50% 60%, 50% 60%)",ease:"power4.in"},'f5-=.75')
    .to('#mask5',{clipPath:"xywh(150px 125px 1% 1% round 30%)",ease:"power4.in"},'f5-=.75')
    .to('#sha5',{opacity:1,scale:.1,y:"-=5"},'f5+=.1')
    
    //in
    .to('.copy6',{opacity:1,'webkitFilter': 'blur(0px)',stagger:.15},'f5+=.25')
    //.to('#mask6',{clipPath:"polygon(50% 34%, 38% 33%, 30% 37%, 23% 44%, 18% 54%, 18% 67%, 22% 77%, 30% 84%, 41% 84%, 49% 81%, 59% 83%, 66% 83%, 73% 80%, 80% 71%, 81% 55%, 78% 45%, 70% 37%, 61% 33%)",ease:"power4.out"},'f5+=.25')
    .to('#mask6',{clipPath:"xywh(60px 87px 60% 48% round 20%)",ease:"power4.out"},'f5+=.25')
    .to('#sha6',{duration:.6,scale:1,opacity:0,y:"+=5"},'f5+=.25')


    .addLabel('f6', 12.5)
    //out
    .to('.copy6',{opacity:0,'webkitFilter': 'blur(3px)'},'f6')
    //.to('#mask6',{clipPath:"polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)",ease:"power4.in"},'f6-=.75')
    .to('#mask6',{clipPath:"xywh(150px 125px 0% 0% round 20%)",ease:"power4.in"},'f6-=.75')
    .to('#sha6',{opacity:1,scale:.1,y:"-=5"},'f6+=.25')
    //in
    .to('.copy7',{duration:1,opacity:1,'webkitFilter': 'blur(0px)',stagger:.15},'f6+=.5')
    //.to('#mask7',{clipPath:"polygon(0 26%, 100% 26%, 100% 57%, 0 57%)",ease:"power4.out"},'f6+=.5')
    //FOLDED ANIMATION
    .from('.letter',{duration: .9,scaleX:.1,stagger:.15,ease:"back.out(.8)"},'f6+=.4')
    .from('.maskLetter',{duration: .9,width:0,stagger:.15,ease:"back.out(.8)"},'f6+=.5')
    //FOLDED ANIMATIO END 
    .from('#logobar', { duration: 1, y: "+=45", ease: 'sine.inOut' }, 'f6+=.75')
    .from('#cta', { duration: 1, alpha: 0,scale:1.1, ease: 'back.out', rotation: 0.01, z: 0.01}, 'f6+=.75')
    // .to(['#copy4', '#copy5'], { duration: 1, alpha: 1, ease: 'sine.inOut', stagger: .5 }, 'f6+=1')
}
function exits() {
  window.open(window.clickTag);
}