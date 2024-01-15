
const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementsByClassName("list-container")[0];
const bu = document.getElementsByTagName("button")[0];

bu.addEventListener('click', () => {
    if (inputbox.value === '') {
        alert("You must enter a value");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputbox.value = '';
        savedata();
    }
});

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data",listcontainer.innerHTML);
    }


function showlist(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showlist()



// function addtask(){
//     if(inputbox.value === ''){
//         alert("you must enter the value");
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputbox.value;
//         listcontainer.appendChild(li);
//     }

// }
