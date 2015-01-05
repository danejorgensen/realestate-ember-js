import Ember from 'ember';

export default Ember.Component.extend({
  isModalVisible: false,
  actions: {
    hideModal: function(){
      this.set('isModalVisible', false);
    }
  }
});
