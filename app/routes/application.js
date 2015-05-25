import Ember from 'ember';

var ErrorLoggingService = {
  logError: function(error) {
    console.log('TODO: Log error via ajax request', error);
  }
};

export default Ember.Route.extend({
  actions: {
    error: function(transition, error) {
      ErrorLoggingService.logError(error);
      this.render('error', {
        controller: error, 
        into: 'application'
      });
    }
  }
});