const CustomerM = require('../models').Customer;
let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  secure: true,
  port: 465,
  auth: {
    user: 'yourmail@gmail.com',
    pass: 'yourpass'
  }, 
});

module.exports = {
  get(req, res) {
    let result=[];
    CustomerM.findAll({
        where: {
          id: req.params.id
        }
    })
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
  updatePassword: (req,res)=>{
    CustomerM.update({
      password: req.body.password,
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(data => {
      res.send({
        status: true,
        message: data
      });
    }) 
    .catch(error => res.status(400).send(error));
  },
  lupaSandi: (req,res)=>{
    CustomerM.findAll({
      where: {
        email: req.params.email
      }
    })
    .then((data) => {
      // console.log(data[0].password)

      let pass = data[0].password;
      let nama = data[0].nama;
      // MAILER
      let mailOption = {
        from: 'indracahyae@gmail.com',
        to: req.params.email,
        subject: 'Password - TokoKu',
        text: `Nama: ${nama}. Gunakan Password ini untuk masuk: ${pass}`
      };
      transporter.sendMail(
        mailOption,
        (error,info) => {
          if(error){
            console.log('error');
            res.send('error');
          }else{
            console.log(info);
            return res.send({
              status: true,
              data: info
            });
          }
        }
      );
    }) 
    .catch(error => res.status(400).send(error));
  },
  create: (req,res)=>{
    CustomerM.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      nama: req.body.nama,
      alamat: req.body.alamat,
      id_kota: req.body.id_kota,
      tlp: req.body.tlp,
      poin: 0,
    })
    .then(data => {
      res.send({
        status: true,
        data: data
      });
    }) 
    .catch(error => res.status(400).send(error));
  },
  login(req, res) {
    CustomerM.findAll({
        where: {
          username: req.body.username,
          password: req.body.password
        }
    })
    .then(data => {
        res.send( data );
    }) 
    .catch(error => res.status(400).send(error));
  },
};

// change
