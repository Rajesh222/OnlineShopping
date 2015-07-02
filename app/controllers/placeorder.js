import Ember from "ember";
import $ from 'jquery';

export default Ember.ObjectController.extend({
    actions: {

        saveAddress: function() {
            var self = this;
            if (this.get('name')&&this.get('address')) {
            var newAdd = this.store.createRecord('currentUser', {
                name: this.get('name'),
                address: this.get('address'),
            });

            newAdd.save().then(function() {
                self.transitionToRoute('payment');

            });

         }else{
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