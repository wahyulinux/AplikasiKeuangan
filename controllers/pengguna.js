const pengguna=[];

exports.getTambahPengguna=(req,res,next)=>{
  res.render('tambah-pengguna', {
    pageTitle: 'Pengguna',
    path: '/admin/tambah-pengguna'
  });
};

exports.postTambahPengguna=(req,res,next)=>{
  pengguna.push({title: req.body.nama});
  res.redirect('/pengguna');
};
