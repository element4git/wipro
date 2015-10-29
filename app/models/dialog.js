import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    "user":  "",
    "profile_image": "",
    "copy": "",
    "type":"",
    "date":    new Date()
  }
});