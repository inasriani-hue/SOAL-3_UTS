
// Mengambil tombol Dark Mode
const darkModeBtn = document.getElementById("darkModeBtn");

// Menjalankan fungsi ketika tombol diklik
darkModeBtn.addEventListener("click", function() {

    // Mengubah tema website
    document.body.classList.toggle("dark-mode");

    // Mengubah tulisan tombol
    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.innerHTML = "☀️ Light Mode";
    } else {
        darkModeBtn.innerHTML = "🌙 Dark Mode";
    }

});
