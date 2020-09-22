(function(){
    console.log('ready');

    document.getElementById('combo').onchange = function(e){
        var value = e.target.value;
        // console.log('changes', {e, value});
        let txt = `Halo, selamat datang. Saya Teguh Setiawan, tuan rumah blog ini. jika
        berkenan, tolong tinggalkan kesan-kesan untuk saya melalui form di
        bawah ini. terima kasih.`;

        if(value == 'biodata') {
        }
        
        else if(value == 'hobi') {
            txt = `Hobi saya meliputi, berdiam diri di kamar dalam jangka waktu yang lama.
            memandangi hape berjam - jam. dan bernafas`;
        }

        else {
            txt = `Saya selalu bercita - cita jadi anak yang baik. bisa dibanggakan. dan masuk
            surga jalur prestasi. semoga cita - cita saya terwujud.`;
        }
        
        document.getElementById('article_1').innerText = txt;
    }
})();