var keystone = require('keystone');
var Types = keystone.Field.Types;
var transform = require('model-transform');

var Gallery = new keystone.List('Gallery', {
  map: { name: 'title' },
	autokey: { path: 'key', from: 'title', unique: true },
});

Gallery.add({
  title: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'published', index: true },
	ava: { type: Types.CloudinaryImage, folder: 'galleries/hero-image', autoCleanup: true },
	photo: {
	  type: Types.CloudinaryImages,
    folder: 'galleries/images',
    autoCleanup: true,
  },
  categories: { type: Types.Relationship, ref: 'GalleryCategory', many: true },
});
Gallery.defaultColumns = 'title|10%, state|10%, categories|20%, ava|15%, photo|25%, publishedDate|20%';
Gallery.register();
