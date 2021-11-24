const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(require("./routes/index"));
app.use(require("./routes/movies"));


// starting the Server

app.listen(app.get('port'),()=>{
    console.log('Server on port 3000');
});