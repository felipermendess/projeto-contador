function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var salto = document.getElementById('salto')
    var res = document.getElementById('res')
    var dados = document.getElementById('dados')

    if(inicio.value.length === 0 || fim.value.length === 0 || salto.value.length === 0){
        res.innerHTML = 'Impossível contar'
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var s = Number(salto.value)

        if(s <= 0){
            alert('Impossível contar com salto zero mas te ajudamos com o salto de um em um.')
            s = 1
        }

        if(i < f){
            for(var c = i; c <= f; c += s){
                res.innerHTML += ` ${c} 👉`
            }
        }else{
            for(var c = i; c >= f; c -= s){
                res.innerHTML += ` ${c} 👉`
            }
        }

        
        res.innerHTML += `🏁`
    }
    
}