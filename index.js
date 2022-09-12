var arr = JSON.parse(localStorage.getItem("todos"))||[]


// console.log("local storage ka data", todoData);
showData(arr);

document.querySelector("form").addEventListener("submit",myTodo)

function myTodo(event){
    event.preventDefault();var task1 = document.getElementById("task").value;
    var priority1 = document.getElementById("priority").value;
    
    var todoList = {
        task: task1,
        priority: priority1,
    }
    console.log("todo me kya jaa rha hai?", arr);
        arr.push(todoList);
        localStorage.setItem("todos", JSON.stringify(arr));
       
        showData(arr);
    }


function deleteRow(index){
    // console.log(event.target.parentNode);    
    var arr = JSON.parse(localStorage.getItem("todos"));
    console.log("index" , index);
    arr.splice(index,1);
    event.target.parentNode.remove();
    localStorage.setItem("todos", JSON.stringify(arr));
    // showData(arr);

}

function showData(todoData){
    var body = document.getElementById("body");
    //most important part.
    while (body.firstChild) {
        body.removeChild(body.firstChild);
      }

    todoData.map(function(elem, index){
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
    
        td1.innerText = elem.task;
    
        var td2 = document.createElement("td");
        td2.innerText = elem.priority;
    
        if(elem.priority === 'High'){
            td2.style.backgroundColor = "red";
        }else{
            td2.style.backgroundColor = "green";
        }
    
        var td3 = document.createElement("td");
        td3.innerText = "Delete"
    
        td3.style.color = "crimson"
        td3.addEventListener("click", function(){
            deleteRow(index);
        });
    
        tr.append(td1, td2, td3);
        document.querySelector("tbody").append(tr); 
    })
}
