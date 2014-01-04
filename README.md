angular-notification
====================

Bring Apache Cordova Notification API to AngularJS Apps...

Define a simple service to deal with Cordova Notification Plugin (http://cordova.apache.org/docs/en/3.3.0/cordova_device_device.md.html#Notification).

[![Build Status](https://travis-ci.org/xelita/angular-notification.png?branch=master)](https://travis-ci.org/xelita/angular-notification)

Usage
-----
Include cordovaNotificationModule.js in your Cordova application.

```html
<script src="js/cordovaNotificationModule.js"></script>
```

or use the minified version:

```html
<script src="js/cordovaNotificationModule.min.js"></script>
```

Add the module `cordovaNotificationModule` as a dependency to your app module:

```js
var myapp = angular.module('myapp', ['cordovaNotificationModule']);
```

You can now start using the Cordova Notification API though the `CordovaNotificationCtrl`:

```html
<div ng-controller="CordovaNotificationCtrl">
    <h1>Angular Service For Cordova Notification Plugin</h1>
    <div>
        <p>Device API: {{notificationService.apiVersion()}}</p>
    </div>
</div>
```

or using your own fine grained controller:

```js
var myapp = angular.module('myapp', ['mainModule']);
```

```js
/**
 * Angular Module relying on cordovaNotificationModule.
 */
var mainModule = angular.module('mainModule', ['cordovaNotificationModule']);

// Controllers

/**
 * Convenience controller that registers service in its scope.
 */
mainModule.controller('MainCtrl', ['$scope', 'cordovaNotificationService' , function ($scope, cordovaNotificationService) {

	$scope.notificationService = cordovaNotificationService;

	$scope.alertResult = '-';
	$scope.confirmResult = '-';
	$scope.promptResult = '-';	

	/**
	 * Alert sample.
	 */
	$scope.alert = function() {
		cordovaNotificationService.alert('A simple alert!', function(){ $scope.alertResult = 'Dismissed!'; });
	};
     
	/**
	 * Confirm API sample.
	 */                                                               
	$scope.confirm = function() {
		cordovaNotificationService.confirm('A simple confirmation!', function(buttonIndex){ $scope.confirmResult = 'Dismissed with button {' + buttonIndex + '}!'; });
	};

	/**
	 * Prompt API sample.
	 */
	$scope.prompt = function() {
		cordovaNotificationService.prompt('A simple confirmation!', function(result){ $scope.promptResult = 'Dismissed with button {' + result.buttonIndex + '} and value {' + result.input1 + '}!'; });
	};

	/**
	 * Beep API sample.
	 */
	$scope.beep = function() {
		cordovaNotificationService.beep(5);
	};

	/**
	 * Vibrate API sample.
	 */
	$scope.vibrate = function() {
		cordovaNotificationService.vibrate(2000);
	};	
}]);
```

```html
<div ng-controller="MainCtrl">
    <h1>Angular Service For Cordova Notification Plugin</h1>
    <div>
        <p>Notification API: {{notificationService.apiVersion()}}</p>
        <p>Notification Alert: <a ng-click="alert()">Click here!</a></p>
        <p>Notification Alert Result: {{alertResult}}</p> 
        <p>Notification Confirm: <a ng-click="confirm()">Click here!</a></p>
        <p>Notification Confirm Result: {{confirmResult}}</p> 
        <p>Notification Prompt: <a ng-click="prompt()">Click here!</a></p>
        <p>Notification Prompt Result: {{promptResult}}</p>                  
        <p>Notification Beep: <a ng-click="beep()">Click here!</a></p>
        <p>Notification Vibrate: <a ng-click="vibrate()">Click here!</a></p>
    </div>
</div>
```

License
-----

Released under the terms of MIT License.
