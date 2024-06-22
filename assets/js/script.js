// Função para validar formulário
function validarFormulario(idFormulario) {
    const form = document.getElementById(idFormulario);
    return form.checkValidity();
}

// Função para mostrar a seção de Endereço e ocultar Dados Pessoais
function mostrarEndereco() {
    if (validarFormulario('dados-pessoais-form')) {
        document.getElementById('dados-pessoais').classList.add('fade-out');
        setTimeout(function () {
            document.getElementById('dados-pessoais').classList.add('hidden');
            document.getElementById('dados-pessoais').classList.remove('fade-out');

            document.getElementById('endereco').classList.remove('hidden');
            document.getElementById('endereco').classList.add('fade-in');
        }, 500); // Tempo de animação ajustado para uma transição mais suave
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}

// Função para voltar da seção de Endereço para Dados Pessoais
function voltarDadosPessoais() {
    document.getElementById('endereco').classList.add('fade-out');
    setTimeout(function () {
        document.getElementById('endereco').classList.add('hidden');
        document.getElementById('endereco').classList.remove('fade-out');

        document.getElementById('dados-pessoais').classList.remove('hidden');
        document.getElementById('dados-pessoais').classList.add('fade-in');
    }, 500);
}

// Função para mostrar a seção de Cursos Pretendidos e ocultar Endereço
function mostrarCursos() {
    if (validarFormulario('endereco-form')) {
        document.getElementById('endereco').classList.add('fade-out');
        setTimeout(function () {
            document.getElementById('endereco').classList.add('hidden');
            document.getElementById('endereco').classList.remove('fade-out');

            document.getElementById('cursos').classList.remove('hidden');
            document.getElementById('cursos').classList.add('fade-in');
        }, 500);
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}

// Função para voltar da seção de Cursos Pretendidos para Endereço
function voltarEndereco() {
    document.getElementById('cursos').classList.add('fade-out');
    setTimeout(function () {
        document.getElementById('cursos').classList.add('hidden');
        document.getElementById('cursos').classList.remove('fade-out');

        document.getElementById('endereco').classList.remove('hidden');
        document.getElementById('endereco').classList.add('fade-in');
    }, 500);
}

// Função para mostrar a seção de Como Conheceu a Empresa e ocultar Cursos Pretendidos
function mostrarComoConheceu() {
    document.getElementById('cursos').classList.add('fade-out');
    setTimeout(function () {
        document.getElementById('cursos').classList.add('hidden');
        document.getElementById('cursos').classList.remove('fade-out');

        document.getElementById('como-conheceu').classList.remove('hidden');
        document.getElementById('como-conheceu').classList.add('fade-in');
    }, 500);
}

// Função para voltar da seção de Como Conheceu a Empresa para Cursos Pretendidos
function voltarCursos() {
    document.getElementById('como-conheceu').classList.add('fade-out');
    setTimeout(function () {
        document.getElementById('como-conheceu').classList.add('hidden');
        document.getElementById('como-conheceu').classList.remove('fade-out');

        document.getElementById('cursos').classList.remove('hidden');
        document.getElementById('cursos').classList.add('fade-in');
    }, 500);
}

// Função para exibir a mensagem de cadastro efetuado com sucesso
function exibirMensagem() {
    document.getElementById('como-conheceu').classList.add('fade-out');
    setTimeout(function () {
        document.getElementById('como-conheceu').classList.add('hidden');
        document.getElementById('como-conheceu').classList.remove('fade-out');

        document.getElementById('mensagem-sucesso').classList.remove('hidden');
        document.getElementById('mensagem-sucesso').classList.add('fade-in');
    }, 500);
}

// Função para cadastrar um novo aluno (reinicia o formulário)
function cadastrarNovoAluno() {
    window.location.href = 'index.html';
}

// Função para formatar automaticamente o campo de contato conforme o padrão (xx) xxxxx-xxxx ou (xx) xxxx-xxxx
function formatarContato(input) {
    let valor = input.value.replace(/\D/g, '');
    if (valor.length > 10) {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (valor.length > 5) {
        valor = valor.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    }
    input.value = valor;
}

// Função para formatar automaticamente o campo de CPF conforme o padrão xxx.xxx.xxx-xx
function formatarCPF(input) {
    let valor = input.value.replace(/\D/g, '');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{2})$/, '$1-$2');
    input.value = valor;
}

// Função para formatar automaticamente o campo de RG conforme o padrão xx.xxx.xxx-x
function formatarRG(input) {
    let valor = input.value.replace(/\D/g, '');
    valor = valor.replace(/(\d{2})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1})$/, '$1-$2');
    input.value = valor;
}

// Função para formatar automaticamente o campo de CEP conforme o padrão xxxxx-xxx
function formatarCEP(input) {
    let valor = input.value.replace(/\D/g, '');
    if (valor.length > 5) {
        valor = valor.substring(0, 5) + '-' + valor.substring(5, 8);
    }
    input.value = valor;
}

function pesquisarAluno() {
    const searchName = document.getElementById('search-name').value;
    if (searchName) {
        const resultsDiv = document.getElementById('search-results');
        resultsDiv.innerHTML = `<p>Resultados da pesquisa para: ${searchName}</p>`;
        resultsDiv.classList.remove('hidden');
    } else {
        alert('Por favor, digite o nome do aluno.');
    }
}

