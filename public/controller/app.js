(function(){

var app = angular.module('Mecca', [ ]);

	app.controller('indexController', function($scope, $http){

		$http.get('/home').success( function(response){

			$scope.anuncios = response;
		});

	});


})();