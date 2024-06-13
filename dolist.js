let lists = document.getElementById("input");
let container = document.getElementById("listcontent");

function addmask() {
    if (lists.value == "") {
        alert("Enter something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = lists.value;
        li.classList.add("lists"); 
        container.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u2715";
        li.appendChild(span);
    }
    lists.value = "";
}

container.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);