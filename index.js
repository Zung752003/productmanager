const express = require('express')
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const route = require('./routers/client/index.route');
const routeAdmin = require('./routers/admin/index.route');
const app = express();
const database = require("./config/database")

const systemConfig = require("./config/system");

require("dotenv").config();
const port = process.env.PORT;
database.connect();

app.use(methodOverride("_method"));
app.set("views", "./views");
app.set('view engine', 'pug');

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

//flash
app.use(cookieParser('blablalala'));
app.use(session({cookie:{maxAge: 60000} }));
app.use(flash());
//end flash



// App.locals Variables
app.locals.prefixAdmin =systemConfig.prefixAdmin;

app.use(express.static("public"));

//Router
route(app);
routeAdmin(app);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})