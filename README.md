# scania-bootstrap-rtl

AngularJS directive for <a href="https://github.com/morteza/bootstrap-rtl">Bootstrap-rtl</a><br/>
scania-bootstrap-rtl provides simple yet robust right-to-left capability for scania-bootstrap theme.

###<a href="https://static.scania.com/cds/cds-site/scania-bootstrap-rtl.html">Demo</a>

# Getting Started

##Requirements

<a href="https://github.com/ivaynberg/select2">bootstrap-rtl</a><br/>
<a href="https://github.com/doshprompt/angular-localization">angular-localization</a><br/>
<a href="http://door3.github.io/angular-css">angular-css</a><br/>
<a href="https://github.com/jashkenas/underscore">Underscore</a><br/>
<a href="http://jquery.com/">JQuery</a><br/>

## Installation

     bower install scania-bootstrap-rtl

# Usage

Add the following script to your index.html file and you are good to go :<br/>

     <script type="text/javascript" src="bower_components/jquery/jquery.js"></script>
     <script type="text/javascript" src="bower_components/underscore/underscore.js"></script>
     <script src="bower_components/angular-css/angular-css.js"></script>
     <script src="bower_components/scania-bootstrap-rtl/scania-bootstrap-rtl.js"></script>

Next inject the directive into your app

    angular.module('yourapp', ['scania.bootstrap.rtl']);

Add the .sc-bootstrap-rtl selector to the body tag in your index.html to bootstrap the directive and follow the Scania Bootstrap RTL code conventions regarding selectors and design principles.

    <body class="bootstrap sc-bootstrap-rtl cwp" ng-controller="CoreCtrl as core" ng-attr-data-env="{{core.envname}}">

Optionally, initialize the browserLocaleSettings service that comes with scania-bootstrap-rtl with your supported languages. You can do that in the run method of your app or in localization service:

    angular.module('yourapp').constant('defaultLocale', 'sv-SE');
    angular.module('yourapp').constant('localesSupported', ['ar-AE', 'sv-SE']);
    angular.module('yourapp').constant('supportedRTLLanguages', ['ar-AE', 'ur-PA', 'fa-IR']);

    angular.module('yourapp').run(function (browserLocaleSettings, localesSupported, defaultLocale, supportedRTLLanguages){
         browserLocaleSettings.init(localesSupported, defaultLocale, supportedRTLLanguages);
    })

By default scania-bootstrap-rtl provides the following locales :

    defaultLanguage = 'sv-SE',
    defaultRTLLanguages = ['ar-AE', 'ur-PA', 'he-IL', 'fa-IR'],
    defaultSupportedLanguages = ['ar-AE', 'sv-SE', 'en-GB'];

The browserLocaleSettings service exposes some convenient methods like <b>isRTL()</b> and <b>getFirstBrowserLanguage()</b> to retrieve the client locale settings

# Examples

navbar-header and navbar-brand will flip your navigation to the right

    <div class="navbar-header cwp-navbar-header visible-lg">
        <span class="navbar-brand cwp-navbar-brand"></span>
        <h4 class="text-uppercase brand-name" ng-bind="profile.customerName"></h4>
    </div>


navbar-left or navbar-right will flip your navigation to the right or left

    <div class="collapse navbar-collapse navbar-submenu-collapse">
        <ul class="nav navbar-nav navbar-left">
             <li ng-repeat="item in mainItems"><a href="#{{item.url}}" ng-class="{'active': control.isActive('{{item}}')}"><i ng-class="item.icon" ></i>{{item.title}}</a></li>
              <li class="dropdown" data-ng-if="more">
                   <a href="#" class="dropdown-toggle" data-toggle="dropdown" ng-class="dropdownActive">More<span ng-bind="dropdownLabel"></span><b class="caret"></b></a>
                   <ul class="dropdown-menu">
                        <li ng-repeat="item in moreItems"><a href="#{{item.url}}" ng-class="{'active': control.isActive('{{item}}', true)}"><i ng-class="item.icon" ></i>{{item.title}}</a></li>
                   </ul>
              </li>
         </ul>
         <ul class="nav navbar-nav navbar-right">
              <li ng-repeat="item in commonItems"><a href="#{{item.url}}"><i ng-class="item.icon" class="type--padding-right"></i> {{item.title}}</a></li>
         </ul>
    </div>

The complete list of code conventions can be found <a href="https://static.scania.com/cds/cds-site/scania-bootstrap-rtl.html">here</a>





