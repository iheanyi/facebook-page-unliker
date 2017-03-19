/* globals FB */
import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service('session'),
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      if (!this.get('session.session.authenticated.accessToken')) {
        this.get('session').invalidate(); 
      }
    }
  }
});
