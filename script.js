const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function AddTask() {
    if(inputBox.value === "") {
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // Adding X icon to delete the inputted element
        let span = document.createElement("span");//jis tarah se <span> </span>; yeh statement same kaam kar raha hain
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
};

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){   //agar li element par click hota hain aur woh starting mein unchecked hota hain toh checked ho jayega . Aur 
        e.target.classList.toggle("checked");//incase checked hota hain toh unchecked hojayega 
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

