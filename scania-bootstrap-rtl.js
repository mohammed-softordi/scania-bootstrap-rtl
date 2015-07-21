$(document).ready(function(){
	var elementWithFontSize = getElementWithFontSize(),
       	fontSizeProp = elementWithFontSize.css('font-size');
    
    elementWithFontSize.css('font-size', parseInt(fontSizeProp) + 2 + 'px');  
          
    function getElementWithFontSize() {
    	var elementList = $('body').find('*');
       	return $('.bootstrap-rtl').find('*').each(function(){
       		if($(this).css('font-size') !== ''){
				return $(this);
			}
       	});
    }   
});

