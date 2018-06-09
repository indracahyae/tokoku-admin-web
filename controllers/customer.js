const Customer = require('../models').Customer;
const Kota = require('../models').Kota;
const Prov = require('../models').Provinsi;

module.exports = {
  async get(req, res) {
    let result=[];
    await Customer.findAll({
        include: [ 
            {
                model: Kota,
                include: [ Prov ]
            } 
        ]
    })
    .then(datas => {
        result = datas; 
        console.log(datas);
    }) 
    .catch(error => res.status(400).send(error));
    res.render('customer',{datas:result});
  },
  async delete(req, res) {
    await Customer.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/customer');
  },
};