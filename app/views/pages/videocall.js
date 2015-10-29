import Component from '../../component';
import template from './videocall.html';
import navControls from '../partials/nav';
import Backbone from 'backbone';
import chatBoxCollection from '../../models/chatBox';
import Dialog from '../partials/dialog';
import $ from 'jquery';

export default Component.extend({
  template,
  initialize:function(){
    this.collection = new chatBoxCollection();
    this.listenTo(this.collection, 'reset', this.addAll);
    this.collection.fetch({reset:true});
  },
  events:{
    'click .send':'sendChat'
  },
  addOne:function(dialog){
    console.log('i am called');
    var view = new Dialog({model:dialog});
    this.$el.find('.chatContainer').append(view.el);
    view.render();
  },
  addAll:function(){
    //this.collection.each(this.addOne,this);
  },
  beforeRender:function(){
    new navControls({el:'main'}).render();
  },
  sendChat:function(button){
    var data = $(button.currentTarget).closest('form').serialize().split("&");
    var obj={};
    for(var key in data)
    {
        obj[data[key].split("=")[0]] = data[key].split("=")[1];
    }
    var newDialog = this.collection.create(obj);
    this.addOne(newDialog);
    return false;
  },
  cleanup: function() {
      this.undelegateEvents();
      //$(this.el).empty();
  }
});
