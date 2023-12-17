document.addEventListener('DOMContentLoaded', function () {
  // Menggunakan event 'keypress' pada input
  document.getElementById('username').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.getElementById('password').focus();
    }
  });

  document.getElementById('password').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      login(); // Panggil fungsi login saat tombol Enter ditekan pada password
    }
  });
});
function login() {
  // Mendapatkan nilai dari input username dan password
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Pasangan username dan password yang valid
  var validCredentials = [
    { username: 'asep', password: '123456' },
    { username: 'sarahnova', password: '071105' },
    { username: 'devita', password: '140420' },
    // Tambahkan pasangan username dan password baru di sini
  ];

  // Lakukan validasi
  var isValid = false;
  for (var i = 0; i < validCredentials.length; i++) {
    if (username === validCredentials[i].username && password === validCredentials[i].password) {
      isValid = true;
      break;
    }
  }

  if (isValid) {
    alert('Login berhasil!');
    window.location.href = 'index.html'; // Ganti dengan nama halaman yang Anda inginkan
  } else {
    alert('Login gagal. Coba lagi.');
  }
}
