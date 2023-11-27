function nextStep(step) {
    if (step === 1) {
        // Armazenar o nome digitado
        nomeDigitado = document.getElementById('nome').value;
    }
    document.getElementById('step' + step).classList.remove('active');
    document.getElementById('step' + step).classList.add('d-none');
    document.getElementById('step' + (step + 1)).classList.add('active');
    document.getElementById('step' + (step + 1)).classList.remove('d-none');

    if (step === 1) {
        // Atualizar o texto na segunda etapa com o nome
        document.querySelectorAll('.nomeDigitado').forEach(element => {
          element.innerText = nomeDigitado;
        });
    }

    updateProgress(step + 1);
}

function prevStep(step) {
    document.getElementById('step' + step).classList.remove('active');
    document.getElementById('step' + step).classList.add('d-none');
    document.getElementById('step' + (step - 1)).classList.add('active');
    document.getElementById('step' + (step - 1)).classList.remove('d-none');
    updateProgress(step - 1);
}

function updateProgress(step) {
    const indicators = document.querySelectorAll('.progress-indicator li');
    indicators.forEach((indicator, index) => {
        if (index < step) {
            indicator.classList.remove('inactive');
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
            indicator.classList.add('inactive');
        }
    });
}