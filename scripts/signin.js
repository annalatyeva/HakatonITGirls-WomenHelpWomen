function GetsignInInfo () {

    const loginInput = document.getElementById('login').value;
    const passwordInput = document.getElementById('password').value;
    
    const users = JSON.parse(localStorage.getItem('herHelpHubUsers')) || [];
    
    const user = users.find(user => user.login === loginInput);
    
    if (user) {
        if (user.password === passwordInput) {
            alert('Вход выполнен!');
        } else {
            alert('Пароль не совпадает.');
        }
    } else {
        alert('Пользователь не найден.');
    }
}