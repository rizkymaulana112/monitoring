// Ganti URL ini sesuai dengan URL Realtime Database milik kamu
const firebaseURL = "https://rumahpintar-7535c-default-rtdb.asia-southeast1.firebasedatabase.app/sensor.json";

// Fungsi ambil data dari Firebase dan update tampilan
function ambilDataSensor() {
  fetch(firebaseURL)
    .then(response => response.json())
    .then(data => {
      if (data) {
        document.getElementById("nilai_suhu").textContent = `Suhu: ${data.suhu ?? '--'} °C`;
        document.getElementById("nilai_kelembaban").textContent = `Kelembaban: ${data.kelembaban ?? '--'} %`;
        document.getElementById("nilai_jarak").textContent = `Gas: ${data.gas ?? '--'} %`;
      } else {
        console.warn("Data kosong dari Firebase");
      }
    })
    .catch(error => {
      console.error("Gagal ambil data dari Firebase:", error);
    });
}

// Ambil data setiap 2 detik
setInterval(ambilDataSensor, 2000);

// Jalankan pertama kali saat halaman dimuat
ambilDataSensor();
