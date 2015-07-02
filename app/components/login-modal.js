import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({

    actions: {
        login: function() {
            var _this = this;
            //var isValid= false;
            var userName = this.get('userName');
            var password = this.get('password');
            var users = this.get("targetObject.model.user");
            users.forEach(function(p) {
                if (userName === p.get('userName') && password === p.get('password')) {
                    if (userName === 'admin' && password === '123') {
                        p.set('isLogin', true);
                        p.set('isAdmin', true);
                        _this.set('isValid', true);
                        _this.sendAction("updateCurrentUserAsAdmin", p);
                    }

                    if (userName === 'user1' && password === '123') {
                        p.set('isLogin', true);
                        p.set('isUser', true);
                        _this.set('isValid', true);
                        _this.sendAction("updateCurrentUserAsUser", p);
                    }
                    Ember.$('.login-modal').modal('hide');
                    $.notify({
                        icon: 'glyphicon glyphicon-ok',
                        message: 'Login successfully',
                    }, {
                        type: 'success',
                        animate: {
                            enter: 'animated fadeInDown',
                            exit: 'animated fadeOutUp'
                        },
                        placement: {
                            from: "top",
                            align: "center"
                        },

                        offset: {
                            y: 200

                        },
                        allow_dismiss: true,
                        delay: 500,
                    });
                } else {
                    Ember.$('.login-modal').modal('hide');
                }
            });
            if (!this.get('isValid')) {
                $.notify({
                    icon: 'glyphicon glyphicon-warning-sign',
                    message: 'Ember correct userName and password',
                }, {
                    type: 'danger',
                    animate: {
                        enter: 'animated fadeInDown',
                        exit: 'animated fadeOutUp'
                    },
                    placement: {
                        from: "top",
                        align: "center"
                    },
                    offset: {
                        y: 200

                    },
                    allow_dismiss: true,
                    delay: 500,
                });
            }
        }
    }
});