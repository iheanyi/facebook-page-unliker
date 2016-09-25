import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super();
  },
  actions: {
    logMessage() {
      console.log("This was something clicked.");
    }
  }
});
