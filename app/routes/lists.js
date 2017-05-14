import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      elements: this.store.findAll('list')
      // listTitle: this.store.find('title')
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'elements', model.elements);
    Ember.set(controller, 'listTitle', model.listTitle);
  }

  // model: function() {
  //   return this.store.findAll('list');
  // }
});
