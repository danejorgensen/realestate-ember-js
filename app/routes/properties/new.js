import Ember from 'ember';
import PropertyBase from '../property-base';

export default PropertyBase.extend({
  model: function() {
    return Ember.Object.create({});
  },
  renderTemplate: function(controller) {
    this.render('property.edit', { controller: controller });
  }
});
