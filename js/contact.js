// Initialize Leaflet Map
        const mapEl = document.getElementById("map");
        const lat = mapEl.dataset.lat;
        const lng = mapEl.dataset.lng;
        const zoom = mapEl.dataset.zoom;
        const popupText = mapEl.dataset.popup;

        const map = L.map('map').setView([lat, lng], zoom);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        L.marker([lat, lng]).addTo(map)
            .bindPopup(popupText)
            .openPopup();