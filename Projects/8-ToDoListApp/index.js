let taskList = []
showTaskList();

document.getElementById('saveBtn').addEventListener('click',saveData);

function saveData(){
    let inputBox = document.getElementById('inputBox');
    let task = inputBox.value.trim();

    if (task){
        let data = {
            taskName : `${task}`,
            taskId : taskList.length + 1
        }
        taskList.push(data);
        showTaskList();
        showMessage('green','Task Added !!');
        inputBox.value = '';
    }else{
        showMessage('red', 'Please write something !!');
    }   
}

function showMessage(color, message){
    let messageField = document.getElementById('message');

    messageField.style.color = color;
    messageField.innerHTML = message;

    setTimeout(function(){
        messageField.innerHTML = '';
    },2000)

}


function showTaskList(){
    // debugger;
    let size = taskList.length;
    let todoConatiner = document.getElementById('todo-container')
    todoConatiner.innerHTML = ``;

    for (let i = 0; i < size; i++){
        let mainDiv = document.createElement('div');
        let taskDiv = document.createElement('div');
        let taskP = document.createElement('p');
        let settingDiv = document.createElement('div');
        let editI = document.createElement('i');
        let deleteI = document.createElement('i');


        mainDiv.classList.add('item');
        taskDiv.classList.add('task');
        settingDiv.classList.add('setting');
        editI.classList.add('fa-solid', 'fa-pen-to-square', 'edit');
        deleteI.classList.add('fa-solid', 'fa-trash', 'delete');

        editI.taskId = taskList[i].taskId;
        deleteI.taskId = taskList[i].taskId;

        editI.onclick = editTask;
        deleteI.onclick = deleteTask;

        taskP.innerHTML = taskList[i].taskName;

        taskDiv.appendChild(taskP);
        settingDiv.appendChild(editI);
        settingDiv.appendChild(deleteI)

        mainDiv.appendChild(taskDiv);
        mainDiv.appendChild(settingDiv);

        todoConatiner.appendChild(mainDiv);
    }
    // console.log(taskList);
}

function editTask(details){
    let taskId = details.target.taskId;

    let inputBox = document.getElementById('inputBox');
    
    let oldTask = taskList.filter(elm => elm.taskId == taskId);

    inputBox.value = oldTask[0].taskName;

    deleteTask(details);
}


function deleteTask(details){
    let id = details.target.taskId;
    let updatedTaskList = taskList.filter(elm => elm.taskId != id )

    taskList = updatedTaskList;
    showTaskList();
}