const UserM = require('../models').User;

module.exports = {
  get(req, res) {
    UserM.findAll({
        where: {
          id: req.session.dataLogin.id
        }
    })
    .then(data => {
        res.render('myProfile',{data: data[0]});
    }) 
    .catch(error => res.status(400).send(error));
  },
  update: (req,res)=>{
    let {
      nama,username,password,
      email,tlp,alamat} = req.body;

    UserM.update({
        nama: nama,
        username: username,
        password: password,
        email: email,
        tlp: tlp,
        alamat: alamat,
      }, {
        where: {
          id: req.body.id
        }
      })
      .then(data => {
        res.redirect('/myprofile');
      }) 
      .catch(error => res.status(400).send(error));
  },
};