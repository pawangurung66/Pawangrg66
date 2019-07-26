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
