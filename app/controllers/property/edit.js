import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['property'],
  actionName: 'Edit',
  actions: {
    save: function() {
      var property = this.get('model');
      property.save();
      this.transitionToRoute('property', property);
    }
  }
});
