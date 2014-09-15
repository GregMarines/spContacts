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