$(document).ready(function(){
    //position absolute
	window.onload = function(){
	    var content = $('.center-content');
	    var footer = $('.center-footer');
	    var maxHeight = content.height();
	    var maxHeightFooter = footer.height();

	    content.each(function(){
	        if(maxHeight > 999  )
	        {
	            footer.animate({top: "+="+ (maxHeight - 950) +""},0);
	        }
	        else
	        {
	            footer.animate({top: '1221px'},0);
	        }
	    });

	};
});

