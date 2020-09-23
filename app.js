// General Imports and setup //
const express = require ("express");
const bodyParser = require("body-parser");
const mongoose = require ("mongoose");
const methodOverride = require ("method-override");


// Express and Modules ------------------------------------------
const app = express();
app.use(express.static("public")); // js, css, etc.
app.set("view engine", "ejs"); // EJS is a dependency

// Express
app.use(require("express-session")({
    secret: "Tiny Dancer",
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method")); // For PUT requests

// Mongoose ----------------------------------------------------

mongoose.connect('mongodb://localhost:27017/bbqsite', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));


// Locals -------------------------------------------------------
app.use((req, res, next) => {
	res.locals.currentUser = req.user; // Includes the User in all routes.
	next(); // Required to move forward from this middleware.
});

// Globals ------------------------------------------------------
const port = 3000;

// Routes ------------------------------------------
const indexRoutes = require("./routes/index");
const contactRoutes = require("./routes/contact");
const menuRoutes = require("./routes/menu");


app.use(indexRoutes);
app.use(contactRoutes);
app.use(menuRoutes);
// START/LISTEN//		
app.listen(port, () => { console.log(`Listening on port ${port}`); });
	
	
	