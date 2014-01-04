/**
 * Angular Module relying on Apache Cordova Notification Plugin.
 */
var cordovaNotificationModule = angular.module('cordovaNotificationModule', []);

// Constants

/**
 * Constants service used in the whole module.
 */
cordovaNotificationModule.constant('cordovaNotificationConstants', {
    apiVersion: '1.0.0'
});

// Services

/**
 * Main service relying on Apache Cordova Notification Plugin.
 */
cordovaNotificationModule.factory('cordovaNotificationService', ['$rootScope', '$log', 'cordovaNotificationConstants', function ($rootScope, $log, cordovaNotificationConstants) {
    return {
        /**
         * Return the current API version.
         */
        apiVersion: function () {
            $log.debug('cordovaNotificationService.apiVersion.');
            return cordovaNotificationConstants.apiVersion;
        },


        /**
         * Shows a custom alert or dialog box.
         * For more informations: http://cordova.apache.org/docs/en/3.3.0/cordova_notification_notification.md.html#notification.alert.
         */
        alert: function (message, alertCallback, title, buttonName) {
            $log.debug('cordovaNotificationService.alert.');
            if (!window.notification) {
                $log.warn('Notification API is not available.');
                return;
            }
            navigator.notification.alert(message, function () {
                $rootScope.$apply(alertCallback);
            }, title, buttonName);
        },

        /**
         * Displays a customizable confirmation dialog box.
         * For more informations: http://cordova.apache.org/docs/en/3.3.0/cordova_notification_notification.md.html#notification.confirm.
         */
        confirm: function (message, confirmCallback, title, buttonLabels) {
            $log.debug('cordovaNotificationService.confirm.');
            if (!window.notification) {
                $log.warn('Notification API is not available.');
                return;
            }
            navigator.notification.confirm(message, function (buttonIndex) {
                $rootScope.$apply(confirmCallback(buttonIndex));
            }, title, buttonLabels);
        },

        /**
         * Shows a customizable prompt dialog box.
         * For more informations: http://cordova.apache.org/docs/en/3.3.0/cordova_notification_notification.md.html#notification.prompt.
         */
        prompt: function (message, promptCallback, title, buttonLabels, defaultText) {
            $log.debug('cordovaNotificationService.prompt.');
            if (!window.notification) {
                $log.warn('Notification API is not available.');
                return;
            }
            navigator.notification.prompt(message, function (result) {
                $rootScope.$apply(promptCallback(result));
            }, title, buttonLabels, defaultText);
        },

        /**
         * The device plays a beep sound.
         * For more informations: http://cordova.apache.org/docs/en/3.3.0/cordova_notification_notification.md.html#notification.beep.
         */
        beep: function (times) {
            $log.debug('cordovaNotificationService.beep.');
            if (!window.notification) {
                $log.warn('Notification API is not available.');
                return;
            }
            navigator.notification.beep(times);
        },

        /**
         * Vibrates the device for the specified amount of time.
         * For more informations: http://cordova.apache.org/docs/en/3.3.0/cordova_notification_notification.md.html#notification.vibrate.
         */
        vibrate: function (milliseconds) {
            $log.debug('cordovaNotificationService.vibrate.');
            if (!window.notification) {
                $log.warn('Notification API is not available.');
                return;
            }
            navigator.notification.vibrate(milliseconds);
        }
    };
}]);


// Controllers

/**
 * Convenience controller that registers service in its scope.
 */
cordovaNotificationModule.controller('CordovaNotificationCtrl', ['$scope', 'cordovaNotificationService' , function ($scope, cordovaNotificationService) {

    $scope.notificationService = cordovaNotificationService;
}]);


