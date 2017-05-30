angular
.module('duckFacts')
.controller('PostsIndexCtrl', PostsIndexCtrl);

PostsIndexCtrl.$inject = ['$resource'];
function PostsIndexCtrl($resource) {
  const vm = this;
}
