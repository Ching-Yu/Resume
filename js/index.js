$(document).ready(function(){
  //nav滾動收縮
$(window).on('scroll',function(){
  if($(window).scrollTop() > 100){
        $('.navbar').addClass('nav-fixed scrolled');
     } else {
       $('.navbar').removeClass('nav-fixed scrolled')
     }
})
  
  //typeJS
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 30,
    backSpeed: 10
  });


  //滾動效果
	$('a[href^="#"]').on('click',function(e){ //當a href為#開頭的標籤被點擊執行
    e.preventDefault
		var target = this.hash; //獲取此a的href
		var $target = $(target);
		//Scroll and show hash
		// $('html,body').animate({
		// 	'scrollTop': $target.offset().top
		// },1500,'easeOutExpo',function(){
		// 	window.location.hash = target;
		// });

		//Scroll and don't show hash
		$('html, body').animate({
			'scrollTop': $target.offset().top
		},750,'easeInOutExpo');

	});
  
  //waypoint+animate
  $('#about').css('visibility','hidden')
	$('#about').waypoint(function(){
		$(this).addClass('fadeInUp');
		$('#about').css('visibility','visible')
	　　　},{offset:'90%'});
  
  $('#experience').css('visibility','hidden')
	$('#experience').waypoint(function(){
		$(this).addClass('fadeInUp');
		$('#experience').css('visibility','visible')
	　　　},{offset:'90%'});

	$('.skill-graph').waypoint(function(){
		$(this).addClass('skill-animation');
	　　　},{offset:'90%'});
  
  
  
  $('#portfolio').css('visibility','hidden')
	$('#portfolio').waypoint(function(){
		$(this).addClass('fadeInUp');
		$('#portfolio').css('visibility','visible')
	　　　},{offset:'90%'});
  
  $('#contact').css('visibility','hidden')
	$('#contact').waypoint(function(){
		$(this).addClass('fadeInUp');
		$('#contact').css('visibility','visible')
	　　　},{offset:'90%'});
})