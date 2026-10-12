
# Acara tetap
Pesan dan hadiah yang aktif pada momen yang sudah ditentukan
- Aktif pada momen yang sudah ditentukan, seperti saat dunia pertama kali dibuka atau saat permainan berakhir, lalu membuka layar khusus.
- Tiap momen disediakan satu, dan tidak bisa ditambah maupun dihapus. Momen yang tidak kamu pakai biarkan kosong.
- Tidak ditampilkan di misi maupun di daftar tugas. Yang tercapai bila syaratnya terpenuhi diatur dengan tugas.
- Bila momennya terpenuhi, acara akan aktif dan membuka layar khusus untuk menampilkan isinya.
- Hadiah diperoleh otomatis bersamaan dengan aktifnya acara. Tidak ada operasi penerimaan maupun pita seperti pada tugas, dan batas atas jenis item yang bisa dimiliki pun tidak diperiksa.
- Bila syarat (requirements) diatur, hadiah hanya diperoleh bila syarat itu terpenuhi pada saat acara aktif. Bila tidak diatur, hadiah diperoleh setiap kali acara aktif.
- Syarat hanya dilihat terpenuhi atau tidak, jadi meski peluang konsumsi (chance) diatur, item tidak berkurang.
- Saat aktif, kamu bisa mengubah level kategori, jumlah penjalanan aksi, dan jumlah kepemilikan item. Dengan mengatur jumlah bernilai minus, kamu juga bisa memakainya untuk hal seperti membuat barang bawaan hilang saat permainan berakhir.
- Bila nama, penjelasan, dan ikon dikosongkan, teks dan ikon bawaan yang tertanam di player yang dipakai.

|Momen|Syarat aktif|Pengulangan|
|-|-|-|
|`comebacked`|Saat kamu kembali setelah 1 detik atau lebih offline dan sedikitnya satu aksi selesai selama kamu pergi|Berkali-kali|
|`gameovered`|Saat stamina pemain habis dalam pertarungan|Berkali-kali|
|`welcomed`|Saat dunia ini dijalankan untuk pertama kalinya|Hanya sekali|
|`completed`|Saat level semua kategori mencapai nilai maksimum (maxCategoryLevels)|Hanya sekali|
|`obtained`|Saat aksi berjenis single (peti harta dan sebagainya) selesai dan diperiksa|Berkali-kali|
- [_task_](id/editor/task)
___

## Saat kembali
Aktif saat kembali dari offline
- Aktif saat kamu kembali setelah 1 detik atau lebih offline dan sedikitnya satu aksi selesai selama kamu pergi. Bila tidak ada satu pun penjalanan yang selesai, acara tidak aktif.
- Ditampilkan bersama ringkasan kemajuan selama kamu pergi.
___

### [_Informasi（Saat kembali）_](id/editor/information)
___

### Kategori（Saat kembali）
Tidak digunakan dalam acara
- Tidak ditampilkan di misi maupun di daftar tugas, sehingga kategori tempatnya bernaung tidak ditentukan.
- Kolom masukan tidak ditampilkan di editor.
___

### Momen（Saat kembali）
Momen saat acara terpicu (tetap)
- Terkunci pada `comebacked` dan tidak bisa diedit.
- Aktif berapa kali pun, tiap kali kamu kembali.
___

### Status tampilan awal（Saat kembali）
Status tampilan awal ikon acara (terpicunya ditentukan momen, dan pengaturan ini tidak membuatnya terpicu)
- Syarat terpicunya acara ditentukan oleh momen, dan bidang ini hanya memengaruhi tampilan ikon.
- secreted: Ikon tidak ditampilkan sampai semua requirements terpenuhi (terpicunya sendiri terjadi pada momennya).
- hidden dan hinted: Ikon diberi garis miring dan ditampilkan sebagai belum terbuka.
- released: Garis miringnya hilang dan ikon ditampilkan sebagai sudah terbuka.
___

### [_Syarat（Saat kembali）_](id/editor/requirement)
___

### Penjumlahan grup（Saat kembali）
Memperlakukan id pada syarat sebagai ID grup dan menilai dari nilai total elemen yang bernaung di dalamnya
- Bila diaktifkan, id yang kamu atur pada syarat (requirements) diperlakukan sebagai ID grup yang berada langsung di bawah dunia.
- Syarat bertipe kategori dinilai dari total level semua kategori yang bernaung di grup itu.
- Syarat bertipe aksi dinilai dari total jumlah eksekusi semua aksi yang bernaung di grup itu.
- Syarat bertipe item dinilai dari total jumlah kepemilikan semua item yang bernaung di grup itu.
- Elemen yang belum terbuka (selain released) tidak dihitung dalam total.
- Peluang konsumsi (chance) dan syarat peralatan (equipment) pada item diabaikan, dan jumlah kepemilikan pun tidak dikonsumsi. Keduanya hanya dipakai untuk penilaian.
- Bila dinonaktifkan, seperti sebelumnya, id pada syarat diperlakukan sebagai ID kategori, aksi, atau item satuan.
- [_group_](id/editor/group)
___

### [_Perolehan（Saat kembali）_](id/editor/acquisition)
___

### Grup tugas（Saat kembali）
Tidak digunakan dalam acara
- Tidak ditampilkan di misi maupun di daftar tugas, sehingga grup tidak ditentukan.
- Kolom masukan tidak ditampilkan di editor.
___

## Saat permainan berakhir
Aktif saat stamina habis dalam pertarungan
- Aktif saat stamina pemain habis dalam pertarungan.
- Bersamaan dengan itu, semua aksi yang sedang berjalan berhenti dan semua pesanan yang menunggu pun dibuang.
- Dengan mengatur jumlah hadiah bernilai minus, kamu bisa memberi harga yang harus dibayar saat permainan berakhir.
___

### [_Informasi（Saat permainan berakhir）_](id/editor/information)
___

### Kategori（Saat permainan berakhir）
Tidak digunakan dalam acara
- Tidak ditampilkan di misi maupun di daftar tugas, sehingga kategori tempatnya bernaung tidak ditentukan.
- Kolom masukan tidak ditampilkan di editor.
___

### Momen（Saat permainan berakhir）
Momen saat acara terpicu (tetap)
- Terkunci pada `gameovered` dan tidak bisa diedit.
- Aktif berapa kali pun, tiap kali permainan berakhir.
___

### Status tampilan awal（Saat permainan berakhir）
Status tampilan awal ikon acara (terpicunya ditentukan momen, dan pengaturan ini tidak membuatnya terpicu)
- Syarat terpicunya acara ditentukan oleh momen, dan bidang ini hanya memengaruhi tampilan ikon.
- secreted: Ikon tidak ditampilkan sampai semua requirements terpenuhi (terpicunya sendiri terjadi pada momennya).
- hidden dan hinted: Ikon diberi garis miring dan ditampilkan sebagai belum terbuka.
- released: Garis miringnya hilang dan ikon ditampilkan sebagai sudah terbuka.
___

### [_Syarat（Saat permainan berakhir）_](id/editor/requirement)
___

### Penjumlahan grup（Saat permainan berakhir）
Memperlakukan id pada syarat sebagai ID grup dan menilai dari nilai total elemen yang bernaung di dalamnya
- Bila diaktifkan, id yang kamu atur pada syarat (requirements) diperlakukan sebagai ID grup yang berada langsung di bawah dunia.
- Syarat bertipe kategori dinilai dari total level semua kategori yang bernaung di grup itu.
- Syarat bertipe aksi dinilai dari total jumlah eksekusi semua aksi yang bernaung di grup itu.
- Syarat bertipe item dinilai dari total jumlah kepemilikan semua item yang bernaung di grup itu.
- Elemen yang belum terbuka (selain released) tidak dihitung dalam total.
- Peluang konsumsi (chance) dan syarat peralatan (equipment) pada item diabaikan, dan jumlah kepemilikan pun tidak dikonsumsi. Keduanya hanya dipakai untuk penilaian.
- Bila dinonaktifkan, seperti sebelumnya, id pada syarat diperlakukan sebagai ID kategori, aksi, atau item satuan.
- [_group_](id/editor/group)
___

### [_Perolehan（Saat permainan berakhir）_](id/editor/acquisition)
___

### Grup tugas（Saat permainan berakhir）
Tidak digunakan dalam acara
- Tidak ditampilkan di misi maupun di daftar tugas, sehingga grup tidak ditentukan.
- Kolom masukan tidak ditampilkan di editor.
___

## Saat pertama kali dimulai
Aktif saat dunia pertama kali dibuka
- Aktif saat dunia ini dijalankan untuk pertama kalinya.
- Dipakai untuk menjelaskan latar dunia dan menyerahkan bekal awal yang diberikan saat mulai.
___

### [_Informasi（Saat pertama kali dimulai）_](id/editor/information)
___

### Kategori（Saat pertama kali dimulai）
Tidak digunakan dalam acara
- Tidak ditampilkan di misi maupun di daftar tugas, sehingga kategori tempatnya bernaung tidak ditentukan.
- Kolom masukan tidak ditampilkan di editor.
___

### Momen（Saat pertama kali dimulai）
Momen saat acara terpicu (tetap)
- Terkunci pada `welcomed` dan tidak bisa diedit.
- Aktif hanya sekali, saat pertama kali dijalankan.
___

### Status tampilan awal（Saat pertama kali dimulai）
Status tampilan awal ikon acara (terpicunya ditentukan momen, dan pengaturan ini tidak membuatnya terpicu)
- Syarat terpicunya acara ditentukan oleh momen, dan bidang ini hanya memengaruhi tampilan ikon.
- secreted: Ikon tidak ditampilkan sampai semua requirements terpenuhi (terpicunya sendiri terjadi pada momennya).
- hidden dan hinted: Ikon diberi garis miring dan ditampilkan sebagai belum terbuka.
- released: Garis miringnya hilang dan ikon ditampilkan sebagai sudah terbuka.
___

### [_Syarat（Saat pertama kali dimulai）_](id/editor/requirement)
___

### Penjumlahan grup（Saat pertama kali dimulai）
Memperlakukan id pada syarat sebagai ID grup dan menilai dari nilai total elemen yang bernaung di dalamnya
- Bila diaktifkan, id yang kamu atur pada syarat (requirements) diperlakukan sebagai ID grup yang berada langsung di bawah dunia.
- Syarat bertipe kategori dinilai dari total level semua kategori yang bernaung di grup itu.
- Syarat bertipe aksi dinilai dari total jumlah eksekusi semua aksi yang bernaung di grup itu.
- Syarat bertipe item dinilai dari total jumlah kepemilikan semua item yang bernaung di grup itu.
- Elemen yang belum terbuka (selain released) tidak dihitung dalam total.
- Peluang konsumsi (chance) dan syarat peralatan (equipment) pada item diabaikan, dan jumlah kepemilikan pun tidak dikonsumsi. Keduanya hanya dipakai untuk penilaian.
- Bila dinonaktifkan, seperti sebelumnya, id pada syarat diperlakukan sebagai ID kategori, aksi, atau item satuan.
- [_group_](id/editor/group)
___

### [_Perolehan（Saat pertama kali dimulai）_](id/editor/acquisition)
___

### Grup tugas（Saat pertama kali dimulai）
Tidak digunakan dalam acara
- Tidak ditampilkan di misi maupun di daftar tugas, sehingga grup tidak ditentukan.
- Kolom masukan tidak ditampilkan di editor.
___

## Saat tamat
Aktif saat semua kategori mencapai level maksimum
- Aktif saat level semua kategori mencapai nilai maksimum (maxCategoryLevels).
- Kategori yang bukan numeric (angka) dikecualikan dari penilaian. Karena itu, pada dunia yang tidak punya satu pun kategori angka, acara ini tidak aktif.
___

### [_Informasi（Saat tamat）_](id/editor/information)
___

### Kategori（Saat tamat）
Tidak digunakan dalam acara
- Tidak ditampilkan di misi maupun di daftar tugas, sehingga kategori tempatnya bernaung tidak ditentukan.
- Kolom masukan tidak ditampilkan di editor.
___

### Momen（Saat tamat）
Momen saat acara terpicu (tetap)
- Terkunci pada `completed` dan tidak bisa diedit.
- Aktif hanya sekali, saat syaratnya terpenuhi.
___

### Status tampilan awal（Saat tamat）
Status tampilan awal ikon acara (terpicunya ditentukan momen, dan pengaturan ini tidak membuatnya terpicu)
- Syarat terpicunya acara ditentukan oleh momen, dan bidang ini hanya memengaruhi tampilan ikon.
- secreted: Ikon tidak ditampilkan sampai semua requirements terpenuhi (terpicunya sendiri terjadi pada momennya).
- hidden dan hinted: Ikon diberi garis miring dan ditampilkan sebagai belum terbuka.
- released: Garis miringnya hilang dan ikon ditampilkan sebagai sudah terbuka.
___

### [_Syarat（Saat tamat）_](id/editor/requirement)
___

### Penjumlahan grup（Saat tamat）
Memperlakukan id pada syarat sebagai ID grup dan menilai dari nilai total elemen yang bernaung di dalamnya
- Bila diaktifkan, id yang kamu atur pada syarat (requirements) diperlakukan sebagai ID grup yang berada langsung di bawah dunia.
- Syarat bertipe kategori dinilai dari total level semua kategori yang bernaung di grup itu.
- Syarat bertipe aksi dinilai dari total jumlah eksekusi semua aksi yang bernaung di grup itu.
- Syarat bertipe item dinilai dari total jumlah kepemilikan semua item yang bernaung di grup itu.
- Elemen yang belum terbuka (selain released) tidak dihitung dalam total.
- Peluang konsumsi (chance) dan syarat peralatan (equipment) pada item diabaikan, dan jumlah kepemilikan pun tidak dikonsumsi. Keduanya hanya dipakai untuk penilaian.
- Bila dinonaktifkan, seperti sebelumnya, id pada syarat diperlakukan sebagai ID kategori, aksi, atau item satuan.
- [_group_](id/editor/group)
___

### [_Perolehan（Saat tamat）_](id/editor/acquisition)
___

### Grup tugas（Saat tamat）
Tidak digunakan dalam acara
- Tidak ditampilkan di misi maupun di daftar tugas, sehingga grup tidak ditentukan.
- Kolom masukan tidak ditampilkan di editor.
___

## Saat aksi sekali jalan selesai
Aktif saat aksi sekali jalan seperti peti harta selesai
- Aktif saat aksi berjenis single (peti harta dan sebagainya) selesai dan diperiksa.
- Terpisah dari hadiah aksi itu sendiri, kamu bisa menambahkan hadiah yang diatur di sini.
___

### [_Informasi（Saat aksi sekali jalan selesai）_](id/editor/information)
___

### Kategori（Saat aksi sekali jalan selesai）
Tidak digunakan dalam acara
- Tidak ditampilkan di misi maupun di daftar tugas, sehingga kategori tempatnya bernaung tidak ditentukan.
- Kolom masukan tidak ditampilkan di editor.
___

### Momen（Saat aksi sekali jalan selesai）
Momen saat acara terpicu (tetap)
- Terkunci pada `obtained` dan tidak bisa diedit.
- Aktif berapa kali pun, tiap kali aksi sekali jalan selesai.
___

### Status tampilan awal（Saat aksi sekali jalan selesai）
Status tampilan awal ikon acara (terpicunya ditentukan momen, dan pengaturan ini tidak membuatnya terpicu)
- Syarat terpicunya acara ditentukan oleh momen, dan bidang ini hanya memengaruhi tampilan ikon.
- secreted: Ikon tidak ditampilkan sampai semua requirements terpenuhi (terpicunya sendiri terjadi pada momennya).
- hidden dan hinted: Ikon diberi garis miring dan ditampilkan sebagai belum terbuka.
- released: Garis miringnya hilang dan ikon ditampilkan sebagai sudah terbuka.
___

### [_Syarat（Saat aksi sekali jalan selesai）_](id/editor/requirement)
___

### Penjumlahan grup（Saat aksi sekali jalan selesai）
Memperlakukan id pada syarat sebagai ID grup dan menilai dari nilai total elemen yang bernaung di dalamnya
- Bila diaktifkan, id yang kamu atur pada syarat (requirements) diperlakukan sebagai ID grup yang berada langsung di bawah dunia.
- Syarat bertipe kategori dinilai dari total level semua kategori yang bernaung di grup itu.
- Syarat bertipe aksi dinilai dari total jumlah eksekusi semua aksi yang bernaung di grup itu.
- Syarat bertipe item dinilai dari total jumlah kepemilikan semua item yang bernaung di grup itu.
- Elemen yang belum terbuka (selain released) tidak dihitung dalam total.
- Peluang konsumsi (chance) dan syarat peralatan (equipment) pada item diabaikan, dan jumlah kepemilikan pun tidak dikonsumsi. Keduanya hanya dipakai untuk penilaian.
- Bila dinonaktifkan, seperti sebelumnya, id pada syarat diperlakukan sebagai ID kategori, aksi, atau item satuan.
- [_group_](id/editor/group)
___

### [_Perolehan（Saat aksi sekali jalan selesai）_](id/editor/acquisition)
___

### Grup tugas（Saat aksi sekali jalan selesai）
Tidak digunakan dalam acara
- Tidak ditampilkan di misi maupun di daftar tugas, sehingga grup tidak ditentukan.
- Kolom masukan tidak ditampilkan di editor.