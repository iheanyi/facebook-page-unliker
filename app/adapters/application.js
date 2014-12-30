import DS from 'ember-data';
import Ember from 'ember';
export default DS.RESTAdapter.extend({
  namespace: 'me',
  host: 'https://graph.facebook.com',
  ajax: function(url, type, hash) {

    // Check if hash is empty.
    if (Ember.isEmpty(hash))  {
      hash = {};
    }

    // Check if hash is empty.
    if (Ember.isEmpty(hash.data)) {
      hash.data = {};
    }

    // Inject the session access token into the header.
    hash.data.access_token = this.get('session').get('accessToken') || ""; // Add Access Token Parameter

    return this._super(url, type, hash);
  }
});
