
var app = angular.module('loginPage', []);


app.controller('loginCheck', function($scope,$location) {
   /* $scope.firstName = "John", $scope.lastName = "Doe"
    $scope.myVar = false;
    $scope.myVar = !$scope.myVar;*/
    $scope.post = {url: 'http://', title: ''};

    $scope.registernewUser = function(){
        $location.url("/html/register.html");
       window.location = "/html/register.html"
        alert("Enter you details");

    }

    $scope.forgotdetails = function() {
        window.location = "/html/ForgotDetailsPage.html";
        alert("Account Details recovery");
    }

    //$scope.list = [];
    //$scope.text = hello;

    $scope.submit = function () {
//test
        if ($scope.text) {
            $scope.list.push(this.text);
            $scope.text = '';
        }
//test
        console.log('hahahaah');
        $scope.user1 = {
            email:$scope.email,
            password:$scope.password
        };
        alert($scope.user1.email + "is a valid user  and pasword is "+ $scope.user1.password);
        console.log('entered emailId'+ $scope.user1.email);

        if ( $scope.user1.email === 'admin@gmail.com' && $scope.user1.password === '1234') {
            {
                //authentication.isAuthenticated = true;
                $state.go("/tripsterHome");
                window.location("/html/tripsterHome.html");
                $location.url("/html/tripsterHome.html");
                $location.path( "/html/tripsterHome.html" );
                alert("Valid user");
            }

        }

    }


 });