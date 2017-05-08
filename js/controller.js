/*

* Author: ROBERTO CARBONI

* Assignment: BScH Mobile Development, Digital Skills Academy

* Student ID: STU-00001225 * Date : 2017/05/08

* Ref: SEE INLINE COMMENTS

==========================================================
code online at http://site234.digitalskillsacademy.me/MD2/
==========================================================

*/

var myApp = angular.module("Taskmaster", ['moment-picker']);

myApp.controller("appController", function ($scope) {
	
	$scope.items = [];//initialize items with an empty array

	$scope.saved = localStorage.getItem('tasks');//attempts to populate 'saved' variable with the array called 'items' from local storage
	
	if ($scope.saved) {//if $scope.saved exists...
			$scope.items = JSON.parse($scope.saved);//...populate 'items' array with its content.
	}

	$scope.priority = {//populates the values for Priority <select>
	    availableOptions: [
	       {id: '1', name: 'Urgent'},
	       {id: '2', name: 'Important'},
	       {id: '3', name: 'Delayable'},
	    ],
	    selectedOption: {id: '1', name: 'Urgent'}, //sets the default value
    };

	$scope.addItem = function() {//function to add items to the list

			$scope.items.push(//appends the object with the new values to the items array
				{
				"name": $scope.newItems.name, 
				"desc": $scope.newItems.desc, 
				"prior": $scope.priority.selectedOption.name,
				"dead": $scope.newItems.dead
				}
			);

			localStorage.setItem('tasks', JSON.stringify($scope.items)); //writes the new array to localStorage

			//next 3 lines reset the form fields
			$scope.newItems.name = '';
			$scope.newItems.desc = '';
			$scope.newItems.dead = '';

			$().jqRedirect();//call to the jqRedirect function to load the partial for main_page

	};

	$scope.goto_form = function() {//function to load the partial for form_page

			//next 3 lines reset the form fields
			$scope.newItems.name = '';
			$scope.newItems.desc = '';
			$scope.newItems.dead = '';

			$().jqFormRedirect();//call to the jqRedirect function to load the partial for main_page
	};

	$scope.cancel = function() {//'Cancel' button in the footer loads main_page discarding any changes

			$().jqRedirect();//call to the jqRedirect function to load the partial for main_page
	};

	$scope.delete = function(index){//function to remove items from the list
    	$scope.items.splice(index, 1);//removes item from items array
    	localStorage.setItem('tasks', JSON.stringify($scope.items));//overwrites 'tasks' in localStorage with amended array
  	};

  (function($){//function to load the partial for main_page
     $.fn.jqRedirect = function() {
        $.mobile.changePage("#main_page")
     }; 
  })( jQuery );

  (function($){//function to load the partial for form_page
     $.fn.jqFormRedirect = function() {
        $.mobile.changePage("#form_page")
     }; 
  })( jQuery );

});// end of formController

