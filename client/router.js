Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
    template: 'login',
	waitOn: function(){ setTimeout(function(){ Accounts.loginServicesConfigured(); },500); }
} );

Router.route('/likes', {
    template: 'likes'
});

