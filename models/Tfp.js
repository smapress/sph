var keystone = require('keystone');
var Types = keystone.Field.Types;
var transform = require('model-transform');

var Tfp = new keystone.List('Tfp', {
  map: { name: 'title' },
	autokey: { path: 'key', from: 'title', unique: true },
});

Tfp.add({
  title: { type: String, required: true },
  price: { type: Types.Money, format: '$0,0.00'},
	publishedDate: { type: Date, default: Date.now },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'published', index: true },
	ava: { type: Types.CloudinaryImage, folder: 'sales/hero-image', autoCleanup: true },
	photo: {
	  type: Types.CloudinaryImages,
    folder: 'sales/photos',
    autoCleanup: true,
  },
  categories: { type: Types.Relationship, ref: 'GalleryCategory', many: true },
});
Tfp.defaultColumns = 'title|10%, state|10%, categories|20%, ava|15%, photo|25%, publishedDate|20%';
Tfp.register();
