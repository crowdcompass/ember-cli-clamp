/*jshint node:true*/
module.exports = {
  description: '',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('clamp-js'); // is a promise
  }
};
