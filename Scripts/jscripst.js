
////alertas
function Adivino(){
    Swal.fire({
        title: 'Adivinaste!!!',
        text: "otra vez!!!",
        icon: "success",
        backdrop: true,
        //timer: 3000,
        //timerProgressBar: true,
        //allowOutsideClick: true,
    });
}
function NuevoIntento(){
    Swal.fire({
        title: 'No es el numero',
        text: "Intenta nuevamente",
        backdrop: true,
        timer: 2000,
        timerProgressBar: true,
        toast: true,
        position: 'top-end',

    });
}
function SinIntento(NumeroMaquina){
    Swal.fire({
        title: 'Te quedaste sin intento',
        text: `El numero que pense fue ${NumeroMaquina}`,
        icon: "warning",
        backdrop: true,
        //timer: 3000,
        //timerProgressBar: true,
        //allowOutsideClick: true,
    });
};
//document.getElementById("SaludoUsuario").innerText="HOla Pepito";
//document.querySelector("#SaludoUsuario").innerHTML="HOLA PEEE"
window.onload = function() {
    document.getElementById("Numero").focus();
}
function iniciar() {
    var NumeroMaquina = Math.floor(Math.random()*9);
    console.log(NumeroMaquina);  
    return NumeroMaquina;
}
function limpiar() {
    document.getElementById("Numero").value=null;
  }
  

var NumeroMaquina = iniciar();
nconta=3;
function juego() {
    
    const Numeroingresado = Number(document.getElementById("Numero").value);

    if(Numeroingresado == NumeroMaquina){
        Adivino();
        nconta = 3;
        limpiar();
        
        NumeroMaquina=iniciar();
        
    }else{
        
        NuevoIntento();
        nconta --;
    }
    
    if(nconta<=0){
        //alert(`PERDISTE!! :( TE QUEDASTE SIN INTENTO EL NUMERO ERA ${NumeroMaquina}`);
        SinIntento(NumeroMaquina);
        NumeroMaquina=iniciar();
        limpiar();
        nconta = 3;
    }
    document.getElementById("Numero").focus();
    document.getElementById("ncontad").innerHTML = nconta;
    //document.getElementById("ncon").value = nconta;
}


function InicioNombre(){
    document.getElementById("ventananom").style.display="none";
}

///animacion
const container =document.querySelector('.container')
const color =['#8F00A9', '#50175A',	'#792A87','#F94AF9']
const figures = () =>{
    for(let i=0;i<=25;i++){
        let figure = document.createElement('span');
        let select =Math.round(color.length * Math.random())

        figure.style.top = innerHeight * Math.random()+'px'
         figure.style.left = innerWidth *Math.random() + 'px'
        figure.style.background = color[select>=color.length ? select-1: select];
    
        container.appendChild(figure)
        setInterval(()=> {
            figure.style.top = innerHeight * Math.random()+ 'px'
            figure.style.left = innerWidth *Math.random() + 'px'
        }, 5000 );

    }
}
figures();