// start of CAA.html code

function LIO(){
    window.open("login.html")
    window.close("CAA.html")
}

//the following function SDL will not run due to function store not getting accounts.json node.js will be needed for it to work
function SDL(){
//    var EMC = document.getElementById("email")
//    var PWC = document.getElementById("password")
 //   EMCD = '{EMC, PWC}'

    /*function store(){
        // Create the data to be saved
        let myData = {
            email: EMC,
            pass: PWC
        };
        
        // Convert the data to a JSON string
        let jsonData = JSON.stringify(myData);
        
        // Create a blob of the data
        let blob = new Blob([jsonData], { type: 'application/json' });
        
        //Create a link element
        let a = document.createElement('a');
        
        // Create a URL for the blob
        let url = window.URL.createObjectURL(blob);
        
        // Set the href and download attributes of the link
        a.href = 'accounts.json';
        a.download = 'accounts.json';
        
        // Append the link to the DOM
        document.body.appendChild(a);
        
        // Click the link
        a.click();
        
        // Remove the link
        document.body.removeChild(a);
        }*/
        Tmsg = "Account creation suspended"
        alert(Tmsg)
        console.warn("Account creation hasn't been fully implemented and is not avalible at this time")

        /*if(PWC.value.length <= 8){
        msg = "Password needs to be atleast 8 characters long."
        alert(Tmsg)
    } else {console.log(PWC.value)}

    if(EMC.value.length < 4 || !EMC.value.includes("@") ){
        msg = "Please insert a valid email, valid emails have more than 4 characters and a domain name."
        alert(Tmsg)
        console.warn("Account creation hasn't been fully implemented and is not avalible at this time")
    } else {console.log(EMC); store()}
   if(EMC.value == EMCD.value){
        alert("Email already in use!")
*/}
//