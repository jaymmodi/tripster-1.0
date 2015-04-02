
var registerPage = angular.module('registerPage', []);

registerPage.controller('newUser',['$Scope', function ( $scope ) {
    $scope.user = {};
    $scope.user.details = {
        "username": "Todd Motto",
        "id": "89101112"
    };

    $scope.msg = 'Hello, Newbie';
    alert($scope.msg);
    $scope.userDetails = {};

    $scope.registerUser = function(){
        console.log(this.userDetails);
        alert(this.userDetails);
    };

}]);


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
