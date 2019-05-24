const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const penggunaController=require('../controllers/pengguna');

const router = express.Router();

router.get('/tambah-pengguna',penggunaController.getTambahPengguna);

router.post('/tambah-pengguna', penggunaController.postTambahPengguna);

router.get('/',(req,res,next)=>{
  res.render('admin', {
    pageTitle: 'Halaman Admin',
    path: '/admin'
  });
});



module.exports = router;
