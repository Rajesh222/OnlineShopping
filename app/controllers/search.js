import Ember from 'ember';

export default Ember.ObjectController.extend({

    searchResult: function() {
        var query = this.get('query');
        if (query) {
            return this.store.filter('product', function(product) {
                return product.get('title').toLowerCase().indexOf(query.toLowerCase()) > -1;
            });
        }

    }.property('query'),

    actions: {
        clearText: function() {
            document.getElementById("searchProduct").value = "";
        }
    }
});