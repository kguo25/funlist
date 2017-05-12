import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToList: function() {
      this.transitionToRoute('lists');
    }
  }
});
