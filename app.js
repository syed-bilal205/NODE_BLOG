require("dotenv").config();
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const methodOverRide = require("method-override");
const blogRouter = require("./server/routes/main");
const adminRouter = require("./server/routes/admin");
const connectDb = require("./server/config/db");
const cookieParser = require("cookie-parser");
const mongoStore = require("connect-mongo");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 4000;

// connect to database
connectDb();

// Public folder coz it will handle CSS,JS,Images
app.use(express.static("public"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverRide("_method"));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: mongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
  })
);
// Template Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

//Routes
app.use("/", blogRouter);
app.use("/", adminRouter);

app.listen(PORT, () => {
  console.log(`server started at the port  http://localhost:${PORT}/`);
});
