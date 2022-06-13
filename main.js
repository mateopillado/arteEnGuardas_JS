function init() {
    mostrarWppToast()
    darkMode()
    busquedaReciente()
    calcularBtn()
    buscadorButton()
    cotizacion()
}

// LLamado de api
async function cotizacion () {
    const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'
    const res = await fetch(url)
    const data = await res.json()
    mostrarCotizacion(data)
}

// mostrar api dolar 
function mostrarCotizacion(data) {
    const {nombre,compra,venta} = data[0].casa
    setTimeout(() => {
        Toastify({
            text: `  ${nombre} C: ${compra} - V: ${venta}`,
            duration: "infiniti",
            gravity: "bottom",
            position: "left",
            close: true,
            destination: 'https://www.dolarsi.com/',
            newWindow: true,
            className: "info_dolar",
            style: {
                left: '10px',
                padding: '5px',
                position: 'fixed',

            }
        }).showToast();
    }, 1500);
}

//dark mode
function darkMode() {
    const boton = document.querySelector('#botonMode')
    let color = localStorage.getItem('modo')
    if (!color) {
        color = 'white'
    } else if ((color === 'white')){
        document.body.setAttribute('class', 'whiteMODE')
    } else {
        document.body.setAttribute('class', 'darkMODE')
    }

    boton.addEventListener('click', () => {
        if (color === 'white') {
            color = 'black'
            document.body.setAttribute('class', 'darkMODE')
        } else {
            color = 'white'
            document.body.setAttribute('class', 'whiteMODE')
        }
        localStorage.setItem('modo', color)
    })
}

// mensaje de whatsapp
function mostrarWppToast() {
    setInterval(() => {
        Toastify({
            text: "!Comunicate con nosotros!",
            duration: 4500,
            gravity: 'bottom',
            position: 'right',
            destination: "https://web.whatsapp.com/",
            newWindow: true,
            className: 'info_wpp',
            style:{
                right: '10px',
                padding: '5px',
                position: 'fixed',
                background: 'green'
            }
        }).showToast();
    }, 10000);
}

//Calculador de mts
function calcularBtn() {
    let boton = document.querySelector('#calcularBtn')
    boton.addEventListener('click', () => {calcularMt2()})}

function errorMarca(error,text) {
    error.setAttribute('placeholder', 'CAMPO INCOMPLETO')
    setTimeout(() => {
        error.setAttribute('placeholder', text)
    }, 2000);
    error.setAttribute('class', 'errorMt2')
}

function calcularMt2() {
    let altoFlag,largoFlag,anchoFlag = false
    let ancho = parseFloat(document.getElementById('ancho').value)
    let largo = parseFloat(document.getElementById('largo').value)
    let alto1 = parseFloat(document.getElementById('alto').value)
    let alto2 = parseFloat(document.getElementById('alto_2').value)
    if (isNaN(ancho)) {
        let error = document.querySelector('#ancho')
        errorMarca(error,'ancho')
    } else { anchoFlag = true}
    if (isNaN(largo)) {
        let error = document.querySelector('#largo')
        errorMarca(error,'largo')
    } else { largoFlag = true}
    if (isNaN(alto1)) {
        let error = document.querySelector('#alto')
        errorMarca(error,'alto')
    } else { altoFlag = true}

    if(altoFlag && largoFlag && anchoFlag) {
        //calculo piso
        let piso = ancho * largo
        //calculo paredes
        let altos = 0
        if (isNaN(alto2)) {
            altos = alto1
        } else { altos = (alto2 + alto1) / 2}
        let paredes = (((largo * 2) + (ancho * 2)) * altos)
        //total
        let total = piso + paredes
        //muestra del html
        let padre = document.querySelector('#resultado')
        let resultado = document.createElement('p')
        padre.innerText= ''
        resultado.innerText = `Su pileta cuenta con una cantidad de ${total} Mt2 , el cual ${paredes} Mt2 corresponden a las paredes y el otro ${piso} Mt2 al piso.` 
        padre.appendChild(resultado)
    }
}

// error de busqueda
function errorMarca(error,text) {
    error.setAttribute('placeholder', 'CAMPO INCOMPLETO')
    setTimeout(() => {
        error.setAttribute('placeholder', text)
    }, 2000);
    error.setAttribute('class', 'errorMt2')
}

//BUSQUEDA POR COLOR
function buscarColor(valor) {
    let encontrado = materiales.filter((e) => e.color.toLowerCase().includes(valor))  
    console.log(encontrado)
    if (encontrado.length == 0) {
        Swal.fire({
            title: 'Error!',
            text: `No se encontro producto para el color ${valor}`,
            icon: 'error',
            confirmButtonText: 'Okey!'
        })
    } else{
        let mostrar = document.querySelector('#mostrarPadre')
        encontrado.forEach(element => {
            const {color,codigo,img,linea,proveedor,cant} = element
            const divColor = document.createElement('div')
            divColor.innerHTML = `<div class="card">
                                <div class="card-img">
                                    <img src="${img}" alt="" class="img_prod">
                                </div>
                                    <div class="card-info">
                                    <h5 class="text-body">Color: ${color}</h5>
                                    <p class="text-body">Codigo: ${codigo}</p>
                                    <p class="text-body">linea: ${linea}</p>
                                    <p class="text-body">Proveedor: ${proveedor}</p>
                                    <p class="text-body">Disponibilidad: ${cant}</p>
                                </div>
                            </div> `
            mostrar.appendChild(divColor)
            localStorage.removeItem('busquedaAnterior')
            localStorage.setItem('busquedaAnterior', JSON.stringify(encontrado))
        });}
}

//BUSQUEDA POR CANTIDAD
function buscarCantidad(valor) {
    if (valor <= 0) {
        Swal.fire({
            title: 'Error!',
            text: `No encontramos lo que esta buscando..!`,
            icon: 'error',
            confirmButtonText: 'Okey!'
        })
    } else {
        const mostrar = document.querySelector('#mostrarPadre')
        let anterior = []
        materiales.forEach((element) => {
            if (element.cant >= valor) {
                const {color,codigo,cant,img,linea,proveedor} = element
                const divCant = document.createElement('div')
                divCant.innerHTML = `<div class="card">
                                    <div class="card-img">
                                        <img src="${img}" alt="" class="img_prod">
                                    </div>
                                        <div class="card-info">
                                        <h5 class="text-body">Color: ${color}</h5>
                                        <p class="text-body">Codigo: ${codigo}</p>
                                        <p class="text-body">linea: ${linea}</p>
                                        <p class="text-body">Proveedor: ${proveedor}</p>
                                        <p class="text-body">Disponibilidad: ${cant}</p>
                                    </div>
                                </div> `
                mostrar.appendChild(divCant)
                anterior.push(element)
            }
            localStorage.removeItem('busquedaAnterior')
            localStorage.setItem('busquedaAnterior', JSON.stringify(anterior))
        })
    }
}

//BUSCADOR GENERAL
function buscadorButton() {
    const boton = document.querySelector('#buscadorButton')
    boton.addEventListener('click', () => {buscador()})}

function buscador() {
    const mostrar = document.querySelector('#mostrarPadre')
    mostrar.innerHTML=''
    const valor = document.getElementById('buscador').value.toLowerCase()
    console.log(valor)
    isNaN(valor) ? buscarColor(valor) : buscarCantidad(valor)
}

//local storagede la ultima busqueda
function busquedaReciente() {
    let busquedaAnterior = JSON.parse(localStorage.getItem('busquedaAnterior'))
    if (busquedaAnterior) {
        busquedaAnterior.forEach(element => {
            const {color,codigo,cant,img,linea,proveedor} = element
            const mostrar = document.querySelector('#mostrarPadre')
            const divColor = document.createElement('div')
            divColor.innerHTML = `<div class="card">
                                <div class="card-img">
                                    <img src="${img}" alt="" class="img_prod">
                                </div>
                                    <div class="card-info">
                                    <h5 class="text-body">Color: ${color}</h5>
                                    <p class="text-body">Codigo: ${codigo}</p>
                                    <p class="text-body">linea: ${linea}</p>
                                    <p class="text-body">Proveedor: ${proveedor}</p>
                                    <p class="text-body">Disponibilidad: ${cant}</p>
                                </div>
                            </div> `            
            mostrar.appendChild(divColor)
        });
    }
}

