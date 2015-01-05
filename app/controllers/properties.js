import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true,
  propertiesCount: function() {
    return this.get('model.length');
  }.property('@each')
});
