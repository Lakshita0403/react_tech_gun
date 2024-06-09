const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
        title:{
            type:String,
            required:true
        }, 

        date:{
            type:String,
            required:true
        },

        price:{
            type:String,
            required:true
        },

})

mongoose.modal("client",expenseSchema)