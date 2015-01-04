import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {

    var route = this;
    if(this.get('session').get('isAuthenticated') && this.get('session').get('accessToken')) {

      // If user is authenticated the access token is still in the local storage, then user can transition to the likes section.

      console.log("This would transition to likes.");
      this.transitionTo('likes');
    } else if(this.get('session').get('isAuthenticated') && !this.get('session').get('accessToken')) {

      // If user is "authenticated" through SimpleAuth but doesn't have a valid access token, we need to give the user a means of getting said access token, perhaps refreshing it in some way shape or form.

      console.log("Get access token now.");
      var session = this.get('session');
      var data = session.content;
      /*session.authenticate('simple-auth-authenticator:torii', 'facebook-connect').then(function() {
        console.log("Reauthenticated user!");
        route.transitionTo('likes');
      });*/
      session.restore(session).then(function() {
        console.log(session);
      });
    }
  }
});
