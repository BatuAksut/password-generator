const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];




let firstPassword=document.getElementById("firstPassword");
let secondPassword=document.getElementById("secondPassword");


function getRandomPassword(){
    let password="";
    for(i=1;i<=15;i++){
        let random= Math.floor(Math.random()*characters.length)
        password+=characters[random]
    }
    
    return password
}

function generatePasswords(){
    firstPassword.textContent=getRandomPassword()
secondPassword.textContent=getRandomPassword()
}



