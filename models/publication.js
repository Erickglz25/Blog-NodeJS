var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var publicationSchema = new Schema({
 title: {type: String, required: true},
 subtitle: {type: String, required: true},
 author:{type:String,required:true},
 likes: {type: Number, default: 0},
 dislikes: {type: Number, default: 0},
 img: [{
   image:String
 }],
 active: {type:Boolean, required:true, default:true},
 content:String,
 tags:[{
   tag:String
 }]
});

module.exports = mongoose.model('publications', publicationSchema);
