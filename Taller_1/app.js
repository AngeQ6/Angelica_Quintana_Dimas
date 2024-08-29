const agrega_tarea = document.getElementById('agregar_tarea');
const btn_agregar_tarea = document.getElementById('btn-agregar_tarea');
const lista_tareas = document.getElementById('lista_tareas');

// Función para agregar una tarea
function agregar_tarea() {
    const txt_tarea = agrega_tarea.value;  // Corrección aquí

    if (txt_tarea === '') {
        alert('Por favor, ingresa una tarea.');
        return;
    }

    // Crear un nuevo elemento li
    const li = document.createElement('li');
    li.textContent = txt_tarea;

    // Crear un botón de eliminar
    const btn_eliminar = document.createElement('button');  // Corrección aquí
    btn_eliminar.textContent = 'Eliminar';
    btn_eliminar.onclick = function () {  // Corrección aquí
        lista_tareas.removeChild(li);
    };

    // Agregar el botón al li
    li.appendChild(btn_eliminar);

    // Agregar el li al ul
    lista_tareas.appendChild(li);

    // Limpiar el input
    agrega_tarea.value = '';
}

// Evento al hacer clic en el botón de agregar tarea
btn_agregar_tarea.addEventListener('click', agregar_tarea);

// Evento para agregar la tarea al presionar Enter
agrega_tarea.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        agregar_tarea();
    }
});
