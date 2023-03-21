let siffra = 0;

function plusClick(){
    console.log("plusClick");
    siffra +=1;

    document.getElementById("taltext").innerHTML = siffra

}

    function minusClick(){
        console.log("minusClick");
        siffra -=1;
    
        document.getElementById("taltext").innerHTML = siffra
}