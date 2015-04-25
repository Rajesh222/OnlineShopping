import Ember from "ember";


export default Ember.ObjectController.extend({
    actions: {

        saveAddress: function() {
            var self = this;
            var newAdd = this.store.createRecord('currentUser', {
                name: this.get('name'),
                address: this.get('address'),
            });

            newAdd.save().then(function() {
                self.transitionToRoute('payment');

            });


        }

    }

});