/**
 * Main AngularJS Web Application
 */
var MarsApp = angular.module('MarsApp', [
    'ui.router',
    'ui.bootstrap',
    'angularUtils.directives.dirPagination'
]);

/* Init global settings and run the app */
MarsApp.run(["$rootScope", "$state",
    function ($rootScope, $state) {

        $rootScope.$state = $state; // state to be accessed from view

        /////////////////////////authentification configs/////////////////////
        $rootScope.$on('$stateChangeStart', function (event, toState) {
            console.log('---current state---', toState)
        });


    }]);