import Ember from 'ember';
import UserLikesComponent from 'page-unliker/components/user-likes';
import likesView from 'page-unliker/views/likes';

export default Ember.ArrayController.extend({
  sliceValue: 25,
  pages: function() {
    console.log("Show content!");
    console.log(this.get('content'));

    // Get the slice value
    var endValue = this.get('sliceValue');

    // Get contents of the array controller.
    var content = this.get('content').toArray().reverse();


    console.log(this.get('content'));
    console.log(this.get('sliceValue'));
    //return this.get('content').slice(0)
    return content.slice(0, endValue);
  }.property('this', 'content'),
  actions: {
    fetchMore: function(defer) {
      console.log("Get more is called!");

      // Get the new ranges for the slice function and update sliceValue.
      var oldValue = this.get('sliceValue');
      var newValue = oldValue + 25;
      this.set('sliceValue', newValue);

      // Reverse fetch the array and it's contents.
      var newPages = this.get('content').toArray().reverse().slice(oldValue, newValue);

      // Create a new user likes component with these
      var areaComponent = UserLikesComponent.create({
        pages: newPages
      });

      var newArea = Ember.Component.create({
        templateName: "components/user-likes",
        pages: newPages
      });

      var myView = Ember.View.views['container-view'];
      console.log("Container View");
      console.log(myView);
      console.log(myView.toArray());

      var views = myView.toArray();
      var firstView = views[0];
      if(views.length >= 2) {
        console.log("Removing view!");
        //myView.removeObject(firstView);
        firstView.destroy();
      }
      myView.pushObject(areaComponent);

      console.log(this.get('sliceValue'));

      defer.resolve("done");


      //return "done";
    },
  }

});
