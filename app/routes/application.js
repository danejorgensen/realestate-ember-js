import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    showModal: function(name){
      this.controllerFor(name).set('modalVisible', true);
    },
    goBack: function(){
      this.transitionTo('properties');
    }
  }
});
