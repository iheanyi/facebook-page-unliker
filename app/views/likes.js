import Ember from 'ember';
import UserLikesComponent from '../templates/components/user-likes';

Ember.View.reopen({
  /*didInsertElement : function(){
      this._super();
      console.log("Element inserted");
      Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
    },
    afterRenderEvent : function(){
      // implement this hook in your own subclasses and run your jQuery logic there
      console.log("After Rendering is complete.");
    }*/
});

export default Ember.View.extend({
  templateName: "likes",
  id: 'likes-section',
  classNames: ['container'],
  childViews: ['bView', 'aView'],
  aView: Ember.View.create({
    templateName: 'components/user-likes',
    pages: []
  }),
  bView: Ember.View.create({
    templateName: 'likes'
  }),
  didInsertElement: function() {
    Ember.$(window).on('scroll', Ember.$.proxy(this.didScroll, this));
  },
  willDestroyElement: function() {
    Ember.$(window).off('scroll', Ember.$.proxy(this.didScroll, this));
  },
  didScroll: function() {
    var controller = this.get('controller');

    if (this.isAtBottom()) {
      // Get controller and send a command.
      console.log(UserLikesComponent);
      var defer = Ember.RSVP.defer(),
          self = this;
      defer.promise.then(function(response) {
        console.log("Completed!");
        console.log(response);
      },

      function(response) {
        console.log("Error!");
      });

      console.log("At the bottom of the page.");
      controller.send('fetchMore', defer);
    }
  },
  isAtBottom: function() {
    var distanceToTop = (Ember.$(document).height() - Ember.$(window).height());
    var viewportTop = Ember.$(document).scrollTop();

    if(viewportTop === 0) {
      // At the top, no more infinite scrolling.
      return false;
    }

    return (viewportTop - distanceToTop === 0);
  }
});
