import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
  segment: Ember.inject.service(),
  likesArr: [],
  allLikes: [],
  currentLikesIndex: 0,
  page: 1,
  perPage: 25,
  scrollTop: Ember.observer("page", function() {
    this.get('segment').trackEvent('Changes page');
    Ember.$(window).scrollTop(0);
  }),
  reversedLikes: Ember.computed('model', function() {
    return this.get('model').reverse();
  }),
  totalPages: Ember.computed.oneWay("pagedContent.totalPages"),
  currentLikesArr: Ember.computed('currentLikesIndex', 'likesArr', function() {
    let idx = this.get('currentLikesIndex');
    return this.get('likesArr').reverse()[idx];
  }),
  pagedContent: pagedArray('reversedLikes', {
    page: Ember.computed.alias("parent.page"),
    perPage: Ember.computed.alias("parent.perPage")
  }),
  actions: {
    setCurrentPage(index) {
      this.set('currentLikesIndex', index);
    }
  }
});
