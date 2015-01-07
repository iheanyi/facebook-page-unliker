import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.reopen({
  notifyGoogleAnalytics: function() {
    return ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
  }.on('didTransition')
});

Router.map(function() {
  this.route("login");

  this.route("index", {
    path: "/"
  }, function() {
    this.resource("likes");
  });

  this.route("privacy");
  this.route("tos");
});

export default Router;