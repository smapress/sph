var keystone = require('keystone');
var Types = keystone.Field.Types;

var GalleryCategory = new keystone.List('GalleryCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

GalleryCategory.add({
	name: { type: String, required: true },
  description: { type: Types.Html, wysiwyg: true },
  ava: { type: Types.CloudinaryImage, folder: 'galleries/categories', autoCleanup: true }
});

GalleryCategory.defaultColumns = 'name, ava';
GalleryCategory.relationship({ ref: 'Gallery', path: 'galleries', refPath: 'categories' });
GalleryCategory.relationship({ ref: 'Tfp', path: 'tfp', refPath: 'categories' });
GalleryCategory.register();
