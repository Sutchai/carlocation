const map = L.map('map').setView([0, 0], 2); // กำหนดพิกัดเริ่มต้น

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

function sendLocation(deviceName) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const locationData = {
                deviceName: deviceName,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };

            // แสดงตำแหน่งบนแผนที่
            L.marker([locationData.latitude, locationData.longitude])
                .addTo(map)
                .bindPopup(locationData.deviceName)
                .openPopup();
            
            console.log('Location sent:', locationData);
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}

// เริ่มการติดตามตำแหน่งเมื่อคลิกปุ่ม
document.getElementById('startTracking').addEventListener('click', function() {
    const deviceName = document.getElementById('deviceName').value;
    if (deviceName) {
        sendLocation(deviceName);
    } else {
        alert('Please enter a device name.');
    }
});
