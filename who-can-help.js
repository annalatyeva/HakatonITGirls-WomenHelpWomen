
// function searchUsersByStrength(с) {
//         return initialUsers.filter(user => user.helpAreas.includes(category));
//     }
//     event.preventDefault();
//     const selectedCategory = document.getElementById('category').value;
//     const users = localStorage.getItem('herHelpHubUsers');
//     console.log(selectedCategory);
//     const filteredSpecialists = users.filter(user => user.helpAreas.includes(selectedCategory));
    

let resultsContainer = document.getElementById('results');
function searchUsersByStrength() {
    const category = document.getElementById('list-specialists').value;
    console.log(category);
    const users = JSON.parse(localStorage.getItem('herHelpHubUsers'));
    const filteredSpecialists = users.filter(user => user.helpAreas.includes(category));
    console.log(users);
        filteredSpecialists.forEach(specialist => 
            {let card = document.createElement('div');
        card.classList.add('card');
        card.textContent = `${specialist.name} | ${specialist.comment} | ${specialist.tel}`;
    
        resultsContainer.appendChild(card);
    });
}


