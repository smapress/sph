const
  async = require('async'),
  keystone = require('keystone');

/**
 * List Files
 */
exports.list = function(req, res) {

  let
    focused,
    items = [
      { label: 'Home', key: 'home', href: '/' },
      { label: 'Blog', key: 'blog', href: '/blog'},
      { label: 'Gallery', key: 'gallery', href: '/gallery' },
      { label: 'Contact', key: 'contact', href: '/contact' },
    ];

  for (let [index, item] of items.entries()) {
    if (item.href === `/${req.query.path.split('/')[1]}`) {
      focused = index;
    }
  }

  res.apiResponse({
    navLinks: items,
    focused: focused
  });
};