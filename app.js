const d = document;

let formulario = d.getElementById('form')

const username = d.getElementById('user').value;
const password = d.getElementById('pass').value


const objeto = {
    "username":username,
    "password":password
}

const cadena = JSON.stringify(objeto)
console.log(cadena)

formulario.addEventListener('submit',(e)=>{
    e.preventDefault()

    const username = d.getElementById('user').value;
    const password = d.getElementById('pass').value;


    const url ='http://192.168.88.239:5000/auth/login'
    const xhr = new XMLHttpRequest();
    xhr.responseType='json'

    xhr.open("POST",url,true);
    xhr.setRequestHeader('Content-Type','application/json');
    const valores = {
        "username":username,
        "password":password
    }
    const data = JSON.stringify(valores)
    xhr.onreadystatechange=function(){
        if (xhr.readyState==4&& xhr.status==200) {
            const respuesta = xhr.statusText
            const tok = xhr.response
            console.log(tok)
            
            if(respuesta=='OK'){
                //El usuer a logeado correctamente
                //Guarda el token en el local storage
                localStorage.setItem('token',tok.access_token)
                localStorage.setItem('token2',tok.refresh_token)
                window.location=('dashboard.html')
            } else{
                //El user no ta bom
                alert('usuario o pass incorrecta')
            }
        }
    }

    xhr.send(data)

})
