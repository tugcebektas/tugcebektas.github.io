angular.module('LunchCheck', [])
  .controller('LunchCheckController', function($scope) {
    $scope.name = "";
    $scope.count = 0;
    $scope.len=function(){
        if($scope.name.length === 0) $scope.deger = 1, $scope.t="Please enter data first";
        else {
          $scope.count++;
           if($scope.count <= 3) $scope.deger = 0, $scope.t="Enjoy!";
           else $scope.deger = 0, $scope.t="Too much!";
        }
    };
  });