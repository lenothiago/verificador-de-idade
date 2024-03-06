function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','img/bebe-menino.png')
            } else if (idade < 21) {
                img.setAttribute('src','img/jovem-homem.png')
            } else if (idade < 50) {
                img.setAttribute('src','img/homem-adulto.png')
            } else {
                img.setAttribute('src','img/idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','img/bebe-menina.png')
            } else if (idade < 21) {
                img.setAttribute('src','img/jovem-mulher.png')
            } else if (idade < 50) {
                img.setAttribute('src','img/mulher-adulta.png')
            } else {
                img.setAttribute('src','img/idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}