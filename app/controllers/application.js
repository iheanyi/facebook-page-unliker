import Ember from 'ember';

export default Ember.Controller.extend({
	segment: Ember.inject.service(),
  session: Ember.inject.service('session'),
  actions: {
    login() {
      this.get('session').authenticate('authenticator:torii', 'facebook-connect').then(() => {
       // We've successfully authenticated, so we want to take the user to their
        // likes.
        this.transitionToRoute('likes');
      });
    },
    logout() {
      this.get('session').invalidate(); 
    },
    trackDonateClick() {
      // Will be responsible for tracking payment via Square Cash or Paypal
      // (once changed)
      this.get('segment').trackEvent('Clicks donate button', {
        site: 'Square Cash'
      });
    }
  }
});
