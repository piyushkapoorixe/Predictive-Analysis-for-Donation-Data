// define our nerd model
// module.exports allows us to pass this to other files when it is called
// '' is the model name, {} is the schema name, 'projecs' is the collection name
module.exports = connectionsubject.model('', {}, 'projects');

/*
— model.js —

const mongoose = require('mongoose');
mongoose.connect('mongodb://locahost/dbName')
const dataSchema = new mongoose.Schema({});
const dataModel = mongoose.model('modelName', dataSchema, 'collectionName');
module.exports = dataModel;
— CRUD data —

let dataModel = require('./model.js');
dataModel.create({}, cb);
dataModel.find({}, cb);
dataModel.update({}, {}, cb);
dataModel.remove({}, cb);
*/
