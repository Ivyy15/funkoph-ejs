const express = require("express");

const app = express();

//to use public
app.use(express.static('public'))
app.use('/public', express.static('public'));



//register view engine
app.set('view engine', 'ejs')

//rendering every pages into ejs
app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/products', (req, res) => {
    res.render('products');
})

app.get('/featured', (req, res) => {
    res.render('featured');
})

app.get('/branches', (req, res) => {
    res.render('branches', { title: 'branches' });
})

app.get('/sign-in', (req, res) => {
    res.render('sign-in');
})

app.get('/sign-up', (req, res) => {
    res.render('sign-up');
})

app.get('/cart-empty', (req, res) => {
    res.render('cart-empty');
})

app.get('/cart-with-product', (req, res) => {
    res.render('cart-with-product');
})

app.get('/checkout', (req, res) => {
    res.render('checkout');
})

app.get('/shipping', (req, res) => {
    res.render('shipping');
})


app.listen(4000, () => {
    console.log("server is running at port 4000...");
})