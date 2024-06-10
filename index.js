import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let posts = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/list", (req, res) => {    
    res.render("list", { posts: posts });
});

app.post("/list", (req, res) => {
    posts.unshift(req.body);
    res.redirect('/list');
});

app.get("/add", (req, res) => {
    res.render("add");
});

app.get("/update/:id", (req, res) => {
    const id = req.params.id;
    const post = posts[id];
    res.render("update", { post: { ...post, id: id } });
});

app.post("/update/:id", (req, res) => {
    const id = req.params.id;
    const updatedPost = req.body;
    posts[id] = updatedPost;
    res.redirect('/list');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
