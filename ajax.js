let username;
let password;

document.querySelector('#j-submit').onclick = function (event) {
    event.preventDefault();
    username = document.querySelector('#username').value;
    password = document.querySelector('#password').value;
    let xhttp = new XMLHttpRequest();
    let url = new URL('http://localhost:8080/login');
    url.searchParams.set(username, password);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.response)
        }
    }

    xhttp.open('POST', "http://localhost:8084/login", true);
    xhttp.setRequestHeader("Access-Control-Request-Headers", "x-requested-with");
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhttp.send();


    function myFunction(data) {
        console.log(data);
    }
}



