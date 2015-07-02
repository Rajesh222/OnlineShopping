import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('addproduct');
    this.route('cart');
    this.route('search', {path:'search/:query'});
    this.route('placeorder');
    this.route('payment');
    this.route('order');
    this.route('profile');
    this.route('contactus');
    this.route('editproduct', {path: 'editproduct/:product_id'});
    this.resource('products', function(){
    	 this.route('subproduct');
	     this.route('product', { path :':product_id'});
});
  
});

export default Router;