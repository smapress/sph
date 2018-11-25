const keystone = require('keystone');
const Slider = keystone.list('Slider');

exports.list = function (req, res) {
  Slider.model.find(function (err, sliders) {
    console.log(sliders);
    for (let photos of sliders.map(i => i.photo)) {
      for (let photo of photos) {
        if (req.query.method === 'fill') {
          photo.url = photo.fill(req.query.w, req.query.h);
      }
    }
    res.apiResponse(sliders);
  }});
};
