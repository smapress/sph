var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'album';
	locals.filters = {
		gallery: req.params.gallery,
	};
	locals.data = {
		galleries: [],
	};

	view.on('init', function (next) {

		keystone.list('Gallery').model.findOne({key: locals.filters.gallery}).sort('sortOrder').exec(function (err, result) {
			locals.data.album = result;
			console.log(locals.data.gallery);
			next(err);
		});
	});

	view.render('album');

};
