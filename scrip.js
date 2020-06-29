function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imgmanha')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 14
    var minuto = data.getMinutes()
    //var minuto = 
        if (hora >= 0 && hora < 12 ) {
            img.src= './img/manha.png'
            document.body.style.background= '#d6c6b9'
        } else if (hora >= 12 && hora < 18) {
            img.src= './img/tarde.png'
            document.body.style.background ='#eb5530'
        } else {
            img.src= './img/noite.png'
            document.body.style.background ='#353768'
        }

        if (hora < 10) {
            var hora = '0'+hora
            if (minuto < 10) {
                var minuto ='0'+minuto
                msg.innerHTML = `Agora são ${hora}:${minuto}`
            } else {
                msg.innerHTML = `Agora são ${hora}:${minuto}`
            }
        } else {
            if (minuto < 10) {
                var minuto ='0'+minuto
                msg.innerHTML = `Agora são ${hora}:${minuto}`
            }else {
                msg.innerHTML = `Agora são ${hora}:${minuto}`
            }
        }
}
function iniciar() {
    setInterval(()=>{
        carregar()
    }, 1000);
}

