 // ___ __, _, _ __, _,   _, ___ __,   _  _, _
 //  |  |_  |\/| |_) |   /_\  |  |_    | (_  |
 //  |  |   |  | |   | , | |  |  |     | , ) |
 //  ~  ~~~ ~  ~ ~   ~~~ ~ ~  ~  ~~~   ~  ~  ~
//	 scroller 4.4  Oct 2024


function Scroller(props){

	var container=document.querySelector(props.container),
		content=document.querySelector(props.content),
		specificWord=props.specificWord || false,
		range,
		rail,
		autoscroll=props.autoscroll || false,
		scroller,
		speed=props.speed || 5,
		delay=props.delay || 0,
		auto,
		ui=false,
		dragged=false,
		y_pos=0,
		y_elem=0,
		version=4.4;

	var create= function(){

		range=document.createElement('div');
		range.className='scroller-container';

		scroller=document.createElement('div');
		scroller.className='knob';

		rail=document.createElement('div');
		rail.className='knob-arrange';

		container.appendChild(range);
		range.appendChild(rail);
		range.appendChild(scroller);

		setTimeout(function(){
			content.scrollTop=0;
		},100)
	}

	var createListener= function(){

		scroller.addEventListener('mousedown',startDrag);
		document.addEventListener('mouseup',stopDrag);
		document.addEventListener('mouseleave',stopDrag);
		content.addEventListener('scroll', moveScroller);
		document.addEventListener('mousemove',knobSroll);
		
		/// destroyers
		content.addEventListener('touchmove', destroy);
		content.addEventListener('mousewheel', destroy);
		content.addEventListener('DOMMouseScroll', destroy);
		content.addEventListener('click', destroy);
	}

	var destroy = function(){
		if(auto!='') tl_scroll.pause();
		ui =true;
	}

	var startDrag=function(e){
		e.preventDefault();
		normalizedPosition=e.pageY;
		contentPosition=content.scrollTop;
		dragged=true;
		destroy();

		y_elem = y_pos - e.target.offsetTop;
	}

	var stopDrag=function(){
		dragged=false;
	}

	var knobSroll =function(e){
		y_pos = e.pageY;

		var areaTodrag=rail.offsetHeight-scroller.offsetHeight,
			mouseDiff=y_pos-y_elem, 
			percent =scroller.offsetTop/areaTodrag;

		if(dragged){
			if((mouseDiff)<0){
				scroller.style.top=0;
			}else if((mouseDiff)>(areaTodrag)){
				scroller.style.top=areaTodrag+"px";
			}else{
				scroller.style.top=mouseDiff+"px";
			}
								
			content.scrollTop= (content.scrollHeight-container.offsetHeight)*percent;
			console.log(content.scrollTop)
		}

	}

	var moveScroller =function(e){
		var percent = (content.scrollHeight - container.offsetHeight) / (rail.offsetHeight - scroller.offsetHeight);
		var proportional = (e.target.scrollTop/percent);

	   if(!dragged) (e.target.scrollTop==0) ? scroller.style.top=0 : scroller.style.top = proportional+"px";

   }

	this.autoscroll = function(speedParam){
		!ui ? autoscroll=true : autoscroll=false;
		speed=speedParam;
		autoscrolling();
	}

	var autoscrolling = function(){
		if(autoscroll){
			tl_scroll.to(content,speed,{scrollTo:{y:'max'},ease:Power0.easeNone,delay:delay});
			var frequency = content.scrollHeight-content.clientHeight;
			if(content.scrollTop == frequency){
				scroller.style.top=range.offsetHeight-scroller.clientHeight;
				tl_scroll.pause();
			}
		}
	}

	this.expanding = function (){
		var newHeight = (document.querySelector('.banner').offsetHeight+content.scrollHeight-content.offsetHeight)+20; 
		document.querySelector('.banner').style.height = newHeight+'px';
		document.querySelector('#isi-container').style.height = `${content.scrollHeight + 20}px`;
	}

	this.autoCorret = function(){
	 
	    var changed = content.innerHTML.replace(/[a-zA-Z]+\-[a-zA-Z]+\-[a-zA-Z]+/gi,function(x){
	    	
	    	// finds words like with word-word-word' //
	        return '<span class="nobr">'+x+'</span>';
	    }).replace(/[a-zA-Z]+(-|—)[a-zA-Z]+/gi,function(x){
	    	
	    	// finds words like with word-word' //
	        return '<span class="nobr">'+x+'</span>';
	    }).replace(/(\([0-9]+\)|[0-9]+).([0-9]+|[a-zA-Z]+).([0-9]+|[a-zA-Z]+)\-[0-9]+(\-[0-9]+|)+/gi,function(x){
	    	
	    	// finds words number like 1-800-FDA-4447' //
	    	let c = x.replace(/-/g,'nohyp')
	        return '<span class="nobr">'+c+'</span>';
	    }).replace(/[0-9]+(-|—)[a-zA-Z]+/gi,function(x){
	    	
	    	// finds words like with number-word' //
	    	let d = x.replace(/-/g,'nohyp')
	        return '<span class="nobr">'+d+'</span>';
	    }).replace(/(([1-9](-|))+\s[a-zA-Z]*s)\b/gim,function(x){
	    	
	    	// finds words like number space word ending s  example: 12 months' //
	    	let e = x.replace(/-/g,'nohyp')
	        return '<span class="nobr">'+e+'</span>';
	    }).replace(/option+\s+[0-9]/gi,function(x){
	    	
	    	// finds expression like option space number' //
	        return '<span class="nobr">'+x+'</span>';
	    }).replace(/\s+one+\s+\w+/gi,function(x){
	    	
	    	// finds words like one space word example: one day' //
	        return '<span class="nobr">'+x+'</span>';
	    }).replace(/[(]+\d*\.?\d+%+\s?(vs)+\s\d*\.?\d+%+[)]/gm,function(x){
	    	// finds like (60% vs 42%)
	    	return '<span class="nobr">'+x+'</span>';
	    }).replace(/[(]+[<|>|≥|≤]+\d*\.?\d+%+[)]|[(]+\d*\.?\d+%+[)]|[<|>|≥|≤]+\d*\.?\d+%|\d*\.?\d+%/gmi,function(x){

	    	// finds like ≥12%' or like (≥12%) or like (12%)' or like 12%' //
	        return '<span class="nobr">'+x+'</span>';
	    }).replace(/(\d*\.?\d+)\s?(mg)/gi,function(x){

	    	// finds words like 12 mg' //
	        return '<span class="nobr">'+x+'</span>';
	    }).replace(/®/gi,function(x){

	    	// finds ®|™ to add sup class' //
	        return '<span class="sup">'+x+'</span>';
	    }).replace(/nohyp/gi,function(x){
	    	// replace sign to ASCII code' //
	    	//console.log('no hyp')
	    	return '-';	        
	    })
	 	
	    content.innerHTML = changed;
	    //console.log(changed);
	}

	this.specificWord = function(){

		var changed;
		if(specificWord){
			specificWord.forEach(function(el,i){
				var word=el;
				var regexp = new RegExp(word, "gi");
				changed = content.innerHTML.replace(regexp,function(x){
					//console.log(x);
					return '<span class="nobr">'+x+'</span>';
				});
				content.innerHTML = changed;
			})
		}
		
	}

	this.getOS = () => {

		var userAgent = window.navigator.userAgent.toLowerCase()

	    if(navigator.userAgent.includes("(Mac")) {

			document.querySelector('#isi').classList.add('mac-all');

			switch(true){
				case navigator.userAgent.includes('Edg'):
					document.querySelector('#isi').classList.add('edge-mac')
				break;
				case navigator.userAgent.includes('Chrome'):
					document.querySelector('#isi').classList.add('chrome-mac') 
				break;
				case navigator.userAgent.includes('Safari'):
					document.querySelector('#isi').classList.add('safari') 
				break;
				case navigator.userAgent.includes('Firefox'):
					document.querySelector('#isi').classList.add('firefox-mac')
				break;
			}

	    }else if(navigator.userAgent.includes("Win")) {

			document.querySelector('#isi').classList.add('pc-all');

			switch(true){
				case navigator.userAgent.includes('Edg'):
					document.querySelector('#isi').classList.add('edge-pc')
				break;
				case navigator.userAgent.includes('Chrome'):
					document.querySelector('#isi').classList.add('chrome-pc') 
				break;
				case navigator.userAgent.includes('Firefox'):
					document.querySelector('#isi').classList.add('firefox-pc')
				break;
			}


		}else if(navigator.userAgent.includes("iP")){
			document.querySelector('#isi').classList.add('iphoneIpad');
	    }else if(/android/.test(userAgent)) {
	        document.querySelector('#isi').classList.add('android');
	    } 

	}

	this.getVersion= function(){
		return version;
	}

	create();
	createListener();
	setTimeout(autoscrolling,1000);
	this.autoCorret();
	this.specificWord();
	this.getOS();
}

// plugin autoscroll
var tl_scroll= gsap.timeline();
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function k(){return"undefined"!=typeof window}function l(){return u||k()&&(u=window.gsap)&&u.registerPlugin&&u}function m(e){return"string"==typeof e}function n(e){return"function"==typeof e}function o(e,t){var o="x"===t?"Width":"Height",n="scroll"+o,r="client"+o;return e===T||e===i||e===c?Math.max(i[n],c[n])-(T["inner"+o]||i[r]||c[r]):e[n]-e["offset"+o]}function p(e,t){var o="scroll"+("x"===t?"Left":"Top");return e===T&&(null!=e.pageXOffset?o="page"+t.toUpperCase()+"Offset":e=null!=i[o]?i:c),function(){return e[o]}}function r(e,t){if(!(e=f(e)[0])||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var o=e.getBoundingClientRect(),n=!t||t===T||t===c,r=n?{top:i.clientTop-(T.pageYOffset||i.scrollTop||c.scrollTop||0),left:i.clientLeft-(T.pageXOffset||i.scrollLeft||c.scrollLeft||0)}:t.getBoundingClientRect(),l={x:o.left-r.left,y:o.top-r.top};return!n&&t&&(l.x+=p(t,"x")(),l.y+=p(t,"y")()),l}function s(e,t,n,l,i){return isNaN(e)||"object"==typeof e?m(e)&&"="===e.charAt(1)?parseFloat(e.substr(2))*("-"===e.charAt(0)?-1:1)+l-i:"max"===e?o(t,n)-i:Math.min(o(t,n),r(e,t)[n]-i):parseFloat(e)-i}function t(){u=l(),k()&&u&&document.body&&(T=window,c=document.body,i=document.documentElement,f=u.utils.toArray,u.config({autoKillThreshold:7}),v=u.config(),a=1)}var u,a,T,i,c,f,v,y={version:"3.7.1",name:"scrollTo",rawVars:1,register:function register(e){u=e,t()},init:function init(e,o,r,l,i){a||t();var c=this,f=u.getProperty(e,"scrollSnapType");c.isWin=e===T,c.target=e,c.tween=r,o=function _clean(e,t,o,r){if(n(e)&&(e=e(t,o,r)),"object"!=typeof e)return m(e)&&"max"!==e&&"="!==e.charAt(1)?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var l,i={};for(l in e)i[l]="onAutoKill"!==l&&n(e[l])?e[l](t,o,r):e[l];return i}(o,l,e,i),c.vars=o,c.autoKill=!!o.autoKill,c.getX=p(e,"x"),c.getY=p(e,"y"),c.x=c.xPrev=c.getX(),c.y=c.yPrev=c.getY(),f&&"none"!==f&&(c.snap=1,c.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),null!=o.x?(c.add(c,"x",c.x,s(o.x,e,"x",c.x,o.offsetX||0),l,i),c._props.push("scrollTo_x")):c.skipX=1,null!=o.y?(c.add(c,"y",c.y,s(o.y,e,"y",c.y,o.offsetY||0),l,i),c._props.push("scrollTo_y")):c.skipY=1},render:function render(e,t){for(var n,r,l,i,s,p=t._pt,c=t.target,f=t.tween,u=t.autoKill,a=t.xPrev,y=t.yPrev,d=t.isWin,x=t.snap,g=t.snapInline;p;)p.r(e,p.d),p=p._next;n=d||!t.skipX?t.getX():a,l=(r=d||!t.skipY?t.getY():y)-y,i=n-a,s=v.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),u&&(!t.skipX&&(s<i||i<-s)&&n<o(c,"x")&&(t.skipX=1),!t.skipY&&(s<l||l<-s)&&r<o(c,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(f.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(f,t.vars.onAutoKillParams||[]))),d?T.scrollTo(t.skipX?n:t.x,t.skipY?r:t.y):(t.skipY||(c.scrollTop=t.y),t.skipX||(c.scrollLeft=t.x)),!x||1!==e&&0!==e||(r=c.scrollTop,n=c.scrollLeft,g?c.style.scrollSnapType=g:c.style.removeProperty("scroll-snap-type"),c.scrollTop=r+1,c.scrollLeft=n+1,c.scrollTop=r,c.scrollLeft=n),t.xPrev=t.x,t.yPrev=t.y},kill:function kill(e){var t="scrollTo"===e;!t&&"scrollTo_x"!==e||(this.skipX=1),!t&&"scrollTo_y"!==e||(this.skipY=1)}};y.max=o,y.getOffset=r,y.buildGetter=p,l()&&u.registerPlugin(y),e.ScrollToPlugin=y,e.default=y;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});
