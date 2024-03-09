function setInitialUsersData() {
    const initialUsers = [
        {
            login: 'user1',
            password: 'password1',
            strengths: ['strength1', 'strength2'],
            description: 'Description for user1'
        },
        {
            login: 'user2',
            password: 'password2',
            strengths: ['strength3'],
            description: 'Description for user2'
        }
    ];

    localStorage.setItem('herHelpHubUsers', JSON.stringify(initialUsers));
}

function saveUsersToLocalStorage(users) {
    localStorage.setItem('herHelpHubUsers', JSON.stringify(users));
}

function getUsersFromLocalStorage() {
    const users = localStorage.getItem('herHelpHubUsers');
    return users ? JSON.parse(users) : [];
}

function registrationUser() {
        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;
        const name = document.getElementById('name').value;
        const tel = document.getElementById('tel').value;
        const email = document.getElementById('email').value;
        const city = document.getElementById('city').value;
    
        const helpAreas = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            helpAreas.push(checkbox.name);
        });
    
        const comment = document.querySelector('textarea[name="comment"]').value;
    
        const user = {
            login: login,
            password: password,
            name: name,
            tel: tel,
            email: email,
            city: city,
            helpAreas: helpAreas,
            comment: comment
        };
    
        // Получение массива пользователей из localStorage
        let users = getUsersFromLocalStorage();
    
        // Добавление нового пользователя в массив
        users.push(user);
    
        // Сохранение обновленного массива пользователей в localStorage
        saveUsersToLocalStorage(users);
    

        document.getElementById('login').value = '';
        document.getElementById('password').value = '';
        document.getElementById('name').value = '';
        document.getElementById('tel').value = '';
        document.getElementById('email').value = '';
        document.getElementById('city').value = '';
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        document.querySelector('textarea[name="comment"]').value = '';
    
        console.log(users); // Вывод обновленного массива пользователей в консоль
}

if (!localStorage.getItem('herHelpHubUsers')) {
    setInitialUsersData();
}


