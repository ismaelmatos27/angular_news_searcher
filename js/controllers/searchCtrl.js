// // Inside the brackets you inject all the dependencys that you want to use
// var app = angular.module("myApp",[]);
//
angular.module('myApp')
  .controller("displayCtrl",["$scope",function($scope){
    console.log("test");
    $scope.input = {
      "display" : "none"
    }

    $scope.searchDisplay = function(){
          $scope.input = {
            "display" : "inline"
          }
  }
}])
//
//   $scope.searchDisplay = function (){
//         $scope.input = {
//           "display" : "block"
//         }
// }
