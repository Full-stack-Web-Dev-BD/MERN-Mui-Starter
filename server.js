const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const UserRoutes = require('./routes/api/users')
const morgan = require('morgan')
const cors = require('cors')


const app = express();
app.use(morgan('dev'))
app.use(cors())

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

require('./config/passport')(passport);

//DB config
const db = require('./config/keys').mongoURI;

//MongoDB connect
mongoose
	.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.log(err));


//use routes
app.use('/api/users', UserRoutes);



app.listen(port, () => {
	console.log('server is running on port: ' + port);
})
