
# Syarat
Pengaturan syarat yang diperlukan untuk memakai atau menampilkan elemen
- Ini adalah syarat yang diatur pada tiap elemen: kategori, aksi, item, dan acara.
- Selama tidak semua syarat yang diatur terpenuhi, operasi yang ditunjukkan pada tabel tidak bisa dilakukan.
- Tergantung pengaturan pembukaan (unlocked) elemen, elemen itu sendiri tidak tampil di layar sampai syaratnya terpenuhi.

|Tempat pengaturan|Yang tidak bisa dilakukan bila syarat tidak terpenuhi|
|-|-|
|Kategori|Eksekusi semua aksi di dalam kategori dan operasi itemnya|
|Aksi|Eksekusi aksi|
|Item|Operasi item (memasang dan sebagainya)|
|Acara|Penyelesaian tugas, pemicuan acara perubahan dan acara tetap|
- [_type_](id/editor/type)
___

## Tipe
Jenis elemen yang dirujuk sebagai syarat

|Tipe|Nilai yang dirujuk|
|-|-|
|Kategori|Level kategori|
|Aksi|Jumlah eksekusi aksi|
|Item|Jumlah kepemilikan item|
___

## ID elemen
ID elemen yang dirujuk sebagai syarat
- Atur ID kategori, aksi, atau item yang dirujuk sebagai syarat.
- Bila pada acara penghitungan per grup (requiringGroup) diaktifkan, ini diperlakukan sebagai ID grup, bukan elemen tunggal.
___

## Nilai
Angka yang dibutuhkan syarat
- Syarat terpenuhi bila nilainya sama dengan atau melebihi angka yang ditentukan.
- Diatur dengan bilangan bulat 0 atau lebih. Nilai bawaannya `1`.
___

## Peluang konsumsi [0-1]
Peluang item dikonsumsi (0 sampai 1, hanya berlaku bila tipenya item)
- Ini adalah peluang mengonsumsi item ketika syarat terpenuhi dan aksi dijalankan.
- Dengan `1` pasti dikonsumsi, dengan `0.5` dikonsumsi dengan peluang 50%, dengan `0` tidak dikonsumsi.
- Nilai bawaannya `1` (pasti dikonsumsi). Namun pada syarat acara (tugas, acara perubahan, acara tetap), nilai bawaannya `0` (tidak dikonsumsi) agar simpananmu tidak berkurang saat diselesaikan.
- Dengan `0` stok tidak berkurang, jadi aksi bisa dijalankan berkali-kali selama jumlah kepemilikan mencapai nilai syaratnya. Gunakan ini bila kamu ingin syaratnya hanya berupa item yang terpasang.
- Bila tipenya bukan item, pengaturan ini tidak berlaku.
___

## Peralatan
Apakah item harus dalam keadaan terpasang sebagai syarat (hanya berlaku bila tipenya item)
- Bila diaktifkan, syaratnya bukan hanya memiliki item, tetapi juga memasangnya.
- Terpasang atau tidaknya ditentukan oleh peralatan kategori tempat item itu berada.
- Bila tipenya bukan item, pengaturan ini tidak berlaku.