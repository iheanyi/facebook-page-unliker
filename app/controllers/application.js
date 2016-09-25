import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    authenticate() {
      this.get('session').authenticate('authenticator:torii', 'facebook-connect')
      .then(() => {
        // Redirect somewhere.
        this.transitionToRoute('likes');
      }).catch((reason) => {
        console.log("Failed to authenticate.");
        console.log(reason);
        throw new Error(reason);
      });
    },
    logout() {
      this.get('session').invalidate();
    }
  }
});
