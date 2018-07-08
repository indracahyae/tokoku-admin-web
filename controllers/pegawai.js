const User = require('../models').User;

module.exports = {
  get: (req, res)=>{
    User.findAll()
    .then(datas => {
        res.render('pegawai',{datas:datas}); 
    }) 
    .catch(error => res.status(400).send(error));
  },
  delete: (req, res)=>{
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        res.redirect('/admin/pegawai');
    }) 
    .catch(error => res.status(400).send(error));
  },
  edit: (req,res)=>{
    User.findAll({
        where: {
          id: req.params.id
        }
    })
    .then(data => {
        res.render('pegawai-form',{data: data[0]});
    }) 
    .catch(error => res.status(400).send(error));
  },
  update: (req,res)=>{
    User.update({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        nama: req.body.nama,
        tlp: req.body.tlp,
        alamat: req.body.alamat,
        akses: req.body.akses
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(data => {
        res.redirect('/admin/pegawai');
      }) 
      .catch(error => res.status(400).send(error));
  },
  create: (req,res)=>{
    User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      nama: req.body.nama,
      tlp: req.body.tlp,
      alamat: req.body.alamat,
      akses: req.body.akses
    })
    .then(data => {
      res.redirect('/admin/pegawai');
    }) 
    .catch(error => res.status(400).send(error));
  }
};