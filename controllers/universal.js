const ProvinsiM = require('../models').Provinsi;
const KotaM = require('../models').Kota;

module.exports = {
    getProvinsi(req, res) {
        ProvinsiM.findAll({
            order:[
                ['nama','ASC']
            ]
        })
        .then(data => {
            res.send( data );
        }) 
        .catch(error => res.status(400).send(error));
    },
    getKota(req, res) {
        KotaM.findAll({
            where:{
                id_provinsi: req.params.id_provinsi
            },
            order:[
                ['nama','ASC']
            ]
        })
        .then(data => {
            res.send( data );
        }) 
        .catch(error => res.status(400).send(error));
    },
};