let trabalhaDirigindo = false;
let mensagem = document.getElementById('mensagem')

document.addEventListener('DOMContentLoaded', function () {

    const pergunta3Radios = document.querySelectorAll('input[name="pergunta3"]');
    pergunta3Radios.forEach(function (radio) {
        radio.addEventListener('change', function () {
            if (radio.value === 'Sim, e trabalho dirigindo') {
                trabalhaDirigindo = true;
                document.getElementById('opcoesDirigindo').style.display = 'block';
            } else {
                trabalhaDirigindo = false;
                document.getElementById('opcoesDirigindo').style.display = 'none';
            }
        });
    });
});

function nextStep(step) {
    if (step === 1) {
        // Verificar se o campo nome foi preenchido
        const nomeInput = document.getElementById('nome');
        if (!nomeInput.value.trim()) {
            mensagem.innerHTML = `<i class="bi bi-exclamation-diamond"></i> Digite seu nome para continuar`
            mensagem.classList.remove('d-none');
            return;
        }
        else {
            mensagem.classList.add('d-none');
        }
        // Armazenar o nome digitado
        nomeDigitado = nomeInput.value;
    }
    else if (step === 2) {
        // Verificar se um dos radios foi selecionado
        const radioInputs = document.querySelectorAll('input[name="pergunta2"]');
        let radioSelecionado = false;
    
        radioInputs.forEach(radio => {
            if (radio.checked) {
                radioSelecionado = true;
            }
        });
    
        if (!radioSelecionado) {
            mensagem.innerHTML = `<i class="bi bi-exclamation-diamond"></i> Selecione uma opção de gênero para continuar`;
            mensagem.classList.remove('d-none');
            return;
        } else {
            mensagem.classList.add('d-none');
        }
    }

    else if (step === 3) {
        // Verificar se a opção "Sim, e trabalho dirigindo" está selecionada
        const radioSimDirigindo = document.querySelector('input[name="pergunta3"][value="Sim, e trabalho dirigindo"]');
        
        if (radioSimDirigindo.checked) {
            const radioOpcoesDirigindo = document.querySelectorAll('input[name="perguntaDirigindo"]');
            let algumaOpcaoSelecionada = false;
    
            radioOpcoesDirigindo.forEach(radio => {
                if (radio.checked) {
                    algumaOpcaoSelecionada = true;
                }
            });
    
            if (!algumaOpcaoSelecionada) {
                mensagem.innerHTML = `<i class="bi bi-exclamation-diamond"></i> Selecione uma das opções de dirigir para continuar`;
                mensagem.classList.remove('d-none');
                return;
            } else {
                mensagem.classList.add('d-none');
            }
        } else {
            // Se a opção "Sim, e trabalho dirigindo" não estiver selecionada, limpe as opções de dirigir e oculte a seção
            trabalhaDirigindo = false;
            document.getElementById('opcoesDirigindo').style.display = 'none';
        }
    
        // Verificar se um dos radios foi selecionado
        const radioInputs = document.querySelectorAll('input[name="pergunta3"]');
        let radioSelecionado = false;
    
        radioInputs.forEach(radio => {
            if (radio.checked) {
                radioSelecionado = true;
            }
        });
    
        if (!radioSelecionado) {
            mensagem.innerHTML = `<i class="bi bi-exclamation-diamond"></i> Selecione uma das opções para continuar`;
            mensagem.classList.remove('d-none');
            return;
        } else {
            mensagem.classList.add('d-none');
        }
    }
    

    else if (step === 4) {
        // Verificar se um dos radios foi selecionado
        const radioInputs = document.querySelectorAll('input[name="pergunta4"]');
        let radioSelecionado = false;
    
        radioInputs.forEach(radio => {
            if (radio.checked) {
                radioSelecionado = true;
            }
        });
    
        if (!radioSelecionado) {
            mensagem.innerHTML = `<i class="bi bi-exclamation-diamond"></i> Selecione uma das opções para continuar`;
            mensagem.classList.remove('d-none');
            return;
        } else {
            mensagem.classList.add('d-none');
        }
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

document.getElementById('multistepForm').addEventListener('submit', function (event) {
    event.preventDefault();
    pegaRespostas();
});

function pegaRespostas(){

    const nome = document.getElementById('nome').value;
    const opcaoGenero = document.querySelector('input[name="pergunta2"]:checked').value;
    const opcaoDirige = document.querySelector('input[name="pergunta3"]:checked').value;
    const opcaoCasado = document.querySelector('input[name="pergunta4"]:checked').value;
    const opcaoFilhos = document.querySelector('input[name="pergunta5"]:checked').value;

    const inputDirigindo = document.querySelector('input[name="perguntaDirigindo"]:checked');
    const opcaoDirigeOque = inputDirigindo ? inputDirigindo.value : '';

    const respostas = ({
        nome: nome, 
        genero: opcaoGenero,
        dirige: opcaoDirige, 
        casado: opcaoCasado,
        filhos: opcaoFilhos,
        dirigeQ: opcaoDirigeOque
    })
    localStorage.setItem('respostasFormulario', JSON.stringify(respostas));
    window.location.href = 'planos.html';
}
