var router = require('express').Router();
const UserM = require('../models').User;

router.get('/', function(req, res) {
    res.redirect('/public/login');
  });

router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login', function(req, res) {
  // CEK LOGIN
  UserM.findAll({
    where: {
      username: req.body.username,
      password: req.body.password
    }
  })
  .then(data => {
      console.log(data[0]);
      if(data[0]){
        req.session.loginUser = true;
        req.session.dataLogin = data[0];
        res.redirect('/');
      }else{
        res.render('login',{wasLogin: true});
      }
  }) 
  .catch(error => res.status(400).send(error));
});

module.exports = router;
