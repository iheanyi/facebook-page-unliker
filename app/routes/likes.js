import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  authenticationRoute: '',
  session: Ember.inject.service('session'),
  likesArr: [],
  allLikes: [],
  fetchLikes(apiUrl) {
      let accessToken = this.get('session.session.authenticated.accessToken');
    return Ember.$.getJSON(apiUrl).then(response => {
      let likes = response.data;
      let accessToken = this.get('session.session.authenticated.accessToken');

      let allLikes = this.get('allLikes');
      let likesArr = this.get('likesArr');
      if (likes.length > 0) {
        // We're going to push these objects into the array. ;)
        likesArr.pushObject(likes);
        allLikes.pushObjects(likes);
      }
     
      // And then we're going to check the pagination, if it has pagination,
      // let's recurse and then fetch even more of the likes.
      if (!!response.paging && !!response.paging.next) {
        var nextUrl = response.paging.next;
        return this.fetchLikes(nextUrl);
      } else {
        return allLikes;
      }
    });
  },
  model() {
    let accessToken = this.get('session.session.authenticated.accessToken');
    this.set('routeAccessToken', accessToken);
    let firstUrl = `https://graph.facebook.com/v2.8/me/likes?access_token=${accessToken}&fields=name,link,id,fan_count,created_time,category&limit=50&summary=true`;

    return this.fetchLikes(firstUrl);
  },
  setupController(controller, model) {
    controller.set('model', model);
    controller.set('allLikes', this.get('allLikes'));
    controller.set('likesArr', this.get('likesArr'));
  }
});
