function register(){

const fullname=document.getElementById("fullname").value.trim();

const username=document.getElementById("username").value.trim();

const email=document.getElementById("email").value.trim();

const password=document.getElementById("password").value;

const confirm=document.getElementById("confirmPassword").value;

const msg=document.getElementById("msg");

if(fullname==""||username==""||email==""||password==""){

msg.innerHTML="Please fill in all fields.";

msg.style.color="red";

return;

}

if(password!==confirm){

msg.innerHTML="Passwords do not match.";

msg.style.color="red";

return;

}

let users=JSON.parse(localStorage.getItem("users"))||[];

const exists=users.find(user=>user.username===username);

if(exists){

msg.innerHTML="Username already exists.";

msg.style.color="red";

return;

}

users.push({

fullname,

username,

email,

password

});

localStorage.setItem("users",JSON.stringify(users));

msg.style.color="lime";

msg.innerHTML="Account created successfully.";

setTimeout(function(){

window.location="index.html";

},1500);

}
