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
    angular.module('scania.bootstrap.rtl', ['ngLocalize', 'door3.css']);

    angular.module('scania.bootstrap.rtl').directive('scBootstrapRtl', ['$css', 'browserLocaleSettings', scBootstrapRtl]);
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
            controller: function ($scope, $attrs) {
                var self = this;

                if(browserLocaleSettings.isRTL()) {
                    applyRTL();
                }

                function applyRTL () {
                    $css.add('/bower_components/bootstrap-rtl/bootstrap-rtl.css');
                    $css.add('/bower_components/bootstrap-rtl/scania-bootstrap-rtl.css');

                    var elementWithFontSize = getElementWithFontSize(),
                        fontSizeProp = elementWithFontSize.css('font-size');

                    elementWithFontSize.css('font-size', parseInt(fontSizeProp) + 2 + 'px');

                    function getElementWithFontSize() {
                        var elementList = $('body').find('*');
                        return $('.sc-bootstrap-rtl').find('*').not("[class^='icon'], [class^='btn'], [class^='fa'], h1, h2, h3, h4, h5, h6").each(function(){
                            if($(this).css('font-size') !== ''){
                                return $(this);
                            }
                        });
                    }
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
        return service;

        function _init (supportedLanguages, defaultLanguage) {
            service.supportedLanguages = supportedLanguages;
            service.defaultLanguage = defaultLanguage;
        }

        function _getFirstBrowserLanguage () {
            var nav = $window.navigator,
                browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
                i,
                language;

            // support for HTML 5.1 "navigator.languages"
            if (_.isArray(nav.languages)) {
                _.each(nav.languages, function(){
                    return getLanguageSupported(nav.languages[i]);
                });
            }
            // support for other well known properties in browsers
            _.each(browserLanguagePropertyKeys, function(key){
                return getLanguageSupported(nav[key]);
            });

            return null;
        }

        function getLanguageSupported (language) {
            if (language && language.length) {
                var languageIndex = _.findIndex(service.supportedLanguages, function (languageSuppported) {
                    return _.startsWith(languageSuppported, language);
                });
                return languageIndex !== -1 ? service.supportedLanguages[languageIndex] : service.defaultLanguage;
            }

        }

        function _isRTL () {
            var currentLocale = locale.getLocale() || _getFirstBrowserLanguage();
            return _.startsWith(currentLocale, 'ar');
        }

    }
})();
