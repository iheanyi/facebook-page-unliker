import Ember from 'ember';
import DS from 'ember-data';
import config from 'facebook-page-unliker/config/environment';

export default DS.Model.extend({
  name: DS.attr('string'),
  createdTime: DS.attr('date'),
  link: DS.attr('string'),
  about: DS.attr('string'),
  fanCount: DS.attr('number'),
  buttonLink: Ember.computed('link', function() {
    const link = this.get('link');
    const appId = config.torii.providers['facebook-connect'].appId;
    return `http://www.facebook.com/plugins/like.php?href=${link}&width&layout=button&action=like&show_faces=false&share=false&height=35&appId=${appId}`;
  })
});
