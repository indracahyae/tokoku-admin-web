const BarangM = require('../models').Barang;
const Suplier = require('../models').Suplier;
const Kategori = require('../models').Kategori;
const KeranjangM = require('../models').Keranjang;

module.exports = {

    getBarang(req, res){
      BarangM.findAll()
      .then(data => {
          res.send( data );
      }) 
      .catch(error => res.status(400).send(error));
    },
    // SELECT BARANG
    selectBarang: (req, res)=>{
        BarangM.findAll({
            where: { id: req.params.id },
            include: [ Suplier,Kategori ]
        })
        .then(datas => {
            res.send( datas[0] );
        }) 
        .catch(error => res.status(400).send(error));
    },

    // KERANJANG
    getKeranjang(req, res){
        KeranjangM.findAll({
            where: { id_customer: req.params.id },
        })
        .then(data => {
            res.send( data );
        }) 
        .catch(error => res.status(400).send(error));
    },
    addToKeranjang(req, res){
        let { id_customer, id_barang, jml_barang, total, catatan } = req.body;
        KeranjangM.create({
            id_customer, 
            id_barang,
            jml_barang,
            total,
            catatan
        })
        .then(data => {
            res.status(200).send( data );
        }) 
        .catch(error => res.status(400).send(error));
    }

};