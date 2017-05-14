import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //this.route('lists');
  this.route('home');
  this.route('lists', { path: '/lists/:lists_id' });
});

export default Router;
