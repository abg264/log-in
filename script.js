

var eye = document.getElementById('Eye');
var input = document.getElementById('Input');
eye.addEventListener("click", function(){
    if (input.type === "password") {
        input.type = "text";
        eye.style.opacity = 0.8;
    } else {
        input.type = "password";
        eye.style.opacity = 0.2;
    }
})



function loguear()
{
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("Input").value;
    
    if(user=="Admin" && pass=="1234")
        {
            window.location="hola.html";
        }

    else
    {
        alert("Datos incorrectos");
    }

    
}

