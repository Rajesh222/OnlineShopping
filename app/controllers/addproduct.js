import Ember from "ember";
import $ from 'jquery';

export default Ember.ObjectController.extend({

    actions: {
        saveProduct: function() {
            var self = this;
            if (this.get('title') && this.get('description') && this.get('price') && this.get('src')) {
                var newItem = this.store.createRecord('product', {
                    title: this.get('title'),
                    description: this.get('description'),
                    price: this.get('price'),
                    src: this.get('src'),
                });
                newItem.save().then(function() {
                        $.notify({
                        icon:'glyphicon glyphicon-ok',
                        message: 'Product added successfully',
                    }, {
                        type: 'success',
                        placement: {
                            from: "top",
                            align: "center"
                        },
                        delay: 1000,
                    });
                    self.transitionToRoute('products');
                });
            } else {
                    $.notify({
                    icon: 'glyphicon glyphicon-warning-sign',
                    message: 'Fields should not be empty!',
                }, {
                    type: 'danger',
                    placement: {
                        from: "top",
                        align: "center"
                    },
                    delay: 1000,
                    animate: {
                        enter: 'animated fadeInDown',
                        exit: 'animated fadeOutUp'
                    },


                });

            }

        }
    }
});