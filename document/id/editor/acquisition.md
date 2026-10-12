
# Perolehan
Pengaturan perolehan item dan level kategori
- Atur apa yang diperoleh.
- Selain item, level kategori dan jumlah eksekusi aksi juga bisa diubah.
- Peluang mendapatkannya bisa diatur.

|Tipe|Yang diperoleh|
|-|-|
|Kategori|Level|
|Aksi|Jumlah eksekusi|
|Item|Jumlah kepemilikan|
- [_type_](id/editor/type)
___

## Tipe
Jenis elemen yang diperoleh

|Tipe|Yang diperoleh|
|-|-|
|Kategori|Level (nilai yang diatur langsung ditambahkan)|
|Aksi|Jumlah eksekusi|
|Item|Jumlah kepemilikan|
___

## ID elemen
ID yang menandai elemen yang diperoleh
___

## Nilai
Angka yang diperoleh
- Bila diatur nilai negatif, jumlah kepemilikan, jumlah eksekusi, atau level akan berkurang. Namun tidak akan turun di bawah 0.
- Bila pada item diatur jumlah kepemilikan maksimum (maximum), jumlah kepemilikan tidak bertambah melewati nilai itu.
- Bila tipenya kategori, nilai yang diatur langsung ditambahkan ke level (1 berarti satu level). Cara yang biasa adalah menyesuaikannya lewat pengaturan pengalaman pada aksi. Tanpa tujuan khusus, pengaturan ini tidak diperlukan.
- Level kategori tidak turun di bawah 0 dan juga tidak melewati `maxCategoryLevels` di bagian umum (level maksimum kategori).
- Nilai diatur dengan bilangan bulat.
___

## Peluang [-1 sampai 1]
Peluang perolehan berhasil (nilai negatif hanya dinilai saat gagal)
- Atur peluang mendapatkannya dengan desimal dari -1 sampai 1. Untuk menentukan peluang dipakai nilai mutlaknya.
- Saat nilainya positif, penilaian hanya dilakukan ketika aksi berhasil: dengan `1` pasti didapat, dengan `0.5` didapat dengan peluang 50%.
- Saat nilainya negatif, penilaian hanya dilakukan ketika aksi gagal: dengan `-1` pasti didapat, dengan `-0.5` didapat dengan peluang 50%.
- Dengan `0`, tidak akan didapat baik saat berhasil maupun saat gagal.
- Nilai bawaannya `1` (pasti didapat saat berhasil).