exports.UI = class UI {
  constructor(port, dbname, username, password) {
		const defaultUI = {
		_port: 1447,
    _dbname: "db.json",
    _username: "admin",
    _password:  "1234"
		}
    this._port = port || 1447;
    this._dbname = dbname || "db.json";
    this._username = username || "admin";
    this._password = password || "1234";
		if((this._username == defaultUI._username ) && (this._password == defaultUI._password )) {
			console.log("Please set a username and password to secure your database! (optional)")
		}
  }
  run() {
    const low = require("lowdb");
    const FileSync = require("lowdb/adapters/FileSync");
    const adapter = new FileSync(this._dbname);
    const db = low(adapter);
    exports._data = db.getState();
    exports._info = this;
    const app = require("express")();
    const bodyParser = require("body-parser");
    const ejs = require("ejs");
    const session = require("express-session");
    app.engine("ejs", ejs.__express);
    app.set("views", __dirname+"/views")
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false, cookie: { maxAge: 86400000 }}))
    app.use(require("./routes/index.js"));
    app.listen(this._port, () => console.log("UI is running on port:", this._port));
  }
}

