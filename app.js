//Array para almacenar los nombres.
let listaAmigos = []; 


//Funcion para agregar aamigos.
function agregarAmigo() {
    let amigos = document.getElementById("amigo").value

    //Condicion para evitar que se agregue un espacio en blanco al array.
    if (amigos == '') {
        alert('Por favor, ingrese un nombre valido');
        limpiarCaja();
        return amigos;
    } 

    //Condicion para evitar que se repitan los nombre de la lista.
    if( listaAmigos.includes(amigos)) {
        alert(`El nombre "${amigos}" ya está en la lista`)
        limpiarCaja();
    } else { //Agragando a la lista los nombres digitados.
        listaAmigos.push(amigos) 
        limpiarCaja();
        mostrarLista(listaAmigos);
    } 

}

//Funcion para limpiar la caja cada vez que se añadan nombres a la lista.
function limpiarCaja() {
   let contenidoCaja = document.querySelector("#amigo");
    contenidoCaja.value = '';
}

//Funcion para actualizar la lita de amigos en la interfaz.
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ''; //Esto para limpiar cualquier contenido previo que haya tenido la lista.

    //Recorriendo el array con un ciclo for para mostrar cada nombre añadido en la interfaz.
    for (let i = 0; i <listaAmigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }

}

//Funcion para sortear los amigos de la lista.
function sortearAmigo() {
         
    if(listaAmigos.length == "") {
       alert('No hay amigos disponibles para sortear. Por favor, agregue al menos 1')
       return; //Validar que haya amigos a los que sortear.
    }

    //Generar un indice aleatorio.
    let sorteo = Math.floor(Math.random() * listaAmigos.length);

    //Obtener el nombre sorteado.
    const amigoAleatorio = listaAmigos[sorteo];

    //Mostrar el nombre sorteado en la interfaz.
    let mostrarAmigo = document.getElementById('resultado')
    mostrarAmigo.innerHTML = `El amigo Secreto es: <strong>${amigoAleatorio}<strong>`;

}
