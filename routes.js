'use strict';

module.exports = function(app){
    var myjson = require('./controller');

    app.route('/')
        .get(myjson.index);

    app.route('/mhs')
        .get(myjson.tampilSemuaMahasiswa);

    app.route('/mhs/:id')
        .get(myjson.tampilMhsBerdasarkanId);

    app.route('/tambah')
        .post(myjson.tambahMhs);

    app.route('/ubah')
        .put(myjson.ubahMhs);

    app.route('/hapus')
        .delete(myjson.hapusMhs);
}