//Preentrega Adidas
//nc=numero de cuenta

alert("Buen dia, Bienvenido a Adidas");

class Cliente {
    constructor (nombre, apellido, nc){ 
        this.nombre = nombre;
        this.apellido = apellido;
        this.nc = nc;
    }
}

const clienteLucas = new Cliente ("Lucas", "Castro", 2020);
const clienteAurelia = new Cliente ("Aurelia", "Castro", 2021);
const clienteGustavo = new Cliente ("Gustavo", "Castro", 2022);
const clienteNicolas = new Cliente ("Nicolas", "Castro", 2023);

const arrayClientes = [clienteLucas, clienteAurelia, clienteGustavo, clienteNicolas];

console.log(arrayClientes);

function menu(){
    let opcion = parseInt(prompt("Ingrese la operacion que desea realizar: 1)Dar de alta al cliente  2)Baja de cliente  3)Modificar datos del cliente  4)Consultar Cliente  5)Salir"));
    return opcion;
}

//opcion 1 alta de cliente

function altaCliente(){
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let nc = parseInt(prompt("Ingrese el numero de cueta del cliente: "));
    let cliente = new Cliente(nombre, apellido, nc);
    arrayClientes.push(cliente); 
    console.log(arrayClientes);
}



//opcion 2 dar de baja al cliente

function bajaCliente() {
    let nc = parseInt(prompt("Ingrese numero de cuenta del cliente que quiere dar de baja: "));
    let cliente = arrayClientes.find(cliente => cliente.nc === nc);
    let indice = arrayClientes.indexOf(cliente);
    arrayClientes.splice(indice , 1);
    console.log(arrayClientes);
}


//opcion 3 Modificar cliente 

function modificarCliente(){
    let nc = parseInt(prompt("Ingrese numero de cuenta del cliente que quiere modificar: "));
    let cliente = arrayClientes.find(cliente => cliente.nc === nc);
    let indice = arrayClientes.indexOf(cliente);


    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let clienteModificado = new Cliente(nombre, apellido, nc);


    arrayClientes.splice(indice, 1, clienteModificado);
    console.log(arrayClientes);
}


//opcion 4 ver cliente

function verCliente(){
    let nc= parseInt(prompt("Ingrese el numero de cuenta del cliente que quiere ver: "));
    let cliente = arrayClientes.find(cliente => cliente.nc === nc);
    console.log(cliente);
}



// opcion 5 salir

function salir(){
    alert("Gracias por vistarnos, hasta la proxima! ");
}


let opcion = menu();

switch(opcion){
    case 1:
        altaCliente();
        break;
    case 2:
        bajaCliente();
        break;
    case 3:
        modificarCliente();
        break;
    case 4:
        verCliente();
        break;
    case 5:
        salir();
        break;    
    default:
        alert("No existe es opcion");
        break;

}