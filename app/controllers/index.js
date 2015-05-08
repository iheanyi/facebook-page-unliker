import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:torii',
  actions: {
    signIn: function() {
      var controller = this.controllerFor('index');

      var session = this.get('session');
      console.log(session);

      session.authenticate('simple-auth-authenticator:torii', 'facebook-connect').then(function() {
        console.log("Callback");

        console.log(session);
        console.log(session.get('accessToken'));
        console.log(session.get('userId'));
        controller.transitionToRoute('likes');
      });
    },

    testAction: function() {
      var route = this;

      FB.getLoginStatus(function(response) {
        console.log(response);

        if(response && response.status === "connected") {
          var data = {
            authenticator: 'simeple-auth-authenticator:torii',
            provider: 'facebook-connect',
          };

          route.get('session').restore(response.data).then(function() {
            console.log("Restored authentication?");
            console.log(route.get('session'));
            console.log(route.get('session').get('accessToken'));
          });
          console.log(route.get('session'));
        }
      });

      console.log(this.get('session.accessToken'));
      FB.api(
        "/me/likes?fields=link,name,created_time&limit=125",
        function(response) {
          if(response && !response.error) {
            console.log(response);

          }
        }
      );
    }
  }
});
