const inputNama = document.getElementById('nama');
const inputNim = document.getElementById('nim');
const inputFakultas = document.getElementById('Fakultas');
const inputJurusan = document.getElementById('Jurusan');
const inputNotlpn = document.getElementById('Notlpn');
const inputEmail = document.getElementById('Email');

function addData() {
  const nama = inputNama.value;
  const nim = inputNim.value;
  const Fakultas = inputFakultas.value;
  const Jurusan = inputJurusan.value;
  const Notlpn = inputNotlpn.value;
  const Email = inputEmail.value;

  const tableData = document.getElementById('data-table');
  const row = document.createElement('tr');

  const value = [nim, nama, Fakultas, Jurusan, Notlpn, Email];

  for (let i = 0; i < value.length; i++) {
    const cell = document.createElement('td');
    cell.innerHTML = value[i];
    row.appendChild(cell);
  }

  tableData.appendChild(row);

  // Setelah menambahkan data, mengosongkan kolom input
  inputNama.value = '';
  inputNim.value = '';
  inputFakultas.value = '';
  inputJurusan.value = '';
  inputNotlpn.value = '';
  inputEmail.value = '';
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');

  const toggleBtn = document.querySelector('.toggle-btn');
  const closeBtn = document.querySelector('.close-btn');

  toggleBtn.style.display = toggleBtn.style.display === 'none' ? 'block' : 'none';
  closeBtn.style.display = closeBtn.style.display === 'block' ? 'none' : 'block';
}
