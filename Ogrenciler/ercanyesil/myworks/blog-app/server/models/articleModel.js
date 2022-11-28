const {model,Schema}=require('mongoose');

const articleSchema = new Schema({
    title:String,
    contents:String
})

module.exports = new model('article',articleSchema);