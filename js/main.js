document.getElementById("signup").addEventListener("click", getUserInfo);
const userData = {};
function getUserInfo(e){
    e.preventDefault();
    const fName = document.signupForm.fName.value;
    const lName = document.signupForm.lName.value;
    const email = document.signupForm.email.value;
    const passwordFirst = document.signupForm.passwordFirst.value;
    const passwordLast = document.signupForm.passwordLast.value;
    validateUserDate(fName, lName, email, passwordFirst, passwordLast);
}


function validateUserDate(fName, lName, email, p1, p2){
    
}


function palindrome(a, b, string){
    if(b <= a){
        return true;
    }
    if(string[a] === string[b]){
        return palindrome(a + 1, b -1, string)
    }
    return false;
    const fName = document.signupForm.fName.value;
}