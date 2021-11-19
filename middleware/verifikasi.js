const jwt = require('jsonwebtoken');
const config = require('../config/secret');

function verifikasi(){
    return function(req, rest, next){
        var role = req.body.role;
        // cek auth header
        var tokenWithBorder = req.headers.authorization;
        if(tokenWithBorder){
            var token =  tokenWithBorder.split(' ')[1];
            // verifikasi
            jwt.verify(token, config.secret, function(err, decoded){
                if(err){
                    return restres.status(401).send({auth:false, message:'token tidak terdaftar'});
                }else{
                    if(role == 2){
                        req.auth = decoded;
                        next();
                    }else{
                        return rest.status(401).send({auth:false, message:'gagal mengotorasika role anda!'});
                    }
                }
            });
        }else{
            return rest.status(401).send({auth:false, message:'token tidak tersedia!'});
        }
    }
};

module.exports = verifikasi;