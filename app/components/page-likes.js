import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super();
    console.log(this.$());
  }
});
