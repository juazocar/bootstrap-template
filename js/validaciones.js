function login(){ 
    e.preventDefault();var usuario  = document.getElementById("exampleInputEmail1").value;var password = document.getElementById("exampleInputPassword1").value;
    
// alert("Usuario: "+usuario+", Password: "+password);

    console.log("Mensaje desde la consola: ");console.log("Usuario: "+usuario+", Password: "+password);

    if(usuario == ''){
        alert("El email no puede ir vacío");
    } else {
        document.getElementById("myForm").submit();
    }
      
}
