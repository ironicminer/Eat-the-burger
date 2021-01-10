let orm = require("../config/orm.js");
let burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // Theletiables cols and vals are arrays.
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, boolean, condition, cb) {
    orm.updateOne("burgers", objColVals, boolean, condition, function (res) {
      cb(res);
    });
  },
  deleteOne: function (condition, cb) {
    orm.deleteOne("burgers", condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;
