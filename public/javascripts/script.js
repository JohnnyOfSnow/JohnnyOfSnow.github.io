$(function(){

	$( document ).ready(function() {
		$('#frontendword').show();
		$('#backendword').hide();
		$('#personalword').hide();
		$('#frontBtn').css('color', 'green');
  	// Handler for .ready() called.
	});

	//document is ready
	var winWidth = $(window).width(),
		winHeight = $(window).height(),
		nav = $('#mainNav ul a'),
		curPos = $(window).scrollTop();

	if(winWidth > 880){
		var headerH = 20;
	}else{
		var headerH = 60;
	}


	/** 
	 *  When user's device display page in small width, 
	 *  should let mainNav in the top of page.(for mobile)
	 */
	
	$(nav).on('click', function(){
		nav.removeClass('active'); // No text-decoration: underline;
		var $el = $(this),
			id = $el.attr('href');
		
		
		 // Make sure this.hash has a value before overriding default behavior
    	if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;
	      console.log("hash is: " + hash);

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (500) specifies the number of milliseconds it takes to scroll to the specified area
	      // 500 = 0.5 seconds
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 500, function(){

	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    } // End if


		$(this).addClass('active');

		if (winWidth < 880){
			$('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}

 		return false;
	});
	

	$('.panel').hide();
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
		$(('#menuBtnWord')).text('關閉');
	},
	function(){
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
		$(('#menuBtnWord')).text('選單');
	});


	$('#frontBtn').click(function(){
		clearSkillWord();
		$('#frontBtn').css('color', 'green');
		$('#frontendword').fadeIn(1000);
	});

	$('#backBtn').click(function(){
		clearSkillWord();
		$('#backBtn').css('color', 'green');
		$('#backendword').fadeIn(1000);
	});

	$('#personalBtn').click(function(){
		clearSkillWord();
		$('#personalBtn').css('color', 'green');
		$('#personalword').fadeIn(1000);
	});

	
	function clearSkillWord(){
		$('#frontBtn').css('color', 'black');
		$('#backBtn').css('color', 'black');
		$('#personalBtn').css('color', 'black');
		$('#frontendword').hide();
		$('#backendword').hide();
		$('#personalword').hide();
	}


});