const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
// application middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}
app.use(logger);
// built-in middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const router = require('./router')
app.get('/iniError', (req, res) => {
    iniError // Ini penyebab error!
})
app.use(router)

// Internal Server Error Handler
app.use(function(err, req, res, next) {
    console.error(err)
    res.status(500).json({
    status: 'fail',
    errors: err.message
    });
});
// 404 Handler
app.use(function(err, req, res, next) {
    res.status(404).json({
        status: 'fail',
        errors: 'Are you lost?'
    });
});

app.get('/', (req, res) => {
    res.send("<h1>Hello, Kevin Octaviano!</h1>");
});

app.get("/profile", (req, res) => { // cara runningnya http://localhost:3000/profile?dynamicName=ibun
    const nama = "Rudi";
    const dynamicName = req.query.dynamicName || "Void";
    res.render("profile", {
        nama,
        dynamicName
    });
});

app.get('/products', (req, res) => {
    res.json([
        "Apple",
        "Xiaomi",
        "Samsung",
        "One Plus"
    ]);
});

app.get('/orders', (req, res) => {
    res.json([
        {id: 1, paid: false, user_id: 1},
        {id: 2, paid: true, user_id: 2},
        {id: 3, paid: true, user_id: 3},
    ]);
});

app.listen(port, () => { console.log(`Listening at http://localhost:${port}`) });