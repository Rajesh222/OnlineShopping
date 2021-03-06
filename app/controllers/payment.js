import Ember from 'ember';
import $ from 'jquery';

export default Ember.ObjectController.extend({

    needs: ['application'],

    actions: {
        pay: function(product) {
            var _this = this;
            var cardNumber = this.get('cardNumber');
            var temp = document.getElementById("month");
            var selectedmonth = temp.options[temp.selectedIndex].value;
            var temp1 = document.getElementById("year");
            var selectedyear = temp1.options[temp1.selectedIndex].value;
            if (this.get('cardNumber') && selectedmonth !== 'month' && selectedyear !== 'year') {
                if (cardNumber === '1234567812345678' && selectedmonth === '2' && selectedyear === '2016') {

                    product.content.forEach(function(p) {
                        p.set('productStatus', 'order');
                        p.set('isSoldOut', true);
                    });

                    product.save().then(function() {
                        $.notify({
                            icon: 'glyphicon glyphicon-ok',
                            message: 'Order placed successfully',
                        }, {
                            type: 'success',
                            placement: {
                                from: "top",
                                align: "center"
                            },
                            delay: 100,
                        });
                        _this.transitionToRoute('order');


                    });

                }
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