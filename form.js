/* 
* @function: validate
* @Description: This will validate if all the the fileds are correct before submitting
* @Author: Amit Kumar
*/

let flag= false;
function myFunction(event) {
    event.preventDefault();

    function checkUsername() {
        let uname = document.forms["myForm"]["username"];
        // console.log(uname);
        // console.log("inside the funciton");
        if (uname.value == "") {
            let msg = "Please enter username"
            errorMsg(msg, "uname-error", uname);
        }
        else {
            let msg = "";
            successMsg(msg, "uname-error", uname);
        }
    }

    function checkEmail() {
        let inp_email = document.forms["myForm"]["email"];
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        if (inp_email.value.match(mailformat)) {
            let msg = "";
            successMsg(msg,"email-error", inp_email);
        }
        else {  
            let msg = "Please enter a valid email"
            errorMsg(msg, "email-error", inp_email);
            
        }
    }

    function checkpasword() {
        let password1 = document.forms["myForm"]["password1"];
        let password2 = document.forms["myForm"]["password2"];
        
        if (password1.value != password2.value){
            let msg = "Passwords do not match";
            errorMsg(msg, "password1-error", password1);
            errorMsg(msg, "password2-error", password2);
        }
        else if (password1.value == "" || password1.value.length < 6 || password2.value == "" || password2.value.length < 6 ){
            let msg = "Password should have atleast 6 characters"
            errorMsg(msg, "password1-error", password1);
            errorMsg(msg, "password2-error", password2);
        }
        else {
            let msg = "";
            successMsg(msg,"password1-error", password1);
            successMsg(msg,"password2-error", password2);
        }
    }

    function errorMsg(msg, id_div, id_inp) {
        //console.log(id_div);
        document.getElementById(id_div).innerHTML = msg;
        id_inp.classList.add("red-border");
        flag=false;
    }

    function successMsg(msg, id_div, id_inp) {
        // console.log(id_div);
        document.getElementById(id_div).innerHTML = msg;
        id_inp.classList.add("green-border");
        flag=true;
        
    }

    checkUsername();
    checkEmail();
    checkpasword();

    console.log(flag,"flag");
    if (flag){
        setTimeout(clearForm,3000);
    }

}

function clearForm(){
    document.getElementById("myForm").reset();
}



// function myFuntionSubmit(obj) {
//     // obj.disabled = true;
//     setTimeout(function() {
//         // obj.disabled = false;
//         alert("time out");
//     }, 2000);
// }​




// function myFunction() {
//     setTimeout(function(){
//         alert("Time Out");
//     },3000);
// }

// function mySubmit(){

//     // to make the info stay for 3sec, after hitting submit
//     setTimeout(()=>{
//         alert("Time Out");
//     },3000);

//     // //matching the password
//     // password1 = form.password1.value; 
//     // password2 = form.password2.value;
//     // if (password1!=password2){
//     //     alert("passwords dont match");
//     // }


//     // alert("show this");
// }



// // to match the password
// function checkPassword(form) { 
//     password1 = form.password1.value; 
//     password2 = form.password2.value; 

//     // If password not entered 
//     if (password1 == '') 
//         alert ("Please enter confirm password");

//     // If confirm password not entered 
//     else if (password2 == '') 
//         alert ("Please enter confirm password"); 

//     // If Not same return False.     
//     else if (password1 != password2) { 
//         alert ("\nPassword did not match: Please try again...") 
//         return false; 
// } 

// setTimeout(()=>{
//     alert("Time Out");
// },3000);
