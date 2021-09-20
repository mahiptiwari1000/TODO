const signUp = e => {
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() && 
            data.lname.toLowerCase() == lname.toLowerCase()
        );

    if(!exist){
        formData.push({ fname, lname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "./index.html";
    }
    e.preventDefault();
}






const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class item{

constructor (itemName){
    this.createDiv(itemName);
}

createDiv(itemName){
    let input = document.createElement('input');
    input.value = itemName;
    input.disabled = true;
    input.classList.add('item_input');
    input.type = "text";

    let itemBox = document.createElement('div');
    itemBox.classList.add('item');

    let editButton = document.createElement('button');
    editButton.innerHTML = "EDIT";
    editButton.classList.add('editButton');

    let removeButton = document.createElement('button');
    removeButton.innerHTML = "REMOVE";
    removeButton.classList.add('removeButton');

    let dateTodo = document.createElement('button');
    dateTodo.innerHTML = new Date();
    dateTodo.classList.add('dateTodo');

    /*let sortTodos = document.createElement('button');
    sortTodos.innerHTML = "SORT";
    sortTodos.classList.add('sortTodos');*/

    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);
    itemBox.appendChild(dateTodo);

    editButton.addEventListener('click',() => this.edit(input));
    removeButton.addEventListener('click',() => this.remove(itemBox));
    //sortTodos.addEventListener('click',() => this.sortTD(dateTodo));
}

     edit(input){
         if(input.disabled){
         input.disabled = !input.disabled;
         }
         else{
             input.disabled = true;
         }
     }

     remove(item){
         container.removeChild(item);
     }

     /*sortTD(dateTodo){
         itemBox.sort(dateTodo);
     }*/


}

function check(){
    if(input.value!=""){
        new item(input.value);
        input.value = "";
    }
    else{
        alert("Enter something!");
    }
}

addButton.addEventListener('click',check);

window.addEventListener('keydown',(e) => {
    if(e.which == 13){
        check();
    }
})
