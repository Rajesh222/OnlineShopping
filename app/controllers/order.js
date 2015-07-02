import Ember from 'ember';


export default Ember.ArrayController.extend({
    needs: ['application'],


    numberOfcartProduct: function() {
        var product = this.get('model');      
        return product.get('length');
    }.property('model.@each.productStatus'),

     total: function() {
        var product = this.get('model');
        var sum = 0;    
        var cart=product.toArray();
        for (var i = 0; i < this.get('numberOfcartProduct'); i++) {
            sum += cart[i].get('price');
        }
        return sum;
    }.property('model.@each.productStatus'),

});