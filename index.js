/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-clamp',
  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/clamp-js/clamp.js');
  }
};
