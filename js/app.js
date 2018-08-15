// Inside the brackets you inject all the dependencys that you want to use
var app = angular.module("myApp",[]);

app.controller("firstCtrl",function($scope, $http){
  // name var
  // $scope.myName = 'Ismael';
  // console.log($scope.myName);
  //
  // // change name function
  // $scope.logChanges = function(x){
  //   console.log(x);
  // }
  //
  // // Array of names
  // // $scope.names = ['ismael','eli','jason','brian','scott'];
  //
  // var ismael = {
  //   name:'ismael',
  //   age:29,
  //   gender:"male"
  // }
  // var eli = {
  //   name:'eli',
  //   age:28,
  //   gender:"female"
  // }
  // var jason = {
  //   name:'jason',
  //   age:24,
  //   gender:"male"
  // }
  //
  // $scope.objectArray = [ismael,eli,jason];
  // $scope.input = {
  //   "display" : "none"
  // }
  $scope.logChanges = function (x){
    console.log(x);


  // NYT API
  $scope.userSearch = x
  $http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ $scope.userSearch +'&api-key=4434455dc4eb4e3f8b0549b560011515').then(function(response){
      console.log(response.data.response.docs);
      ;
      $scope.articles = response
      // $scope.date = response.data.response.docs.pub_date
      console.log(response);


});
}

})
// app.controller("displayCtrl",function($scope){
//   console.log("test");
//   $scope.input = {
//     "display" : "none"
//   }
//
//   $scope.searchDisplay = function(){
//         $scope.input = {
//           "display" : "inline"
//         }
// }
// })
