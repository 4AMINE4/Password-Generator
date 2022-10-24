let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let passWord1 = document.getElementById("password1")
let passWord2 = document.getElementById("password2") 

function genPassword() {
    passWord1.textContent = ""
    passWord2.textContent = ""
    let passLength = document.getElementById("pass-length").value
    for (let i = 1; i <=passLength; i++) {
        let i = Math.floor(Math.random()*characters.length)
        passWord1.textContent += characters[i]  
    }
    for (let j = 1; j <=passLength; j++) {
        let j = Math.floor(Math.random()*characters.length)
        passWord2.textContent += characters[j] 
    }
}

function myCopy1() {
    copyText1 = document.getElementById("password1").textContent
    navigator.clipboard.writeText(copyText1)
    alert("Copied the text: " + copyText1)
}

function myCopy2() {
    copyText2 = document.getElementById("password2").textContent
    navigator.clipboard.writeText(copyText2)
    alert("Copied the text: " + copyText2)
}