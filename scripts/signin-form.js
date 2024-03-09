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

function submitForm() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const description = document.getElementById('description').value;

    const strengths = [];
    const checkedSrengths = document.querySelectorAll('input[name="strength"]:checked');
    checkedSrengths.forEach(checkbox => {
        strengths.push(checkbox.value);
    });

    const user = {
        login: login,
        password: password,
        strengths: strengths,
        description: description
    };

    let users = getUsersFromLocalStorage();

    users.push(user);

    saveUsersToLocalStorage(users);

    document.getElementById('login').value = '';
    document.getElementById('password').value = '';
    document.getElementById('description').value = '';
    strengthCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    console.log(users);
}

if (!localStorage.getItem('herHelpHubUsers')) {
    setInitialUsersData();
}


