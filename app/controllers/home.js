import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToList: function() {

      var newList = this.store.createRecord('list', {
        title: this.get('title')
      });
      newList.save();

      var id = newList.id;
      alert(id);

      this.setProperties({
        title:""
      })

      this.transitionToRoute('lists', newList);
    }
  }
});
