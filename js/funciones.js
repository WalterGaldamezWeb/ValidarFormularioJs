importScripts(alertify.min.js);

function validarForma(forma){
    
    var usuario = forma.usuario;

    if (usuario.value == "" || usuario.value == "Escribir Usuario"){
        alertify.alert('Atención','Debe Ingresar un nombre de usuario' ,function(){alertify.success('ok')});
        usuario.focus();
        usuario.select();
        return false;
    }
    
    var password = forma.password;
    if (password.value == "" || password.value.length < 3){
        alertify.alert('Atención','La contreseña debe tener 3 caracteres como minimo' ,function(){alertify.success('ok')});        
        usuario.focus();
        usuario.select();
        return false;
    }
    
    var tecnologias = forma.tecnologias;
    var checkboxSeleccionado = false;
    
    for(i=0; i < tecnologias.length; i++) {
        if (tecnologias[i].checked) {
            checkboxSeleccionado=true;            
        }       
    }
    
     if (!checkboxSeleccionado){
        alertify.alert('Atención','Debe Seleccionar un Lenguaje de Programación' ,function(){alertify.success('ok')});                    
            return false;
        }
    
    var genero = forma.genero;
    var radioSeleccionado = false;
    
    for(i=0; i < genero.length; i++) {
        if (genero[i].checked) {
            radioSeleccionado= true;            
        }        
    }
    if (!radioSeleccionado){
        alertify.alert('Atención','Debe Seleccionar un Género' ,function(){alertify.success('ok')});        
            return false;
        }
    
    var ocupacion = forma.profesion;
    
    if (ocupacion.value == "") {
        alertify.alert('Atención','Debe seleccionar una Profesión' ,function(){alertify.success('ok')});
        return false;
    }       
    
    
    alert('Enviando Datos...');
    return true;
    
}


