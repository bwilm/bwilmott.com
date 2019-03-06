angular.module('blog', ['ngRoute', 'ngResource'])

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });
        //$locationProvider.hashPrefix('!');
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
             

            })
            .when('/main',{
                templateUrl:'views/single.html',

            })
            .when('/about',{
                templateUrl:'views/about.html',

            })
            // .when('/userlist', {
            //     templateUrl: 'views/userlist.html',
            //     controller: 'UserListController'
            // })

            .otherwise({
                redirectTo: '/home'
            });

            $locationProvider.html5Mode(true);

    }])
    // .run(['$rootScope', '$location', 'userService', function ($rootScope, $location, userService) {
    //     $rootScope.$on('$routeChangeStart', function (event, nextRoute, previousRoute) {
    //         if (nextRoute.$$route.requiresLogin && !userService.isLoggedIn()) {
    //             event.preventDefault();
    //             userService.loginRedirect();
    //         } else if (nextRoute.$route.requiresAdmin && !userService.isAdmin()) {
    //             event.preventDefault();
    //             $location.replace().path('/');
    //         }
    //     })
    // }])
