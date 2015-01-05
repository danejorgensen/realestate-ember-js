import Ember from 'ember';

export default Ember.Route.extend({
  activate: function(){
    this.controllerFor('property').setProperties({
      'editMode': true,
      'deleteMode': false
    });
  },
  // when trying to manually leave the route
  deactivate: function(){
    this.controllerFor('property').setProperties({
      'editMode': false,
      'deleteMode': false
    });
  }
});
