//Objeto de Clientes
const cliente = [{
    identificacion: '1010', nombres: 'Fabio', apellidos: 'Parra Toro', telefono: '4567890', ciudad: 'Pereira', correo: 'fp45@hotmail.com', direccion: 'Cra 45 # 56-78'
},
{
    identificacion: '1111', nombres: 'Anya', apellidos: 'Loyd Mayo', telefono: '4563423', ciudad: 'Medellín', correo: 'any23@gmail.com', direccion: 'Cll 43A # 45-67'
},
{
    identificacion: '1212', nombres: 'Monica', apellidos: 'Galindo', telefono: '5456778', ciudad: 'Cali', correo: 'monik@hotmail.es', direccion: 'Urbanizacion manantiales'
}
]

//Agregar la informacion en una tabla
function agregarElementos() {
    var lista = document.getElementById('t-clientes');
    cliente.forEach(function (element, index) {
        document.getElementById('t-clientes').insertRow(-1).innerHTML = '<td>' + element.identificacion + '</td>' + '<td>' + element.nombres + '</td>' + '<td>' + element.apellidos + '</td>' + '<td>' + element.telefono + '</td>' + '<td>' + element.ciudad + '</td>' + '<td>' + element.correo + '</td>' + '<td>' + element.direccion + '</td>'
    })
}


//Creacion de los clientes
function agregarCliente() {
    var dni = document.getElementById('dni').value;
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var tel = document.getElementById('telefono').value;
    var city = document.getElementById('ciudad').value;
    var mail = document.getElementById('correo').value;
    var dir = document.getElementById('direccion').value;

    document.getElementById('t-clientes').insertRow(-1).innerHTML = '<td>' + dni + '</td>' + '<td>' + nombres + '</td>' + '<td>' + apellidos + '</td>' + '<td>' + tel + '</td>' + '<td>' + city + '</td>' + '<td>' + mail + '</td>' + '<td>' + dir + '</td>'

    limpiarCampos()
}


//Buscar los clientes
function buscarCliente() {
    var dni = document.getElementById('dni').value;
    var nombres = document.getElementById('nombres');
    var apellidos = document.getElementById('apellidos');
    var tel = document.getElementById('telefono');
    var city = document.getElementById('ciudad');
    var mail = document.getElementById('correo');
    var dir = document.getElementById('direccion');
    for (let item in cliente) {
        if (dni == cliente[item].identificacion) {
            dni.value = cliente[item].identificacion;
            nombres.value = cliente[item].nombres;
            apellidos.value = cliente[item].apellidos;
            tel.value = cliente[item].telefono;
            city.value = cliente[item].ciudad;
            mail.value = cliente[item].correo;
            dir.value = cliente[item].direccion;
            break;
        }
        else {
            alert('Cliente no encontrado')
            limpiarCampos();
        }
    }
}


//Actualizar Clientes
function actualizarCliente() {
    var dni = document.getElementById('dni').value;

    if (dni == '') {
        alert('Cliente no encontrado');
    }
    else {
        var nombres = document.getElementById('nombres').value;
        var apellidos = document.getElementById('apellidos').value;
        var tel = document.getElementById('telefono').value;
        var city = document.getElementById('ciudad').value;
        var mail = document.getElementById('correo').value;
        var dir = document.getElementById('direccion').value;

        for (var i = 1, row; row = document.getElementById("t-clientes").rows[i]; i++) {

            for (var j = 0, col; col = row.cells[j]; j++) {
                if (dni == col.innerText) {
                    document.getElementById("t-clientes").deleteRow(i)
                    document.getElementById("t-clientes").insertRow(-1).innerHTML = '<td>' + dni + '</td>' + '<td>' + nombres + '</td>' + '<td>' + apellidos + '</td>' + '<td>' + tel + '</td>' + '<td>' + city + '</td>' + '<td>' + mail + '</td>' + '<td>' + dir + '</td>'
                    document.getElementById('dni').value = "";
                    break;
                }
            }
        }

        elementIndex = cliente.findIndex(obj => obj.identificacion == dni);
        cliente[elementIndex].nombres = nombres;
        cliente[elementIndex].apellidos = apellidos;
        cliente[elementIndex].telefono = tel;
        cliente[elementIndex].ciudad = city;
        cliente[elementIndex].correo = mail;
        cliente[elementIndex].direccion = dir;

        alert('Cliente actualizado exitosamente')
        limpiarCampos();
    }
}


//Eliminar clientes
function eliminarCliente() {
    var dni = document.getElementById('dni').value;

    for (var i = 1, row; row = document.getElementById("t-clientes").rows[i]; i++) {

        for (var j = 0, col; col = row.cells[j]; j++) {
            if (dni == col.innerText) {

                document.getElementById("t-clientes").deleteRow(i)
                document.getElementById('dni').value = ""
                break;
            }

        }
    }

    for (let item in cliente) {
        if (dni == cliente[item].identificacion) {
            delete cliente[item].identificacion;
            delete cliente[item].nombres;
            delete cliente[item].apellidos;
            delete cliente[item].telefono;
            delete cliente[item].ciudad;
            delete cliente[item].correo;
            delete cliente[item].direccion;
            alert('Cliente ' + dni + ' eliminado exitosamente')
            limpiarCampos();
            break;
        }
        else {
            //alert('Cliente no encontrado');
            continue;
        }
    }
}


//Limpiar los campos
function limpiarCampos() {
    document.getElementById('dni').value = ""
    document.getElementById('nombres').value = ""
    document.getElementById('apellidos').value = ""
    document.getElementById('telefono').value = ""
    document.getElementById('ciudad').value = ""
    document.getElementById('correo').value = ""
    document.getElementById('direccion').value = ""
}


