import Ember from 'ember';
import $ from 'jquery';
export default Ember.Route.extend({
    model: function() {

        return Ember.RSVP.hash({
            user: this.store.find('user'),
            product: this.store.find('product'),
            currentUser: this.store.find('currentUser')
        });
    },

    renderTemplate: function() {
        this.render();

    },
    actions: {
        deleteProduct: function(product) {
            product.deleteRecord();
            product.save();
            $.notify({
                icon: 'glyphicon glyphicon-ok',
                message: 'Product deleted successfully',
            }, {
                type: 'success',
                placement: {
                    from: "top",
                    align: "center"
                },
                delay: 100,
            });
            this.transitionTo('products');

        }
    }


});