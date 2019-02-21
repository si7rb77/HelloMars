/**
 * Configure the Routes
 */
MarsApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,
                                                                  $urlRouterProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/");

    $stateProvider.state('app', {
        abstract: true
    })
    //HomeState
        .state('home', {
            parent: 'app',
            url: '/',
            views: {
                'content@': {
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeController'
                }
            }
        })
        //CategorieState
        .state('mission', {
            parent: 'app',
            url: '/mission',
            views: {
                'content@': {
                    templateUrl: 'app/mission/mission.html',
                    controller: 'MissionController'
                }
            }
        })
        //CategorieState
        .state('categorie', {
            parent: 'app',
            url: '/categorie',
            views: {
                'content@': {
                    templateUrl: 'app/categorie/categorie.html',
                    controller: 'CategorieController'
                }
            }
        })//CategorieState
        .state('equipement', {
            parent: 'app',
            url: '/equipement',
            views: {
                'content@': {
                    templateUrl: 'app/equipement/equipement.html',
                    controller: 'EquipementController'
                }
            }
        })
        .state('dashboard', {
            parent: 'app',
            url: '/dashboard',
            views: {
                'content@': {
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'DashboardController'
                }
            }
        })

}]);