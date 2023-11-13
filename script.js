function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var dados = document.getElementById('dados')

    if(inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0){
        res.innerHTML = 'Impossível contar'
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0){
            alert('Impossível contar com zero mas te ajudamos com o passo um.')
            p = 1
        }

        if(i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} 👉`
            }
        }else{
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} 👉`
            }
        }

        
        res.innerHTML += `🏁`
    }
    
}