var User = require('./User.js');

function GroupUser(members, ranking) {
  this.members = members;
  this.ranking = 1;
  User.call(this, this.name);
}

GroupUser.prototype = Object.create(User.prototype);
GroupUser.prototype.constructor = GroupUser;

// var groupTest = new GroupUser('puppies', 1);

GroupUser.prototype.battle = function(enemy) {
  return this.name + ' will battle ' + enemy;
};

module.exports = GroupUser;