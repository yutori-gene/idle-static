
# Item
Elemen barang seperti peralatan dan barang konsumsi
- Elemen yang berkaitan dengan kepemilikan barang seperti peralatan, barang konsumsi, dan barang berharga.
- Slot peralatan dibuat per grup pada tiap kategori, dan dari item pada slot yang sama hanya satu yang bisa dipasang. Item juga bisa dibuat agar tidak bisa dipasang.
- Karena jumlah kepemilikan itu sendiri adalah kemajuan, item juga bisa dipakai seperti penanda atau penghitung. Bila dibuat sebagai item tanpa efek yang juga tidak bisa dipasang, item menjadi elemen yang sekadar menghitung angka.
___

## [_Informasi_](id/editor/information)
___

## Kategori
ID kategori tempat item bernaung
- Tentukan ID kategori tempat item ini bernaung. Item berjajar di daftar item kategori yang ditentukan, dan slot peralatan pun dibuat per kategori.
- Bila warna tidak diatur pada item itu sendiri, item mewarisi warna kategori.
- Sasaran yang dikenai efek properti bisa ditentukan terpisah dari kategori tempatnya bernaung, sehingga item dari kategori lain pun bisa memberi efek.
- [_category_](id/editor/category)
- [_property_](id/editor/property)
___

## Grup
Klasifikasi grup tampilan item
- Terapkan salah satu yang didefinisikan di grup yang berada langsung di bawah dunia.
- Daftar item ditampilkan sesuai urutan grup yang kamu atur.
- Bila dikosongkan, item tidak dikelompokkan.
- [_group_](id/editor/group)
___

## Status pembukaan awal
Status tampilan dan pembukaan awal elemen (otomatis naik ke status yang lebih tinggi bila syarat pemicuannya terpenuhi)
- secreted: Tidak tampil sama sekali di UI sampai semua requirements terpenuhi (tidak muncul di petunjuk, dan di daftar syarat/hadiah pun tersamarkan).
- hidden: Selama tidak dirujuk oleh elemen terbuka mana pun dan syaratnya belum tercapai, item disembunyikan sepenuhnya (namanya pun diredupkan dan tidak bisa dioperasikan).
- hinted (bawaan): Hanya namanya yang ditampilkan lebih dulu, tetapi tidak bisa dioperasikan sampai terbuka.
- released: Terbuka dan bisa dioperasikan sejak awal tanpa kaitan dengan syarat (dulu "tampil sejak awal").
- Item yang sudah sekali saja didapat akan tetap terbuka tanpa kaitan dengan pengaturan ini maupun syarat.
- Sebaliknya, item yang tidak diatur satu syarat pun tidak akan terbuka sampai didapat, kecuali dijadikan `released`. Untuk item yang ingin kamu buat agar dibeli, pastikan syaratnya diatur.
___

## Harga beli [Koin]
Pengaturan harga pembelian item
- Jumlah mata uang yang dibayarkan saat membeli 1 item. Nilai bawaannya `-1` (tidak bisa dibeli).
- Item yang belum terbuka tidak bisa dibeli meski harganya sudah diatur.
- Jumlah yang bisa dibeli sekaligus adalah yang lebih kecil antara jumlah yang terbeli dengan mata uang yang dimiliki dan sisa sampai jumlah kepemilikan maksimum.

|Harga beli|Perlakuan|
|-|-|
|0|Tidak bisa dibeli|
|Nilai lebih besar dari 0|Harga saat bisa dibeli|
|Nilai lebih kecil dari 0 (misalnya -1)|Tidak bisa dibeli (diperlakukan sama seperti 0)|
___

## Harga jual [Koin]
Pengaturan harga penjualan item
- Jumlah mata uang yang diterima saat menjual 1 item. Nilai bawaannya `0` (tidak bisa dijual).
- Mata uang yang diterima sama seperti saat membeli, yaitu yang ditentukan oleh ID mata uang jual beli.
- Harga jual tidak ditentukan otomatis dari harga beli, jadi bila ingin item bisa dijual pastikan nilainya diatur.
- Nilai negatif tidak bisa diatur.

|Harga jual|Perlakuan|
|-|-|
|0|Tidak bisa dijual|
|Nilai lebih besar dari 0|Bisa dijual dengan harga itu|
___

## Jumlah kepemilikan maksimum [Buah]
Batas jumlah kepemilikan maksimum item
- Bila 0, jumlah yang bisa dimiliki tidak dibatasi. Nilai bawaannya `0`.
- Bila 1 atau lebih, item hanya bisa dimiliki sampai jumlah itu. Bila batasnya tercapai, jumlah kepemilikan tidak bertambah meski item didapat lagi.
- Ini juga menjadi batas jumlah yang bisa dibeli.
- Bila jumlah kepemilikan pada data simpanan melebihi batas, jumlahnya dikurangi sampai batas saat dimuat.
___

## Tipe peralatan
Pengaturan tipe terkait pemasangan, efek, dan konsumsi item
- Pada item `necessary` dan `consumable`, grupnya otomatis menjadi slot peralatan kategori.
- Di dalam grup yang sama hanya satu item yang bisa dipasang. Bila item baru dipasang, peralatan yang sudah ada di grup yang sama otomatis dilepas.
- Urutan slot peralatan mengikuti urutan definisi pada daftar grup dunia.
- `unnecessary` memberi efek terlepas dari dipasang atau tidak, dan besarnya efek sebanding dengan jumlah kepemilikan (0 buah tanpa efek, n buah menjadi n kali lipat).
- `consumable` hanya dikonsumsi ketika properti item itu memberi efek pada aksi yang dieksekusi, sebanyak 1 buah tiap satu aksi. Pada aksi yang tidak terjangkau efeknya, item tidak berkurang.
- Item yang habis dikonsumsi sampai 0 otomatis dilepas dari peralatan.
- Untuk memasangnya, syarat item itu dan syarat kategori harus sama-sama terpenuhi.

|Nilai|Pemasangan|Pemberian efek|Konsumsi|Contoh|
|-|-|-|-|-|
|`necessary`|Perlu|Hanya selama dipasang (untuk 1 buah)|Tidak|Peralatan seperti pedang dan baju zirah|
|`consumable`|Perlu|Hanya selama dipasang (untuk 1 buah)|Dikonsumsi saat aksi dieksekusi|Item yang dikonsumsi untuk mendapat efek, seperti ramuan|
|`unnecessary`|Tidak perlu|Selalu selama dimiliki (sebanding dengan jumlah kepemilikan)|Tidak|Item pasif yang memberi efek cukup dengan dimiliki|
|`impossible`|Tidak bisa|Tidak ada|Tidak|Item tanpa efek seperti bahan dan rongsokan|
___

## [_Syarat_](id/editor/requirement)
___

## [_Properti_](id/editor/property)
___

## ID mata uang jual beli
ID mata uang yang dipakai untuk jual beli item ini
- Tentukan ID mata uang (coins) yang dipakai bersama untuk harga beli dan harga jual.
- Bila dikosongkan, atau bila ditentukan ID yang tidak ada di daftar mata uang, mata uang utama (yang pertama di coins) yang dipakai.
___

## [_Skill_](id/editor/skill)