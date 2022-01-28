function signup(){
let name=document.getElementById("nam").value;
let email=document.getElementById("email").value;
let number=document.getElementById("number").value;
let adr=document.getElementById("adr").value;
let pass=document.getElementById("pass").value;

localStorage.setItem("nam1","name");
localStorage.setItem("email1","email");
localStorage.setItem("number1","number");
localStorage.setItem("adr1","adr");
localStorage.setItem("pass1","pass");

window.location.assign("./login.html")
}
const login=()=>{
    let email=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;

    localStorage.setItem("email1","email");
    localStorage.setItem("pass1","pass");
     localStorage.getItem("email1");
     localStorage.getItem("pass1");

     if("email===email1 & pass===pass1"){
         window.location.assign("./home.html")
     }else{"invalid"
     }
}


