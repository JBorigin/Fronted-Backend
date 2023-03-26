function captura(){
    let nom = document.getElementById("nF").value;
    let ubi = document.getElementById("uF").value;
    let tel = document.getElementById("tF").value;

    document.getElementById("nombreF").innerHTML = "Nombre: " + nom;
    document.getElementById("ubicaF").innerHTML = "Ubicacion: " + ubi;
    document.getElementById("telefonoF").innerHTML = "Telefono: " + tel;
}