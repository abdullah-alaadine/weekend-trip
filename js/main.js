document.getElementById("signup").addEventListener("click", getUserInfo);
const userData = {};
function getUserInfo(e){
    e.preventDefault();
    const fName = document.signupForm.fName;
    const lName = document.signupForm.lName;
    const email = document.signupForm.email;
    const passwordFirst = document.signupForm.passwordFirst;
    const passwordLast = document.signupForm.passwordLast;
    validateUserDate(fName, lName, email, passwordFirst.value, passwordLast.value);
}
function validateUserDate(fName, lName, email, p1, p2){
    if(email.value.lastIndexOf(".") + 3 > email.value.length){
        alert("Please enter a valid email");
        enterEmailAgain();
        return;
    } else if(p1 != p2){
        alert("The passwords didn't match!");
        enterPassAgain();
        return;
    }else if(p1.length<8){
        alert("Your password should contain at least 8 characters");
        enterPassAgain();
        return;
    }else if(!searchForCapitalLetters(p1)){
        alert("Your password should contain at least ONE capital letter!");
        enterPassAgain();
        return;
    }
    else if(!searchForSpecialCharacters(p1)){
        alert("Your password should contain at least ONE special character");
        enterPassAgain();
        return;
    }else if(!fName.value || !lName.value ){
        alert("Please enter you name");
        return;
    }else{
        userData.fName = fName;
        userData.lName = lName;
        userData.email = email;
        userData.p1 = p1;
        userData.p2 = p2;``
    }
}
function searchForCapitalLetters(str){
    for (let i = 0; i < str.length; i++){
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
            return true;
        }
    }
    return false;
}
function searchForSpecialCharacters(str){
    for (let i = 0; i < str.length; i++){
        if( !(str.charCodeAt(i)>= 47 && str.charCodeAt(i)<=57) && !(str.charCodeAt(i)>= 65 && str.charCodeAt(i)<=90)
         && !(str.charCodeAt(i)>= 97 && str.charCodeAt(i)<=122)){
            return true;
        }
    }
    return false;
}
function enterEmailAgain(){
    document.signupForm.email.value = "";
}
function enterPassAgain(){
    const passwordFirst = document.signupForm.passwordFirst;
    const passwordLast = document.signupForm.passwordLast;
    passwordFirst.value = "";
    passwordLast.value = "";

}
function palindrome(a, b, string){
    if(b <= a){
        return true;
    }
    if(string[a] === string[b]){
        return palindrome(a + 1, b -1, string)
    }
    return false;
}