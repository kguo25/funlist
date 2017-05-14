import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('list', params.list_id).then(function(list) {
      return list.map(function(x) { return x.toJSON(); });
    });
  }
});
