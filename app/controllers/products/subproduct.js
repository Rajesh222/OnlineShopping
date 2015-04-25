import Ember from 'ember';

export default Ember.ArrayController.extend({
    needs: ["application"],
    queryParams: ['category', 'title'],
    category: '1'

});