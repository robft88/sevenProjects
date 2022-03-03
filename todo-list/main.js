const d = document,
    $form = d.querySelector('.todo-form'),
    $alert = d.querySelector('.alert'),
    $input = d.querySelector('#todo'),
    $subBtn = d.querySelector('.submit-btn'),
    $container = d.querySelector('.todo-container'),
    $list = d.querySelector('.todo-list'),
    $clearBtn = d.querySelector('.clear-btn'),
    $editBtn = d.querySelector('.edit-btn'),
    $deleteBtn = d.querySelector('.delete-btn'),
    $template = d.getElementById('template').content,
    $fragment = d.createDocumentFragment();

let tasks = [],
    editID;


window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    printTasks();
})

$form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nameTasks = [];
    tasks.forEach(task => {
        nameTasks.push(task.name);
    });
    if (editID) {
        editTask(editID, $input.value);
    } else {
        setTask(e);
    }
});

d.addEventListener('click', (e) => btnAction(e));

const setTask = (e) => {
    if ($input.value.trim() === '') {
        setMessage('Debes ingresar una tarea.', 'alert-error');
        return;
    }
    const task = {
        id: Date.now(),
        name: $input.value,
        status: false
    }
    tasks.push(task);
    $form.reset();
    $input.focus();

    printTasks();
    $subBtn.textContent = 'Submit';
    setMessage('Tarea agregada correctamente', 'alert-success');
}

const setMessage = (msg, style) => {
    $alert.classList.add(style);
    $alert.textContent = msg
    setTimeout(() => {
        $alert.classList.remove(style);
        $alert.textContent = ''
    }, 3000);
    return;
}

const printTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    if (tasks.length === 0) {
        $list.innerHTML = `
            <p class="title item-none">No hay tareas pendientes! 🎉</p>
        `
        return;
    }
    $list.innerHTML = '';
    tasks.forEach(task => {
        const clone = d.importNode($template, true);


        clone.querySelector('.title').textContent = task.name;
        clone.querySelector('.complete-btn').dataset.id = task.id;
        clone.querySelector('.edit-btn').dataset.id = task.id;
        clone.querySelector('.delete-btn').dataset.id = task.id;
        
        if(task.status){
            clone.querySelector('.todo-item').classList.add('item-done');
            clone.querySelector('.edit-btn').disabled = true;
            clone.querySelector('.complete-btn').disabled = true;
        }

        $fragment.appendChild(clone);
    });
    $list.appendChild($fragment);
}

const btnAction = (e) => {
    if (e.target.matches('.complete-btn')) {
        tasks.filter(x => x.id === parseInt(e.target.dataset.id)).map(task => {
            task.status = true;
            return task;
        })
        printTasks();
    }
    if (e.target.matches('.edit-btn')) {
        tasks.filter(x => x.id === parseInt(e.target.dataset.id)).map(task => {
            $input.value = task.name;
            editID = task.id;
            $subBtn.textContent = 'Update';
        })
        printTasks();
    }
    if (e.target.matches('.delete-btn')) {
        tasks = tasks.filter(task => task.id !== parseInt(e.target.dataset.id));
        printTasks();
    }
    if (e.target.matches('.clear-btn')) {
        tasks = tasks.filter(task => !task.status);
        printTasks();
    }
    e.stopPropagation();
}

const editTask = (id, value) => {
    if (value.trim() === '') {
        setMessage('Debes ingresar una tarea.', 'alert-error');
        return;
    }
    tasks.filter(x => x.id === id).map(task => {
        task.name = value;
        return task;
    })
    $input.value = '';
    $subBtn.textContent = 'Submit';
    printTasks();
    setMessage('Tarea actualizada correctamente', 'alert-success');
}