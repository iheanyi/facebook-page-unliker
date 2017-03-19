import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this._super(...arguments);
    Ember.run.scheduleOnce('afterRender', this, function() {
      FB.XFBML.parse();
    });
  },
  actions: {
    clickedUnlike(page) {
      // Something else
      console.log("Clicked unlike on page: " + page);
    }
  }
});
