$(document).ready(function() {

	
	$('a').click(function(){
	  $('body').removeClass('no-scroll')
	  
	  $('html, body').animate({
	  scrollTop: $( $.attr(this,'href')).offset().top
	  }, 300);

	  setTimeout(function() {
	      $('.homepage-body').removeClass('homepage-body-active');
	      }, 300);

	})
	  });

// ADD ITEM TO BAG POPUP

	// $('#bag-section').click(function(){

	//     if ($(this).hasClass('button-active')) {
	      
	//       $('body').removeClass('no-scroll')
	//       $('.sidebar-container').removeClass('sidebar-active')
	//       $('.page-wrapper').removeClass('wrapper-active')

	//     } else {
	      
	//       setTimeout(function() {
	//       $('body').addClass('no-scroll');
	//       }, 300);
	//       $('.sidebar-container').addClass('sidebar-active')
	//       $('.page-wrapper').addClass('wrapper-active')
	     
	//     }
	//   });

	$('#carousel-next').click(function(){

    	var currentmargin = parseInt($('#carousel').css('margin-left').replace("px", ""));


	    if (currentmargin == -1326) {
	      return false
	    }

	    else {
	      currentmargin = currentmargin - 442
	      $('#carousel').css('margin-left', currentmargin+"px")
	    }

	  });

	$('#carousel-prev').click(function(){

	    var currentmargin = parseInt($('#carousel').css('margin-left').replace("px", ""));


	    if (currentmargin == 0) {
	      return false;
	    }

	    else {
	      currentmargin = currentmargin + 442
	      $('#carousel').css('margin-left', currentmargin+"px");
	    }
	});

});