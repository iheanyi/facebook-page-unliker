import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  beforeModel: function(transition) {
    console.log(this.get('session'));
    if(!this.get('session').get('isAuthenticated') || !this.get('session').get('accessToken')) {
      this.transitionTo('index');
    } else {
      console.log("Authenticated with a valid key!");
      //console.log(this.get('session').get('accessToken'));

    }
  },

  fetchMore: function() {
    console.log("Fetch more called in the route.");
    this.get('controller').send('fetchMore');
  },
  getLikes: function(url) {
    var likes = this.store.all('like');
    var route = this;
    var store = this.store;
    return Ember.$.getJSON(url).then(function(response) {

      var payload = {
        likes: response.data
      };

      store.pushPayload('like', payload);
      //likes.pushObjects(response.data);
      console.log(likes);

      // Check for the existence of a paging and next attributes in model.
      if(response.paging && response.paging.next) {
        // Append our access token to the end of the URL for authentication purposes.
        var nextURL = response.paging.next + "&access_token=" + route.get('session').get('accessToken');

        // Recurse on this URL. :D
        return route.getLikes(nextURL);
      } else {
        // If next is not found, then we have reached the end of the calls and we are now ready to return our likes!
        return likes;
      }
    });
  },
  model: function() {

    console.log(this.get('session').get('accessToken'));
/*
    return FB.api(
        "/me/likes?fields=link,name,created_time&limit=125",
        function(response) {
          if(response && !response.error) {
            console.log(response);
            return response.data;
          }
        }
      );*/

    /*return this.store.find('like').then(function(response) {
      console.log("Successful execution!");
      console.log(response);

      return [];
    });*/

    var apiUrl = "https://graph.facebook.com/me/likes?access_token=" + this.get('session').get('accessToken') + "&fields=name,link,id,talking_about_count,created_time&limit=100";

    var likes = this.store.all('like');
    var nextURL = "";

    return this.getLikes(apiUrl);
  /*return Ember.$.getJSON(apiUrl).then(function(response) {
    console.log("Finished executing!");
    console.log(response);

    likes.pushObjects(response.data);
    console.log(likes);

    return likes;
  });*/
  }
});
