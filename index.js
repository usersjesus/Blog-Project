import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/list", (req, res) => {
    res.render("list.ejs");
});

app.post("/list", (req, res) => {
    console.log(req.body);
    res.redirect("/list");
});

app.get("/add", (req, res) => {
    res.render("add.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
