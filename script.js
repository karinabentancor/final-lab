// Escucha el evento submit del formulario
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe y recargue la página

    // Obtén los valores del formulario
    const name = document.querySelector('input[name="name"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Verifica que los campos no estén vacíos
    if (name && message) {
        // Crea un objeto con la recomendación
        const recommendation = {
            name: name,
            message: message
        };

        // Guardar la recomendación en localStorage
        let recommendations = JSON.parse(localStorage.getItem('recommendations')) || [];
        recommendations.push(recommendation);
        localStorage.setItem('recommendations', JSON.stringify(recommendations));

        // Crear una nueva tarjeta de recomendación
        createRecommendationCard(recommendation);

        
        alert("Thank you for submitting a recommendation!");

       
        document.querySelector('input[name="name"]').value = '';
        document.querySelector('textarea[name="message"]').value = '';
    }
});

function createRecommendationCard(recommendation) {
    const recommendationsContainer = document.querySelector('.recommendations-container');

    const recommendationCard = document.createElement('div');
    recommendationCard.classList.add('recommendation-card');

    const nameElement = document.createElement('h3');
    nameElement.textContent = recommendation.name;

    const messageElement = document.createElement('p');
    messageElement.textContent = recommendation.message;

    recommendationCard.appendChild(nameElement);
    recommendationCard.appendChild(messageElement);

    recommendationsContainer.appendChild(recommendationCard);
}

document.addEventListener('DOMContentLoaded', function() {
    const recommendations = JSON.parse(localStorage.getItem('recommendations')) || [];

    recommendations.forEach(function(recommendation) {
        createRecommendationCard(recommendation);
    });
});

window.onscroll = function() {
    let scrollButton = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};
