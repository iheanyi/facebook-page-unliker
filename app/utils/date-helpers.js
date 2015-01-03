import Ember from 'ember';
import moment from 'npm:moment';

function formatDate(date, format) {
  return moment(date).format(format);
}

export {
  formatDate
};