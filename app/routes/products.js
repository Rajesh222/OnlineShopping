import Ember from 'ember';

export default Ember.Route.extend({
	 queryParams: {
     category: {
      refreshModel: true
    }
  },
  
    model: function() {
	
        return this.store.find('product');

    }


});