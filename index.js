const API_URL = "http://jsonplaceholder.typicode.com";

const HTMLResponse = document.querySelector("#app");

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        const tpl = users.map((user) => `<li>${user.name} ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
    }
    );
/* const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState === 4 && this.status === 200){
        // console.log(this.response);
        const data = JSON.parse(this.response);
        console.log(data);
        const HTMLResponse = document.querySelector("#app");

        const tpl = data.map(user => `<li>${user.name}  ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
    }
}
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/users`);
xhr.send(); */
