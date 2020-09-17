const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const db = require('./config/dbkey');
const port = process.env.PORT || 5000;
const route = require('./routes/api.js');

// Middleware
app.use(express.json());
app.use('*',cors());

// Database connection
mongoose.connect(db.mongoURI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false 
}).then(() => console.log('MongoDB Connected.')).catch(err => console.log(err));
app.use('/',route)

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}



app.listen(port, () => console.log(`Server running on port ${port}`));