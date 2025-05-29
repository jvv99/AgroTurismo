document.addEventListener('DOMContentLoaded', () => {
    // Elementos do Header
    const accountIcon = document.getElementById('account-icon');
    const accountDropdown = document.getElementById('account-dropdown');
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');
    const settingsIcon = document.getElementById('settings-icon');
    const settingsDropdown = document.getElementById('settings-dropdown');
    const plusIcon = document.getElementById('plus-icon');
    const publishTripModal = document.getElementById('publish-trip-modal');
    const closePublishModalButton = document.getElementById('close-publish-modal');
    const publishTripForm = document.getElementById('publish-trip-form');

    // Elementos do Modal de Compra
    const buyButtons = document.querySelectorAll('.buy-button');
    const purchaseModal = document.getElementById('purchase-modal');
    const closePurchaseModalButton = document.getElementById('close-purchase-modal');
    const modalSpotTitle = document.getElementById('modal-spot-title');
    const modalPrice = document.getElementById('modal-price');
    const modalTransport = document.getElementById('modal-transport');
    const modalAdditionalInfo = document.getElementById('modal-additional-info');
    const personalDataForm = document.getElementById('personal-data-form');

    // Dados de exemplo para as viagens (poderia vir de um banco de dados real)
    const tripDetails = {
        'fazenda-verde': {
            title: 'Fazenda Verde',
            price: 'R$ 350,00 por pessoa',
            transport: 'Ônibus fretado ou carro particular',
            additionalInfo: 'Inclui almoço com produtos da fazenda e guia turístico local.'
        },
        'vinicola-serra': {
            title: 'Vinícola da Serra',
            price: 'R$ 280,00 por pessoa',
            transport: 'Van executiva',
            additionalInfo: 'Tour guiado pela vinícola, degustação de 5 rótulos e tábua de frios.'
        },
        'sitio-colheita': {
            title: 'Sítio da Colheita',
            price: 'R$ 120,00 por pessoa',
            transport: 'Carro particular (fácil acesso)',
            additionalInfo: 'Oficina de geleias, piquenique e cesta de frutas para levar.'
        },
        'pousada-montanha': {
            title: 'Pousada da Montanha',
            price: 'R$ 600,00 (pacote 2 diárias)',
            transport: 'Carro particular (estradas de terra)',
            additionalInfo: 'Hospedagem com café da manhã, trilhas guiadas e observação de aves.'
        },
        'engenho-cana': {
            title: 'Engenho da Cana',
            price: 'R$ 180,00 por pessoa',
            transport: 'Ônibus de linha ou carro particular',
            additionalInfo: 'Visita ao engenho, degustação de cachaça e rapadura, apresentação cultural.'
        },
        'horta-organica': {
            title: 'Horta Orgânica Urbana',
            price: 'R$ 90,00 por pessoa',
            transport: 'Transporte público ou carro particular',
            additionalInfo: 'Workshop de jardinagem, almoço com produtos da horta e sementes para cultivo.'
        }
    };


    // Função para fechar todos os dropdowns/modais
    const closeAll = () => {
        accountDropdown.style.display = 'none';
        settingsDropdown.style.display = 'none';
        publishTripModal.style.display = 'none';
        purchaseModal.style.display = 'none'; // Fechar modal de compra também
        searchBar.classList.remove('active'); // Esconde a barra de pesquisa
        searchBar.value = ''; // Limpa o campo de pesquisa
    };

    // Evento de clique para o ícone da conta
    accountIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que o clique se propague para o document
        closeAll(); // Fecha outros elementos antes de abrir
        accountDropdown.style.display = accountDropdown.style.display === 'flex' ? 'none' : 'flex';
    });

    // Evento de clique para o ícone de pesquisa
    searchIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        closeAll(); // Fecha outros elementos
        searchBar.classList.toggle('active');
        if (searchBar.classList.contains('active')) {
            searchBar.focus(); // Coloca o foco na barra de pesquisa quando ela aparece
        }
    });

    // Evento de clique para o ícone de configuração
    settingsIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        closeAll(); // Fecha outros elementos
        settingsDropdown.style.display = settingsDropdown.style.display === 'flex' ? 'none' : 'flex';
    });

    // Evento de clique para o ícone de + (Publicar Viagem)
    plusIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        closeAll(); // Fecha outros elementos
        publishTripModal.style.display = 'block';
    });

    // Evento de clique para fechar o modal de Publicar Viagem
    closePublishModalButton.addEventListener('click', () => {
        publishTripModal.style.display = 'none';
        publishTripForm.reset(); // Limpa o formulário
    });

    // Evento de submissão do formulário de Publicar Viagem
    publishTripForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
        alert('Viagem publicada! (Esta é uma simulação)'); // Mensagem de exemplo
        publishTripModal.style.display = 'none';
        publishTripForm.reset(); // Limpa o formulário após a publicação
    });

    // Eventos de clique para os botões de COMPRA
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            closeAll(); // Fecha outros elementos
            const spotId = button.dataset.spot; // Pega o ID da viagem
            const details = tripDetails[spotId]; // Busca os detalhes no objeto tripDetails

            if (details) {
                modalSpotTitle.textContent = details.title;
                modalPrice.textContent = details.price;
                modalTransport.textContent = details.transport;
                modalAdditionalInfo.textContent = details.additionalInfo;
                purchaseModal.style.display = 'block'; // Exibe o modal de compra
            } else {
                alert('Detalhes da viagem não encontrados.');
            }
        });
    });

    // Evento de clique para fechar o modal de Compra
    closePurchaseModalButton.addEventListener('click', () => {
        purchaseModal.style.display = 'none';
        personalDataForm.reset(); // Limpa o formulário de dados pessoais
    });

    // Evento de submissão do formulário de dados pessoais (no modal de compra)
    personalDataForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
        // Aqui você coletaria os dados do formulário e os enviaria
        const fullName = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const cpf = document.getElementById('cpf').value;
        const rg = document.getElementById('rg').value;

        // Validação básica de CPF (apenas formato, não valida se é um CPF real)
        const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!cpfPattern.test(cpf)) {
            alert('Por favor, insira um CPF válido no formato 000.000.000-00');
            return;
        }

        alert(`Compra confirmada para ${fullName}!\nSeus dados: CPF: ${cpf}, RG: ${rg}\n(Esta é uma simulação)`);
        purchaseModal.style.display = 'none';
        personalDataForm.reset(); // Limpa o formulário
    });


    // Fechar dropdowns/modais ao clicar fora deles
    document.addEventListener('click', (event) => {
        if (!accountDropdown.contains(event.target) && event.target !== accountIcon) {
            accountDropdown.style.display = 'none';
        }
        if (!settingsDropdown.contains(event.target) && event.target !== settingsIcon) {
            settingsDropdown.style.display = 'none';
        }
        if (!searchBar.contains(event.target) && event.target !== searchIcon) {
            searchBar.classList.remove('active');
            searchBar.value = ''; // Limpa o campo de pesquisa
        }
        // Se o clique for fora do modal de publicação E não no ícone de mais
        if (!publishTripModal.contains(event.target) && event.target !== plusIcon) {
             publishTripModal.style.display = 'none';
             publishTripForm.reset();
        }
        // Se o clique for fora do modal de compra E não em um botão de compra
        // Nota: event.target é o elemento clicado, e buyButtons é uma NodeList
        const isClickOnBuyButton = Array.from(buyButtons).some(button => button.contains(event.target));
        if (!purchaseModal.contains(event.target) && !isClickOnBuyButton) {
            purchaseModal.style.display = 'none';
            personalDataForm.reset();
        }
    });

    // Funcionalidades das opções da conta (exemplo)
    const logoutOption = document.getElementById('logout-option');
    const manageAccountOption = document.getElementById('manage-account-option');

    logoutOption.addEventListener('click', () => {
        alert('Você clicou em Sair da conta!');
        closeAll();
    });

    manageAccountOption.addEventListener('click', () => {
        alert('Você clicou em Gerenciar sua conta!');
        closeAll();
    });
});