const d = document;


console.log(localStorage.getItem('token'))
console.log(localStorage.getItem('token2'))

d.addEventListener('DOMContentLoaded',()=>{
    let tok1 = localStorage.getItem('token');
    localStorage.getItem('token2');
    if (tok1 == null) {
        window.location=('index.html')
    }

    const url = 'http://192.168.88.239:5000/auth/verify'
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json'
    xhr.open("POST",url,true)
    xhr.setRequestHeader('Authorization',`Bearer ${tok1}`)

    xhr.onreadystatechange=function(){
        if (xhr.readyState==4&& xhr.status==200) {
            const resp = xhr.statusText;
            if (resp!='OK') {
                window.location=('index.html')
            } if (resp == 'OK') {
                alert('sos venvenuti')
            }
        }if (xhr.status==422) {
                window.location=('index.html')
        }
    }

    xhr.send()
})

