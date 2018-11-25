var keystone = require('keystone');
var Types = keystone.Field.Types;
var transform = require('model-transform');

var Slider = new keystone.List('Slider', {
  autokey: { path: 'key', from: 'name', unique: true },
  nocreate: true,
  nodelete: true
});

Slider.add({
  name: { type: String, required: true, nocreate: true },
  title: { type: String },
  photo: {
    type: Types.CloudinaryImages,
    folder: 'main-slider',
    autoCleanup: true,
  },
  'photo-from-galleries': { type: Types.Relationship, ref: 'Gallery', many: false }
});
Slider.defaultColumns = 'title|40%, photo-from-galleries';
Slider.register();