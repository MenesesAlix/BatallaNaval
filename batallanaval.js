 tablero  constante =  documento . querySelector ( "#board" ) ;
const  boardAttack  =  documento . querySelector ( "#boardAttack" ) ;
 posición  constante =  documento . querySelectorAll ( ".posición" ) ;
sea  matriz  =  [ ] ;
let  matrixAttack  =  [ ] ;
const  sizeShip  =  [ 5 ,  4 ,  3 ,  2 ] ;
const  positionArray  =  [ "horizontal" ,  "vertical" ]
let  amountShip  =  [ 1 ,  1 ,  1 ,  2 ] ;
let  amountShipPC  =   [ 1 ,  1 ,  1 ,  2 ] ;
dejar  enviar  =  { } ;
let  shipRandom  =  { } ;

// Función para creación de tableros
function  createMatrix ( boardType ,  matrixType ,  func ,  type ) {
    para ( sea  i = 0 ;  i < 10 ;  i ++ ) {
        dejar  lista  =  [ ]
        dejar  fila  =  documento . createElement ( "div" ) ;
        boardType . appendChild ( fila ) ;
        fila . className  =  "myRow"
        para ( sea  j = 0 ;  j < 10 ;  j ++ ) {
            let  grid  =  document . createElement ( "div" ) ;
            fila . appendChild ( cuadrícula ) ;
            cuadrícula . className  =  "cuadrícula" ;
            cuadrícula . id  =  i  +  ","  +  j  +  ","  +  tipo ;
            cuadrícula . addEventListener ( "clic" ,  func ) ;
            lista . empujar ( "" ) ;
        }
        matrixType . empujar ( lista )
    }
}
// Función para seleccionar barra
función  selectShip ( evento ) {
    shipData  =  evento . objetivo . className . dividir ( "" ) ;
    nave . position  =  shipData [ 0 ] ;
    nave . size  =  sizeShip [ shipData [ 1 ] ] ;
    nave . cantidad  =  cantidadEnvío [datos de envío [ 1 ] ] ;
    nave . id  =  shipData [ 1 ] ;
}
// Creación de tablero jugador
createMatrix ( tablero ,  matriz ,  selectPosition ,  "jugador" ) ;
// Creación de barcos
para ( sea  i = 0 ;  i < posición . longitud ;  i ++ ) {
    dejar  horizontal  =  documento . createElement ( "div" ) ;
    posición [ i ] . appendChild ( horizontal ) ;
    horizontal . className  =  "horizontal"  +  i ;
    horizontal . addEventListener ( "hacer clic" , seleccionar  Enviar )
    deje  vertical  =  documento . createElement ( "div" ) ;
    posición [ i ] . appendChild ( vertical ) ;
    vertical . className  =  "vertical"  +  i ;
    vertical . addEventListener ( "hacer clic" , seleccionar  Enviar )
}
// Función para seleccionar posición de los barcos
function  selectPosition ( evento ) {
    si ( la nave . Cantidad  >  0 ) {
        deje que la  cuadrícula  =  evento . objetivo
        deje  gridID  =  grid . id . dividir ( "," ) ;
        sea  x  =  parseInt ( gridID [ 0 ] ) ;
        let  y  =  parseInt ( gridID [ 1 ] ) ;
        si ( la nave . posición  ===  "horizontal" ) {
            si ( ( Y  +  ( nave . tamaño  -  1 ) )  <  10 ) {
                para ( dejo  i = y ;  i < ( y  +  nave . tamaño ) ;  i ++ ) {
                    matriz [ x ] [ i ]  =  "barco" ;
                    documento . getElementById ( x  +  ","  +  i  +  ","  +  "jugador" ) . className  + =  "seleccionado" ;
                }
                cantidadEnvío [ nave . id ]  - =  1 ;
                barco  =  { }
            }
            else {
                alert ( "Selecciona una posición válida" ) ;
            }
        }
        otra cosa  si ( nave . posición  ===  "vertical" ) {
            si ( ( x  +  ( nave . tamaño  -  1 ) )  <  10 ) {
                para ( dejar que  i = x ;  i < ( x  +  nave . tamaño ) ;  i ++ ) {
                    matriz [ i ] [ y ]  =  "barco" ;
                    documento . getElementById ( i  +  ","  +  y  +  ","  +  "jugador" ) . className  + =  "seleccionado" ;
                }
                cantidadEnvío [ nave . id ]  - =  1 ;
                barco  =  { }
            }
            else {
                alert ( "Selecciona una posición válida" ) ;
            }
        }
    }
    else {
        alert ( "Debes seleccionar un barco disponible" ) ;
    }
}
// Función de botón iniciar juego
function  startGame ( ) {
    createMatrix ( boardAttack ,  matrixAttack ,  checkShot ,  "pc" ) ;
    selectPositionRandom ( )
    documento . querySelector ( "#button" ) . discapacitado  =  verdadero ;
}
// Generar posición aleatoria de barcos
function  selectPositionRandom ( ) {
    para ( sea  i = 0 ;  i < cantidad de envíoPC . longitud ;  i ++ ) {
        while ( amountShipPC [ i ]  >  0 ) {
            aleatorio ( i ) ;
            cantidadEnvíoPC [ i ]  - =  1 ;
        }
    }
}
// Verificación de posición válida
función  checkPosition ( pos ,  eje ,  tamaño ) {
    if ( shipRandom . position   ===  pos ) {
        si ( ( eje  +  ( tamaño  -  1 ) )  <  10 ) {
            devuelve  verdadero ;
        }
        else {
            devolver  falso ;
        }
    }
}
// Función para crear barco aleatorio
función  aleatoria ( i ) {
    shipRandom . position  =  positionArray [ Math . floor ( Math . random ( )  *  Math . floor ( positionArray . length ) ) ] ;
    shipRandom . x  =  Matemáticas . piso ( Matemáticas . aleatorio ( )  *  Matemáticas . piso ( 10 ) ) ;
    shipRandom . y  =  Matemáticas . piso ( Matemáticas . aleatorio ( )  *  Matemáticas . piso ( 10 ) ) ;
    if ( checkPosition ( "horizontal" ,  shipRandom . y ,  sizeShip [ i ] ) ) {
        para ( sea  j = shipRandom . y ;  j < ( shipRandom . y  +  sizeShip [ i ] ) ;  j ++ ) {
            if ( matrixAttack [ shipRandom . x ] [ j ]  ===  "ship" ) {
                devolver al  azar ( i )
            }
        }
        para ( sea  j = shipRandom . y ;  j < ( shipRandom . y  +  sizeShip [ i ] ) ;  j ++ ) {
            matrixAttack [ shipRandom . x ] [ j ]  =  "enviar" ;
        }
    }
    else  if ( checkPosition ( "vertical" ,  shipRandom . x ,  sizeShip [ i ] ) ) {
        para ( sea  j = shipRandom . x ;  j < ( shipRandom . x  +  sizeShip [ i ] ) ;  j ++ ) {
            if ( matrixAttack [ j ] [ shipRandom . y ]  ===  "ship" ) {
                devolver al  azar ( i )
            }
        }
        para ( sea  j = shipRandom . x ;  j < ( shipRandom . x  +  sizeShip [ i ] ) ;  j ++ ) {
            matrixAttack [ j ] [ shipRandom . y ]  =  "enviar" ;
        }
    }
    else {
        devolver al  azar ( i )
    }
}
// Verificar tiro de jugador
function  checkShot ( evento ) {
    deje que la  cuadrícula  =  evento . objetivo
    deje  gridID  =  grid . id . dividir ( "," ) ;
    sea  x  =  parseInt ( gridID [ 0 ] ) ;
    let  y  =  parseInt ( gridID [ 1 ] ) ;
    if ( matrixAttack [ x ] [ y ]  ===  "enviar" ) {
        alert ( "Muy bien, acertaste. Vuelve a jugar" ) ;
        matrixAttack [ x ] [ y ]  =  "golpe" ;
        documento . getElementById ( x  +  ","  +  y  +  ","  +  "pc" ) . className  + =  "hit" ;
        checkWinner ( matrixAttack ,  "jugador" )
    }
    else {
        alert ( "Mal! tu disparo cayó al agua" ) ;
        matrixAttack [ x ] [ y ]  =  "fallar" ;
        documento . getElementById ( x  +  ","  +  y  +  ","  +  "pc" ) . className  + =  "señorita" ;
        shotPc ( )
    }
}
// Jugada del PC
function  shotPc ( ) {
    sea  x  =  Matemáticas . piso ( Matemáticas . aleatorio ( )  *  Matemáticas . piso ( 10 ) ) ;
    sea  y  =  Math . piso ( Matemáticas . aleatorio ( )  *  Matemáticas . piso ( 10 ) ) ;
    if ( matriz [ x ] [ y ]  ===  "enviar" ) {
        alert ( "Ops! te han disparado" ) ;
        matriz [ x ] [ y ]  =  "acierto" ;
        documento . getElementById ( x  +  ","  +  y  +  ","  +  "jugador" ) . className  + =  "hit" ;
        checkWinner ( matriz ,  "pc" ) ;
        return  shotPc ( ) ;
    }
    de lo contrario  si ( matriz [ x ] [ y ]  ===  "acertar"  ||  matriz [ x ] [ y ]  ===  "fallar" ) {
        return  shotPc ( ) ;
    }
    else {
        alert ( "El disparo del pc cayó al agua" ) ;
        matriz [ x ] [ y ]  =  "fallar" ;
        documento . getElementById ( x  +  ","  +  y  +  ","  +  "jugador" ) . className  + =  "señorita" ;
    }
}
// Revisar ganador
función  checkWinner ( matriz ,  reproductor ) {
    para ( sea  i = 0 ;  i < 10 ;  i ++ ) {
        dejemos  arraychecked  =  matriz [ i ] . filter ( ( índice ) => { índice de retorno  === "enviar" } )  
        if ( arraychecked . length  >  0 ) {
            regreso
        }
    }
    if ( jugador  ===  "pc" ) {
        alerta ( "Ha ganado el PC" )
    }
    else {
        alerta ( "GANASTE !!!" )
    }
}