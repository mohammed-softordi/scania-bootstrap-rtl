/**
 * scania-bootstrap-rtl
 * https://github.com/mohammed-softordi/scania-bootstrap-rtl
 * License: MIT
 *
 *
 */

(function () {
    'use strict';


    /**
     * @ngdoc module
     * @name scania.bootstrap.rtl
     *
     * @description
     * Scania lightbox module including templates
     */
    angular.module('scania.bootstrap.rtl', ['ngLocalize', 'door3.css']).directive('scBootstrapRtl', ['$window', '$css', 'locale', scBootstrapRtl]);
    /**
     * @ngdoc directive
     * @name scBootstrapRtl
     * @module scania.bootstrap.rtl
     *
     * @description
     * Bootstrap RTL provides simple yet robust right-to-left capability for Scania-bootstrap theme
     *
     * @param $window
     * @param $css
     * @param locale
     * @returns {{restrict: string, controllerAs: string, controller: Function}}
     *
     */

    function scBootstrapRtl($window, $css, locale) {
        return {
            restrict: 'C',
            scope: {
                ngModel: '='
            },
            controllerAs: 'bootstrapRtl',
            controller: function ($scope, $attrs) {
                var self = this;
                var defaultSupportedLanguages = ['ar-AR', 'sv-SE', 'en-GB'];
                var defaultLanguage = 'sv-SE';
                self.supportedLanguage = $scope.ngModel || defaultSupportedLanguages;

                if(_.startsWith(locale.getLocale(), 'ar') || _.startsWith( getFirstBrowserLanguage(), 'ar')) {
                    applyRTL();
                }

                function getFirstBrowserLanguage () {
                    var nav = $window.navigator,
                        browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
                        i,
                        language;

                    // support for HTML 5.1 "navigator.languages"
                    if (_.isArray(nav.languages)) {
                        for (i = 0; i < nav.languages.length; i++) {
                            language = nav.languages[i];
                            return getLanguageSupported(language);
                        }
                    }

                    // support for other well known properties in browsers
                    for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
                        language = nav[browserLanguagePropertyKeys[i]];
                        return getLanguageSupported(language);
                    }

                    return null;
                }

                function getLanguageSupported (language) {
                    if (language && language.length) {
                        var languageIndex = _.findIndex(self.supportedLanguage, function (languageSuppported) {
                            return _.startsWith(languageSuppported, language);
                        });
                        return languageIndex !== -1 ? self.supportedLanguage[languageIndex] : defaultLanguage;
                    }
                }

                function applyRTL () {
                    $css.add('/bower_components/bootstrap-rtl/bootstrap-rtl.css');
                    $css.add('/bower_components/bootstrap-rtl/scania-bootstrap-rtl.css');

                    var elementWithFontSize = getElementWithFontSize(),
                        fontSizeProp = elementWithFontSize.css('font-size');

                    elementWithFontSize.css('font-size', parseInt(fontSizeProp) + 2 + 'px');

                    function getElementWithFontSize() {
                        var elementList = $('body').find('*');
                        return $('.sc-bootstrap-rtl').find('*').each(function(){
                            if($(this).css('font-size') !== ''){
                                return $(this);
                            }
                        });
                    }
                }
            }
        }
    }
})();