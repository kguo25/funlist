import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts list by timestamp
  
  actions: {
    publishItem: function(list) {
      var newItem = this.store.createRecord('item', {
        title: this.get('title'),
        timestamp: new Date().getTime()
      });

      var itemz = list.get('items');
      itemz.addObject(newItem);
      list.save();

      this.setProperties({
        title:""
      })

    },
    deleteItem: function(item) {
      item.destroyRecord();
    }
  }
});
