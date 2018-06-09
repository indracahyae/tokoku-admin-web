const Barang = require('../models').Barang;
const Suplier = require('../models').Suplier;
const Kategori = require('../models').Kategori;
const path = require('path');

var multerFotoBarang = require('multer');
var storageFotoBarang = multerFotoBarang.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/barang')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + req.body.kode + '-' + Date.now() + path.extname(file.originalname))
  }
});
var uploadFotobarang = multerFotoBarang({
  storage: storageFotoBarang,
  limits:{fileSize: 2000000},
  fileFilter: function(req, file, cb){
    checkFile(file, cb);
  }
}).single('foto');
// Check FOTO
function checkFile(file, cb){
  console.log(file);
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if(mimetype && extname){
    return cb(null,true);
  } else {
    return cb(new Error('I don\'t have a clue!'));
  }
}

module.exports = {
  get: async(req, res)=>{
    let barang=[],kategori=[],suplier=[];
    await Barang.findAll({
        include: [ Suplier,Kategori ]
    })
    .then(datas => {
         barang = datas;
    }) 
    .catch(error => res.status(400).send(error));

    await Kategori.findAll()
    .then(datas => {
        kategori = datas; 
    }) 
    .catch(error => res.status(400).send(error));  
    
    await Suplier.findAll()
    .then(datas => {
        suplier = datas; 
    }) 
    .catch(error => res.status(400).send(error));  
    
    try {
        res.render('barang',{
            datas:barang,
            kategoris: kategori,
            supliers: suplier
        });
    } catch (error) {
        console.log(error);   
    }
  },
  delete: (req, res)=>{
    Barang.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(data => {
        res.redirect('/barang');
    }) 
    .catch(error => res.status(400).send(error));
  },
  edit: async(req,res)=>{
    let barang=[],kategori=[],suplier=[];
    await Barang.findAll({
        where: { id: req.params.id },
        include: [ Suplier,Kategori ]
    })
    .then(datas => {
         barang = datas[0];
    }) 
    .catch(error => res.status(400).send(error));

    await Kategori.findAll()
    .then(datas => {
        kategori = datas; 
    }) 
    .catch(error => res.status(400).send(error));  
    
    await Suplier.findAll()
    .then(datas => {
        suplier = datas; 
    }) 
    .catch(error => res.status(400).send(error));  
    
    try {
        res.render('barang-form',{
            data:barang,
            kategoris: kategori,
            supliers: suplier
        });
    } catch (error) {
        console.log(error);   
    }
  },
  update: (req,res)=>{
    // CEK FILE FOTO
    // DEL FOTO
    // UPLOAD FOTO

    // UPDATE
    Barang.update({
        kode: req.body.kode,
        nama: req.body.nama,
        harga: req.body.harga,
        stok: req.body.stok,
        deskripsi: req.body.deskripsi,
        diskon: req.body.diskon,
        id_suplier: req.body.suplier,
        id_kategori: req.body.kategori,
        // image: req.file.filename
      }, {
        where: {
          id: req.params.id
        }
      })
      .then(data => {
        res.redirect('/barang');
      }) 
      .catch(error => res.status(400).send(error));
  },
  create: (req,res)=>{
    uploadFotobarang(req, res, function (err) {
      if (err) { // An error occurred when uploading
        return res.send('Something wrong with your image');
      } else {
        if(req.file == undefined){
          return res.send('Please select Image');
        }
      }
      // console.log(req.file);
      // Everything went fine
      Barang.create({
        kode: req.body.kode,
        nama: req.body.nama,
        harga: req.body.harga,
        stok: req.body.stok,
        deskripsi: req.body.deskripsi,
        diskon: req.body.diskon,
        id_suplier: req.body.suplier,
        id_kategori: req.body.kategori,
        image: req.file.filename
      })
      .then(data => {
        res.redirect('/barang');
      }) 
      .catch(error => res.status(400).send(error));
    });
  }
};