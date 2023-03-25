var loggedIn = true;


function callf(){

    if(loggedIn === true){
       document.getElementById('Casualties').style.opacity = "1"
   } 
   else {
        //Tells you to log in
        NACC()
}
}
function NACC(){
        alert("You need an account to continue operation")
        window.open("Login.html")
        window.close("Main.html")
}
function SBC(){
document.getElementById('LO').style.opacity = "1"
}

//sets the number of days since the war started
onload = (OLD());

function OLD(){
let date_1 = new Date('2/23/2022');
let date_2 = new Date();
// made by 337994677015805952 - discord id
const days = (date_1, date_2) =>{
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}
var RD = Math.abs(days(date_1, date_2));
console.log(RD);
document.getElementById("DC").innerHTML ="Days of Ukraines historic resistance against the Russian agressors" + RD;
}