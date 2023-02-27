document.getElementById("signup").addEventListener("click", getUserInfo);
const userData = {};
let userDataJSONObject;
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
        userData.fName = fName.value;
        userData.lName = lName.value;
        userData.email = email.value;
        userData.p1 = p1.value;
        userData.p2 = p2.value;
        document.getElementById("signupForm").style.display = "none";
        document.getElementById("lastPart").style.display = "flex";
        document.getElementById("lastPart").style.position = "relative";
        document.getElementById("lastPart").style.top = "100vh";
        userDataJSONObject = JSON.stringify(userData);
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
function palindrome(a, b, word){
    if(b <= a){
        return true;
    }
    if(word[a] === word[b]){
        return palindrome(a + 1, b - 1, word);
    }
    return false;
}

const mergeSortGo = document.getElementById("mergeSortGo");
mergeSortGo.addEventListener("click", (e) => {
    const numbers = prompt("Add 10 numbers, make sure to add them separated with space, e.g. 10 32 53 932 -2 349 0 and so one");
    const arr = numbers.split(" ");
    mergeSort(arr);
    document.getElementById("mergeSortResult").textContent = arr;
})
function mergeSort(arr){
    if(arr.length <= 1) return;
    let midpoint = Math.floor(arr.length/2);
    let left = arr.slice(0, midpoint);
    let right = arr.slice(midpoint);
    mergeSort(left);
    mergeSort(right);
    let i = 0, j = 0, k = 0;
    while(i< left.length && j < right.length){
        if(left[i] <= right[j]){
            arr[k] = left[i];
            i++;
        }else{
            arr[k] = right[j];
            j++;
        }
        k++;
    }
    while(i < left.length){
        arr[k] = left[i];
        i++;
        k++;
    }
    while(j < right.length){
        arr[k] = right[j];
        j++;
        k++;
    }
}

document.getElementById("palindromeGo").addEventListener("click", () => {
    const str = prompt("Enter the string");
    palindrome(0, str.length - 1, str)? document.getElementById("palindrome").textContent = "true": document.getElementById("palindrome").textContent = "false";
});
document.getElementById("primeGo").addEventListener("click", () => {
    let str = prompt("Enter the date here, make sure to enter the date like '1022000' ");
    str *= 1;
    str%2 == 0? document.getElementById("prime").textContent = "true": document.getElementById("prime").textContent = "false";
});
document.getElementById("reverseGo").addEventListener("click", () => {
    const str = prompt("Enter the word here");
    let numbers = [];
    for(let i = 0; i < str.length; i++){
        if(!isNaN(str[i])){
            numbers.push(str[i]);
        }
    }
    numbers.reverse();
    let j = 0;
    const strArr = str.split("");
    for(let i = 0; i < strArr.length; i++){
        if(!isNaN(strArr[i])){
            strArr[i] = numbers[j];
            j++;
        }
    }
    const result = strArr.join(",");
    document.getElementById("reverse").textContent = result;
});
document.getElementById("bananaGo").addEventListener("click", () => {
    let str = prompt("Enter the string here");
    const vowels = ["a", "e", "i", "o", "u"];
    let consonants = "";
    for (let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])){
            break;
        }
        consonants += str[i];
    }
    str = str.slice(consonants.length);
    str += consonants;
    str += "ay";
    document.getElementById("banana").textContent = str;
});
class Course {
    constructor(name, cost, category, description, outline){
        this.name = name;
        this.cost = cost;
        this.category = category;
        this.description = description;
        this.outline = outline;
    }
}
const coursesInfo =[];
document.getElementById("courseGo").addEventListener("click", (e) => {
    e.preventDefault();
    const oneCourse = new Course(document.course.name.value, document.course.cost.value, document.course.category.value, document.course.description.value, document.course.outline.value);
    coursesInfo.push(oneCourse);
    document.course.name.value = "";
    document.course.cost.value = "";
    document.course.category.value = "";
    document.course.description.value = "";
    document.course.outline.value = "";
    document.getElementById("saved").textContent = "Saved!";
    setTimeout(()=> document.getElementById("saved").textContent = "", 2000)
})
let oneTime = true;
document.addEventListener("scroll", e => {
    if(scrollY > 2640 && scrollY < 2720 && oneTime){
        alert("Welcome to our Dice Game :)");
        oneTime = false;
    }
})

document.getElementById("ipGo").addEventListener("click", ()=> {
    fetch('https://api.ipify.org/').then(
        r => r.text()
    ).then(evenNums);
    function evenNums(x){
        let counter = 0;
        for (let i = 0; i< x.length; i++){
            if(!isNaN(x[i]) && (x[i] * 1) % 2==0){
                counter += (x[i] * 1);
            }
        }
        document.getElementById("ip").textContent = `Your IP address: ${x} The sum of even numbers is ${counter}`;
    }
}); 
document.getElementById("locGo").addEventListener("click", ()=> {
    if(navigator.geolocation){
        console.log(99  )
        navigator.geolocation.getCurrentPosition(success, failure);
    }
    function success(x){
        document.getElementById("loc").innerHTML = "Latitude: " + x.coords.latitude + "<br>Longitude: " + x.coords.longitude;
    }
    function failure(x){
        document.getElementById("loc").innerHTML = "Latitude: " + x.coords.latitude + "Longitude: " + x.coords.longitude;

    }
})