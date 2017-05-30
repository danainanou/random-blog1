angular
  .module('duckFacts')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$http', 'API'];
function MainCtrl($http, API) {
  const vm = this;
  $http
    .get(`${API}/users`)
    .then(response => {
      vm.all = response.data;
    });
}
