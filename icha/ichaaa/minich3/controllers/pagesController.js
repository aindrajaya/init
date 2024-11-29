const { Article } = require("../models");

//controllers/pagesController.js
exports.home = (req, res) => {
    const title = "Hello World",
        subTitle = "Welcome to the world!";

    res.render("index", { title, subTitle});
};

exports.articles = (req, res) => {
    Article.findAll().then(articles => {
        res.render("articles", { title:
            "Articles", articles });
    });
};