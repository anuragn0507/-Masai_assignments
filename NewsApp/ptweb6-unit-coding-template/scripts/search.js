import {navbar} from "../components/navbar.js"
// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


document.getElementById("navbar").innerHTML = navbar();

let searchInput= localStorage.getItem("searchInput");


document.getElementById("search_input").addEventListener('keypress', (e)=>{
    if (e.key === 'Enter') {
        searchInput= document.getElementById("search_input").value;
        localStorage.setItem("searchInput", searchInput);  
        searchNews(searchInput);
        document.getElementById("search_input").innerHTML = "";
      }
})

// console.log(searchInput);

let searchNews =async (searchInput)=>{
    console.log(searchInput)
    let res = await fetch(`https://masai-api.herokuapp.com/news?q=${searchInput}`);
    let data = await res.json();
    console.log(data.articles);
    showToPage(data.articles);
}
searchNews(searchInput);

function showToPage(data){
    data.map((e)=>{
        let card = document.createElement("div");
        card.setAttribute("class", "news");
        let imgTag = document.createElement("img");
        imgTag.src = e.urlToImage;
        let title = document.createElement("h3");
        title.innerText = e.title;
        let description= document.createElement("p");
        description.innerText = e.description;
        card.append(imgTag, title, description);
        card.addEventListener("click",()=>{
            console.log(e);
            localStorage.setItem("news",JSON.stringify(e));
            location.href="./news.html"
        })
        document.getElementById("results").append(card);


    })
}

