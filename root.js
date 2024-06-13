var bodyParser      = require("body-parser"),
	express         = require("express"),
	faker 			= require("faker"),
	app             = express();
	

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
	res.render("homepage");
});

app.get("/projects", function(req,res){
	res.render("projectPage");
});

app.get("/about", function(req,res){
	res.render("aboutPage");
});























app.listen("3000", "localhost", function(){
	console.log("Portfolio server as being hosted");
});
