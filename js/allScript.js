jQuery(window).load(function(){

	//jQuery(".site-header").sticky({ topSpacing: 0, zIndex:99999 });

	$('.search_bbtn').click( function(){
		$('.header_search').addClass('open');
		$('.overlay').addClass('open');
		$('body').addClass('fixed');
	})
	$('.h_search_close').click( function(){
		$('.header_search').removeClass('open');
		$('.overlay').removeClass('open');
		$('body').removeClass('fixed');
	})

	$('.hammer a').click( function(){
		$('.header-menu').addClass('open');
	})
	$('.menu_close').click( function(){
		$('.header-menu').removeClass('open');
	})

	$('.testimonials-holder .owl-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    dots:false,
	    nav:true,
	    autoplay:true,
	    responsiveClass:true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut', 
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        1170:{
	            items:1
	        }
	    }
	});

	$('.store-holder .owl-carousel').owlCarousel({
	    loop:false,
	    margin:0,
	    dots:false,
	    nav:true,
	    responsiveClass:true,
	    autoplay:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        1170:{
	            items:4
	        },
	        1280:{
	            items:4
	        }
	    }
	});

	
});

	function openPopup(){
		$(".popup-outer ").fadeIn(1000);
		$(".overlay").fadeIn(1000);
		$("body").addClass('overflow-hidden');
	}
	function closePopup(){
		$(".popup-outer ").fadeOut(1000);
		$(".overlay").fadeOut(1000);
		$("body").removeClass('overflow-hidden');
	}

jQuery(document).ready(function(){
	$(".block-select-car__select .form-control").focus(function(){
		$(".block-select-car__select").removeClass('next-active');
	  $(this).parent().parent().next().addClass('next-active');
	});

	$(".block-select-car__select .form-control").blur(function(){
		$(this).parent().parent().addClass('filled next-active').removeClass('next-active');
	});

	$(".catalog-title__change-car").on("click",function(event) {
		// $(this).toggleClass('open');
		// $(".home-select-car--dropdown").slideToggle();
		// alert('clicked inside');


		if($(this).hasClass("open")){
			$(this).removeClass("open");
			$(this).siblings(".home-select-car--dropdown").slideUp(1000);
			console.log('if');
		}else{
			$(".catalog-title__change-car").removeClass("open");
			$(this).addClass("open");
			$(".home-select-car--dropdown").slideUp(1000);
			$(this).siblings(".home-select-car--dropdown").slideDown(1000);
			console.log('else');
		}
		event.stopPropagation();
    });



    //// Sidebar Accordian

    $(".arr-dian-header").click(function(event){
		if($(this).hasClass("show")){
			$(this).removeClass("show");
			$(this).next(".arr-dian-content").slideUp();
			//console.log('if');
		}else{
			$(".arr-dian-header").removeClass("show");
			$(this).addClass("show");
			$(".arr-dian-content").slideUp();
			$(this).next(".arr-dian-content").slideDown();
			//console.log('else');
		}
	});

	

	$(".has-dropdown > a").click(function(event){
		if($(this).hasClass("show")){
			$(this).removeClass("show");
			$(this).next(".breadcrumb-dropdown").slideUp();
			//console.log('if');
		}else{
			$(".has-dropdown > a").removeClass("show");
			$(this).addClass("show");
			$(".breadcrumb-dropdown").slideUp();
			$(this).next(".breadcrumb-dropdown").slideDown();
			//console.log('else');
		}
		event.stopPropagation();
	});
	

	
	

	$('.parts_catalog .row .col').each(function(index) {
		////////////////////////////////////////////////////// THiS IS GOING TO WORK OPPSITE DERECTION
		if($('.parts_catalog_submenu', this).length > 0) {
			//console.log('not found ');
			$(".category_box_inner",this).click(function(event){
				if($(this).hasClass("show")){
					$(this).removeClass("show");
					$(this).siblings(".parts_catalog_submenu").hide();
					//console.log('if');
				}else{
					$(".category_box_inner").removeClass("show");
					$(this).addClass("show");
					$(".parts_catalog_submenu").hide();
					$(this).siblings(".parts_catalog_submenu").show();
					//console.log('else');
				}
				var position = $(this).parent().position();
				$('.parts_catalog_submenu').css('left', - (position.left-10) +'px');
				event.stopPropagation();
			});
		}else{
			//console.log('found');
		}
	});

});


$(document).click(function(e) 
{
    var container = $(".parts_catalog_submenu");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
        $(".category_box_inner").removeClass('show');
    }
});

$(document).click(function(e) 
{
    var container = $(".breadcrumb-dropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
        $(".has-dropdown > a").removeClass('show');
    }
});