var dashBoard = angular.module('dashBoard-app', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {

        $routeProvider.when('/skills',
            {
             
            templateUrl: "/angularcomponents/DashBoard/template/skills.html",
            controller: 'skillsCtrl'  
           }).when('/categorys',
           {
            
           templateUrl: "/angularcomponents/DashBoard/template/category.html",
           controller: 'categorysCtrl'  
          }).when('/subCategorys',
          {
           
          templateUrl: "/angularcomponents/DashBoard/template/subCategory.html",
          controller: 'subCategoryCtrl'  
         })

    });



    