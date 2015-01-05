import PropertyBase from '../property-base';

export default PropertyBase.extend({
  model: function() {
    return this.modelFor('property');
  },
  actions: {
    goBack: function(){
      this.transitionTo('property');
    }
  }
});
