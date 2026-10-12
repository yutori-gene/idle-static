
# Properti
Pengaturan efek yang dimiliki item
- Ini adalah isian efek yang bisa diatur pada item.
- Item dengan tipe peralatan `necessary` atau `consumable` hanya menerapkan efeknya selama dipasang. `unnecessary` menerapkan efeknya cukup dengan dimiliki, dan besarnya efek sebanding dengan jumlah kepemilikan (dua kali lipat bila memiliki 2).
- Karena pada efek `unnecessary` jumlah kepemilikan langsung menjadi pengali, `maximum` (jumlah kepemilikan maksimum) menjadi batas atas efeknya. Saat menyeimbangkan, aturlah bersama `maximum`.
- Nilai isian mana pun dihitung sebagai penyesuaian selisih level antara level pemain dan level aksi.
- Misalnya, bila nilai serangan 10, serangan dihitung seolah-olah level pemain 10 lebih tinggi daripada level aksi. Nilai negatif bekerja sebaliknya.
- Seberapa besar pengaruh selisih level ditentukan oleh `propertyRatio` di bagian umum (bawaannya 2), dan berubah sebesar pengali itu setiap 10 selisih level.
- Bila `numeric` kategori tidak aktif, selisih level yang sebenarnya dianggap 0, sehingga nilai yang diatur di sini langsung menjadi selisih level.
- Isian yang bekerja lewat pembagian, seperti waktu yang dibutuhkan dan kerusakan yang diterima, mentok pada 100 kali (untuk waktu yang dibutuhkan, sampai seperseratus).
- Pada item yang harus dipasang, hanya satu yang terpasang di tiap grup peralatan yang memberi efek.
- Item dengan jumlah kepemilikan 0 tidak memberi efek, apa pun tipe peralatannya.
- attack, defence, accuracy, evasion, dan restore hanya berlaku pada aksi bertipe `stamina`.

|Properti|Rincian efek|
|-|-|
|speed|Memperpendek waktu yang dibutuhkan aksi. Waktu yang dibutuhkan berubah berbanding terbalik dengan selisih level (pengali bekerja setengahnya).|
|chance|Mengubah peluang keberhasilan aksi. Pengali dikenakan pada perbandingan berhasil dan gagal, sehingga tidak pernah melewati `100`%.|
|experience|Mengubah pengalaman yang diperoleh. Naik sebanding dengan selisih level (perhitungannya terbalik: makin tinggi level aksi, makin banyak yang didapat).|
|attack|Mengubah kerusakan stamina yang diberikan kepada lawan. (hanya aksi stamina)|
|defence|Mengurangi kerusakan stamina yang diterima dari lawan (pengali bekerja setengahnya). (hanya aksi stamina)|
|accuracy|Menurunkan tingkat meleset serangan. (hanya aksi stamina)|
|evasion|Mengubah tingkat menghindar dari serangan lawan (pengali bekerja setengahnya). (hanya aksi stamina)|
|restore|Mengubah jumlah stamina yang pulih saat aksi berakhir. Makin dekat ke penuh, makin landai kenaikannya. (hanya aksi stamina)|
___

## Kategori
Kategori tempat properti ini diterapkan
- Atur ID kategori tempat properti ini diterapkan.
- Bila diatur `*`, properti diterapkan ke seluruh kategori.
- Bila dikosongkan, properti diterapkan ke kategori tempat item itu berada.
- Bila kamu mengatur ID kategori lain, efeknya bekerja pada aksi kategori tersebut. Item itu sendiri boleh berada di kategori mana pun.
___

## Serangan [Selisih level]
Koreksi terhadap kerusakan stamina yang diberikan kepada lawan (hanya berlaku pada aksi stamina)
- Kerusakan serangan dihitung seolah-olah level pemain lebih tinggi daripada level aksi sebesar nilai ini.
___

## Pertahanan [Selisih level]
Koreksi terhadap kerusakan stamina yang diterima dari lawan (hanya berlaku pada aksi stamina)
- Kerusakan yang diterima dihitung seolah-olah level pemain lebih tinggi daripada level aksi sebesar nilai ini. Makin tinggi nilainya, makin berkurang kerusakan yang diterima.
___

## Akurasi [Selisih level]
Koreksi terhadap tingkat meleset serangan (hanya berlaku pada aksi stamina)
- Tingkat meleset dihitung seolah-olah level pemain lebih tinggi daripada level aksi sebesar nilai ini. Makin tinggi nilainya, makin rendah tingkat meleset.
___

## Menghindar [Selisih level]
Koreksi terhadap tingkat menghindar dari serangan lawan (hanya berlaku pada aksi stamina)
- Tingkat menghindar dihitung seolah-olah level pemain lebih tinggi daripada level aksi sebesar nilai ini. Makin tinggi nilainya, makin mudah menghindar dari serangan lawan.
___

## Pemulihan [Selisih level]
Koreksi terhadap jumlah stamina yang pulih (hanya berlaku pada aksi stamina)
- Jumlah stamina yang pulih dihitung seolah-olah level pemain lebih tinggi daripada level aksi sebesar nilai ini.
___

## Kecepatan [Selisih level]
Koreksi terhadap waktu yang dibutuhkan aksi
- Waktu yang dibutuhkan dihitung seolah-olah level pemain lebih tinggi daripada level aksi sebesar nilai ini. Makin tinggi nilainya, makin pendek waktu yang dibutuhkan.
___

## Tingkat keberhasilan [Selisih level]
Koreksi terhadap peluang keberhasilan aksi
- Peluang keberhasilan aksi dihitung seolah-olah level pemain lebih tinggi daripada level aksi sebesar nilai ini. Makin tinggi nilainya, makin naik peluang keberhasilannya.
___

## Pengalaman [Selisih level]
Koreksi terhadap pengalaman yang diperoleh
- Pengalaman dihitung seolah-olah level pemain lebih rendah daripada level aksi sebesar nilai ini (karena perhitungannya terbalik, makin tinggi level aksi, makin banyak pengalaman yang didapat).