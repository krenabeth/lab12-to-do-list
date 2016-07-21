var app = angular.module('moduleToDo', []);
// This is declaring a module. 
app.controller('controllerToDo', function($scope){ 
	// controller logic
	$scope.toDos = ['podcast', 'ng reading', 'lightbox plugin', 'job search'];

	$scope.addChore = function () {
		$scope.toDos.push($scope.chore);
		$scope.chore ="";
	};
});

// ng-model addOn