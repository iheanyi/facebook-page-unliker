import Ember from 'ember';

function transformResponse(data) {
  return data.map((item) => {
    return {
      type: "likes",
      id: item.id,
      attributes: {
        name: item.name,
        'created-time': item.created_time
      }
    };
  });
}

export default Ember.Route.extend({
  session: Ember.inject.service(),
  baseAPIUrl: Ember.computed('session', function() {
    const accessToken = this.get('session.session.authenticated.accessToken');
    return `https://graph.facebook.com/me/likes?access_token=${accessToken}&limit=100`;
  }),
  getLikesFromUrl(url) {
    return Ember.$.ajax(url).then((response) => {
      if (response.paging && response.paging.next) {
        const transformedLikes = transformResponse(response.data);
        const payload = {
          data: transformedLikes
        };

        this.store.pushPayload('like', payload);

        const nextUrl = response.paging.next;

        return this.getLikesFromUrl(nextUrl);
      } else {
        return this.store.peekAll('like');
      }
    });
  },
  model() {
    const baseApiUrl = this.get('baseAPIUrl');

    return this.getLikesFromUrl(baseApiUrl);
  }
});
