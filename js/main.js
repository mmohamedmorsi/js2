/*
document.getElementById("demo").innerHTML ="Date & time"
document.getElementById('bt-on').onclick =function (){
    document.getElementById('lamp').src ='img/2.gif'
    
} ;
document.getElementById('bt-off').onclick =function(){

    document.getElementById('lamp').src='img/1.gif'

}; 
*/

/*
var x=prompt("ما هو سعر المنتج");

if(x<=0){
    alert("برجاء ادخال رقم اكبر من الصفر!");
}else if (x<20) {
    alert("هذا المنتج رخيص");
    
} else if (x==20) {
    alert("هذا المنتج مناسب للامكانياتك");
    
}else if(x>20) {
    alert("هدا المنتج غالى جداً");
    
} else {
alert("برجاء ادخال رقم صحيح");

    
return (x)
}
*/

document.getElementById("con").style="height: 450px;"

function convertDolar() {
    document.getElementById("result").style="height: 60px; color:red;pading:3px;"
    var dolar = document.getElementById("dolar").value;
    var result = document.getElementById("result");
    if (dolar=="") {
        result.innerHTML="برجاء ادخال قيمة";
        return false;
    }else if (isNaN(dolar)){
        result.innerHTML="  القيمة ليست رقم صحيح";
        return false;
    }else if (dolar<=0){
        result.innerHTML="  برجاء ادخال رقم صحيح";
        return false;
    }else {
        
        result.innerHTML = "القيمة بالجنية المصرى =   " + dolar * 55;
    
        return false;

    }

}