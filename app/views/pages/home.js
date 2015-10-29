import Component from '../../component';
import template from './home.html';
import navControls from '../partials/nav';
import Backbone from 'backbone';

export default Component.extend({
  template,
  events:{
    'click .btn.video':'videoClick'
  },
  videoClick:function(){
    Backbone.history.navigate('/videocall',true);
    return false;
  },
  beforeRender:function(){
    new navControls({el:'main'}).render();
  },
  cleanup: function() {
      this.undelegateEvents();
      //$(this.el).empty();
  }
});