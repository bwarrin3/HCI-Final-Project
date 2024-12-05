let x = document.cookie;
let flag = 0;
if (x.includes('-1')) {
    alert("Incorrect Username and/or password");
    document.cookie = "userId=-2; userScore=-1";
}
//alert(document.cookie);
function signout(){
   
    document.cookie = "userId=-2; userScore=-1";
    alert("You have signed out");
};


let userIDIndex = document.cookie.indexOf('userId=');
userId = document.cookie.substring(userIDIndex+7);
if (userId != -2 && userId != -3 && flag == 0){
    alert("You are currently signed in");
    flag = 1;
}
if (userId == -3){
    document.cookie = "userId=-2; userScore=-1";
    alert("Your account was registered");
    document.cookie = "userId=-2; userScore=-1";
}
