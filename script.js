// ############ Validador #################
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    // Listeners en tiempo real
    ["name", "email", "message"].forEach(function(id) {
        const input = document.getElementById(id); 

        input.addEventListener('blur', function() {
            if (!input.value.trim()) input.classList.add('invalid');
        });

        input.addEventListener('input', function() {
            if (input.classList.contains('invalid') && input.value.trim()) {
                input.classList.remove('invalid');
            }
        });
    });

    // Submit
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');

         console.log('name:', nameField.value);
        console.log('email:', emailField.value);
        console.log('message:', messageField.value);

        feedback.textContent = '';
        feedback.classList.remove('error', 'success');
        [nameField, emailField, messageField].forEach(f => f.classList.remove('invalid'));

        let valid = true;
        if (!nameField.value.trim()) { nameField.classList.add('invalid'); valid = false; }
        if (!emailField.value.trim()) { emailField.classList.add('invalid'); valid = false; }
        if (!messageField.value.trim()) { messageField.classList.add('invalid'); valid = false; }

        if (!valid) {
            feedback.textContent = 'Completa todos los campos antes de enviar.';
            feedback.classList.add('error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value.trim())) {
            emailField.classList.add('invalid');
            feedback.textContent = 'Por favor, ingresa un correo electrónico válido.';
            feedback.classList.add('error');
            return;
        }

        feedback.textContent = '¡Formulario enviado con éxito!';
        feedback.classList.add('success');
        //form.reset();
    },);
 