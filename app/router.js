import Backbone from 'backbone';
import HomePage from './views/pages/home';
import VideoCall from './views/pages/videocall';

const routes = {
  '': 'index',
  'videocall': 'videoCall'
};

// Defining the application router.
class Router extends Backbone.Router {
  constructor() {
    super({ routes });
  }

  index() {
    if(this.view){
      this.view.cleanup();
    }
    this.view = new HomePage({ el: 'main' }).render();
  }

  videoCall() {
    if(this.view){
      this.view.cleanup();
    }
  	this.view = new VideoCall({ el: 'main' }).render();
  }
}

export default Router;
