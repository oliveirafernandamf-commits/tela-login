document.getElementById("form").addEventListener("submit",(e)=>{

e.preventDefault()

const email = document.getElementById("email").value
const senha = document.getElementById("senha").value


if(email == "teste@gmail.com" && senha == "123"){
    alert("Bem-vindo ao sistema")
    window.location = "principal.html"
}



})