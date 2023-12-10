let calcular = document.getElementById("calcular");
const ERROR = document.getElementById("error");
let dato = document.getElementById("peso");
const RESULTADO2 =document.getElementById("resultado2");
const RESULTADO3 =document.getElementById("resultado3");
const RESULTADO1 =document.getElementById("resultado1");
const RESULTADO =document.getElementById("resultado");

calcular.addEventListener("click", () => {
    if (dato.value === ""){
        ERROR.style.display = "block";
        return;
    }
    ERROR.style.display = "none";
    let peso = dato.value * 1;
    var vol1;
    var vol2;
    if (peso>30){
        RESULTADO2.style.display = "block";
        RESULTADO3.style.display = "block";
        RESULTADO1.style.display = "none";
        RESULTADO.style.display = "none";
        vol1 = Math.floor(SuperficieCorporal(peso) * 1500);
        vol2 = Math.floor(SuperficieCorporal(peso) * 2000);
        document.getElementById("resultado2").innerText = vol1;
        document.getElementById("resultado3").innerText = vol2;
        return;
    }else {
        RESULTADO2.style.display = "none";
        RESULTADO3.style.display = "none";
        RESULTADO1.style.display = "block";
        RESULTADO.style.display = "block";
        vol1 = HolidaySugar(peso);
        vol2 = HolidaySugar(peso)* 1.5;
        document.getElementById("resultado1").innerText = vol1;
        document.getElementById("resultado").innerText = vol2;
        return;
    }
});
function SuperficieCorporal(peso){
    let sc = (((peso * 4)+7) / (peso + 90));
    return sc;
}   
function HolidaySugar(peso){
    let peso1 = dato.value * 1;
    let sc1 = 0;
    if (peso1 <= 10) {
        sc1 = Math.floor((peso1 * 100)/24);
        return sc1;
    } else if (peso1 > 10 && peso1 <= 20) {
        sc1 = Math.floor((1000 + ((peso1 - 10) * 50))/24);
        return sc1;
    } else if (peso1 > 20 && peso1 <= 30) {
        sc1 = Math.floor((1500 + ((peso1 - 20) * 20))/24);
        return sc1;       
    }
}

