L = require('leaflet');
// Utwórz mapę
const map = L.map('map').setView([50.264173, 18.890753], 10); // Przykładowe centrowanie na regionie Polski

// Dodaj warstwę map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Załaduj dane JSON
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Dodaj markery z danych
        data.forEach(point => {
            L.marker([point.location.y, point.location.x], {
                title: point.type // Ustawienie tytułu markera
            }).addTo(map);
        });
    });
