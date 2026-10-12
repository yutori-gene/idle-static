
# Kategori
Kerangka besar yang menggolongkan aksi dan item
- Mewakili penggolongan yang besar.
- Misalnya, kamu bisa mengaturnya sebagai kerangka bebas: jarak dekat, jarak jauh, sihir, ruang bawah tanah, pandai besi, bengkel, dan sebagainya.
- Aksi dan item ditempatkan langsung di bawah dunia dan dikaitkan lewat ID kategori.
___

## [_Informasi_](id/editor/information)
___

## Grup
Penggolongan grup tampilan kategori
- Terapkan salah satu yang didefinisikan di grup yang berada langsung di bawah dunia.
- Daftar kategori ditampilkan menurut urutan grup yang kamu atur.
- [_group_](id/editor/group)
___

## Status pembukaan awal
Status tampilan dan pembukaan awal elemen (otomatis naik ke status yang lebih tinggi bila syarat pemicuannya terpenuhi)
- secreted: Tidak tampil sama sekali di UI sampai semua requirements terpenuhi (tidak muncul di petunjuk, dan di daftar syarat/hadiah pun tersamarkan).
- hidden: Selama tidak dirujuk oleh elemen terbuka mana pun dan syaratnya belum tercapai, item disembunyikan sepenuhnya (namanya pun diredupkan dan tidak bisa dioperasikan).
- hinted (bawaan): Hanya namanya yang ditampilkan lebih dulu, tetapi tidak bisa dioperasikan sampai terbuka.
- released: Terbuka dan bisa dioperasikan sejak awal tanpa kaitan dengan syarat (dulu "tampil sejak awal").
___

## [_Syarat_](id/editor/requirement)
___

## Ada tidaknya level
Ada tidaknya fungsi level kategori
- Penanda apakah kategori ini punya level atau tidak.
- Bila aktif, kategori punya level; bila nonaktif, tidak punya.
- Sebagai contoh, ada cara pakai berupa mengaktifkannya pada kategori yang berbasis pengalaman seperti ilmu pedang dan sihir, lalu menonaktifkannya pada kategori tempat seperti ruang bawah tanah dan pandai besi.
- Bila nonaktif, pengalaman tidak masuk, dan dalam kalkulasi properti selisih level antara pemain dan aksi diperlakukan sebagai 0. Koreksi properti dari peralatan tetap berlaku seperti biasa.
- Kategori yang nonaktif juga dikeluarkan dari penilaian tamat (completed).
___

## Kemajuan bersamaan
Pengaturan pelaksanaan sejajar dengan kategori lain
- Penanda apakah aksi kategori ini bisa berjalan sejajar dengan aksi kategori lain.
- Bila aktif, aksi bisa berjalan bersamaan secara mandiri dari aksi kategori lain.
- Bila nonaktif, di seluruh kategori yang sama-sama disetel nonaktif hanya satu aksi yang bisa berjalan.
- Bila kamu memulai aksi baru di kategori yang nonaktif, aksi yang sedang berjalan tidak dibatalkan, melainkan didorong kembali ke awal antrian tunggu. Sisa jumlah eksekusinya dipertahankan, dan setelah aksi yang menyela selesai, aksi itu dilanjutkan dari sana.
___

## Latar
Pengaturan latar khas kategori
- Mengatur latar kategori ini.
- Saat kategori dipilih, gambar latar ikut berubah.
- Bila tidak diatur, latar dari desain dipakai apa adanya.
- Saat dimasukkan, gambar otomatis diperkecil hingga muat dalam 256×256 piksel.