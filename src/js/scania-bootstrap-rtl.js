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
    angular.module('scania.bootstrap.rtl', ['ngLocalize', 'angularCSS']);

    angular.module('scania.bootstrap.rtl').directive('scBootstrapRtl', ['$css', 'browserLocaleSettings', '$compile', '$timeout', scBootstrapRtl]);
    angular.module('scania.bootstrap.rtl').directive('rtlSymbol', ['$compile', '$timeout', 'browserLocaleSettings', rtlSymbol]);

    angular.module('scania.bootstrap.rtl').service('browserLocaleSettings', ['$window', 'locale', browserLocaleSettings]);
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

    function scBootstrapRtl($css, browserLocaleSettings) {
        return {
            restrict: 'AC',
            controllerAs: 'bootstrapRtl',
            controller: function ($scope, $attrs, $rootScope) {
                var self = this;

                if (browserLocaleSettings.isRTL()) {
                    applyRTL();
                }

                function applyRTL() {
                    $css.add('/bower_components/bootstrap-rtl/bootstrap-rtl.css');
                    $css.add('/bower_components/bootstrap-rtl/scania-font-awesome-rtl.css');
                    $css.add('/bower_components/bootstrap-rtl/scania-bootstrap-rtl.css');

                    var elementWithFontSize = getElementWithFontSize(),
                        fontSizeProp = elementWithFontSize.css('font-size');

                    elementWithFontSize.css('font-size', parseInt(fontSizeProp) + 2 + 'px');

                    function getElementWithFontSize() {
                        var elementList = $('body').find('*');
                        return $('.sc-bootstrap-rtl').find('*').not("[class^='icon'], [class^='btn'], [class^='fa'], h1, h2, h3, h4, h5, h6").each(function () {
                            if ($(this).css('font-size') !== '') {
                                return $(this);
                            }
                        });
                    }
                }
            }
        }
    }

    function rtlSymbol($compile, $timeout, browserLocaleSettings) {
        return {
            require: '^scBootstrapRtl',
            restrict: 'C',
            compile: function (tElement, tAttrs, transclude) {
                return function postLink(scope, iElement, iAttrs, controller) {
                    if (!browserLocaleSettings.isRTL())return;
                    var rtlSymbols = ['%', '°F', '°C', '°'];
                    var ltrSymbols = ['±'];

                    $timeout(function(){
                        moveSymbol(rtlSymbols, iElement, true);
                        moveSymbol(ltrSymbols, iElement);
                    })

                };
                function moveSymbol(symbols, iElement, rtl){
                    var symbol = _.find(symbols, function (symbol) {
                        return iElement.text().indexOf(symbol) !== -1;
                    });

                    if(!symbol) return;

                    var value = iElement.text().replace(symbol,'');
                    var result = (rtl) ? symbol + value : value + symbol;
                    iElement.text(result);
                }
            }
        }
    }

    /**
     * @ngdoc service
     * @name browserLocaleSettings
     * @module scania.bootstrap.rtl
     *
     * @description
     * browserLocaleSettings provides browser settings like language
     *
     * @param locale
     * @returns {{service: Object}}
     *
     */

    function browserLocaleSettings($window, locale) {
        var service = {
            init: _init,
            getFirstBrowserLanguage: _getFirstBrowserLanguage,
            isRTL: _isRTL
        };
        service.defaultLanguage = 'sv-SE';
        service.supportedRTLLanguages = ['ar-AE', 'ur-PA', 'eb-IS', 'per-IR'];
        service.supportedLanguages = ['ar-AE', 'sv-SE', 'en-GB'];

        return service;

        function _init(supportedLanguages, defaultLanguage, rtlLanguages) {
            service.defaultLanguage = defaultLanguage;
            service.supportedRTLLanguages = rtlLanguages;
            service.supportedLanguages = supportedLanguages;
        }

        function _getFirstBrowserLanguage() {
            var nav = $window.navigator,
                browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
                i,
                language;

            // support for HTML 5.1 "navigator.languages"
            if (_.isArray(nav.languages)) {
                for (i = 0; i < nav.languages.length; i++) {
                    var language = getLanguageSupported(nav.languages[i]);
                    if (language) return language;
                }
            }
            // support for other well known properties in browsers
            for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
                var language = getLanguageSupported(nav[browserLanguagePropertyKeys[i]]);
                if (language) return language;
            }
            ;

            return null;
        }

        function getLanguageSupported(language) {
            if (language && language.length) {
                var languageIndex = _.findIndex(service.supportedLanguages, function (languageSuppported) {
                    return _.startsWith(languageSuppported, language);
                });
                return languageIndex !== -1 ? service.supportedLanguages[languageIndex] : service.defaultLanguage;
            }

        }

        function _isRTL() {
            var currentLocale = locale.getLocale() || service.getFirstBrowserLanguage();
            return _.contains(service.supportedRTLLanguages, currentLocale);
        }
    }
})();
