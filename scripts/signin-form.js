let users = [];

function submitForm() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const description = document.getElementById('description').value;

    const strengths = [];
    const strengthCheckboxes = document.querySelectorAll('input[name="strength"]:checked');
    strengthCheckboxes.forEach(checkbox => {
        strengths.push(checkbox.value);
    });

    const user = {
        login: login,
        password: password,
        strengths: strengths,
        description: description
    };

    users.push(user);

    console.log(users);

    document.getElementById('login').value = '';
    document.getElementById('password').value = '';
    document.getElementById('description').value = '';
    strengthCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}