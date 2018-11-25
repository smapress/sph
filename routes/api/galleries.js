const keystone = require('keystone');
const Gallery = keystone.list('Gallery');
const GalleryCategory = keystone.list('GalleryCategory');

exports.list = function (req, res) {
  if (req.query.sort === 'publishedDate') {
    Gallery.model.find().sort('-publishedDate').exec(function(err, items) {
      if (err) return res.apiError('database error', err);
      res.apiResponse({
        galleries: items
      });
    });
  } else {
    Gallery.model.find(function (err, galleries) {
      for (let photos of galleries.map(i => i.photo)) {
        for (let photo of photos) {
          if (req.query.method === 'fill') {
            photo.url = photo.fill(req.query.size || req.query.w, req.query.size || req.query.h);
          } else {
            photo.url = photo.limit(req.query.size || req.query.w, req.query.size || req.query.h);
          }
        }
      }
      res.apiResponse({
        galleries: galleries
      });
    });
  }
};

exports.gallery = function (req, res) {
  Gallery.model.findOne({key: req.params.gallery}).exec(function (err, result) {
    res.apiResponse({
      gallery: result
    });
  });
};

exports.category = function (req, res) {
  let galleryPaginate = Gallery.paginate({
    page: req.query.page || 1,
    perPage: 10,
    maxPages: 10,
    filters: {
      state: 'published',
    },
  }).sort('-publishedDate');

  GalleryCategory.model.findOne({key: req.params.category}).exec(function (err, category) {
    console.log(category.id);
    galleryPaginate.where('categories').in([category.id]).exec(function (err, results) {
      res.apiResponse({
        galleries: results
      });
    });
  });
};
