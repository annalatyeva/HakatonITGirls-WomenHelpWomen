const Users = [
    {
        id: 1,
        login: 'svetaSS',
        password: 'adfdf',
        strenth: ['a', 'b', 'c'],
        description: 'ddccfdfd',
    },
    {
        id: 2,
        login: 'admin',
        password: 'admin1',
        strenth: ['a', 'b', 'd'],
        description: 'fddfdf',
    }
]

function GetsignInInfo () {
    event.preventDefault();
    let login = document.querySelector("#sign-login").value;
    let password = document.querySelector("#sign-password").value;
    let isUserFound = false;
    let result = 'gjkmpjdfntkm yt yfqlty';
    
    for (let i = 0; i < Users.length; i++) {
        if (Users[i].login === login) {
            Users[i].password === password ? result = 'вход' : result = 'неверный пароль';
            isUserFound = true;
        }
    }
    console.log(result);
}