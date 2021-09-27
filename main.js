
function btn(){
var age = document.getElementById("Age").value;
var text;
    if(age >= 1 && age <= 12){
        text = "ბავშვი";
        document.getElementById("spann").innerHTML = text;
 } 
 else if(age >= 13 && age <= 19){
    text = "თინეიჯერი";
    document.getElementById("spann").innerHTML = text;
}
else if(age >= 19 && age <= 30){
    text = "ზრდასრული";
    document.getElementById("spann").innerHTML = text;
}
else if(age >= 40 && age <= 60){
    text = "ხანში შესული";
    document.getElementById("spann").innerHTML = text;
}
else if(age >= 60 && age <= 90){
    text = "მოხუცი";
    document.getElementById("spann").innerHTML = text;
}
else if(age >= 90 && age <= 100){
    text = "...";
    document.getElementById("spann").innerHTML = text;
}
else if(age >= 100 && age <= 200){
    text = "მკვდარი";
    document.getElementById("spann").innerHTML = text;
}
else if ( age > 201){
    text = "...";
    document.getElementById("spann").innerHTML = text;
}

         
}
