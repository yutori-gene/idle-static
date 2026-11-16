
# Aksi
Elemen tindakan seperti pengumpulan, pembuatan, dan pertempuran
- Elemen yang mewakili tindakan seperti pengumpulan, pembuatan, jual beli, dan pertempuran.
- Setiap kali kamu bertindak, kamu memperoleh pengalaman dan levelmu naik.
- Kamu bisa mengaturnya agar item terpakai atau diperoleh setiap kali kamu bertindak.
- Pola tindakan ada beberapa macam.
___

## [_Informasi_](id/editor/information)
___

## Kategori
ID kategori tempat aksi bernaung
- Tentukan ID kategori tempat aksi ini bernaung.
___

## Disiplin
Kategori yang menerima pengalaman dan menjadi patokan kekuatan
- Untuk tiap aksi, kamu bisa mengatur kategori selain kategori tempatnya bernaung sebagai disiplin.
- Bila dibiarkan kosong, kategori tempatnya bernaung menjadi disiplinnya.
- Misalnya, bila pada aksi yang bernaung di kategori bernama Istana Raja Iblis kamu mengatur disiplin sihir, level dan properti kategori sihirlah yang dihitung dan diterapkan pada waktu penyelesaian serta kerusakan aksi itu.
- Pada aksi yang disiplinnya diatur, masukkan level yang dibutuhkan dari kategori disiplin ke level disiplin (`disciplineLevel`).
- Pengalaman saat berhasil dibagi ke kategori tempat aksi bernaung dan kategori yang diatur sebagai disiplin menurut rasio pengembalian pengalaman (`experienceReturnRate`) pada pengaturan umum.
- Efek item (koreksi properti, skill, dan konsumsi barang habis pakai) juga hanya diterapkan bila sasarannya kategori yang diatur sebagai disiplin. Efek yang menyasar kategori tempat aksi itu bernaung tidak diterapkan pada aksi yang disiplinnya diatur.
- Selama kategori yang diatur sebagai disiplin belum dibuka, aksinya juga tidak dibuka, meskipun kategori tempatnya bernaung sudah dibuka.
- Bila pada aksi itu sendiri belum diatur warna, warna ikon dan latarnya mewarisi warna kategori yang diatur sebagai disiplin, bukan warna kategori tempatnya bernaung.
- [_category_](id/editor/category)
___

## Grup
Penggolongan grup tampilan aksi
- Terapkan salah satu yang didefinisikan di grup yang berada langsung di bawah dunia.
- Daftar aksi ditampilkan menurut urutan grup yang kamu atur.
- [_group_](id/editor/group)
___

## Status pembukaan awal
Status tampilan dan pembukaan awal elemen (otomatis naik ke status yang lebih tinggi bila syarat pemicuannya terpenuhi)
- secreted: Tidak tampil sama sekali di UI sampai semua requirements terpenuhi (tidak muncul di petunjuk, dan di daftar syarat/hadiah pun tersamarkan).
- hidden: Selama tidak dirujuk oleh elemen terbuka mana pun dan syaratnya belum tercapai, item disembunyikan sepenuhnya (namanya pun diredupkan dan tidak bisa dioperasikan).
- hinted (bawaan): Hanya namanya yang ditampilkan lebih dulu, tetapi tidak bisa dioperasikan sampai terbuka.
- released: Terbuka dan bisa dioperasikan sejak awal tanpa kaitan dengan syarat (dulu "tampil sejak awal").
___

## Level
Level kesulitan aksi terhadap kategori tempatnya bernaung
- Kesulitan aksi dinyatakan dengan level kategori tempatnya bernaung.
- Pada aksi tanpa disiplin, saat dijalankan nilai ini dibandingkan dengan level kategori tempatnya bernaung untuk menghitung tiap properti.
- Pada aksi yang disiplinnya diatur, perhitungan properti memakai level disiplin (`disciplineLevel`), dan nilai ini hanya dipakai untuk menghitung pengalaman yang masuk ke kategori tempatnya bernaung dan untuk syarat level saat dijalankan.
- Misalnya, bila kamu menjalankan aksi yang lebih tinggi daripada levelmu sendiri, ada pengaruhnya seperti tingkat keberhasilan yang menurun.
- Selama syaratnya terpenuhi, aksi tetap bisa dijalankan meski level pemain lebih kecil daripada nilai ini.
- Namun bila `actionLevelLimit` di bagian umum (batas level aksi) aktif, nilai ini otomatis ditambahkan sebagai syarat atas level kategori, sehingga aksi tidak bisa dijalankan sampai levelnya sampai. Pada kategori yang tidak punya level, nilai itu tidak ditambahkan.
- [_property_](id/editor/property)
___

## Level disiplin
Level kesulitan aksi terhadap kategori disiplin
- Level yang dibutuhkan dari kategori disiplin pada aksi yang disiplinnya (`discipline`) diatur. Bila disiplin diatur, nilai `1` atau lebih wajib diisi.
- Tidak dipakai pada aksi tanpa disiplin. Biarkan tetap `0`.
- Saat dijalankan, nilai ini dibandingkan dengan level kategori disiplin untuk menghitung tiap properti dan pengalaman yang masuk ke kategori disiplin.
- Bila `actionLevelLimit` (batas level aksi) pada pengaturan umum diaktifkan, nilai ini otomatis ditambahkan sebagai syarat bersama level kategori tempat aksi bernaung (`level`).
- [_property_](id/editor/property)
- [_category_](id/editor/category)
___

## [_Syarat_](id/editor/requirement)
___

## Waktu yang dibutuhkan [Detik]
Waktu baku yang diperlukan untuk menjalankan aksi
- Waktu baku (dalam detik) yang diperlukan untuk melakukan aksi satu kali.
- Pada tipe `stamina`, ini adalah selang waktu untuk satu giliran (mengikis stamina kedua pihak masing-masing satu kali). Giliran yang memulihkan stamina setelah hasilnya ditentukan pun memakai selang yang sama.
- Pada pelaksanaan sebenarnya, nilainya berubah karena kalkulasi properti.
- [_property_](id/editor/property)
___

## Pengalaman [100 untuk level berikutnya]
Pengalaman yang diperoleh saat aksi berhasil
- Pengalaman baku yang diperoleh saat aksi dijalankan satu kali dan berhasil. 100 setara dengan pengalaman satu level.
- Dalam pertempuran, pengalaman diperoleh saat mengalahkan lawan, jadi sebaiknya diatur agak banyak.
- Pada pelaksanaan sebenarnya, nilainya berubah karena kalkulasi properti.
- Pada aksi yang disiplinnya diatur, pengalaman dihitung dari nilai ini dengan selisih level kategori tempatnya bernaung dan kategori disiplin masing-masing, lalu dibagi menurut rasio pengembalian pengalaman (`experienceReturnRate`) pada pengaturan umum.
- [_property_](id/editor/property)
___

## Tingkat keberhasilan [0-1]
Peluang keberhasilan saat aksi selesai
- Peluang untuk berhasil saat aksi selesai.
- Bila `1` selalu berhasil, dan bila `0` selalu gagal.
- Saat gagal pun item konsumsi tetap terpakai, tetapi pengalaman dan jumlah eksekusi tidak bertambah.
- Dari hadiah yang ada, hanya yang peluangnya (chance) disetel ke nilai positif yang diperoleh saat berhasil. Yang disetel ke nilai negatif hanya diperoleh saat gagal, jadi gagal belum tentu berarti tidak memperoleh apa pun.
- Pada pelaksanaan sebenarnya, nilainya berubah karena kalkulasi properti.
___

## Jumlah eksekusi maksimum [Kali]
Jumlah maksimum aksi dapat diselesaikan
- Batas atas jumlah aksi dapat berhasil dan diselesaikan.
- Bila `0` berarti tanpa batas.
- Setelah batas atas tercapai, aksi menjadi tidak dapat dijalankan.
___

## [_Perolehan_](id/editor/acquisition)
___

## Tipe kemajuan
Tipe pelaksanaan aksi
- Ada empat macam.

|Tipe|Isi tindakan|Stamina|Contoh|
|-|-|-|-|
|`persistent`|Tipe saat aksi dijalankan berulang secara terus-menerus. Setiap kali selesai satu kali, kamu memperoleh pengalaman dan hadiah.|Tidak berkaitan|Menebang kayu, menambang, memancing|
|`single`|Menjalankan aksi satu kali. Bila terhenti di tengah jalan, kemajuannya disimpan dan lain kali bisa dilanjutkan dari sana. Setelah selesai, pengguna menekan aksi konfirmasi dan menerima hasilnya.|Tidak berkaitan|Membuka peti harta karun, menguasai skill lewat membaca|
|`snap`|Tipe saat aksi dijalankan seketika. Aksi langsung selesai tanpa berlalunya waktu.|Tidak berkaitan|Barter, penggunaan item|
|`stamina`|Setiap kali waktu yang dibutuhkan berlalu, stamina pemain dan stamina lawan masing-masing berkurang. Saat stamina lawan habis, kamu memperoleh pengalaman dan hadiah. Saat stamina pemain habis, permainan berakhir dan semua aksi yang sedang berjalan dibatalkan.|Berkaitan|Pertempuran, pekerjaan yang mengandung bahaya|
___

## [_Nilai tempur_](id/editor/combat)
___

## [_Skill_](id/editor/skill)