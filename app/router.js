import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('properties', function() {
    this.route('new');
    this.resource('property', { path: '/:property_id' }, function() {
      this.route('edit');
    });
  });

  this.route('missing', { path: '/*path' });
});

export default Router;
