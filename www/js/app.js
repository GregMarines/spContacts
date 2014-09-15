var myApp = angular.module('myApp', [
'ngRoute',
'contactControllers'
]);

myApp.config (['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
	controller: 'ListController'
  }).
  when('/details/:itemId',{
    templateUrl: 'partials/details.html', 
	controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });  
	
}]);


function handleDeviceBackButton(){
     alert('ill never see this');
	 angular.element('[ng-controller=myApp]').scope().goHome();
}

function AppCtrl($scope, $location) {
    $scope.goHome = function () {

        navigator.app.exitApp();   // This will exit the application       

	   /*
	   if ((window.location) && (window.location.hash) && (window.location.hash.indexOf('home') > 0)) {
            navigator.app.exitApp();   // This will exit the application
        }
        else {
            $location.path('/home');  // This will redirect the application to home page

            if (!$scope.$$phase)
                $scope.$apply();
        }*/
    }	
}