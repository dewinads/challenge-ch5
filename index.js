const express = require("express");
const articles = require("./datauser")

const app = express();
const port = 3000;

const users = [];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});


app.get("/game", (req, res) => {
    res.render("game");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    users.push({
        username,
        email,
        password,
    });

    console.log(users);

    res.render("success");
});

app.get("/tampilkan-user", (req, res) => {
    res.json(users);
});

app.get("/api/articles", (req, res) => {
    res.status(200).json(articles);
})

app.get("/api/articles/:id", (req, res) => {
    const article = articles.find((e) => e.id === Number(req.params.id));
    res.status(200).json(article);
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
});