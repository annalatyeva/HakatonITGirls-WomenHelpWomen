function setInitialUsersData() {
    const initialUsers = [
    {
        login: "superwomen1",
        password: "password1",
        name: "Фиона Великолепная",
        tel: "89999999991",
        email: "test1@test.ru",
        city: "Москва",
        helpAreas: [1, 2, 3],
        comment: "Дополнительный комментарий 1"
    },
    {
        login: "superwomen2",
        password: "password2",
        name: "Алиса Чудесная",
        tel: "89999999992",
        email: "test2@test.ru",
        city: "Санкт-Петербург",
        helpAreas: [4, 5, 6],
        comment: "Дополнительный комментарий 2"
    },
    {
        login: "superwomen1",
        password: "password1",
        name: "Фиона Великолепная",
        tel: "89999999991",
        email: "test1@test.ru",
        city: "Москва",
        helpAreas: [7, 8, 9],
        comment: "Дополнительный комментарий 1"
    },
    {
        login: "superwomen2",
        password: "password2",
        name: "Алиса Чудесная",
        tel: "89999999992",
        email: "test2@test.ru",
        city: "Санкт-Петербург",
        helpAreas: [10, 11, 1],
        comment: "Дополнительный комментарий 2"
    },
    {
        login: "superwomen3",
        password: "password3",
        name: "Эльза Замороженная",
        tel: "89999999993",
        email: "test3@test.ru",
        city: "Киев",
        helpAreas: [2, 3, 4],
        comment: "Дополнительный комментарий 3"
    },
    {
        login: "superwomen4",
        password: "password4",
        name: "Мери Поппинс",
        tel: "89999999994",
        email: "test4@test.ru",
        city: "Лондон",
        helpAreas: [5, 6, 7],
        comment: "Дополнительный комментарий 4"
    },
    {
        login: "superwomen5",
        password: "password5",
        name: "Мэрилин Монро",
        tel: "89999999995",
        email: "test5@test.ru",
        city: "Нью-Йорк",
        helpAreas: [8, 9, 10],
        comment: "Дополнительный комментарий 5"
    },
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
            helpAreas.push(checkbox.value);
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
    
        let users = getUsersFromLocalStorage();
    
        users.push(user);

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
}

if (!localStorage.getItem('herHelpHubUsers')) {
    setInitialUsersData();
}


