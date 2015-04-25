import Ember from 'ember';

export default Ember.ObjectController.extend({

    numberOfcartProduct: function() {
        var product = this.get('product');
        var num = product.filter(function(product) {
            return product.get('productStatus') === "cart";
        });
        return num.get('length');
    }.property('product.@each.productStatus'),

     total: function() {
        var product = this.get('product');
        var sum = 0;
        var subcart = product.filter(function(product) {
            return product.get('productStatus') === "cart";
        });
        var cart=subcart.toArray();
        for (var i = 0; i < this.get('numberOfcartProduct'); i++) {
            sum += cart[i].get('price');
        }
        return sum;
    }.property('product.@each.productStatus'),

    actions: {
        query: function() {
            var query = this.get('searchTerm');
            if (query) {
                this.transitionToRoute('search', {
                    query: query
                });
            }
        },

        updateCurrentUserAsUser: function(user) {
            var currentUser = this.get('currentUser');
            this.set('currentUser', user);
            currentUser.set('isLogin', true);
            currentUser.set('isUser', true);
        },

        updateCurrentUserAsAdmin: function(user) {
            var currentUser = this.get('currentUser');
            this.set('currentUser', user);
            currentUser.set('isLogin', true);
            currentUser.set('isAdmin', true);
            this.transitionToRoute('products');
        },

        logout: function() {
            var currentUser = this.get('currentUser');
            currentUser.set('isLogin', false);
            if (currentUser.get('isAdmin') === true) {
                currentUser.set('isAdmin', false).save();
            }
            if (currentUser.get('isUser') === true) {
                currentUser.set('isUser', false).save();
            }

        },
    }
});