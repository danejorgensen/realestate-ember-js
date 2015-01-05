import Ember from 'ember';

export default Ember.Component.extend({
  isVisible: false,

  actions: {
    cancelDelete: function(){
      this.toggleProperty('isVisible');
    },

    confirmDelete: function() {
      var $thisParent = this.$().parents('.property-profile');

      $thisParent.removeAttr('style').addClass('delete-animation');

      // we know our delete-animation will take 900ms seconds to complete
      // and Ember.run.later is Ember's setTimeout equivalent
      Ember.run.later(this, function() {
          // when the animation is done we can call the controller to trigger its confirmDelete action
          this.sendAction('action', this.get('param'));
      }, 900);
    }
  }
});
