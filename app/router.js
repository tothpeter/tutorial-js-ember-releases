import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('popular-now');
  this.resource('channels', function() {
    this.route('show', { path: '/:channel' });
  });
  this.resource('releases', {path: '/:owner/:repo/releases'});
});

export default Router;
