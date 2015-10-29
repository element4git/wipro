import Backbone from 'backbone';
import Dialog from './dialog';
import LocalStorage from 'backbone.localStorage';

export default Backbone.Collection.extend({
  model: Dialog,
  localStorage: new Backbone.LocalStorage('todos-backbone'),
  comparator:'date'
});