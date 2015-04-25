import Ember from 'ember';


export default Ember.ObjectController.extend({

    actions: {
        saveProduct: function() {
            var self = this;
            this.get('model').save().then(function() {
                self.transitionToRoute('products');
            });
        }
    }
});