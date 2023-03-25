
//this is just for loging in
const LGD = document.querySelector('#LO');
let SE = LGD.email
let SL = LGD.loggedIn
let SP = LGD.password
let AU = LGD.auth

function LGIN(){
    // variable controls
 var EML = document.getElementById("email") // gets inputed email
 var PWL = document.getElementById("password") // gets inputed password
//node js is needed for: require
// const jsonFile = require("./accounts.json")
// console.log(jsonFile)}


//if(loggedIn === true){
///    console.log("Login Successful")
//    alert("You are logged in! Under (Still working on usernames)")

 if(EML.value == SE && PWL.value == SP){
    console.log("Login Successful!")
    SL = true
    alert("You are logged in! Under (Still working on usernames)")
    window.open("Main.html")
    window.close("Login.html")
} else {alert("Incorrect Username or Password")}
} 

// transfers to CAA.html when account creation button is clicked
function CACCT(){
    window.open("CAA.html")
    window.close("Login.html")
}