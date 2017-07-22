jQuery(function(){
	
	/* Show or hide themes panel
	----------------------------------------------------------*/
	themes_panel_width = jQuery('#themes_menu').outerWidth();
	ofset = 4;
	
	jQuery('#themes_panel').css('left', 0);
	jQuery('#themes_panel').animate({left: -themes_panel_width + ofset}, 400);
	
	jQuery('#toggle_button').click(function() {
		jQuery(this).toggleClass( "opened" );
		
		var themes_panel = jQuery(this).parent();
		themes_panel.animate({
		  left: parseInt(themes_panel.css('left'),10) == 0 ? -themes_panel_width + ofset : 0
		}, 400);
		
		return false;
	});
	
	
	/* Change theme colors
	----------------------------------------------------------*/
	jQuery('#themes_panel ul.color.buttons li a').click(function(){
		var theme_name = jQuery(this).attr('title');
		
		jQuery('body').removeAttr('id').attr('id',theme_name);
		
	  	return false;
    });
	
	
	/* Change Slider background image
	----------------------------------------------------------*/
	jQuery('#themes_panel ul.slider_bg.buttons li a').click(function(){
		var bg_name = jQuery(this).attr('title');
		
		jQuery('body').removeClass().addClass(bg_name);
		
	  	return false;
    });
	
	
	/* Reset to Default
	----------------------------------------------------------*/
	jQuery('.reset_btn').click(function(){
		location.reload();
	});
	
});
