import Component from '../../component';
import Backbone from 'backbone';
import $ from 'jquery';

export default Component.extend({
  events:{
    'click .main-nav a':'navigate'
  },
  navigate:function(clickedObject){
    var href = $(clickedObject.currentTarget);
    Backbone.history.navigate(href.attr('href'),true);
    return false;
  }
});
