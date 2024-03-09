
function searchUsersByStrength(с) {
    function getUsersByHelpCategory(category) {
        return initialUsers.filter(user => user.helpAreas.includes(category));
    }
    event.preventDefault();
    const selectedCategory = document.getElementById('category').value;
    const users = localStorage.getItem('herHelpHubUsers');
    console.log(selectedCategory);
    const filteredSpecialists = users.filter(user => user.helpAreas.includes(selectedCategory));
    
        filteredSpecialists.forEach(specialist => 
            {let card = document.createElement('div');
        card.classList.add('card');
        card.textContent = `${specialist.name} | ${specialist.comment} | ${specialist.tel}`;
    
        resultsContainer.appendChild(card);
    });
}
