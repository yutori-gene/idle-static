
# Preset
Kustomisasi tampilan elemen sistem
- Mengganti teks UI dan ikon yang sudah tertanam sebelumnya di mesin game (player).
- Hanya yang IDnya cocok dengan preset yang sudah ada yang menjadi sasaran penggantian. Menambahkan preset yang IDnya tidak cocok dengan ID mana pun yang ada tidak menimbulkan galat, tetapi tidak memengaruhi tampilan karena tidak ada tempat yang merujuknya.
- Hanya bidang yang kamu atur yang diganti. Misalnya bila kamu hanya mengatur ikon, untuk nama, warna, dan bidang lainnya dipakai yang asli.
- Penimpaan nama dan penjelasan lebih diutamakan daripada terjemahan tiap bahasa yang tertanam di player. String yang kamu timpa ditampilkan apa adanya di semua bahasa.
- Bila ingin mengubah kalimatnya per bahasa, tentukan di berkas terjemahan `translations/world` yang dihasilkan saat terjemahan diaktifkan. Yang itulah yang paling diutamakan.
___

## ID penanda
ID unik untuk menandai elemen
- Ini adalah ID untuk menandai tiap elemen secara unik.
- Ini adalah untaian karakter yang dipakai editor untuk membedakan elemen tersebut.
- Misalnya, item mana yang didapat saat sebuah aksi selesai ditentukan dengan ID.
- Karakter yang bisa dipakai adalah gabungan huruf, tanda hubung, dan angka, sepanjang 1 sampai 100 karakter.

!> Setelah game dibagikan, jangan mengubah ID yang sudah diatur. Bila diubah, ID tidak lagi cocok dengan data game yang ada dan game tidak berjalan sebagaimana mestinya.
___

### Nama yang ditampilkan
Nama tampilan yang dibuat otomatis dari ID
- Bila nama tidak diatur, tanda hubung diganti spasi dan tiap kata diubah menjadi huruf besar di awal serta huruf kecil setelahnya, lalu ditampilkan sebagai nama.
- Meski ID memuat huruf besar, semua selain huruf awal diubah menjadi huruf kecil.
- Untuk bahasa selain Inggris, isian nama perlu diatur satu per satu.
___

#### Contoh
Contoh nyata pengubahan ID
- Bila ID diatur `stylish-strong-axe`, namanya menjadi `Stylish Strong Axe`.
- Bila ID diatur `stylish-STRONG-axe`, namanya juga menjadi `Stylish Strong Axe`.
___

### Tidak boleh sama
Larangan ID yang sama di dalam tipe yang sama
- Karena dipakai untuk membedakan elemen, jangan sampai sama di dalam tiap tipe: kategori, aksi, item, grup, acara, skill, dan preset.
- Acara memperlakukan tugas, acara perubahan, dan acara tetap sebagai satu tipe, jadi di antara ketiganya pun jangan sampai sama.
- ID yang sama pada tipe yang berbeda tidak jadi masalah.
- Dunia yang memuat ID kembar akan menghasilkan galat saat validasi.
- [_type_](id/editor/type)
___

## Nama
Nama elemen yang ditampilkan
- Ini adalah nama elemen yang ditampilkan di dalam game.
- Bahasa selain Inggris juga bisa dimasukkan.
- Nama yang sama dengan elemen lain pun tidak masalah.
- Bisa dimasukkan sampai 20 karakter.
- Bila tidak muat pada lebar tampilan, bagian yang melebihi dipersingkat dengan `…`.
___

### Pengubahan otomatis dari ID
Fungsi yang membuat nama secara otomatis dari ID
- Bila dikosongkan, nama ditampilkan otomatis berdasarkan ID. Rinciannya lihat bagian sebelumnya.
___

## Penjelasan
Penjelasan rinci elemen
- Ini adalah penjelasan elemen yang ditampilkan di dalam game.
- Bahasa selain Inggris juga bisa dimasukkan. Teks yang panjang pun ditampilkan seluruhnya.
- Bila tidak ada penjelasan, kosongkan saja.
___

## Ikon
Pengaturan ikon yang mewakili elemen
- Sebagai ikon bisa diatur gambar, Iconify, atau emoji.
- Iconify adalah layanan yang menyediakan berbagai macam ikon.
- Bila beberapa di antaranya diatur sekaligus, yang ditampilkan mengikuti urutan prioritas gambar, Iconify, lalu emoji.
___

### Gambar
Memakai berkas gambar apa saja
- Ini adalah gambar yang mewakili elemen.
- Saat dimasukkan, gambar otomatis diperkecil hingga maksimal 60×60 piksel dan dikompresi ulang.
- Tidak diperlukan bila Iconify atau emoji sudah diatur.
___

#### Jenis berkas
Format berkas gambar yang didukung
- Jenis umum yang bisa ditampilkan browser dapat dipakai.
- JPEG, PNG, GIF, WebP, SVG, dan sebagainya.
- GIF dan AVIF diubah menjadi PNG. JPEG dan WebP diperkecil dengan format aslinya dipertahankan.
- SVG disematkan apa adanya tanpa diperkecil, jadi hindari berkas yang berukuran besar.
___

### Iconify
Pemakaian kumpulan ikon Iconify
- Ini adalah ikon yang mewakili elemen.
- Bila gambar sudah diatur, gambar itulah yang ditampilkan lebih dulu.
___

#### Cara mencari ikon
Cara memilih ikon dari Iconify
- Ikon yang bisa ditampilkan silakan cari di `Iconify`.
- Dengan pencarian ikon, ikon yang paling pas langsung ketemu.
- Saat kamu memilih ikon, penanda ikon itu seperti `game-icons:sword-wound` (jenis kumpulan ikon `:` nama ikon) akan tampil, jadi tempelkan apa adanya ke isian ikon ini.
![iconify-selection.png](../../resources/iconify-selection.png)
- [_iconify_](https://icon-sets.iconify.design)
___

### Emoji
Menampilkan ikon dengan emoji
- Menampilkan emoji sebagai ikon.
- Masukkan emoji Unicode apa adanya.
- Karena yang dipakai adalah emoji yang terpasang di lingkungan eksekusi, tampilannya sedikit berbeda tiap pengguna.
- Dengan Iconify kamu bisa mengatur emoji yang tidak bergantung pada tiap lingkungan
- Karakter selain emoji juga bisa ditampilkan, tetapi bila karakternya lebih dari satu tampilannya bisa berantakan.
- Misalnya, kamu memasukkan emoji seperti `🗡️` atau `⚔️`.
___

## Warna
Pengaturan warna tampilan elemen
- Sebagai warna elemen, warna ini diterapkan pada ikon elemen dan warna latarnya.
- Dipilih dari pemilih warna di editor.
- Hitam (`#000000`) diperlakukan sebagai nilai yang berarti "warna belum diatur". Nilai awal pemilih warna pun hitam ini.
- Bila kamu ingin tampilannya hitam, tentukan warna yang sedikit digeser seperti `#010101`.
___

### Pewarisan dari elemen induk
Penerusan pengaturan warna elemen induk
- Aksi, item, dan acara yang warnanya belum diatur mewarisi warna kategori tempatnya berada.
- Susunan pewarisannya sebagai berikut.
- Pada elemen yang warnanya diatur sendiri, warna itulah yang diutamakan. Warna itu tidak tertimpa meski kategorinya punya warna.
- Cara dasarnya adalah menentukan warna per kategori dan menyerahkan yang di bawahnya pada pewarisan. Warna sendiri diatur saat kamu ingin menonjolkan elemen tertentu.
- Bila pada aksi diatur atribut (attribute), warna yang diwarisi bukan warna kategori tempatnya berada, melainkan warna kategori yang ditunjuk pada atribut itu.
- Kategori sendiri tidak punya sumber pewarisan. Bila warna kategori dibiarkan hitam (`#000000`), kategori itu dan elemen di bawahnya yang warnanya belum diatur ditampilkan dengan warna tengah antara warna batang dan warna teks pada desain.
- Grup, skill, dan preset tidak mewarisi dan hanya memakai warna yang diatur pada dirinya sendiri.
```
world (basic.design)
└── category
    ├── action
    ├── item
    └── event
```
- [_type_](id/editor/type)
___

## Menyalin informasi
Menggandakan informasi elemen lain
- Menekan tombol `Copy Information` akan menyalin informasi elemen lain sekaligus ke elemen ini.
- Pilih tipe sumber salinan (kategori, aksi, item, grup, acara, skill, atau preset), lalu masukkan ID-nya.
- Semua isian termasuk ID penanda akan tertimpa. Setelah menyalin, ubahlah ID penanda menjadi ID yang tidak kembar.
- [_type_](id/editor/type)