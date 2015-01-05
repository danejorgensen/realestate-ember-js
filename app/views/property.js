import Draggable from './draggable';

export default Draggable.extend({
  didInsertElement: function() {
    // guarantees the view is in the DOM
  }
});
