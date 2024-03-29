const orm = require("../config/orm.js")

const burger = {
    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res)
        })
    },
    create: function(val, cb) {
        orm.insertOne(val, function(res) {
            cb(res)
        })
    },
    update: function(val, id, cb) {
        orm.updateOne(val, id, function(res) {
            cb(res)
        })
    },
}

module.exports = burger
