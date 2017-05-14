import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts list by timestamp
  
  actions: {
    publishItem: function(listID) {
      var newItem = this.store.createRecord({
        title: this.get('title'),
        timestamp: new Date().getTime()
      });

      this.store.findRecord('list', listID).then(function(list) {
        alert('ello');
        list.get('items').then(function(items) {
          items.addObject(newItem);
          return list.save();
        });
      });
      // alert(newItem.id);
      // newItem.save();

      // this.setProperties({
      //   title:""
      // })
    },
    deleteItem: function(itemID) {
      this.store.find('item', itemID).then(function(rec) {
        rec.destroyRecord();
      });
    }
  }
});
