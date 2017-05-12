import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Thing1', 'Thing2', 'Albert Hofmann'];
  }
});
