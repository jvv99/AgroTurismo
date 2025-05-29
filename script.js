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

    // Função para fechar todos os dropdowns/modais
    const closeAll = () => {
        accountDropdown.style.display = 'none';
        settingsDropdown.style.display = 'none';
        publishTripModal.style.display = 'none';
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
        if (!publishTripModal.contains(event.target) && event.target !== plusIcon) {
             publishTripModal.style.display = 'none';
             publishTripForm.reset();
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