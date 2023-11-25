//define
var tsag = document.querySelector('.se1');
var minUt = document.querySelector('.se2');
var seKund = document.querySelector('.se3');
var haRiult= document.querySelector('.se4');
var harI = document.querySelector('.hariult');
//check
console.log(tsag);
console.log(minUt);
console.log(seKund);
console.log(haRiult);
//uildel
function tsagsek(){
    if(tsag.value>0){
        tsag.value = tsag.value;
    }else{
        alert('Цагийн тоон утга буруу');
        minUt.value = 0;
        seKund.value = 0;
        tsag.value = 0;
    }
    if(minUt.value>0){
        minUt.value =minUt.value;
    }else{
        alert("Минутын тоон утга буруу");
        minUt.value = 0;
        tsag.value = 0;
        tsag.value = 0;
    }
    if(seKund.value>0){
        seKund.value = seKund.value;
    }else{
        tsag.value = 0;
        minUt.value = 0;
        seKund.value = 0;
    }
    harI.innerText = 'хариу:' + ((parseInt(tsag.value*3600)) + (parseInt(minUt.value*60)) + (parseInt(seKund.value)));
}
function restart(){
    minUt.value = '';
    seKund.value = '';
    tsag.value = '';
    harI.innerText = 'хариу:'
}

