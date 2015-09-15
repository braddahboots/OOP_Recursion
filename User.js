function User(name) {
  this.name = name;
}

User.prototype.login = function(game) {
  return this.name + ' logged into ' + game.title;
};

module.exports = User;