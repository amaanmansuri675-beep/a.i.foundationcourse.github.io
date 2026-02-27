function toggleTheme(){
document.body.classList.toggle("dark");
}

function signup(){
let user=document.getElementById("user").value;
let pass=document.getElementById("pass").value;
localStorage.setItem("user",user);
localStorage.setItem("pass",pass);
alert("Signup Success!");
window.location="login.html";
}

function login(){
let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;

if(u==localStorage.getItem("user") && p==localStorage.getItem("pass")){
localStorage.setItem("login","yes");
window.location="dashboard.html";
}else{
alert("Wrong Login");
}
}

function logout(){
localStorage.clear();
window.location="index.html";
}

function calculateScore(){
let score=0;
document.querySelectorAll(".correct:checked").forEach(()=>score+=20);
localStorage.setItem("score",score);
alert("Test Submitted!");
}

function showResult(){
document.getElementById("result").innerText="Score: "+localStorage.getItem("score")+"%";
}

function generateCert(){
let name=document.getElementById("name").value;
document.getElementById("cert").innerText="Certificate Issued To: "+name;
}
