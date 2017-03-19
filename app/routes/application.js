/* globals FB */
import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      if (!this.get('session.session.authenticated.accessToken')) {
        this.get('session').invalidate(); 
      }
    }
  }
});
