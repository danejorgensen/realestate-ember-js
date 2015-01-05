import Ember from 'ember';

export default Ember.ObjectController.extend({
  editMode: false,
  deleteMode: false,
  actions: {
    cancelDelete: function() {
      this.set('deleteMode', false);
    },
    confirmDelete: function() {
      var property = this.get('model');
      property.deleteRecord();
      property.save();

      this.set('deleteMode', false);
      this.transitionToRoute('properties');
    },
    delete: function() {
      this.toggleProperty('deleteMode');
    },
    edit: function() {
      this.setProperties({
        'editMode': true,
        'deleteMode': false
      });

      this.transitionToRoute('property.edit');
    }
  }
});
