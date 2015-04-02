var registerPage = angular.module('registerPage', []);

registerPage.controller('newUser', ['$scope', function ($scope) {
    
	$scope.userDetails = {};
    $scope.msg = 'Hello, Newbie';
    $scope.userList = {};

    $scope.createUser = function(){
			$scope.userList.push($scope.userDetails);
			console.log($scope.userDetails);
			$scope.userDetails = {};
		
    };
    
}]);

/* 
function mainController($scope, $http) {
    $scope.formData = {};

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post('/tripster/signup', $scope.formData)
            .success(function(data) {
              //  $scope.formData = {}; // clear the form so our user is ready to enter another
              //  $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
     };
}
 */