import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  createdTime: DS.attr('date')
});
