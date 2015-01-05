import Ember from 'ember';

export function formatDate(input) {
  return moment(input).fromNow();
}

export default Ember.Handlebars.makeBoundHelper(formatDate);
