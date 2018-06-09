var express = require('express');
var router = express.Router();

var UserC = require('../controllers').user;
var EkspedisiC = require('../controllers').ekspedisi;
var SuplierC = require('../controllers').suplier;
var PegawaiC = require('../controllers').pegawai;
var BarangC = require('../controllers').barang;
var CustomerC = require('../controllers').customer;
var MyProfileC = require('../controllers').profile;

// PENJUALAN
router.get('/', function(req, res) {
    res.render('index');
});

// MY PROFILE
router.get('/myprofile',MyProfileC.get);
router.post('/myprofile/update',MyProfileC.update);

// ekspedisi
router.get('/ekspedisi',EkspedisiC.get);
router.get('/ekspedisi/del-:id',EkspedisiC.delete);
router.get('/ekspedisi/edit-:id',EkspedisiC.edit);
router.post('/ekspedisi/:id',EkspedisiC.update);
router.post('/ekspedisi',EkspedisiC.create);

// suplier
router.get('/suplier',SuplierC.get);
router.post('/suplier',SuplierC.create);
router.get('/suplier/del-:id',SuplierC.delete);
router.get('/suplier/edit-:id',SuplierC.edit);
router.post('/suplier/:id',SuplierC.update);

// users OR pegawai
router.get('/pegawai',PegawaiC.get);
router.post('/pegawai',PegawaiC.create);
router.get('/pegawai/del-:id',PegawaiC.delete);
router.get('/pegawai/edit-:id',PegawaiC.edit);
router.post('/pegawai/:id',PegawaiC.update);

//  BARANG CRUD
router.get('/barang',BarangC.get);
router.get('/barang/del-:id',BarangC.delete);
router.post('/barang', BarangC.create);
router.get('/barang/edit-:id',BarangC.edit);
router.post('/barang/:id',BarangC.update);

// CUSTOMER RD
router.get('/customer',CustomerC.get);
router.get('/customer/del-:id',CustomerC.delete);

module.exports = router;

// router.use('/*', function(req, res, next) { //this will reject any /api/nonexistant routes
//     let inComingUrl = req.baseUrl;
    
//     // FILTER INCOMING URL WITH REGISTERED URL
//     let registeredRoute = [];
//     router.stack.filter(r => r.route )
//       .map(r => 
//         registeredRoute.push(r.route.path)
//       );
//     let statusUrl = registeredRoute.filter(item => inComingUrl==item);
//     // console.log(registeredRoute);
//     if(statusUrl.length==0){ // IF url notFound
//       return next(new Error(404));
//     }

//     //  RULE
//     // WHEN EVERYTHING FINE
//     console.log('admin middleware');
//     // CEK LOGIN

//     next();
// });

// router.get('/session', function(req, res) {
//   if(req.session.page_views){
//       req.session.page_views++;
//       res.send("You visited this page " + req.session.page_views + " times");
//   } else {
//       req.session.page_views = 1;
//       res.send("Welcome to this page for the first time! ");
//   }
// });
