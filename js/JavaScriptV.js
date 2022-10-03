/* ----------------------------------------------------- CRUD VENTAS -------------------------------------------------- */


//Objeto de Ventas
const venta = [{
    identificacion: 'A10', cliente: 'Maria Caceres', producto: 'Bandeja Paisa', valorUnidad: 12000, cantidad: 2, subtotal: 24000, neto: 28500
},
{
    identificacion: 'A11', cliente: 'Pedro Novoa', producto: 'Creep', valorUnidad: 13000, cantidad: 1, subtotal: 1300, neto: 15400
},
{
    identificacion: 'A12', cliente: 'Lina Torres', producto: 'Copa de Helado', valorUnidad: 10000, cantidad: 4, subtotal: 40000, neto: 476000
}
]

//Agregar la informacion en una tabla
function agregarElementos1() {
    var lista = document.getElementById('t-ventas');
    venta.forEach(function (element, index) {
        document.getElementById('t-ventas').insertRow(-1).innerHTML = '<td>' + element.identificacion + '</td>' + '<td>' + element.cliente + '</td>' + '<td>' + element.producto + '</td>' + '<td>' + element.valorUnidad + '</td>' + '<td>' + element.cantidad + '</td>' + '<td>' + element.subtotal + '</td>' + '<td>' + element.neto + '</td>'
    })
}


//Creacion de las ventas
function agregarVenta() {
    var id = document.getElementById('id').value;
    var client = document.getElementById('cliente').value;
    var product = document.getElementById('producto').value;
    var vlrUnidad = document.getElementById('valorUnidad').value;
    var cant = document.getElementById('cantidad').value;
    var subt = document.getElementById('subtotal').value;
    var vlrNeto = document.getElementById('neto').value;

    document.getElementById('t-ventas').insertRow(-1).innerHTML = '<td>' + id + '</td>' + '<td>' + client + '</td>' + '<td>' + product + '</td>' + '<td>' + vlrUnidad + '</td>' + '<td>' + cant + '</td>' + '<td>' + subt + '</td>' + '<td>' + vlrNeto + '</td>'
}
