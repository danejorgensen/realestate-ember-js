import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('property', params.property_id);
  },
  actions: {
    goBack: function(){
      this.transitionTo('properties');
    }
  }
});
