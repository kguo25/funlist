import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts list by timestamp
  
  actions: {
    publishItem: function() {
      var newItem = this.store.createRecord('list', {
        title: this.get('title'),
        timestamp: new Date().getTime()
      });
      newItem.save();

      this.setProperties({
        title:""
      })
    },
    deleteItem: function(listID) {
      this.store.find('list', listID).then(function(rec) {
        rec.destroyRecord();
      });
    }
  }
});
