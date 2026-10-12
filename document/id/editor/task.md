
# Tugas
Misi yang tercapai bila syaratnya terpenuhi
- Tugas tercapai bila syarat yang kamu atur terpenuhi, dan pesan ditampilkan di bagian atas layar.
- Ditampilkan di daftar misi player dan di daftar tugas kategori.
- Tugas tanpa syarat yang diatur tidak akan pernah tercapai.
- Setelah sekali tercapai, tugas tetap tercapai meski syaratnya kemudian tidak lagi terpenuhi, dan hadiahnya pun bisa diambil kapan saja.
- Hadiah tidak diserahkan otomatis. Pemain menerimanya saat membuka tugas dan menekan bilah Perolehan.
- Sampai hadiah diterima, bilah pada daftar diberi pita yang menandakan bahwa hadiah belum diambil.
- Tugas tanpa hadiah yang diatur tidak memunculkan bilah Perolehan dan langsung selesai begitu tercapai.
- Selama jumlah jenis item yang bisa kamu pegang sudah mencapai batas, hadiah tidak bisa diterima. Rapikan dulu simpananmu lalu ambil lagi.
- Dengan perolehan kamu bisa mengubah level kategori, jumlah eksekusi aksi, dan jumlah kepemilikan item.
- Yang ingin kamu picu pada momen selain syarat, seperti saat pertama kali dijalankan atau saat permainan berakhir, diatur dengan acara tetap (unique).
- [_unique_](id/editor/unique)
___

## [_Informasi_](id/editor/information)
___

## Kategori
ID kategori tempat tugas bernaung
- Tentukan ID kategori tempat tugas ini bernaung.
- Bila diatur, daftar tugas ditambahkan ke layar kategori player, dan di daftar misi pun tugas ditampilkan terkelompok per kategori.
- Bila dikosongkan, tugas tidak bernaung di kategori mana pun dan ditampilkan bersama di awal daftar misi.
- Bila warna tidak diatur pada tugas itu sendiri, tugas mewarisi warna kategori.
- [_category_](id/editor/category)
___

## Momen
Momen pemicuan tugas (tetap `tasked`)
- Tugas sudah dipatok pada `tasked` (saat syarat yang kamu atur terpenuhi) dan tidak bisa diedit.
- Hadiah hanya bisa diterima sekali, dan setelah diterima tugas tetap tercapai tanpa berubah lagi.
- Yang ingin kamu picu pada momen tertentu lainnya diatur dengan acara tetap (unique).
- [_unique_](id/editor/unique)
___

## Status tampilan awal
Status tampilan awal ikon tugas (tercapainya ditentukan syarat, dan pengaturan ini tidak membuatnya tercapai)
- Syarat tercapainya tugas ditentukan oleh requirements, dan bidang ini hanya memengaruhi tampilan ikon di daftar.
- secreted: Tidak tampil sama sekali di daftar tugas sampai semua requirements terpenuhi (tercapainya sendiri tetap terjadi lewat syarat).
- hidden dan hinted: Ikon diberi garis miring dan ditampilkan sebagai belum terbuka.
- released: Garis miringnya hilang dan ikon ditampilkan sebagai sudah terbuka.
- Tugas yang sudah sekali tercapai tidak hilang dari daftar, dan tetap ditampilkan sebagai tercapai meski syaratnya kemudian tidak lagi terpenuhi.
___

## [_Syarat_](id/editor/requirement)
___

## Penjumlahan grup
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

## [_Perolehan_](id/editor/acquisition)
___

## Grup tugas
Klasifikasi grup tampilan tugas
- Terapkan salah satu yang didefinisikan di grup yang berada langsung di bawah dunia.
- Di daftar tugas kategori, tugas ditampilkan terpisah per grup dengan judul pada masing-masing. Tugas tanpa grup yang diatur pun menjadi satu kesatuan, dan preset "Tugas" dipakai sebagai judulnya.
- Di daftar misi, tugas tidak dipisah dengan judul; hanya urutannya saja yang terkumpul per grup.
- Urutan berjajarnya tiap kesatuan ditentukan oleh posisi tempat tugas pertama grup itu muncul.
- [_group_](id/editor/group)