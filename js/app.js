function animateLogo(){
	// `#box` 元素进行 2 秒的动画
	TweenMax.from(".react-logo",2,{
		css: {
			// 在同时更改多个 CSS 属性
			y: "-200px",
			opacity: 0,
		},
		 // 永久重复动画的选项
    // repeat: -1,

    // 反转、重新运行动画的选项
    // yoyo: true,

    // 改变 easing 类型
    ease: animateLogo.easeInOut,
	});
}
function animateRobot() {
	var t = new TimelineMax({repeat:-1,yoyo: true});
	t.to("#android-robot",0.5,{rotation: "-43deg"})
		.to("#android-robot",0.5,{rotation: "-50deg"})
		.to("#android-robot",0.5,{rotation: "-43deg"})
		.to("#android-robot",0.5,{rotation: "-50deg"})
		// .to("#android-robot",1,{y: "-500px",x:"-500px"})
		// .to("#android-robot",0.5,{x:"-900px",y: "-900px",scale: "200"});
}
function updateSliderControl() {
  // 获得所有的 slider 链接
  var links = document.querySelectorAll("#slider-control a")

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    // 获取被链接指向的部分
    var section = document.querySelector(link.getAttribute('href'));
    var sectionTop = section.offsetTop;
    var sectionBottom = sectionTop + section.clientHeight;
    // 检查 window.scrollY 是否在这部分中
    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}
function scrollToElement(element) {
  var topOfElement = element.offsetTop+'px';
  TweenMax.to(window,1,{
    scrollTo: {
      y: topOfElement,
    },

    ease: Power2.easeInOut
  });
}

function addSmoothScrolling() {
  var links = document.querySelectorAll("#slider-control a")

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    link.addEventListener("click",function(event) {
      // `event` 是鼠标点击事件
			event.defaultPrevented;
      // event.preventDefault();
      // BUG 警告！使用闭包或者 ES6 `let` 修复。
      var href = document.querySelector(event.currentTarget.getAttribute('href'));
console.log(href);
      scrollToElement(href);
    });
  }
}

// 当页面加载完毕时开始动画。
window.onload = function() {
  animateLogo();
	animateRobot();
	updateSliderControl();// 当页面首次加载的时候更新 slider
	addSmoothScrolling();
};
// 使用 onscroll 回调函数来更新 slider
window.onscroll = function() {
  updateSliderControl();
};