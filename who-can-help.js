let specialists = [{name: "Шатунов А.И.", profession: "Юрист", description: "Высшее образование (МГУ), специализация: Бракоразводные процессы", contacts: "Контакты: alexey.280284@yandex.ru"}, {name: "Карцева Т.У.", profession: "Психолог", description: "Высшее образование (РГПУ Герцена), специализация: кризисные ситуации, семейные консультации", contacts: "Контакты: ludmila.140300@yandex.ru"}, {name: "Лукомцева О.А.", profession: "HR-консультант", description: "Высшее образование (МФЦИ), специализация: поиск идеальной работы от недели до месяца", contacts: "Контакты: betterthanHHRU@yandex.ru"}, {name: "Миленов В.Д.", profession: "Тренер по управлению кризисными ситуациями", description: "Опыт работы: 5 лет, специализация: переезд в безопасное место, поиск жилья", contacts: "Контакты: SafetyisFirst@yandex.ru"}, {name: "Солнцева Е.И.", profession: "Социальный работник", description: "Высшее образование (ТГУ), опыт работы: 15 лет", contacts: "Контакты: stayTuned@yandex.ru"}];
//Функция для отображения специалистов
function showSpecialists (searchTerm) {
    let resultsContainer = document.getElementById("results");
    resultsContainer.textContent = '';
    let filteredSpecialists = specialists.filter (specialist => {
        return specialist.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    filteredSpecialists.forEach(specialist => 
        {let card = document.createElement('div');
    card.classList.add('card');
    card.textContent = `${specialist.name} | ${specialist.profession} | ${specialist.description} | ${specialist.contacts}`;

    resultsContainer.appendChild(card);
});
}

// Функция для сохранения специалистов в Local Storage
function saveToLocalStorage() {
    localStorage.setItem('specialists', JSON.stringify(specialists));
}

  // Обработчик события при вводе текста в поле поиска
document.querySelector('#button-search').addEventListener('click', function(event) {
    showSpecialists('');
    let card = document.querySelector('.card');
    card.classList.toggle('display')
});

  // Сохранение специалистов в Local Storage
saveToLocalStorage();