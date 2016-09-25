import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  createdTime: DS.attr('date'),
  link: DS.attr('string'),
  about: DS.attr('string'),
  fanCount: DS.attr('number')
});
