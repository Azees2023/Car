let myloginform = document.getElementById("myform");

myloginform.addEventListener("submit",(e) => {
    e.preventDefault();


    let myusarname  = document.getElementById("Username");
    let mypassword = document.getElementById("pws");

    if(myusarname.value == "" || mypassword.value == "" ){
        alert("Ensure you input a value in both fields!..")
    }else{
        alert("this form has been sucessfully submitted!...")

        console.log(`this form has a uswername of ${myusarname.value} 
        and password of ${mypassword.value}`);


        myusarname.value = "";
        mypassword.value = "";

    }


});



let form = document.querySelector("#Form");
let username1 = document.querySelector("#Username");
let email = document.querySelector("#Email");
let Fpassword = document.querySelector("#Password");
let conpassword= document.querySelector("#COpassword");
let date =  document.querySelector("#Date");

console.log(form);
console.log(username1);
console.log(email);
console.log(Fpassword);
console.log(conpassword);
console.log(date);

form.addEventListener(submit, (e) =>{
    e.preventDefault();
    validateinputs();
});

function validateinputs(){
    let usernameval = username1.value.trim();
    let emailval = email.value.trim();
    let passwordval = Fpassword.value.trim();
    let conpassval = conpassword.value.trim(); 



    
    if(usernameval == ""){
        setErrorFor(username1,'oops!User name cannot be blank!....')

    }
    else{
        setSuccess('username1')
    }


    if(emailval == ""){
        setErrorFor(email,'Enter is required')

    }else if(!isEmailValid(emailval)){
        setErrorFor(email,'please enter valid email')

    }
    else{
        setSuccess(email)
    }



    if(passwordval == ""){
        setErrorFor(Fpassword, 'Enter the password required')
        
    } else if (!isPasswordSecure(passwordval.length<8)){
        setErrorFor(Fpassword,'password must be enter atlest 8 character')

    }
    else{
        setSuccess(Fpassword)
    }


    if(conpassval == ""){
        setErrorFor(conpassword,'confirm password required')
    }
    else if(conpassval !==  passwordval){
        setErrorFor(conpassword,'password does not match')

    }
    else{
        setSuccess(conpassword)
    }


 
}


// sucess next unsucess(error will be show )
function setErrorFor(input,message){
    let F = input.parentElement;
    let errorMsg = F.querySelector('.error');


    //add error message
    errorMsg.innerText = message;

    // add error Class name
    F.classList.add('error')
    F.classList.remove('success')


}


//first mistake type next correct value enter (sucess message show)
function setSuccess(input){
    let F = input.parentElement;
    let errorMsg = F.querySelector('.error');


    //add success message
    errorMsg.innerText = '';

    //add success class name
    F.classList.add('success')
    F.classList.remove('error')


}
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (Fpassword) => {
    const re = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(Fpassword);
};










