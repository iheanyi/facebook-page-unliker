import Ember from 'ember';

export default Ember.Component.extend({
  templateName: "components/user-likes",
  didInsertElement : function(){
      this._super();
      console.log("Element inserted");
      Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
    },
    afterRenderEvent : function(){
      // implement this hook in your own subclasses and run your jQuery logic there
      console.log("After Rendering is complete. Parsing DOM.");
      console.log(FB);
      var sections = document.getElementsByClassName("like-class");
      var last_index = sections.length-1;
      var lastSection = sections[last_index];
      console.log(last_index);
      console.log(lastSection);
      FB.XFBML.parse(lastSection);
    }
});
