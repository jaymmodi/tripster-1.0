var registerPage = angular.module('registerPage', []);

registerPage.controller('newUserController', function($scope, $http){

	// UserDetails will hold all the input field content from the html page
	$scope.FirstName = '';
	$scope.LastName = '';
	$scope.UserName = '';
	$scope.Password = '';
	$scope.DoB = '';
	$scope.Phone = '';
	$scope.Address = '';
	$scope.City = '';
	$scope.State = '';
	$scope.Country = '';
	$scope.CreatedTimeStamp = '';
	

    $scope.userDetails = {  "FirstName"	: $scope.FirstName,
							"LastName"	: $scope.LastName,
							"UserName"	: $scope.UserName,
							"Password"	: $scope.Password,
							"DoB"		: $scope.DoB,
							"Phone"		: $scope.Phone,
							"Address"	: $scope.Address,
							"City"		: $scope.City,
							"State"		: $scope.State,
							"Country"	: $scope.Country,
							"CreatedTimeStamp" :$scope.CreatedTimeStamp };
    $scope.userList = [];


    $scope.createUser = function(){
    	
    	
    	if ($scope.DoB === ''){
		   /* var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			
			if(dd<10) {
			    dd='0'+dd;
			} 
			
			if(mm<10) {
			    mm='0'+mm;
			} 
			today = mm+'/'+dd+'/'+yyyy;
			
			$scope.userDetails.DoB = today;*/
			$scope.userDetails.DoB = new Date();
	    }
    	
    	$scope.userDetails.CreatedTimeStamp = new Date();
    	
    	
    	 $http.post('/api/users',$scope.userDetails)
         .success(function(data) {
	            console.log("Create Success\n Data :"+ data);
	            $scope.userDetails = {};
    
        })
        .error(function(data){
            console.log("Error Creating User: "+ data);
            
        });
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
