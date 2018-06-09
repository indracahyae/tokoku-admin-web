const Suplier = require('../models').Suplier;

module.exports = {
  get: (req, res)=>{
    Suplier.findAll()
    .then(datas => {
        res.render('suplier',{datas:datas}); 
    }) 
    .catch(error => res.status(400).send(error));
  },
  delete: (req, res)=>{
    Suplier.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        res.redirect('/suplier');
    }) 
    .catch(error => res.status(400).send(error));
  },
  edit: (req,res)=>{
    Suplier.findAll({
        where: {
          id: req.params.id
        }
    })
    .then(data => {
        res.render('suplier-form',{data: data[0]});
    }) 
    .catch(error => res.status(400).send(error));
  },
  update: (req,res)=>{
    Suplier.update({
        nama: req.body.nama,
        alamat: req.body.alamat,
        tlp: req.body.tlp,
        keterangan: req.body.keterangan,
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(data => {
        res.redirect('/suplier');
      }) 
      .catch(error => res.status(400).send(error));
  },
  create: (req,res)=>{
    Suplier.create({
      nama: req.body.nama,
      alamat: req.body.alamat,
      tlp: req.body.tlp,
      keterangan: req.body.keterangan,
    })
    .then(data => {
      res.redirect('/suplier');
    }) 
    .catch(error => res.status(400).send(error));
  }
};