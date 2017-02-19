'use strict';

const request = require('request');
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
      var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
      //LOG
      var payload = {
          text: "PARADERO REQUESTED \n "+paradero+" \n IP: "+ip
        };
        request({
          url: process.env.SLACK_APP_URL,
          method: "POST",
          json: true,
          body: payload
        }),(err, res, body) => {
          console.log(res);
      }

      res.render("tstgo",{
        services: services
      });

    }).catch(err => {
      res.send("error D:");
      console.log(err);
    });
  }
}