import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  link: DS.attr('string'),
  talking_about_count: DS.attr('number'),
  created_time: DS.attr('date'),
  buttonURL: function() {
    console.log("Creating iFrame url.");
    var customURL = "http://www.facebook.com/plugins/like.php?href=" + this.get('link') + "&width&layout=button&action=like&show_faces=false&share=false&height=35&appId=434327266716112";

    return 'http://www.facebook.com/plugins/like.php?href=' + this.get('link') + '&width&layout=button&action=like&show_faces=false&share=false&height=35&appId=434327266716112';
  }.property('link'),
});
