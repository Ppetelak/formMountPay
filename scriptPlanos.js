document.addEventListener('DOMContentLoaded', function () {
    const respostas = JSON.parse(localStorage.getItem('respostasFormulario'));

    let planoDestaque = 'telemedicina';
    let planoDestaque2 = 'care'


    // PLANO SUGERIDO DRIVERS E CARE
    if (
        (respostas.genero === 'Homem') &&
        respostas.dirige === 'Sim, e trabalho dirigindo' &&
        (
            (respostas.casado === 'Sou casado mas quero um Plano só para mim' || respostas.casado === 'Não sou casado') &&
            (respostas.filhos === 'Sim, mas quero um Plano só para mim' || respostas.filhos === 'Não tenho')
        ) &&
        respostas.dirigeQ === 'Carro ou Moto'
    ) {
        planoDestaque = 'drivers';
        planoDestaque2 = 'care'
    }
    // PLANO SUGERIDO DRIVERS E WOMAN
    else if (
        (respostas.genero === 'Mulher') &&
        respostas.dirige === 'Sim, e trabalho dirigindo' &&
        (
            (respostas.casado === 'Sou casado mas quero um Plano só para mim' || respostas.casado === 'Não sou casado') &&
            (respostas.filhos === 'Sim, mas quero um Plano só para mim' || respostas.filhos === 'Não tenho')
        ) &&
        respostas.dirigeQ === 'Carro ou Moto'
    ) {
        planoDestaque = 'drivers';
        planoDestaque2 = 'woman'
    }
    //PLANO SUGERIDO TRUCKER E CARE
    else if (
        (respostas.genero === 'Homem' || respostas.genero === 'Mulher') &&
        respostas.dirige === 'Sim, e trabalho dirigindo' &&
        (
            (respostas.casado === 'Sou casado mas quero um Plano só para mim' || respostas.casado === 'Não sou casado') &&
            (respostas.filhos === 'Sim, mas quero um Plano só para mim' || respostas.filhos === 'Não tenho')
        ) &&
        respostas.dirigeQ === 'Caminhão'
    ) {
        planoDestaque = 'trucker';
        planoDestaque2 = 'care';
    }
    // PLANO SUGERIDO WOMAN E CARE
    else if (
        respostas.genero === 'Mulher' &&
        (respostas.dirige === 'Não dirijo' || respostas.dirige === 'Sim, apenas para tarefas pessoais') &&
        (respostas.casado === 'Não sou casado' || respostas.casado === 'Sou casado mas quero um Plano só para mim') &&
        (respostas.filhos === 'Sim, mas quero um Plano só para mim' || respostas.filhos === 'Não tenho')
    ) {
        planoDestaque = 'woman';
        planoDestaque2 = 'care';
    }
    // PLANO SUGERIDO POPCLINICS E CARE
    else if (
        (respostas.genero === 'Mulher' || respostas.genero === 'Homem') &&
        (respostas.dirige === 'Não dirijo' || respostas.dirige === 'Sim, apenas para tarefas pessoais') &&
        respostas.casado === 'Sou casado e quero um Plano para mim e para meu cônjuge' &&
        respostas.filhos === 'Não tenho'
    ) {
        planoDestaque = 'popClinics';
        planoDestaque2 = 'care';
    }
    // PLANO SUGERIDO SMART HEALTH E WOMAN
    else if (
        (respostas.genero === 'Mulher') &&
        (respostas.dirige === 'Não dirijo' || respostas.dirige === 'Sim, apenas para tarefas pessoais') &&
        respostas.casado === 'Sou casado e quero um Plano para mim e para meu cônjuge' &&
        respostas.filhos === 'Sim, e quero um Plano para a família'
    ) {
        planoDestaque = 'smartHealth';
        planoDestaque2 = 'woman';
    }
    // PLANO SUGERIDO DRIVERS E SMART HEALTH
    else if (
        (respostas.genero === 'Homem' || respostas.genero === 'Mulher') &&
        respostas.dirige === 'Sim, e trabalho dirigindo' &&
        (
            (respostas.casado === 'Sou casado e quero um Plano para mim e para meu cônjuge') &&
            (respostas.filhos === 'Sim, e quero um Plano para a família')
        ) &&
        respostas.dirigeQ === 'Carro ou Moto'
    ) {
        planoDestaque = 'drivers';
        planoDestaque2 = 'smartHealth'
    }
    // PLANO SUGERIDO TRUCKER E SMART HEALTH
    else if (
        (respostas.genero === 'Homem' || respostas.genero === 'Mulher') &&
        respostas.dirige === 'Sim, e trabalho dirigindo' &&
        (
            (respostas.casado === 'Sou casado e quero um Plano para mim e para meu cônjuge') &&
            (respostas.filhos === 'Sim, e quero um Plano para a família')
        ) &&
        respostas.dirigeQ === 'Caminhão'
    ) {
        planoDestaque = 'trucker';
        planoDestaque2 = 'smartHealth'
    }
    else {
        planoDestaque = 'care'
        planoDestaque2 = 'telemedicina';
    }

    console.log("Planos em destaque:", planoDestaque, planoDestaque2);
    console.log({ respostas })

    const todosPlanos = document.querySelectorAll('.plano');
    todosPlanos.forEach(plano => {
        plano.classList.add('d-none');
    });

    const planoEmDestaque = document.querySelector(`.plano.${planoDestaque}`);
    const planoEmDestaque2 = document.querySelector(`.plano.${planoDestaque2}`);
    const destaqueDiv = document.querySelector('.destaque');
    
    if (planoEmDestaque && destaqueDiv) {
        destaqueDiv.innerHTML = "";
        planoEmDestaque.classList.remove('d-none');
        planoEmDestaque2.classList.remove('d-none');

        const coluna1 = document.createElement('div');
        coluna1.classList.add('col-md-6');
        const coluna2 = document.createElement('div');
        coluna2.classList.add('col-md-6');

        // Adicionando os planos nas respectivas colunas
        coluna1.appendChild(planoEmDestaque);
        coluna2.appendChild(planoEmDestaque2);

        // Adicionando as colunas na div de destaque
        destaqueDiv.appendChild(coluna1);
        destaqueDiv.appendChild(coluna2);

        const outrosPlanos = document.querySelectorAll(`.plano:not(.${planoDestaque}):not(.${planoDestaque2})`);
        outrosPlanos.forEach(plano => {
            plano.classList.remove('d-none');
        });
    } else {
        console.error("Plano em destaque ou div de destaque não encontrados. Verifique as classes e a lógica.");
    }
});
