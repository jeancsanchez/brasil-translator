angular.module('app', ['translatorServices',  ])


.controller('mainCtrl', ['$scope','wordsFactory', function($scope, wordsFactory){
	$scope.regions = wordsFactory.getRegions;
}]);