import Ember from 'ember';
import UserLikesComponent from 'page-unliker/components/user-likes';

export default Ember.ContainerView.extend({
  classNames: ['container-view'],
  init: function() {
    this._super();


    // Get controller and fetch pages.
    var controller = this.get('controller');
    var pages = controller.get('pages');

    // Initialize initial component view with these pages.
    var initView = UserLikesComponent.create({
      pages: pages
    });

    // Add this component to the container.
    this.pushObject(initView);
  },
  aView: UserLikesComponent.create({
    templateName: 'components/user-likes',
    pages: []
  }),
  bView: Ember.View.create({
    templateName: 'likes'
  }),
});
