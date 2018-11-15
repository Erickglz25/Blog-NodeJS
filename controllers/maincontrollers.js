var Pubs = require('../models/publication');

exports._renderhome = function(req,res){
  Pubs.find(function(error, pubList) {
    if (error) {
      res.send(500,error.message);
    }
    res.render('index',{pubList: pubList});
  });
};

/*
var pub = new Pubs({
  title: 'ab',
  subtitle: 'b',
  author:'l'
});

pub.save(function(error,result){
  if (error) {
    console.log(error);
    res.send(500,error.message);
  }
    res.render('index');
});*/
