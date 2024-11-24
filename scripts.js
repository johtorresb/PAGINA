// Función para mostrar la sección seleccionada y ocultar las demás
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Manejar el formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulación de autenticación
    if (username === 'unad' && password === 'unad') {
        showSection('mainMenu');
    } else {
        alert('Credenciales incorrectas. Inténtelo de nuevo.');
    }
});

// Manejar el formulario de restablecimiento de contraseña
document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert('Se ha enviado un enlace de restablecimiento a: ' + email);
    showSection('loginSection');
});

// Manejar el formulario de publicar solicitud
document.getElementById('publishForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const projectName = document.getElementById('projectName').value;
    const description = document.getElementById('description').value;
    const requirements = document.getElementById('requirements').value;

    // Generar número de radicado
    const radicadoNumber = 'RAD' + Math.floor(Math.random() * 1000000);
    document.getElementById('radicadoMessage').textContent = 'Se creó el número de radicado: ' + radicadoNumber;

    // Limpiar formulario
    document.getElementById('publishForm').reset();
});

// Función para consultar el estado del radicado
function consultarEstado(inputId, resultId) {
    const radicado = document.getElementById(inputId).value;
    if (radicado) {
        // Simulación de búsqueda de estado del radicado
        document.getElementById(resultId).value = 'El radicado se encuentra en estado en proceso';
    } else {
        alert('Por favor, ingrese un número de radicado.');
    }
}

// Función para calificar servicio
function buscarRadicado() {
    const radicado = document.getElementById('ratingsRadicado').value;
    if (!radicado) {
        alert('Por favor, ingrese un número de radicado y/o solicitud.');
    }
}

function enviarCalificacion() {
    const nivel = document.getElementById('ratingsNivel').value;
    const sugerencias = document.getElementById('ratingsSugerencias').value;
    document.getElementById('ratingsMessage').textContent = 'Muchas gracias por su participación.';
}

// Mostrar la sección de inicio de sesión al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showSection('loginSection');
});


