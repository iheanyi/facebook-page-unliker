import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
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
  this.route('likes', function() {
    this.route('loading');
  });
});

export default Router;
