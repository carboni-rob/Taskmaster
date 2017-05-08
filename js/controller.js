/*

* Author: ROBERTO CARBONI

* Assignment: BScH Mobile Development, Digital Skills Academy

* Student ID: STU-00001225 * Date : 2017/05/01

* Ref: SEE INLINE COMMENTS

==========================================================
code online at http://site234.digitalskillsacademy.me/MD2/
==========================================================

*/

var myApp = angular.module("Taskmaster", ['moment-picker']);

myApp.controller("appController", function ($scope) {
	
	$scope.items = [];

	$scope.saved = localStorage.getItem('tasks');

	if ($scope.saved) {
			$scope.items = JSON.parse($scope.saved);
	}

	$scope.priority = {
	    availableOptions: [
	       {id: '1', name: 'Urgent'},
	       {id: '2', name: 'Important'},
	       {id: '3', name: 'Delayable'},
	    ],
	    selectedOption: {id: '1', name: 'Urgent'}, //sets the default value
    };

	$scope.addItem = function() {

			$scope.items.push(
				{
				"name": $scope.newItems.name, 
				"desc": $scope.newItems.desc, 
				"prior": $scope.priority.selectedOption.name,
				"dead": $scope.newItems.dead
				}
			);

			localStorage.setItem('tasks', JSON.stringify($scope.items));

			$scope.newItems.name = '';
			$scope.newItems.desc = '';
			$scope.newItems.dead = '';

			$().jqRedirect();

	};

	$scope.goto_form = function() {

			//$scope.isDefined = angular.isDefined($scope.newItems.name) == true ? $scope.newItems.name = "" : $scope.newItems.name = "";
			if($scope.newItems.hasOwnProperty('name')){
				$scope.newItems.name = "";
			}
			//$scope.newItems.name = '';
			$scope.newItems.desc = '';
			$scope.newItems.dead = '';
			$().jqFormRedirect();
	};

	$scope.cancel = function() {

			$().jqRedirect();
	};

	$scope.delete = function(index){
    	$scope.items.splice(index, 1);
    	localStorage.setItem('tasks', JSON.stringify($scope.items));
  	};

  (function($){
     $.fn.jqRedirect = function() {
        $.mobile.changePage("#main_page")
     }; 
  })( jQuery );

  (function($){
     $.fn.jqFormRedirect = function() {
        $.mobile.changePage("#form_page")
     }; 
  })( jQuery );

});// end of formController

