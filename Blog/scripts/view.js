import navbar from "../components/navbar.js";
import {getData} from "../components/getData.js";

document.getElementById("navbar").innerHTML = navbar();

const id = localStorage.getItem("id");
// console.log(id);

const blog = async (id) =>{
    let res = await getData(`http://localhost:3000/blogs/${id}`);
    console.log(res);

    let title = document.createElement("h2");
    title.innerHTML = `Title : ${res.title}`;
    let body = document.createElement("p");
    body.innerHTML = res.body;
    let author = document.createElement('p');
    author.innerHTML = `<em>${res.author}</em>`;

    document.getElementById('blogContainer').append(title, body, author);

}
blog(id);
