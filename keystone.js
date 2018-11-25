require('dotenv').config();

var keystone = require('keystone');

keystone.init({

	'name': 'she-sandra',
	'brand': 'she-sandra',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',

	'emails': 'templates/emails',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User'

});

keystone.import('models');

keystone.set('locals', {
  _: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});
keystone.set('adminui custom styles', './public/styles/admin.less');
keystone.set('routes', require('./routes'));
keystone.set('nav', {
  posts: ['posts', 'post-categories'],
  galleries: ['galleries', 'gallery-categories'],
  enquiries: 'enquiries',
  users: 'users',
  events: 'events',
  sliders: 'sliders'
});

keystone.start();
