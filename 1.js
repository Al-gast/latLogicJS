// Seorang investor menginvestasikan modalnya sebesar 1 miliar ke beberapa instrumen keuangan. 350 juta ditempatkan ke deposito bank dengan keuntungan 3,5% per tahun, sedangkan 650 juta ditempatkan di obligasi negara sebesar 30% dengan keuntungan 13% per tahun, 35% ditempatkan di saham A dengan keuntungan 14,5% per tahun, dan sisanya ditempatkan di saham B dengan keuntungan 12,5% per tahun. Buatlah sebuah fungsi yang menghitung dan mencetak total uang investor setelah dua tahun.

const modalAwal = 1000000000
const dep = "deposito"
const deposito = 350000000
const untungDeposito = 0.035
const sisa_modal = 650000000
const obl = "obligasi"
const obligasi = sisa_modal * 0.3
const untungObligasi = 0.13
const shm_a = "Saham A"
const saham_a = sisa_modal * 0.35
const untungSahamA = 0.145
const shm_b = "Saham B"
const saham_b = sisa_modal * 0.35
const untungSahamB = 0.125
const tahunPenyimpanan = 2

function formatRupiah(amount) {
  const formattedAmount = amount.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  return formattedAmount
}

function hitungInvestasi(namaInstrumen, instrumen, returnPerTahun, lamaDisimpan){
  const keuntunganInvestasi = instrumen * returnPerTahun
  const totalKeuntunganInvestasi = keuntunganInvestasi * lamaDisimpan
  const hasilInvestasi = instrumen + totalKeuntunganInvestasi
  const hasilInvestasiRupiah = formatRupiah(hasilInvestasi)

  console.log(`Modal Awal ${namaInstrumen}`, formatRupiah(instrumen));
  console.log(`Return Pertahun ${returnPerTahun}`);
  console.log(`Lama Uang Disimpan di ${namaInstrumen}`, `${lamaDisimpan} tahun`);
  console.log(`Hasil ${namaInstrumen}`, hasilInvestasiRupiah);
  console.log("");
  return hasilInvestasi
}

function hasilDeposito() {
  const hasil = hitungInvestasi(dep, deposito, untungDeposito, tahunPenyimpanan);
  return hasil;
}

function hasilObligasi() {
  const hasil = hitungInvestasi(obl, obligasi, untungObligasi, tahunPenyimpanan);
  return hasil;
}

function hasilSahamA() {
  const hasil = hitungInvestasi(shm_a, saham_a, untungSahamA, tahunPenyimpanan);
  return hasil;
}

function hasilSahamB() {
  const hasil = hitungInvestasi(shm_b, saham_b, untungSahamB, tahunPenyimpanan);
  return hasil;
}

const totalHasilInvestasi =
  hasilDeposito() +
  hasilObligasi() +
  hasilSahamA() +
  hasilSahamB();

console.log("Modal Awal Investasi", formatRupiah(modalAwal));
console.log("Total Hasil Investasi:", formatRupiah(totalHasilInvestasi));