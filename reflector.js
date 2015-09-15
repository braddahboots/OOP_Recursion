var SuperUser = require('./SuperUser');
var GroupUser = require('./GroupUser');
var User = require('./User');
// console.log("hello world", SuperUser);

function reflector(obj) {
  console.log('Class', obj.constructor.name);
  console.log(Object.keys(obj));
  classes = Object.getPrototypeOf(obj);

  if(classes === null) {
    return;
  } else {
    reflector(classes);
  }
}

var superTest = new SuperUser(100, "All of them");
var groupTest = new GroupUser('puppies', 1);
var userTest = new User("Master Chief");

reflector(superTest);