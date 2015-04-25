import Ember from 'ember';

export default Ember.Component.extend({

    actions: {
        login: function() {
            var userName = this.get('userName');
            var password = this.get('password');
            var _this = this;
            var users = this.get("targetObject.model.user");
            users.forEach(function(p) {
                if (userName === p.get('userName') && password === p.get('password')) {
                    if (userName === 'admin' && password === '123') {
                        p.set('isLogin', true);
                        p.set('isAdmin', true);
                        _this.sendAction("updateCurrentUserAsAdmin", p);
                    }

                    if (userName === 'user1' && password === '123') {
                        p.set('isLogin', true);
                        p.set('isUser', true);
                        _this.sendAction("updateCurrentUserAsUser", p);
                    }
                    $('.login-modal').modal('hide');
                    alert('Login successfully!!');
                }
            });
        }
    }
});