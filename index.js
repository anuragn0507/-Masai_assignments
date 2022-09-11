
var todoData = JSON.parse(localStorage.getItem("todo")) ||[];
console.log("local storage ka data", todoData);
showData(todoData);

document.querySelector("form").addEventListener("submit",myTodo)
function myTodo(event){    
    var todoData = JSON.parse(localStorage.getItem("todo")) ||[];
    var arr =[];
    event.preventDefault();

    var task = document.getElementById("task").value;
    var priority = document.getElementById("priority").value;

    todoList ={
        task:task,
        priority:priority,
    }
    
    if(todoData.length ==0){
        arr.push(todoList);
        localStorage.setItem("todo", JSON.stringify(arr));
        var todoData = JSON.parse(localStorage.getItem("todo")) ||[];
        showData(todoData);
    }else{
        todoData.push(todoList);
        showData(todoData);
    }  
    console.log("todo me kya jaa rha hai?", todoData);
     
       
}



function deleteRow(){
    // console.log(event.target.parentNode);
    event.target.parentNode.remove();
}

function showData(todoData){
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
        td3.addEventListener("click", deleteRow);
    
        tr.append(td1, td2, td3);
        document.querySelector("tbody").append(tr); 
    })
}
