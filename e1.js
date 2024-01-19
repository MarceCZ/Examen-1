let car = "X"
let listaCasilla = []

function crearCasilla() {
    for(let i=0;i<8;i++){
        for(let k=0;k<8;k++){
            let casilla = {
                simbolo : "",
                mostrandoSimbolo : false
            }
            listaCasilla.push(casilla)
        }
    }
}

function devolverCasilla(row,col) {
    const pos = (col*8)+row
    return listaCasilla[pos]
}

function ponerSimboloCasilla() {
    for(let i=0;i<8;i++){
        for(let k=0;k<8;k++){
            const but = document.getElementById(i+";"+k)
            const simb = devolverCasilla(i,k)
            if(simb.mostrandoSimbolo){
                but.innerHTML = simb.simbolo
            }
            else{
                but.innerHTML = ""
            }
        }
    }
}

//esto sirve para el espejo a la derecha
function ponerSimboloCasilla2() {
    for(let i=0;i<8;i++){
        for(let k=0;k<8;k++){
            const but = document.getElementById("d"+k+";"+i)
            const simb = devolverCasilla(k,i)
            if(simb.mostrandoSimbolo){
                but.innerHTML = simb.simbolo
            }
            else{
                but.innerHTML = ""
            }
        }
    }
}

function casillaOnClick(row,col){
    const seleccion = devolverCasilla(row,col)

    //marcar la casilla seleccionada
    seleccion.simbolo = car
    seleccion.mostrandoSimbolo = true
    ponerSimboloCasilla()

    //pintar adyacentes validos
    pintaradyacentes(row,col)

    //pintar espejo
    pintarespejo(row,col)

    //despintar
    setTimeout(function(){
        despintarCasilla()
    },1000)
}

function pintaradyacentes(row,col){
    const der = col + 1
    const izq = col - 1
    const arriba = row - 1
    const abajo = row + 1

    if(der>=0 && der<8){
        const seleccion = devolverCasilla(row,der)
        seleccion.simbolo = car
        seleccion.mostrandoSimbolo = true
    }
    if(izq>=0 && izq<8){
        const seleccion = devolverCasilla(row,izq)
        seleccion.simbolo = car
        seleccion.mostrandoSimbolo = true
    }
    if(arriba>=0 && arriba<8){
        const seleccion = devolverCasilla(arriba,col)
        seleccion.simbolo = car
        seleccion.mostrandoSimbolo = true
    }
    if(abajo>=0 && abajo<8){
        const seleccion = devolverCasilla(abajo,col)
        seleccion.simbolo = car
        seleccion.mostrandoSimbolo = true
    }
    ponerSimboloCasilla()
}

function pintaradyacentes2(row,col){
    const der = col + 1
    const izq = col - 1
    const arriba = row - 1
    const abajo = row + 1

    if(der>=0 && der<8){
        const seleccion = devolverCasilla(row,der)
        seleccion.simbolo = car
        seleccion.mostrandoSimbolo = true
    }
    if(izq>=0 && izq<8){
        const seleccion = devolverCasilla(row,izq)
        seleccion.simbolo = car
        seleccion.mostrandoSimbolo = true
    }
    if(arriba>=0 && arriba<8){
        const seleccion = devolverCasilla(arriba,col)
        seleccion.simbolo = car
        seleccion.mostrandoSimbolo = true
    }
    if(abajo>=0 && abajo<8){
        const seleccion = devolverCasilla(abajo,col)
        seleccion.simbolo = car
        seleccion.mostrandoSimbolo = true
    }
    ponerSimboloCasilla2()
}

function despintarCasilla() {
    for(let i=0;i<8;i++){
        for(let k=0;k<8;k++){
            const cas = devolverCasilla(i,k)
            if(cas.mostrandoSimbolo){
                cas.simbolo = ""
                cas.mostrandoSimbolo = false
            }
        }
    }
    ponerSimboloCasilla()
}

function despintarCasilla2() {
    for(let i=0;i<8;i++){
        for(let k=0;k<8;k++){
            const cas = devolverCasilla(i,k)
            if(cas.mostrandoSimbolo){
                cas.simbolo = ""
                cas.mostrandoSimbolo = false
            }
        }
    }
    ponerSimboloCasilla2()
}

function pintarespejo(row,col){
    const newRow = 7 - row
    const newCol = 7 - col

    const seleccion = devolverCasilla(newRow,newCol)

    //marcar la casilla seleccionada
    seleccion.simbolo = car
    seleccion.mostrandoSimbolo = true
    ponerSimboloCasilla2()

     //pintar adyacentes validos
     pintaradyacentes2(newRow,newCol)
     
    //despintar
    setTimeout(function(){
        despintarCasilla2()
    },1000)

    
}

function main(){
    crearCasilla()
}

main()