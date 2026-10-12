
# Acara perubahan
Acara untuk pemrosesan internal yang terpicu saat jumlah kategori, aksi, atau item bertambah sekaligus sebanyak jumlah pada syarat atau lebih
- Diperiksa pada setiap momen ketika jumlah berubah, seperti selesainya aksi, pembelian dan penjualan, atau pembukaan peti harta.
- Syarat (requirements) dinilai dari besarnya pertambahan pada satu momen itu, bukan dari nilai mutlak seperti jumlah kepemilikan. Pertambahan kecil yang terbagi beberapa kali tidak dijumlahkan.
- Misalnya bila syarat item diatur 3, syarat terpenuhi asalkan item itu bertambah 3 atau lebih dalam satu kali itu. Pengurangan tidak dihitung sebagai pertambahan.
- Bila beberapa syarat diatur, semuanya harus terpenuhi sekaligus pada satu perubahan itu. Acara perubahan yang tidak diatur satu syarat pun tidak akan terpicu.
- Bila nilai syarat diatur `0`, syarat dianggap terpenuhi meski tidak ada pertambahan, sehingga acara terpicu setiap kali jumlah berubah.
- Peluang konsumsi (chance) dan peralatan (equipment) pada syarat tidak dilihat. Penilaian hanya memakai besarnya pertambahan, dan elemen yang dipakai pada syarat pun tidak berkurang.
- Hadiah diterima otomatis setiap kali syarat terpenuhi, dan acara terpicu berulang kali tanpa batas. Berbeda dengan tugas, ini bukan sekali saja, dan tidak perlu tindakan untuk menerimanya. Jumlahnya juga bisa diatur negatif.
- Berbeda dengan tugas atau pembelian, batas jumlah jenis item yang bisa kamu pegang tidak diperiksa, sehingga item baru bisa bertambah melebihi kapasitas.
- Pertambahan dari hadiah pun dianggap perubahan, jadi ketika hadiah suatu acara perubahan memenuhi syarat acara perubahan lain, acara itu terpicu berikutnya.
- Sama sekali tidak ditampilkan di layar player. Tidak muncul di daftar misi, dan pesan tercapai pun tidak ditampilkan.

!> Jangan mengatur hadiah acara perubahan sedemikian rupa sehingga memenuhi syaratnya sendiri. Pemicuannya tidak akan berhenti dan permainan akan berhenti. Contohnya kombinasi berupa acara yang syaratnya terpenuhi saat item A bertambah 1, sementara hadiahnya memberikan 1 item A.
- [_unique_](id/editor/unique)
___

## [_Informasi_](id/editor/information)
___

## Kategori
ID kategori tempat acara perubahan bernaung (hanya dipakai untuk klasifikasi karena tidak ditampilkan di layar)
- Karena tidak ditampilkan di layar player, pengaturan ini tidak memengaruhi tampilan.
___

## Momen
Momen pemicuan acara perubahan (tetap `changed`)
- Sudah dipatok pada `changed` dan tidak bisa diedit.
- Diperiksa pada setiap momen ketika jumlah berubah, dan terpicu berulang setiap kali syarat terpenuhi.
___

## Status tampilan awal
Praktis tidak berpengaruh karena tidak ditampilkan di layar
- Acara perubahan tidak ditampilkan di layar player, jadi pengaturan ini tidak dipakai.
___

## [_Syarat_](id/editor/requirement)
___

## Penjumlahan grup
Memperlakukan id pada syarat sebagai ID grup dan menilai dari total pertambahan elemen yang bernaung di dalamnya
- Bila diaktifkan, id yang kamu atur pada syarat (requirements) diperlakukan sebagai ID grup yang berada langsung di bawah dunia.
- Pertambahan semua kategori, semua aksi, dan semua item yang bernaung di grup itu dijumlahkan untuk penilaian.
- Berbeda dengan penjumlahan grup pada tugas, pertambahan elemen yang belum terbuka pun ikut dihitung dalam total.
- Bila dinonaktifkan, seperti sebelumnya, id pada syarat diperlakukan sebagai ID kategori, aksi, atau item satuan.
- [_group_](id/editor/group)
___

## [_Perolehan_](id/editor/acquisition)
___

## Grup acara perubahan
Klasifikasi grup tampilan untuk pengelolaan internal (praktis tidak terpakai karena tidak ditampilkan di layar)
- Acara perubahan tidak ditampilkan di layar player, jadi pengaturan ini tidak memengaruhi tampilan.