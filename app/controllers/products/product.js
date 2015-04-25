import Ember from "ember";

export default Ember.ObjectController.extend({
    needs: ["application"],
    
    actions: {
        buy: function(product) {
            product.set('productStatus', 'cart');
            this.transitionToRoute('cart');
        }
    }
});