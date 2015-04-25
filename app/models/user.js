import DS from 'ember-data';

export default DS.Model.extend({
    userName: DS.attr('string'),
    password: DS.attr('string'),
    name: DS.attr('string'),
    address: DS.attr('string'),
    isLogin: DS.attr('boolean'),
    isUser: DS.attr('boolean'),
    isAdmin: DS.attr('boolean'),



}).reopenClass({

    FIXTURES: [

        {
            id: 1,
            userName: 'admin',
            password: '123'

        },
        {
            id: 2,
            userName: 'user1',
            password: '123'

        }


     
    ]


});