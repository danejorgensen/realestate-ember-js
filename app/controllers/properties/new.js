import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['property'],
  actionName: 'New',
  actions: {
    save: function() {
      var property = this.store.createRecord('property', {
        name: this.get('name'),
        slug: this.get('slug'),
        amount: this.get('amount'),
        bedrooms: this.get('bedrooms'),
        bathrooms: this.get('bathrooms'),
        sqft: this.get('sqft'),
        createdAt: new Date()
      });

      property.save();

      this.transitionToRoute('property', property);
    }
  }
});
