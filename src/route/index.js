const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    layout: 'default',
    title: 'Home page',
    text: 'Click me',
  })
})
router.get('/product', function (req, res) {
  res.render('product', {
    product: {
      title: 'Home page',
      name: 'Корм для риб' ,
      price: 72.5 ,
      img: 'fish.png' ,
      isAvailable: false,
    },
  })
})
router.get('/user', function (req, res) {
  res.render('userinfo', {
    user: {
      name: "Іван",
      email: "ivan@example.com",
      phone: "123-456-7890" ,
      balance: 0
    },
  })
})
module.exports = router
