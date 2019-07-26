jQuery(document).ready(function($){
	
	/*----When user clickd on indiviual project readmore btn, it displays the indiviual
	project short info with img and description. When btn is hit the overlay will also
	appear and disapear when clicking on overlay-----*/

	$('.row .col .holder #first-btn').click(function(){	
		$('body').addClass('open-menu');
		$('.first-content').show();
	});

	$('.row .col .holder #second-btn').click(function(){
		$('body').addClass('open-menu');
		$('.second-content').show();
	});

	$('.row .col .holder #third-btn').click(function(){
		$('body').addClass('open-menu');
		$('.third-content').show();
	});

	$('.row .col .holder #fourth-btn').click(function(){
		$('body').addClass('open-menu');
		$('.fourth-content').show();
	});

	$('.overlay').click(function(){
		$('body').removeClass('open-menu');
		$('.first-content').hide();
		$('.second-content').hide();
		$('.third-content').hide();
		$('.fourth-content').hide();
	});
	//End of Porfolio btn function.


	//Toggle btn menu
	$('#toggle-btn').click(function(){
  		$('#toggle-btn').toggleClass('active');
  		$('body').toggleClass('open-menu')
  	});

  	
  	// When we click on navigation link it should close the menu and
  	//it should change the Btn close menu again to Hamberger menu-----
  	
  	$('.main-navigation li a').click(function(){
  		$('#toggle-btn').toggleClass('active');
  		$('body').removeClass('open-menu')
  	});

  	$('.overlay').click(function(){
  		$('#toggle-btn').toggleClass('active');
  		$('body').removeClass('open-menu')
  	});

  	// End of Toggle menu js

	var $grid = $("body .portfolio .row").isotope({
	  itemSelector: ".portfolio .row .col",
	  layoutMode: "fitRows"
	});

	$(".list-title").on("click", "button", function() {
	  var filterValue = $(this).attr("data-filter");
	  // use filterFn if matches value
	  $grid.isotope({ 
	  	filter: filterValue 
	  });
	  
	});

	new WOW().init();

})

//To the top btn js

$(document).ready(function($){
	$(window).scroll(function(){
	 if($(this).scrollTop() > 40) {
	$('.to-top').fadeIn();
  }   else{
	$('.to-top').fadeOut();
  }

});
	$('.to-top').click(function(){
		$('html , body').animate({scrollTop: 0}, 800);
	});

});


	//End of To the top btn js
