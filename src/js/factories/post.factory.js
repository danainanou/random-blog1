angular
  .module('duckFacts')
  .factory('Post', Post);

Post.$inject = ['API', '$resource'];
function Post(API, $resource){
  return $resource(`${API}/posts/:id`, { id: '@_id'}, {
    update: { method: 'PUT'}
  });
}
