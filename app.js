// ตรวจสอบว่า browser รองรับ Geolocation API หรือไม่
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        // สร้างแผนที่
        var map = L.map('map').setView([latitude, longitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // เพิ่มตำแหน่งปัจจุบันของผู้ใช้บนแผนที่
        var marker = L.marker([latitude, longitude]).addTo(map);
        marker.bindPopup("You are here!").openPopup();
    }, error => {
        alert('Error: ' + error.message);
    });
} else {
    alert('Geolocation is not supported by your browser.');
}

// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(err => console.log('Service Worker registration failed: ', err));
}