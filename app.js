var allUsers = [];

var users = localStorage.getItem('users');


if(users !== null){
    allUsers = JSON.parse(users)
}

function signup(){
    var a = document.getElementById('email')
    var b = document.getElementById('pass')
var user = {
    email: a.value,
    password: b.value
}

allUsers.push(user)
localStorage.setItem('users',JSON.stringify(allUsers))
location.href = './login.html'
}


function signin(){
    var a = document.getElementById('email')
    var b = document.getElementById('pass')  
    let filterUser = allUsers.filter(data=> data.email === a.value && data.password === b.value);

    if(filterUser.length){
        location.href = './welcome.html'

    }else{
        alert("email/password incorrect")
    }
    

}

function signout(){
    localStorage.clear()
    location.href = './login.html'
}

function sign(){
    location.href = './register.html'
}

