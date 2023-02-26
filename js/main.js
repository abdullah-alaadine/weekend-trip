document.getElementById("signup").addEventListener("click", getUserInfo);
const userData = {};
function getUserInfo(e){
    e.preventDefault();
    const fName = document.signupForm.fName;
    const lName = document.signupForm.lName;
    const email = document.signupForm.email;
    const passwordFirst = document.signupForm.passwordFirst;
    const passwordLast = document.signupForm.passwordLast;
    validateUserDate(fName, lName, email, passwordFirst, passwordLast);
}
function validateUserDate(fName, lName, email, p1, p2){
    if(email.value.lastIndexOf(".") + 3 > email.value.length){
        alert("Please enter a valid email");
        inputDataAgain();
        return;
    } else if(p1 != p2){
        alert("The passwords didn't match!");
        inputDataAgain();
        return;
    }else if(p1.length<8){
        alert("Your password should contain at least 8 characters");
        inputDataAgain();
        return;
    }else if(!searchForCapitalLetters(p1)){
        alert("Your password should contain at least ONE capital letter!");
        inputDataAgain();
        return;
    }else if(!searchForSpecialCharacters()){
        alert("Your password should contain at least ONE special character");
        inputDataAgain();
        return;
    }
}
function searchForCapitalLetters(str){
    for (let i = 0; i < str.length; i++){
        if(str.charCodeAt(i) >= 65 || str.charCodeAt(i) <= 90){
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
function inputDataAgain(){
    fName.value = "";
    lName.value = "";
    email.value = "";
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