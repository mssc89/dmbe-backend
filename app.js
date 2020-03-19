//imports
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
var cors = require('cors');

//express and routes init
let app = express();
let apiRoutes = require("./routes");

//json support
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cors
app.use(cors());

//database connection
mongoose.connect('mongodb://localhost/dmbe', { useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true });
var db = mongoose.connection;

if(db){
  console.log("DB connection succesful");
}
else{
  console.log("DB connection error");
}

//delegate api routes to /api
app.use('/api', apiRoutes);

app.listen(3000, function () {
    console.log("Server started succesfully");
});
