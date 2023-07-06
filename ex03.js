function enviar(){
    var txtinicio = document.getElementsByName('inicio')[0]
    var inicio = Number(txtinicio.value)
    var txtfim = document.getElementsByName('fim')[0]
    var fim = Number(txtfim.value)
    var txtpasso = document.getElementsByName('passo')[0]
    var passo = Number(txtpasso.value)
    var resultado = document.getElementsByName('resultado')[0]
    var x = inicio

        if(passo == 0){
            window.alert('Erro! insira um valor válido.')
        }else if(passo == null){
            window.alert('Erro! insira um valor válido.')
        }
        else if(fim == null){
            window.alert('Erro! insira um valor válido.')
        }else if(fim == 0){
            window.alert('Erro! insira um valor válido.')
        }else if(inicio == null){
            window.alert('Erro! insira um valor válido.')
        }else if(inicio > fim){
            window.alert('Erro! O seu número inicial não pode ser maior que o número final.')
        }else if(fim < passo){
            window.alert('Erro! O seu número final não pode ser maior que o passo.')
        }else{
            while(inicio <= fim){
                resultado.innerHTML += `👉 ${inicio} `
                inicio+=passo 
                
        }
      
       
    }
       
       
    

}