describe('scania.bootstrap.rtl', function(){

    var locale, $httpBackend, browserLocaleSettings, browserLocale, testLocale,
        defaultLanguage, supportedRTLLanguages, supportedLanguages,
        customDefaultLanguage, customSupportedRTLLanguages, customSupportedLanguages;

    beforeEach(module('ngLocalize'));
    beforeEach(module('door3.css'));
    beforeEach(module('scania.bootstrap.rtl'));

    beforeEach(inject(function (_$httpBackend_, _locale_, _browserLocaleSettings_) {
        $httpBackend = _$httpBackend_;
        locale = _locale_;
        browserLocaleSettings = _browserLocaleSettings_;

        browserLocale = 'ar-AE';
        testLocale = 'en-GB';


        defaultLanguage = 'sv-SE';
        supportedRTLLanguages = ['ar-AE', 'ur-PA', 'eb-IS', 'per-IR'];
        supportedLanguages = ['ar-AE', 'sv-SE', 'en-GB'];

        customDefaultLanguage = 'fr-FR';
        customSupportedRTLLanguages = ['ar-AE', 'eb-IS'];
        customSupportedLanguages = ['ar-AE', 'eb-IS', 'sv-SE', 'fr-FR'];

    }));

    it('should be initialized with default locales', function () {
        // Arrange
        spyOn(locale, 'getLocale').and.returnValue(testLocale);

        // Act
        var result = browserLocaleSettings.isRTL();

        expect(browserLocaleSettings.defaultLanguage).toEqual(defaultLanguage);
        expect(browserLocaleSettings.supportedRTLLanguages).toEqual(supportedRTLLanguages);
        expect(browserLocaleSettings.supportedLanguages).toEqual(supportedLanguages);
        expect(result).toBeFalsy();
    });

    it('should be initialized with custom locales', function () {
        // Arrange
        spyOn(locale, 'getLocale').and.returnValue(testLocale);

        // Act
        browserLocaleSettings.init(customSupportedLanguages, customDefaultLanguage, customSupportedRTLLanguages);

        expect(browserLocaleSettings.defaultLanguage).toEqual(customDefaultLanguage);
        expect(browserLocaleSettings.supportedRTLLanguages).toEqual(customSupportedRTLLanguages);
        expect(browserLocaleSettings.supportedLanguages).toEqual(customSupportedLanguages);
    });

    it('should be initialized with Arabic as browser language preference and the direction should be RTL', function () {
        // Arrange
        spyOn(locale, 'getLocale').and.returnValue(undefined);
        spyOn(browserLocaleSettings, 'getFirstBrowserLanguage').and.returnValue(browserLocale);

        // Act
        var result = browserLocaleSettings.isRTL();

        expect(locale.getLocale).toHaveBeenCalled();
        expect(browserLocaleSettings.getFirstBrowserLanguage).toHaveBeenCalled();
        expect(result).toBeTruthy();
    });

    it('should change be initialized with English as the default language the direction should be LTR', function () {
        // Arrange
        spyOn(locale, 'getLocale').and.returnValue(testLocale);

        // Act
        var result = browserLocaleSettings.isRTL();

        expect(locale.getLocale).toHaveBeenCalled();
        expect(result).toBeFalsy();
    });

});
