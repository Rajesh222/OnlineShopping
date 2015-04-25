import Ember from 'ember';

export default Ember.Route.extend({
 model: function(){

         return Ember.RSVP.hash({
          user: this.store.find('user'),
          product: this.store.find('product'),
          currentUser: this.store.find('currentUser')
      });
},

 renderTemplate: function(){
    this.render();
   
  },
actions: {
	deleteProduct: function(product){
    product.deleteRecord();
    product.save();
    this.transitionTo('products');
   
  }
}


});