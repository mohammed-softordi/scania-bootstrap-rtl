$(document).ready(function(){
    if (getFirstBrowserLanguage().indexOf('ar') !== -1) {
        $('head').append('<link rel="stylesheet/less" type="text/css" href="less/scania-bootstrap-rtl.less" />');   
        $('head').append('<script src="js/less.js" type="text/javascript"></script>  ');    
         
    
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
}

function getFirstBrowserLanguage() {
    var nav = window.navigator,
        browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
        i,
        language;

    // support for HTML 5.1 "navigator.languages"
    if ($.isArray(nav.languages)) {
        for (i = 0; i < nav.languages.length; i++) {
            language = nav.languages[i];
            if (language && language.length) {
                return language;
            }
        }

        // support for other well known properties in browsers
        for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
            language = nav[browserLanguagePropertyKeys[i]];
            if (language && language.length) {
                return language;
            }
        }
    }

    return null;
}
});