const Ekspedisi = require('../models').Ekspedisi;

module.exports = {
  async get(req, res) {
    let result=[];
    await Ekspedisi.findAll()
        .then(datas => {
            result = datas; 
        }) 
        .catch(error => res.status(400).send(error));
    res.render('ekspedisi',{datas:result});
  },
  async delete(req, res) {
    await Ekspedisi.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/ekspedisi');
  },
  edit: (req,res)=>{
    Ekspedisi.findAll({
        where: {
          id: req.params.id
        }
    })
    .then(data => {
        res.render('ekspedisi-form',{data: data[0]});
        // res.status(200).send(data); 
    }) 
    .catch(error => res.status(400).send(error));
  },
  update: (req,res)=>{
    Ekspedisi.update({
        nama: req.body.nama,
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(data => {
        res.redirect('/ekspedisi');
      }) 
      .catch(error => res.status(400).send(error));
  },
  create: (req,res)=>{
    Ekspedisi.create({
      nama: req.body.nama,
    })
    .then(data => {
      res.redirect('/ekspedisi');
    }) 
    .catch(error => res.status(400).send(error));
  }
};