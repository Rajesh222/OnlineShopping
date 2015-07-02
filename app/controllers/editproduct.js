import Ember from 'ember';
import $ from 'jquery';

export default Ember.ObjectController.extend({

    actions: {
        saveProduct: function() {
            var self = this;
            this.get('model').save().then(function() {
                $.notify({
                    icon: 'glyphicon glyphicon-ok',
                    message: 'Product Edited successfully',
                }, {
                    type: 'success',
                    placement: {
                        from: "top",
                        align: "center"
                    },
                    delay: 100,
                });
                self.transitionToRoute('products');
            });
        }
    }
});