import Ember from 'ember';

export default Ember.Controller.extend({
  likesArr: [],
  allLikes: [],
  currentLikesIndex: 0,
  currentLikesArr: Ember.computed('currentLikesIndex', 'likesArr', function() {
    let idx = this.get('currentLikesIndex');
    return this.get('likesArr').reverse()[idx];
  }),
  actions: {
    setCurrentPage(index) {
      this.set('currentLikesIndex', index);
    }
  }
});
