// function for Name
//////tamer
function isEmpty(name) {
    return name === "";
 }
 function isNameValid(name) {
 //    let patt = /(\w+)(\w+)/;
 //    if (!name.match(patt)){
 //        return false;
 //    }
 // return true;
    const arrayName = name.split(" "),
    WordCount =  arrayName.length;
    if (WordCount === 2){
        if (arrayName[0]===""||arrayName[1]===""){
            return false;
    }
    return true;
    }
    if (WordCount !== 2) {
        if (arrayName[2]===""){
            return true;
    }
    return false;
 }
 }
 function validateName (name) {
    if (isEmpty(name)) {
        return "Name must not be empty";
    }
    if (!isNameValid(name)) {
        return "Name must contain first name and last name";
    }
    return "";
 }
 // function for Email
 function validateEmail (email){
    if (isEmpty(email)){
        return "Email must not be empty";
    }
    if (!isEmailValid(email)){
        return "This is not a valid email address"
    }
    return "";
 }
 function isEmailValid (email){
    // const emailArray = Array.from(email).
    return email.includes("@")&& email.includes(".")
 }
 // function for Password
 function validatePass(password){
    if (isEmpty(password)){
        return "Password must not be empty";
    }
    if (!ispassNum(password)) {
        return "must be at least 8 characters long.";
    }
    if (!ispassLeastNum(password)){
        return "must contain at least one number "
    }
    if (!ispassLeastChar(password)){
        return "must contain at leas one char"
    }
    return "";
 }
 function ispassNum(password){
    const n = password.length;
    if (n >= 8){
        return true;
    };
    if (n < 8){
        return false;
    };
 }
 function ispassLeastNum(password) {
    const patt = /[0-9]/g;
    return patt.test(password);
 }
 function ispassLeastChar(password){
    return password.includes("@") || password.includes(".") || password.includes("!")|| password.includes("#")||password.includes("$")||password.includes("&")||password.includes("*");
 }
 // Main Function
 function onButtonCLick() {
    const name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        password = document.getElementById('password').value,
        passwordMessage = validatePass(password),
        emailMassage = validateEmail(email),
        nameMessage = validateName(name);
    if (nameMessage !== '' || emailMassage !== '' || passwordMessage !== '') {
        document.getElementById('nameError')
        .innerHTML = nameMessage;
        document.getElementById('emailError').innerHTML = emailMassage;
        document.getElementById('passError').innerHTML = passwordMessage;
    }else{
        alert(name);
        alert(email);
        alert(password);
    }
 }
 document.getElementById('signup').addEventListener( "click" ,onButtonCLick)
 // document.getElementById("conv1").addEventListener('click',function show(){
 //     document.getElementById("conv1").style.display="none";
 //     document.getElementById("conv2").style.visibility= "visible";
 //  }
 //  );