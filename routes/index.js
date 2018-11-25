var babelify = require('babelify');
var browserify = require('browserify-middleware');
var middleware = require('./middleware');
var keystone = require('keystone');

var importRoutes = keystone.importer(__dirname);

keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
  views: importRoutes('./views'),
  api: importRoutes('./api')
};

// Setup Route Bindings
module.exports = function(app) {

	app.use('/js', browserify('./client/scripts', {
		transform: [babelify.configure({
			plugins: ['object-assign']
		})]
	}));

  app.get('/api/menu/list', keystone.middleware.api, routes.api.menu.list);
  app.get('/api/slider/list', keystone.middleware.api, routes.api.slider.list);
  app.get('/api/galleries/list', keystone.middleware.api, routes.api.galleries.list);
  app.get('/api/galleries/:gallery', keystone.middleware.api, routes.api.galleries.gallery);
  app.get('/api/galleries/category/:category?', keystone.middleware.api, routes.api.galleries.category);

  app.get('/*', function(req,res) {
    res.render('index');
  });
};

// Setup Route Bindings
//exports = module.exports = function (app) {
  // Views
  // app.get('/', routes.views.index);
  // app.get('/blog/:category?', routes.views.blog);
  // app.get('/blog/post/:post', routes.views.post);
  // app.get('/gallery', routes.views.gallery);
  // app.get('/gallery/:gallery', routes.views.album);
  // app.all('/contact', routes.views.contact);
  //Photostore Route
  // app.get('/api/fileupload/list', keystone.middleware.api, routes.api.fileupload.list);
  // app.get('/api/fileupload/:id', keystone.middleware.api, routes.api.fileupload.get);
  // app.all('/api/fileupload/:id/update', keystone.middleware.api, routes.api.fileupload.update);
  // app.all('/api/fileupload/create', keystone.middleware.api, routes.api.fileupload.create);
  // app.get('/api/fileupload/:id/remove', keystone.middleware.api, routes.api.fileupload.remove);
  // NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
  // app.get('/protected', middleware.requireUser, routes.views.protected);
//};
