import navbar from "../components/navbar.js";
import {getData} from "../components/getData.js";

document.getElementById("navbar").innerHTML = navbar();

const id = localStorage.getItem('id');

const blog = async (id) => {
    let res = await getData(`http://localhost:3000/blogs/${id}`);
    console.log(res);

    document.querySelector('#title').value = res.title;
    document.querySelector('#body').value = res.body;
    document.querySelector('#author').value = res.author;
        
};

document.querySelector('#publish').addEventListener('click', async() =>{
    event.preventDefault();
    location.href = `../index.html`;
    let blogUpdateData={
        title:document.querySelector('#title').value,
        body: document.querySelector('#body').value,
        author:document.querySelector('#author').value,
    }
    console.log( blogUpdateData);
    await fetch(`http://localhost:3000/blogs/${id}`,{
        method: "PATCH",
        body : JSON.stringify(blogUpdateData),
        headers:{
            "Content-Type": "application/json"
        },
    });
    
    
})

blog(id);