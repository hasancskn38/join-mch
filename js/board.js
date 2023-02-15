function createNewTask() {
    let contact = document.getElementById('select-contact').value;
    let date = document.getElementById('task-date').value;
    let title = document.getElementById('task-title').value;
    let category = document.getElementById('select-category').value;
    let taskDescription = document.getElementById('task-description').value;
    let newItem = { 
    "title": title,
    "cat": category,
    "description": taskDescription,
    "status": 'todo'
    };
    testData.push(newItem);
    // Clear Input Fields
    title = '';
    category = '';
    taskDescription = '';
    renderData();
}

function resetInputs() {
    let title = document.getElementById('task-title').value;
    let category = document.getElementById('select-category').value;
    let taskDescription = document.getElementById('task-description').value;
    title = '';
    category = '';
    taskDescription = '';
}


// Render Content of data.js
function renderData() {
    let stageToDo = document.getElementById('stage-todo')
    stageToDo.innerHTML = '';
    let stageProgress = document.getElementById('stage-progress')
    stageProgress.innerHTML = '';
    let stageFeedBack = document.getElementById('stage-feedback')
    stageFeedBack.innerHTML = '';
    let stageDone = document.getElementById('stage-done')
    stageDone.innerHTML = '';

    for (let i = 0; i < testData.length; i++) {
        const test = testData[i];
        if(test.status === 'todo') {
            stageToDo.innerHTML += toDoTemplate(i, test)
        }
        else if(test.status === 'inprogress') {
            stageProgress.innerHTML += progressTemplate(i, test)
        }
        else if(test.status === 'feedback') {
            stageFeedBack.innerHTML += feedBackTemplate(i ,test)
        } else {
            stageDone.innerHTML += doneTemplate(i, test)
    }
    renderColors(i);
    }
}


function handleSubmit(event) {
    let title = document.getElementById('task-title').value;
    let category = document.getElementById('select-category').value;
    let contact = document.getElementById('select-contact').value;
    let date = document.getElementById('task-date').value;
    let taskDescription = document.getElementById('task-description').value;
        event.preventDefault()
        if(!title || !date || !taskDescription || !category || !contact) {
            alert('Please fill in all required fields');
        return;
        } else {
            createNewTask();
            closeAddTaskPopUp();
            resetInputs();
            renderData();
        }
}

function renderColors(i) {
    let category = document.getElementById(`category-${i}`);
    if(category.innerHTML == 'Design') {
        category.classList.add('design')
    }
    if(category.innerHTML == 'Media') {
        category.classList.add('media')
    }
    if(category.innerHTML == 'Backoffice') {
        category.classList.add('backoffice')
    }
    if(category.innerHTML == 'Sales') {
        category.classList.add('sales')
    }
    if(category.innerHTML == 'Development') {
        category.classList.add('development')
    }
    
}



















// Implement Templates
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); 
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

// openAddTaskPopUp Function
function openAddTaskPopUp() {
    document.getElementById('overlay').classList.remove('d-none');
    document.getElementById('popup').classList.remove('hide');
    document.getElementById('popup').classList.add('show');
    document.getElementById('popup').classList.remove('d-none');
    document.querySelector('body').classList.add('overflow-hidden')

}

function closeAddTaskPopUp() {
    document.getElementById('overlay').classList.add('d-none');
    document.getElementById('popup').classList.add('hide');
    document.getElementById('popup').classList.remove('show');
    document.querySelector('body').classList.remove('overflow-hidden')
}


function openExistingTaskPopUp() {
    
}


function closeExistingTaskPopUp() {

}


let priorityImg = document.getElementById('img')
let urgent = document.getElementById('urgent')
let medium = document.getElementById('medium')
let low = document.getElementById('low')
// Change the Color of the different Priority Levels
function changeUrgentColor() {
    if(urgent.classList.contains('urgent')) {
        urgent.classList.remove('urgent') 
        priorityImg.classList.add('white');
        
    } else {
        urgent.classList.add('urgent')
        low.classList.remove('low')
        medium.classList.remove('medium')
        priorityImg.classList.add('white');
    }
}

function changeMediumColor() {
    if(medium.classList.contains('medium')) {
        medium.classList.remove('medium') 
        priorityImg.classList.add('white');
        
    } else {
        medium.classList.add('medium')
        urgent.classList.remove('urgent')
        low.classList.remove('low')
        priorityImg.classList.add('white');
    }
}

function changeLowColor() {
    if(low.classList.contains('low')) {
        low.classList.remove('low')
        priorityImg.classList.add('white');
        
    } else {
        low.classList.add('low')
        urgent.classList.remove('urgent')
        medium.classList.remove('medium')
        priorityImg.classList.add('white');
    }
}

// Show Help me Container
function showHelpMeSection() {
    document.getElementById('help-me-container').classList.remove('d-none');
    document.querySelector('main').classList.add('d-none');
}

// Hide Help me Container
function hideHelpMeSection() {
    document.getElementById('help-me-container').classList.add('d-none');
    document.querySelector('main').classList.remove('d-none');
}