'use strict';

const tsapi = require('transantiago-client');

exports.index = (req, res) => {
	res.render('index');
}

exports.paradero = (req, res) => {
  var paradero = req.params.id || req.body.id;
  if(paradero != null){

    tsapi(paradero).then( r => {
      var ts = r;
      var services = r.avail;
      res.render("tstgo",{
        services: services
      });

    }).catch(err => {
      res.send("error D:");
      console.log(err);
    });
  }
}