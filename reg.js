let username;
let password;
let fio;
let email;

document.querySelector('#j-submit').onclick = function (event) {
    event.preventDefault();
    username = document.querySelector('#username').value;
    password = document.querySelector('#password').value;
    fio = document.querySelector('#fio').value;
    email = document.querySelector('#email').value;
    let xhttp = new XMLHttpRequest();
    let url = new URL('http://localhost:8080/registration');
    url.searchParams.set(username, password, fio, email);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.response)
        }
    }

    xhttp.open('POST', "http://localhost:8085/registration", true);
    xhttp.send();


    function myFunction(data) {
        console.log(data);
    }
}