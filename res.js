'use strict';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values
    };
     res.json(data);
     res.end();
};

// response untuk nested matkul
exports.oknested = function(values, res){
    // melakukan akumulasi
    const hasil = values.reduce((akumulasikan, item)=>{
        // menentukan keygroup
        if(akumulasikan[item.nama]){
            // membuat variabel group nama mhs
            const group = akumulasikan[item.nama];
            // cek jika isi array adalalah matkul
            if(Array.isArray(group.matkul)){
                group.matkul.push(item.matkul);
            }else{
                group.matkul = [group.matkul, item.matkul];
            }
        }else{
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status':200,
        'values':hasil
    };
     res.json(data);
     res.end();
};