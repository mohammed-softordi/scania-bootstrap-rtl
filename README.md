# scania-bootstrap-rtl

AngularJS directive for <a href="https://github.com/morteza/bootstrap-rtl">Bootstrap-rtl</a><br/>
scania-bootstrap-rtl provides simple yet robust right-to-left capability for scania-bootstrap theme.

###<a href="http://static.scania.com/....">Demo</a>

# Getting Started

##Requirements

<a href="https://github.com/ivaynberg/select2">bootstrap-rtl</a><br/>
<a href="https://github.com/doshprompt/angular-localization">angular-localization</a><br/>
<a href="http://door3.github.io/angular-css">angular-css</a><br/>
<a href="https://github.com/jashkenas/underscore">Underscore</a><br/>
<a href="http://jquery.com/">JQuery</a><br/>

## Installation

     bower install scania-bootstrap-rtl

#Usage

Add the following script to your index.html file and you are good to go :<br/>

     <script type="text/javascript" src="bower_components/jquery/jquery.js"></script>
     <script type="text/javascript" src="bower_components/underscore/underscore.js"></script>
     <script src="bower_components/angular-css/angular-css.js"></script>
     <script src="bower_components/scania-bootstrap-rtl/scania-bootstrap-rtl.js"></script>

Next inject the directive into your app

    angular.module('yourapp', ['scania.bootstrap.rtl']);

Add the .sc-bootstrap-rtl selector to the body tag in your index.html to bootstrap the directive and follow the Scania Bootstrap RTL code conventions to

    <body class="bootstrap sc-bootstrap-rtl cwp" ng-controller="CoreCtrl as core" ng-attr-data-env="{{core.envname}}">

The complete list of code conventions can be found <a href="http://http://static.scania.com/....">here</a>





