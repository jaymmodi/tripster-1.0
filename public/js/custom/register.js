var registerPage = angular.module('registerPage', []);

registerPage.controller('newUserController', function($scope, $http){

	// UserDetails will hold all the input field content from the html page
    
    $scope.userDetails = {};
    $scope.userList = [];


    $scope.createUser = function(){
    	 $http.post('/api/users',$scope.userDetails)
         .success(function(data) {
	            console.log("Create Success\n Data :"+ data);
	            $scope.userDetails = {};
            	
	           
        })
        .error(function(data){
            console.log("Error Creating User: "+ data);
            
        });
        
//        $scope.userList.push($scope.userDetails);
//        console.log($scope.userDetails);
    };

    $scope.resetForm = function(){
        $scope.userDetails = {};
        $scope.userList = [];
    };

    $scope.getUserList = function(){
    	$http.get('/api/users')
        .success(function(data) {
	            console.log("Get Users Success\n Data :"+ data);
           		$scope.userList = data;
	           
        })
        .error(function(data){
            console.log("Get Users Failed");
            
        });
    };

});
