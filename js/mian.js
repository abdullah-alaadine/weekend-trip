
















function palindrome(a, b, string){
    if(b <= a){
        return true;
    }
    if(string[a] === string[b]){
        return palindrome(a + 1, b -1, string)
    }
    return false;
}