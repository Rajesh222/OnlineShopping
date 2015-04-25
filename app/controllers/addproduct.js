import Ember from "ember";


export default Ember.ObjectController.extend({

    actions: {
        saveProduct: function() {
            var self = this;
            var newItem = this.store.createRecord('product', {
                title: this.get('title'),
                description: this.get('description'),
                price: this.get('price'),
                src: this.get('src'),
            });
            newItem.save().then(function() {
                self.transitionToRoute('products');
            });
        }
    }
});