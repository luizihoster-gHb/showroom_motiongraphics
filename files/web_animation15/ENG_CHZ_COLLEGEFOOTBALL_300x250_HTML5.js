(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ENG_CHZ_COLLEGEFOOTBALL_300x250_HTML5_atlas_", frames: [[0,273,340,350],[0,0,486,271],[397,466,40,66],[342,273,72,110],[416,380,78,84],[342,459,53,64],[416,273,73,105],[439,466,33,30],[342,385,49,72],[342,525,41,62],[474,494,28,31],[397,385,15,16],[474,466,36,26],[439,498,28,24]]}
];


// symbols:



(lib.CHZIT_cracker_ff = function() {
	this.spriteSheet = ss["ENG_CHZ_COLLEGEFOOTBALL_300x250_HTML5_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CHZIT_football_logo_2 = function() {
	this.spriteSheet = ss["ENG_CHZ_COLLEGEFOOTBALL_300x250_HTML5_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.piece_01 = function() {
	this.spriteSheet = ss["ENG_CHZ_COLLEGEFOOTBALL_300x250_HTML5_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.piece_02 = function() {
	this.spriteSheet = ss["ENG_CHZ_COLLEGEFOOTBALL_300x250_HTML5_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.piece_03 = function() {
	this.spriteSheet = ss["ENG_CHZ_COLLEGEFOOTBALL_300x250_HTML5_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.piece_04 = function() {
	this.spriteSheet = ss["ENG_CHZ_COLLEGEFOOTBALL_300x250_HTML5_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.piece_05 = function() {
	this.spriteSheet = ss["ENG_CHZ_COLLEGEFOOTBALL_300x250_HTML5_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.piece_06 = function() {
	this.spriteSheet = ss["ENG_CHZ_COLLEGEFOOTBALL_300x250_HTML5_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.piece_07 = function() {
	this.spriteSheet = ss["ENG_CHZ_COLLEGEFOOTBALL_300x250_HTML5_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.piece_08 = function() {
	this.spriteSheet = ss["ENG_CHZ_COLLEGEFOOTBALL_300x250_HTML5_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.piece_09 = function() {
	this.spriteSheet = ss["ENG_CHZ_COLLEGEFOOTBALL_300x250_HTML5_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.piece_10 = function() {
	this.spriteSheet = ss["ENG_CHZ_COLLEGEFOOTBALL_300x250_HTML5_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.piece_11 = function() {
	this.spriteSheet = ss["ENG_CHZ_COLLEGEFOOTBALL_300x250_HTML5_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.piece_12 = function() {
	this.spriteSheet = ss["ENG_CHZ_COLLEGEFOOTBALL_300x250_HTML5_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.rays = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E66D2F").s().p("AjFIJIqKDjIInl1Ig1hPItIE3IMgmRIAog7IvoCCIPemFIusqoIPoJiIn+s0ILkKnICIgxIjQp6IGFI5IEUhkIkmD/IINi6InlGBIQ4nVIveKcIJOh2IpsFTICgJNImGoSICqH/IlnnqIDbJNg");
	this.shape.setTransform(-1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rays, new cjs.Rectangle(-135.9,-101.3,270,201.3), null);


(lib.logoLockUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// current
	this.instance = new lib.CHZIT_football_logo_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoLockUp, new cjs.Rectangle(0,0,243,135.5), null);


(lib.gradient_bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)","rgba(0,0,0,0)","#000000"],[0,0.165,0.82,1],0,-136,0,136.1).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gradient_bg2, new cjs.Rectangle(0,0,300,250), null);


(lib.gradient_bacl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,281).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gradient_bacl, new cjs.Rectangle(0,0,300,250), null);


(lib.cracker_element = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CHZIT_cracker_ff();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cracker_element, new cjs.Rectangle(0,0,170,175), null);


(lib.cheese_chunk_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.piece_12();
	this.instance.parent = this;
	this.instance.setTransform(-7,-6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cheese_chunk_12, new cjs.Rectangle(-7,-6,14,12), null);


(lib.cheese_chunk_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.piece_11();
	this.instance.parent = this;
	this.instance.setTransform(-9,-7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cheese_chunk_11, new cjs.Rectangle(-9,-7,18,13), null);


(lib.cheese_chunk_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.piece_10();
	this.instance.parent = this;
	this.instance.setTransform(-4,-4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cheese_chunk_10, new cjs.Rectangle(-4,-4,7.5,8), null);


(lib.cheese_chunk_09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.piece_09();
	this.instance.parent = this;
	this.instance.setTransform(-7,-8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cheese_chunk_09, new cjs.Rectangle(-7,-8,14,15.5), null);


(lib.cheese_chunk_08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.piece_08();
	this.instance.parent = this;
	this.instance.setTransform(-10,-16,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cheese_chunk_08, new cjs.Rectangle(-10,-16,20.5,31), null);


(lib.cheese_chunk_07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.piece_07();
	this.instance.parent = this;
	this.instance.setTransform(-12,-18,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cheese_chunk_07, new cjs.Rectangle(-12,-18,24.5,36), null);


(lib.cheese_chunk_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.piece_06();
	this.instance.parent = this;
	this.instance.setTransform(-8,-8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cheese_chunk_06, new cjs.Rectangle(-8,-8,16.5,15), null);


(lib.cheese_chunk_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.piece_05();
	this.instance.parent = this;
	this.instance.setTransform(-18,-26,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cheese_chunk_05, new cjs.Rectangle(-18,-26,36.5,52.5), null);


(lib.cheese_chunk_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.piece_04();
	this.instance.parent = this;
	this.instance.setTransform(-13,-16,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cheese_chunk_04, new cjs.Rectangle(-13,-16,26.5,32), null);


(lib.cheese_chunk_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.piece_03();
	this.instance.parent = this;
	this.instance.setTransform(-26,-21,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cheese_chunk_03, new cjs.Rectangle(-26,-21,39,42), null);


(lib.cheese_chunk_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.piece_02();
	this.instance.parent = this;
	this.instance.setTransform(-18,-28,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cheese_chunk_02, new cjs.Rectangle(-18,-28,36,55), null);


(lib.cheese_chunk_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.piece_01();
	this.instance.parent = this;
	this.instance.setTransform(-10,-17,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cheese_chunk_01, new cjs.Rectangle(-10,-17,20,33), null);


(lib.cracker_secuence = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{cycle_1:0,cycle_2:60});

	// Layer_3
	this.instance = new lib.cracker_element();
	this.instance.parent = this;
	this.instance.setTransform(81.2,87.5,1,1,0,0,0,81.2,87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:87.4,scaleX:1,skewX:7,skewY:11.8},119).to({regY:87.5,scaleX:1,skewX:0,skewY:0},120).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.cracker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_793 = function() {
		//stop the cracker animation
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(793).call(this.frame_793).wait(107));

	// animated
	this.instance = new lib.cracker_secuence();
	this.instance.parent = this;
	this.instance.setTransform(1,-1.7,0.8,0.8,0,0,0,80.9,88.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).to({regX:81,scaleX:1.2,scaleY:1.2,x:1.1},3).to({scaleX:1,scaleY:1,x:1},3).to({_off:true},715).wait(107));

	// cheese_chunk_02
	this.instance_1 = new lib.cheese_chunk_02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-94,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-74},59).to({rotation:-45,x:-24},12,cjs.Ease.get(-1)).to({_off:true},1).wait(828));

	// cheese_chunk_07
	this.instance_2 = new lib.cheese_chunk_07();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-11.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-21.5},59).to({rotation:45,x:-21.4,y:-25.5},12,cjs.Ease.get(-1)).to({_off:true},1).wait(828));

	// cheese_chunk_05
	this.instance_3 = new lib.cheese_chunk_05();
	this.instance_3.parent = this;
	this.instance_3.setTransform(17,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:57},59).to({rotation:-150,x:37,y:34},12,cjs.Ease.get(-1)).to({_off:true},1).wait(828));

	// cheese_chunk_03
	this.instance_4 = new lib.cheese_chunk_03();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-41.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-1.5},59).to({rotation:-60,x:8.6,y:21.5},12,cjs.Ease.get(-1)).to({_off:true},1).wait(828));

	// cheese_chunk_04
	this.instance_5 = new lib.cheese_chunk_04();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-19.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:0.5},59).to({rotation:45},12,cjs.Ease.get(-1)).to({_off:true},1).wait(828));

	// cheese_chunk_08
	this.instance_6 = new lib.cheese_chunk_08();
	this.instance_6.parent = this;
	this.instance_6.setTransform(90.5,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:100.5},59).to({rotation:45,x:30.5},12,cjs.Ease.get(-1)).to({_off:true},1).wait(828));

	// cheese_chunk_06
	this.instance_7 = new lib.cheese_chunk_06();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-15,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-20},59).to({x:-10,y:-7.5},12,cjs.Ease.get(-1)).to({_off:true},1).wait(828));

	// cheese_chunk_01
	this.instance_8 = new lib.cheese_chunk_01();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-82,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-62},59).to({rotation:90,x:8,y:-43},12,cjs.Ease.get(-1)).to({_off:true},1).wait(828));

	// cheese_chunk_09
	this.instance_9 = new lib.cheese_chunk_09();
	this.instance_9.parent = this;
	this.instance_9.setTransform(41,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:31},59).to({x:11,y:-16.5},12,cjs.Ease.get(-1)).to({_off:true},1).wait(828));

	// cheese_chunk_10
	this.instance_10 = new lib.cheese_chunk_10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(55.6,-19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:45.6},59).to({x:5.6},12,cjs.Ease.get(-1)).to({_off:true},1).wait(828));

	// cheese_chunk_12
	this.instance_11 = new lib.cheese_chunk_12();
	this.instance_11.parent = this;
	this.instance_11.setTransform(40.5,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:50.5},59).to({x:20.5,y:2.3},12,cjs.Ease.get(-1)).to({_off:true},1).wait(828));

	// cheese_chunk_11
	this.instance_12 = new lib.cheese_chunk_11();
	this.instance_12.parent = this;
	this.instance_12.setTransform(45.8,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:35.8},59).to({x:15.8},12,cjs.Ease.get(-1)).to({_off:true},1).wait(828));

	// static
	this.instance_13 = new lib.cracker_element();
	this.instance_13.parent = this;
	this.instance_13.setTransform(25.2,18.5,1,1,0,0,0,105.2,108.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(792).to({_off:false},0).wait(108));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,-74,213,144.5);


(lib.background_shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// vector_darker copy 2
	this.instance = new lib.gradient_bg2();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// vector_darker copy
	this.instance_1 = new lib.gradient_bacl();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// vector_darker
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#DF0810","#950B09"],[0,1],0,0,0,0,0,195.3).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.background_shape, new cjs.Rectangle(-5.9,0,316,258.8), null);


(lib.clickTagger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.background_shape();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.ENG_CHZ_COLLEGEFOOTBALL_300x250_HTML5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		//variables
		//var copy1_a = this.copy1_a;
		//var copy1_b = this.copy1_b;
		//var copy1_c = this.copy1_c;
		//var copy1_d = this.copy1_d;
		//var copy1 = [copy1_a,copy1_b];
		//var copyAll_1 = [copy1_a,copy1_b,copy1_c,copy1_d];
		var bg01 = this.bg01;
		var bg_rays = this.bg_rays;
		//elements
		//var cheezIt_package = this.cheezIt_package;
		var cracker = this.cracker;
		var logoLockUp = this.logoLockUp;
		//var cta = this.cta;
		//var cta_copy = this.cta.cta_copy;
		//var cta_line = this.cta.cta_line;
		var clickTagger = this.clickTagger;
		//var all = [cheezIt_package,cta];
		
		root.stop();
		
		//var tl = new TimelineMax({onStart:confettiFX})
		var scaleV = 0.5;
		//var backSoft = Back.easeOut.config(1);
		var tl = new TimelineMax()
		
		tl
			.set(bg_rays,{alpha:0,scaleX:scaleV,scaleY:scaleV})
			//.set(eggo_package,{z: -0.01,rotationZ: -0.01,force3D:true})
			//.set(frenchToast,{alpha:1})
			.add("frame1")
			.to(bg_rays,.6,{alpha:1,scaleX:1,scaleY:1,ease:Back.easeOut},"frame1+=1")
			//.staggerFrom(coppy1,.3,{y:"+=100",ease:Back.easeOut.config(1),onStart:coppy1Alpha},.2,"frame1+=.5")
			//.from(copy1,.3,{alpha:0,ease:backSoft},"frame1+=.25")
			//.from(cracker,1.5,{scaleX:scaleV,scaleY:scaleV,x:"+=200",ease:Circ.easeOut},"frame1")
			//.add("frame2","+=.7")
			//.to(copy1_a,.3,{x:"-=17",ease:backSoft},"frame2")
			//.to(copy1_b,.3,{alpha:0,ease:backSoft},"frame2")
			//.from(copy1_c,.3,{alpha:0,ease:backSoft},"frame2")
			//.from(cheezIt_package,.5,{x:"+=300",ease:Sine.easeIn},"frame2")
			//.to(logoLockUp,.5,{x:"-=150",ease:Back.easeIn.config(1)},"frame2")
			//.to(copyAll_1,.5,{x:"+=150",ease:Back.easeIn.config(1)},"frame2")
			//.to(copy_disclaimer,.3,{alpha:0,ease:Sine.easeOut},"frame2+=.3")
			//.to(cracker,.2,{scaleX:.67,scaleY:.67,x:"+=42",y:"-=38",ease:Back.easeIn.config(3),onComplete:changePackjump},"frame2+=.5")
			//.pause(2,false)	
			//.add("frame3","+=.7")
			//.to(copy1_a,.3,{x:"-=14",ease:backSoft},"frame3")
			//.to(copy1_c,.3,{alpha:0,ease:backSoft},"frame3")
			//.from(copy1_d,.3,{alpha:0,ease:backSoft},"frame3")
			//.from(cta,.3,{alpha:0,ease:Power3.easeOut,onStart:revealCta},"frame3")
			//.add(resetPack,"frame3")
			//.repeatDelay(2)
			//.repeat(1)
			//.restart()
			function revealCta(){
				TweenMax.to(cta_copy,.3,{scaleX:1.1,scaleY:1.1,repeat:1,yoyo:true,ease:Power3.easeInOut,OnComplete:enableRollOver});
				TweenMax.from(cta_line,.3,{scaleX:.1,scaleY:1,ease:Power1.easeOut});
			}
			
			function changePackjump(){
				changePack();
				TweenMax.to(eggo_package,.2,{scaleX:1.1,scaleY:1.1,repeat:1,rotation:"-=1",yoyo:true,ease:Power3.easeInOut});
			}
			
			function changePack(){
				eggo_package.gotoAndPlay(2);
				TweenMax.set(frenchToast,{alpha:0});
				console.log("change");
			}
			
			function resetPack(){
				eggo_package.gotoAndPlay(1);
				TweenMax.set(frenchToast,{alpha:1});
				console.log("reset");
			}	
			
			function coppy1Alpha(){
				TweenMax.set(coppy1,{alpha:1});
				console.log("alpha1");
			}
			
			function enableRollOver(){
				clickTagger.addEventListener﻿('mouseover'﻿, inCTA);
				clickTagger.addEventListener﻿('mouseout'﻿, outCTA);
				console.log("CTA listener");
			}
			
			function inCTA(){
				TweenMax.to(cta_copy,.5,{scaleX:1.1,scaleY:1.1,ease:Power3.easeInOut});
				console.log("CTA IN effect");
			}
			
			function outCTA(){
				TweenMax.to(cta_copy,.5,{scaleX:1,scaleY:1,ease:Power3.easeInOut});
				console.log("CTA OUT effect");
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// clickTagger
	this.clickTagger = new lib.clickTagger();
	this.clickTagger.name = "clickTagger";
	this.clickTagger.parent = this;
	this.clickTagger.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickTagger, 0, 1, 2, false, new lib.clickTagger(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTagger).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDgA3RTYMAujAAAMAAAgmvMgujAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// logo_lockUp
	this.logoLockUp = new lib.logoLockUp();
	this.logoLockUp.name = "logoLockUp";
	this.logoLockUp.parent = this;
	this.logoLockUp.setTransform(115,109.2,1,1,0,0,0,85,43.2);

	this.timeline.addTween(cjs.Tween.get(this.logoLockUp).wait(1));

	// cracker
	this.cracker = new lib.cracker();
	this.cracker.name = "cracker";
	this.cracker.parent = this;
	this.cracker.setTransform(155,127);

	this.timeline.addTween(cjs.Tween.get(this.cracker).wait(1));

	// element
	this.bg_rays = new lib.rays();
	this.bg_rays.name = "bg_rays";
	this.bg_rays.parent = this;
	this.bg_rays.setTransform(151,133.1);
	this.bg_rays.filters = [new cjs.BlurFilter(20, 20, 2)];
	this.bg_rays.cache(-138,-103,274,205);

	this.timeline.addTween(cjs.Tween.get(this.bg_rays).wait(1));

	// background
	this.bg01 = new lib.background_shape();
	this.bg01.name = "bg01";
	this.bg01.parent = this;
	this.bg01.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.bg01).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(144.1,125,316,258.8);
// library properties:
lib.properties = {
	id: 'DDC85CA46E9C41A997876999075AF3CD',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ENG_CHZ_COLLEGEFOOTBALL_300x250_HTML5_atlas_.png?1566426741484", id:"ENG_CHZ_COLLEGEFOOTBALL_300x250_HTML5_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DDC85CA46E9C41A997876999075AF3CD'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;