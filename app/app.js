import Ember from 'ember';
import DS from 'ember-data';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var adapter;
if(config.fixtures === true) {
  adapter = DS.FixtureAdapter.extend({ latency: 500 });
} else {
  adapter = DS.ActiveModelAdapter.extend({
    namespace: 'api/v1',
    headers: Ember.computed(function() {
      var token = Ember.$('meta[name="csrf-token"]').attr('content');
      return { "X-CSRF-Token": token };
    })
  });
}

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
  ApplicationAdapter: adapter
});

loadInitializers(App, config.modulePrefix);

export default App;
