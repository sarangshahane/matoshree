// PRELOAD PAGE

//<![CDATA[
		$(window).load(function() { // makes sure the whole site is loaded
			$("#status").fadeOut(); // will first fade out the loading animation
			$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
		})
//]]>







$(document).ready(function(){


//PLUGIN CALLS ===========================================

pluginBackstretch();
pluginNiceScroll();
pluginFlexSlider();
pluginEmbeddHeadlines();


/* =====================================================================================
   BEGIN EMBEDDING COMMAN DYNAMIC DATA
   =====================================================================================  */

function pluginEmbeddHeadlines(){

$('#wrapper-tertiaryNav').load('resources/headlines.html',
								function(response, status, xhr){
									if (status == "error") {										
										// SEND MESSAGE IF FAILED TO LOAD RESPECTIVE DATA
										var msg = "Sorry, but there was an error occured during loading of this the File : ";
															$(this).html(msg + xhr.status + " " + xhr.statusText);
														   }
														   
														   else{
										// PERFORM ACTIONS AFTER SUCCESSFULL LOADING OF THE DATA
										//INITIALISE NEWS TICKER
										$("ul#ticker01").liScroll({travelocity: 0.03});
										
										pluginEmbeddTopMenu(); // top horizontal menu : home page level 
															   }
									
									}// END OF CALLBACK 							
								
								);

} // end of pluginEmbeddHeadlines



function pluginEmbeddTopMenu(){

$('#wrapper-secondaryNav').load('resources/top_horizontalMenu.html',
								function(response, status, xhr){
									if (status == "error") {										
										// SEND MESSAGE IF FAILED TO LOAD RESPECTIVE DATA
										var msg = "Sorry, but there was an error occured during loading of this the File : ";
															$(this).html(msg + xhr.status + " " + xhr.statusText);
														   }
														   
														   else{
										// PERFORM ACTIONS AFTER SUCCESSFULL LOADING OF THE DATA
										pluginEmbeddHelpIsHere();        // help is here : home page level
															   }
									
									}// END OF CALLBACK 							
								
								);

} // end of pluginEmbeddTopMenu


function pluginEmbeddHelpIsHere(){
$('#wrapper-footer-mail').load('resources/helpIsHere.html',
								function(response, status, xhr){
									if (status == "error") {										
										// SEND MESSAGE IF FAILED TO LOAD RESPECTIVE DATA
										var msg = "Sorry, but there was an error occured during loading of this the File : ";
															$(this).html(msg + xhr.status + " " + xhr.statusText);
														   }
														   
														   else{
										// PERFORM ACTIONS AFTER SUCCESSFULL LOADING OF THE DATA
										pluginEmbeddFooter();            // footer : institute level
											
															   }
									
									}// END OF CALLBACK 							
								
								);
}// end of pluginEmbeddHelpIsHere



function pluginEmbeddFooter(){

$('#wrapper-footer').load('resources/footer.html',
								function(response, status, xhr){
									if (status == "error") {										
										// SEND MESSAGE IF FAILED TO LOAD RESPECTIVE DATA
										var msg = "Sorry, but there was an error occured during loading of this the File : ";
															$(this).html(msg + xhr.status + " " + xhr.statusText);
														   }
														   
														   else{
										// PERFORM ACTIONS AFTER SUCCESSFULL LOADING OF THE DATA
										pluginEmbeddCopyright();         // copyright and links : home page level  
															   }
									
									}// END OF CALLBACK 							
								
								);

}// end of pluginEmbeddFooter



function pluginEmbeddCopyright(){
$('#footer-copyrights').load('resources/copyRight.html',
								function(response, status, xhr){
									if (status == "error") {										
										// SEND MESSAGE IF FAILED TO LOAD RESPECTIVE DATA
										var msg = "Sorry, but there was an error occured during loading of this the File : ";
															$(this).html(msg + xhr.status + " " + xhr.statusText);
														   }
														   
														   else{
										// PERFORM ACTIONS AFTER SUCCESSFULL LOADING OF THE DATA																									
										// ADD RESPONSIVE MENU
										pluginEmbeddResponsiveMenu(); 
										
										
															   }
									
									}// END OF CALLBACK 							
								
								);
}// end of pluginEmbeddCopyright




function pluginEmbeddResponsiveMenu(){
$('#wrapper-responsiveMenu').load('resources/responsiveMenu.html',
								function(response, status, xhr){
									if (status == "error") {										
										// SEND MESSAGE IF FAILED TO LOAD RESPECTIVE DATA
										var msg = "Sorry, but there was an error occured during loading of this the File : ";
															$(this).html(msg + xhr.status + " " + xhr.statusText);
														   }
														   
														   else{
										// PERFORM ACTIONS AFTER SUCCESSFULL LOADING OF THE DATA
										// INITIATE RESPONSIVE MENU PLUGIN
										$('header nav').meanmenu();
										
															   }
									
									}// END OF CALLBACK 							
								
								);
}// end of pluginEmbeddResponsiveMenu


/* =====================================================================================
   END OF EMBEDDING COMMAN DYNAMIC DATA
   =====================================================================================  */






	
	
	
/* ===================================================================================
   BACKSTRETCH
   =================================================================================== */

function pluginBackstretch(){
	
$("#wrapper-topGallery").backstretch(["images/topGallery-1.jpg", "images/topGallery-2.jpg", "images/topGallery-4.jpg"], {duration: 7000, fade: 750});

$("#wrapper-testimonials").backstretch("images/topGallery-2.jpg");

$("#wrapper-inner-topGallery").backstretch("images/topGallery-1.jpg");

	
}




/* ===================================================================================
   NICESCROLL
   =================================================================================== */
   
   
function pluginNiceScroll(){
 $("html").niceScroll({cursorcolor:'#2ecc71', cursoropacitymin:0.4, cursorwidth:'10px', cursorborder:'none', cursorborderradius:'50px', background:'#none', scrollspeed:'100',});	
}



/* ===================================================================================
   FLEXSLIDER
   =================================================================================== */
   
   
function pluginFlexSlider(){

$('.flexslider').flexslider({
							slideshow: false,
							controlNav: false,
							smoothHeight: true,
							after:function(){
									  $("#wrapper-testimonials").backstretch("images/topGallery-2.jpg");
									            }
							});

}



/* ===================================================================================
   ANIMATE INSTITUTE CIRCLES HERE 
   =================================================================================== */
	
$("span.circle-parent").hover(							  
							  
							  function(){	
																				  
												$( " a img", this ).stop(true).animate({												
													marginTop:'-40px'
													
												  }, 600, "easeOutBack", function() {
													// Animation complete.
												  });
												
																								
																				  
								  }, 
									   
									   
									   
									   function(){
										   
										   
										      $( " a img", this ).stop(true).animate({												
													marginTop:'0px'
													
												  }, 1000, "easeOutBounce",
												  
												  function() {
													// Animation complete.
												  });
										   
										   
										   }
									   
);









});// END OF $(document).ready();