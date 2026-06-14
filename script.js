const form = document.getElementById('contact-form');
const messageBox = document.querySelector('.form-message');

if (form) {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!messageBox) return;

        const formData = new FormData(form);
        messageBox.textContent = 'Invio in corso...';
        messageBox.className = 'form-message';

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                messageBox.textContent = 'Richiesta inviata con successo! Ti risponderemo al più presto.';
                messageBox.classList.add('success');
                form.reset();
            } else {
                throw new Error('Errore durante l’invio. Riprova più tardi.');
            }
        } catch (error) {
            messageBox.textContent = 'Non è stato possibile inviare il modulo. Controlla la connessione e riprova.';
            messageBox.classList.add('error');
            console.error(error);
        }
    });
}