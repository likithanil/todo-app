
let todoBtn = document.getElementById('todoBtn')

let today = new Date()
const options = {weekday:'long', day:'numeric', month:'long'}
// console.log(options);

let data = [];

let todoImg = document.getElementById('todo-img')

function imgNone() {
    if (data.length == 0) {
        todoImg.classList.remove('d-none')
        todoImg.classList.add('todoImg')
    } else {
        todoImg.classList.add('d-none')
        todoImg.classList.remove('todoImg')
    }
}

function textNone() {
  document.getElementById('title-input').value = "" 
  document.getElementById('desc-input').value = ""
  document.getElementById('dueDate').value= ""
    
}

function todoInfo() {
    let todoContainer = document.getElementById('todo-container')
    todoContainer.innerText=""
    data.map((todo)=>{
        let todoBox = document.createElement('div')
        todoBox.classList.add('todoBox')

        let checkBox = document.createElement('input')
        checkBox.type="checkbox"
        checkBox.classList.add('checkBox')


        let todoContent = document.createElement('div')
        todoContent.classList.add('todoContent')

        let title = document.createElement('p')
        title.classList.add('title')
        let desc = document.createElement('p')
        desc.classList.add('desc')
        let dueDate= document.createElement('p')
        dueDate.classList.add('dueDate')


        title.innerText = todo.titleInput
        desc.innerText = todo.descInput
        // dueDate.innerText = todo.dueDate
        let date = new Date(todo.dueDate)
        let fdate = date.toLocaleDateString('en', options)
        let ftime = date.toLocaleTimeString('en-US')
        dueDate.innerText = ftime+ " " + fdate
        
        
        
        todoContainer.appendChild(todoBox)
        todoBox.appendChild(checkBox)
        todoBox.appendChild(todoContent)



        todoContent.appendChild(title)
        todoContent.appendChild(desc)
        todoContent.appendChild(dueDate)

    })
}

function sortOrder() {
    
 data.sort((a,b)=>{
        let A = new Date (a.dueDate)

        if (A < B) {
            return -1
        } else if(A > B) {
            return 1
        } else{
            return 0
        }

    })
}

todoBtn.addEventListener('click',function () {

let titleInput = document.getElementById('title-input').value;
let descInput = document.getElementById('desc-input').value;
let dueDate = document.getElementById('dueDate').value;

let storage = {
    titleInput : titleInput,
    descInput : descInput,
    dueDate : dueDate
}

// console.log(titleInput,descInput,dueDate); 

data.push(storage)

console.log(storage);

imgNone() 
textNone()
sortOrder() 
todoInfo() 

})