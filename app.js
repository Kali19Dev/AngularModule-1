(function(){
  'use strict'

  angular.module('DishsApp',[])

  .controller('DishController', function($scope){
    $scope.names="";
    $scope.message="";
    $scope.checked=false;

    $scope.CheckIfTooMuch=function(){
      if($scope.names.trim().length === 0){
        $scope.empty=true;
      }
      else{
        $scope.checked=true;
        $scope.empty=false;
        var noOfDishes=$scope.names.split(',');
        var NbOfDishs= noOfDishes.filter(function(v){
          return v.trim()!=='';
        });
        if(NbOfDishs.length>=4)
		$scope.message="It's Too much!";
	  
        else if(NbOfDishs.length<=3)
            $scope.message="Enjoy!";
      }

  };
});
})();
