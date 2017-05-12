import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts list by timestamp
  actions: {
    publishList: function() {
      var newList = this.store.createRecord('list', {
        title: this.get('title'),
        timestamp: new Date().getTime()
      });
      newList.save();

      this.setProperties({
        title:""
      })
    }
  }
});
