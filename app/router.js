import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('likes', function() {
    this.route('loading');
  });
  this.route('privacy');
  this.route('tos');
});

export default Router;
