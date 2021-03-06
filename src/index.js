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

//
app.get('/', (req, res)=>{
    res.json({title:"Pagina Principal"});
})

app.use(require("./routes/index"));
app.use(require("./routes/movies"));
app.use(require("./routes/personas"));
app.use(require("./routes/clientes"));
app.use(require("./routes/productos"));

// starting the Server

app.listen(app.get('port'),()=>{
    console.log('Server on port 3000');
});