//declared variables for our Elements
const inputBox = document.getElementById(input-box);
const listContainer = document.getElementById(list-container);

//create a function for our button 
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
    }
}