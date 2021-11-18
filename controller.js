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
    connection.query('SELECT * FROM mahasiswa WHERE id_mhs = ?', [id],
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

// mengubah data berdasarkan id
exports.ubahMhs = function (req, res) {
    var id = req.body.id_mhs;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mhs=?',
    [nim,nama,jurusan,id],
        function(error, rows, fields){
        if (error) {
            console.log(error);
        }else{
            response.ok("berhasil mengubah data", res);
        }
        });
};

// menghapus data berdasarkan id
exports.hapusMhs = function (req, res) {
    var id = req.body.id_mhs;

    connection.query('DELETE FROM mahasiswa WHERE id_mhs=?',
    [id],
        function(error, rows, fields){
        if (error) {
            console.log(error);
        }else{
            response.ok("berhasil menghapus data", res);
        }
        });
};

// menampilkan matkul group
exports.tampilMatkul = function (req, res) {
    var id = req.body.id_mhs;

    connection.query('SELECT mahasiswa.id_mhs, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matkul.matkul, matkul.sks FROM krs JOIN matkul JOIN mahasiswa WHERE krs.id_matkul = matkul.id_matkul AND krs.id_mhs = mahasiswa.id_mhs ORDER BY mahasiswa.id_mhs',
        function(error, rows, fields){
        if (error) {
            console.log(error);
        }else{
            response.oknested(rows, res);
        }
        });
};