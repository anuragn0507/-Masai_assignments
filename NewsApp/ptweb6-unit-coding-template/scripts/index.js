import { navbar } from "../components/navbar.js";

// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

document.getElementById("navbar").innerHTML = navbar();
console.log(navbar());

document.getElementById("search_input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let searchInput= document.getElementById("search_input").value;
    console.log(searchInput);
    localStorage.setItem("searchInput", searchInput);
    location.href = "./search.html";
    document.getElementById("search_input").innerHTML = "";
  }
});
showData("in");
document.getElementById("in").addEventListener("click", ()=>{
    let id = document.getElementById("in").id;
    console.log(id);
    showData(id);
})
document.getElementById("us").addEventListener("click", ()=>{
    let id = document.getElementById("us").id;
    console.log(id);
    showData(id);
})
document.getElementById("ch").addEventListener("click", ()=>{
    let id = document.getElementById("ch").id;
    console.log(id);
    showData(id);
})
document.getElementById("uk").addEventListener("click", ()=>{
    let id = document.getElementById("uk").id;
    console.log(id);
    showData(id);
})
document.getElementById("nz").addEventListener("click", ()=>{
    let id = document.getElementById("nz").id;
    console.log(id);
    showData(id);
})

async function showData(id){
    let res = await fetch(`https://masai-api.herokuapp.com/news/top-headlines?country=${id}`);
    let data = await res.json();
    console.log(data.articles);
    document.getElementById("results").innerHTML = "";
    data.articles.map((e)=>{
        let newsDiv = document.createElement('div');
        newsDiv.setAttribute("class", "news");

        let imgTag = document.createElement("img");
        imgTag.src = e.urlToImage;
        let title = document.createElement("h3");
        title.innerText = e.title;
        let description= document.createElement("p");
        description.innerText = e.description;
        newsDiv.append(imgTag, title, description);
        newsDiv.addEventListener("click",()=>{
            console.log(e);
            localStorage.setItem("news",JSON.stringify(e));
            location.href="./news.html"
        })
        document.getElementById("results").append(newsDiv);
    })
}