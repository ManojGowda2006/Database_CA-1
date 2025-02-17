const mongoose = require('mongoose');

const menuItemsSchema = new mongoose.Schema({
    dishName : {
        type : String,
        required : true
    },
    cost : {
        type: Number,
        required : true
    }
})

const restaurantSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    location : {
        type: String,
        required : true
    },
    menuItemsId : [Number],
    menuItems : menuItemsSchema
})

module.export = mongoose.model("restaurantSchema",restaurantSchema);



