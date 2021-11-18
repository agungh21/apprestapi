'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("App Rest Api Sedang berjalan", res);
};

// menampilkan semua data mahasiswa
exports.tampilSemuaMahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields){
        if (error) {
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};

// menampilkan data mhs berdasarkan id
exports.tampilMhsBerdasarkanId = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id = ?', [id],
        function(error, rows, fields){
        if (error) {
            console.log(error);
        }else{
            response.ok(rows, res);
        }
        });
    };
    
    // menambah data
    exports.tambahMhs = function (req, res) {
        var nim = req.body.nim;
        var nama = req.body.nama;
        var jurusan = req.body.jurusan;

        connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)',
        [nim,nama,jurusan],
            function(error, rows, fields){
            if (error) {
                console.log(error);
            }else{
                response.ok("berhasil menambahkan data", res);
            }
            });
};