import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts list by timestamp
  
  actions: {
    publishItem: function(listID) {
      var newItem = this.store.createRecord('item', {
        title: this.get('title'),
        timestamp: new Date().getTime()
      });

      this.store.findRecord('list', listID).then(function(list) {
        alert(list.get('title'));
        var itemz = list.get('items');
        itemz.addObject(newItem);
        list.save();
         /*
        .then(function(items) {
          
        });
        list.save();*/
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
