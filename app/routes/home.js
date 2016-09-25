import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel(transition) {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('likes');
    }
  }
});
