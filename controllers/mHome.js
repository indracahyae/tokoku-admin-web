const BarangM = require('../models').Barang;

module.exports = {

    getBarang(req, res){
      BarangM.findAll()
      .then(data => {
          res.send( data );
      }) 
      .catch(error => res.status(400).send(error));
    },
    update: (req, res)=>{
      CustomerM.update({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        nama: req.body.nama,
        alamat: req.body.alamat,
        id_kota: req.body.id_kota,
        tlp: req.body.tlp,
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(data => {
        res.send({
          status: true,
          data: data
        });
      }) 
      .catch(error => res.status(400).send(error));
    },
    
};