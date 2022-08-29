const path = require('path');

module.exports = {
  i18n: {
    locales: ['tr'],
    defaultLocale: 'tr',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', "www.sitesaga.com"],
  },
};
