var GroupUser = require('./GroupUser.js');

function SuperUser(mostKills, badges) {
  this.name = "Lerroy";
  this.mostKills = mostKills;
  this.badges = badges;
  GroupUser.call(this, this.name, this.ranking);
}

SuperUser.prototype = Object.create(GroupUser.prototype);
SuperUser.prototype.constructor = SuperUser;

// var superTest = new SuperUser(100, "All of them");

// console.log(superTest);

SuperUser.prototype.equip = function(weapon) {
  return this.name + ' carrying ' + weapon;
};

SuperUser.prototype.headShot = function() {
  return ' BOOM_HEADSHOT!!!';
};

SuperUser.prototype.teaBags = function(enemy) {
  return this.name + ' plopped on ' + enemy + 's' + ' face ';
};

module.exports = SuperUser;