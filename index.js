module.exports = Bear;

function Bear(type) {
  this.type = type || 'any';
}

// bear prototype being created
Bear.prototype.growl = function(says) {
  return 'The ' + this.type + ' bar says ' + (says || 'grrr');
};
