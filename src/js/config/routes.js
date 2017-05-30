angular
  .module('duckFacts')
  .config(Router);

Router.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider'
];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/js/views/home.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/js/views/register.html',
      controller: 'RegisterCtrl',
      controllerAs: 'register'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/js/views/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })
    .state('postsIndex', {
      url: '/posts',
      templateUrl: '/js/views/posts/index.html',
      controller: 'PostsIndexCtrl',
      controllerAs: 'posts'
    })
    .state('postsShow', {
      url: '/posts/:id',
      templateUrl: '/js/views/posts/show.html',
      controller: 'PostsShowCtrl',
      controllerAs: 'posts'
    })
    .state('postsEdit', {
      url: '/posts/:id/edit',
      templateUrl: '/js/views/posts/edit.html',
      controller: 'PostsEditCtrl',
      controllerAs: 'posts'
    })
    .state('postsNew', {
      url: '/posts/new',
      templateUrl: '/js/views/posts/new.html',
      controller: 'PostsNewCtrl',
      controllerAs: 'posts'
    });

  $urlRouterProvider.otherwise('/');
}
