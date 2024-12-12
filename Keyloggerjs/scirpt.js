

var keyarr = []
var passarr = []

document.getElementById("user").addEventListener("keypress",function(value){
    keyarr.push(value.key)
    if(keyarr.length == 5){
        console.log(String(keyarr))
        keyarr = []
    }
})


document.getElementById("pass").addEventListener("keypress",function(value){
    passarr.push(value.key)

    if(passarr.length == 8){
        console.log(String(passarr))
        passarr = []
    }
})