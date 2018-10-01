const bodyParser     = require('body-parser');
const express        = require('express');
const exphbs  = require('express-handlebars');
const path = require('path')


const app = express();

const port = 8001;

app.set('views', path.join(__dirname, './app/views'));
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, './app/views', 'layouts'),
  partialsDir: path.join(__dirname,  './app/views', 'partials')}
));

app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname + 'public')));

app.use(bodyParser.json());
require('./app/routes')(app);

app.listen(port, () => {
    console.log('We are live on ' + port);
  });
