import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');


  this.route('index', {path: '/' }, function() {
    this.resource('likes');
  });

  /*this.resource('likes', function() {
    this.resource('like', { path: 'likes/:like_id' }, function() { });
  });*/
});

export default Router;
