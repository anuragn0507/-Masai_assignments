import {navbar} from "../components/navbar.js"

// Ude Import export (MANDATORY)

document.getElementById("navbar").innerHTML = navbar();

let data = JSON.parse(localStorage.getItem("news"));
console.log(data);

function detailNews(data){
    
        let imgTag = document.createElement("img");
        imgTag.src = data.urlToImage;
        let title  = document.createElement("h3");
        title.innerText = data.title;
        let content = document.createElement("p");
        content.innerText = data.content;
        document.getElementById("detailed_news").append(imgTag, title, content);
    
}

detailNews(data);