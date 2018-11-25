var keystone = require('keystone');
var Types = keystone.Field.Types;

var Event = new keystone.List('Event', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true },
});

Event.add({
  title: { type: String, required: true, initial: true },
  description: { type: Types.Html, wysiwyg: true },
  cost: { type: Number, default: 0, size: 'small' },
  startTime: { type: Types.Datetime, required: true, initial: true, index: true },
  endTime: { type: Types.Datetime, initial: true, index: true },
  location: { type: Types.Location, initial: true },
  published: { type: Boolean },
  publishDate: { type: Types.Date, index: true },
});

Event.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

Event.schema.pre('save', function (next) {
  let event = this;
  if (event.isModified('published') && event.published) {
    this.publishDate = Date.now();
  }
  return next();
});

Event.defaultColumns = 'title, publishedDate|20%, startTime|20%, location, cost';
Event.register();
