import navbar from "../components/navbar.js";
import {getData} from "../components/getData.js";

document.getElementById("navbar").innerHTML = navbar();

const initFunc = async () =>{
    let data = await getData(`http://localhost:3000/blogs`);
    console.log(data);
    appendData(data);
}
initFunc();

const appendData = (data)=>{
    console.log(data);
    data.forEach((el)=>{
        let tr = document.createElement('tr');
        let id = document.createElement('td');
        id.innerText = el.id;
        let title = document.createElement('td');
        title.innerText = el.title;
        let author = document.createElement('td');
        author.innerText = el.author;
        let view = document.createElement('td');
        view.innerHTML = `<button>VIEW</button>`;
        view.onclick = () =>{
            location.href = '../pages/view.html';
            localStorage.setItem('id', el.id);
        }
        let edit = document.createElement('td');
        edit.innerHTML = `<button>EDIT</button>`;
        edit.onclick = () =>{
            location.href = '../pages/edit.html';
            localStorage.setItem('id', el.id);
        }

        let del = document.createElement('td');
        del.innerHTML = `<button>DELETE</button>`;
        del.onclick = async () =>{
            await fetch(`http://localhost:3000/blogs/${el.id}`, {
                method: 'DELETE',
            });

        }
        tr.append(id, title, author, view, edit,del);
        document.querySelector("tbody").append(tr);
        
    })
}