
# Skill
Efek khusus yang diundi tiap giliran pertempuran lalu aktif
- Efek khusus yang pada aksi pertempuran (`stamina`) diundi tiap giliran lalu aktif. Pada aksi tipe lain skill tidak aktif.
- Wujudnya didefinisikan di sini, lalu dirujuk lewat ID dari `skill` item (pihakmu) dan `skills` aksi (pihak lawan).
- Kandidat pihakmu adalah skill yang dirujuk oleh item yang sedang memberi efek saat itu (`unnecessary` selama dimiliki, `necessary` dan `consumable` selama dipasang). Bila peralatan dilepas, skillnya pun keluar dari kandidat.
- Tiap giliran, kandidat pihakmu dan pihak lawan masing-masing diacak, peluang aktifnya dinilai dari yang teratas, dan hanya satu yang pertama berhasil yang aktif. Bila tidak ada yang berhasil, giliran itu tanpa skill.
- Bila skill yang sama dirujuk dari beberapa item atau aksi, kesempatan undiannya bertambah sebanyak itu sehingga skill lebih mudah aktif.
- [_item_](id/editor/item)
- [_action_](id/editor/action)
___

## [_Informasi_](id/editor/information)
___

## Peluang aktif [0-1]
Peluang skill ini aktif pada giliran itu
- Tiap giliran dinilai dengan peluang ini apakah skill aktif. Dengan `1` pasti berhasil, dengan `0` tidak aktif. Nilai bawaannya `1`.
- Penilaian berjalan berurutan dari kandidat teratas hasil pengacakan, dan hanya skill pertama yang berhasil yang aktif. Karena itu, bila kandidatnya banyak, proporsi aktif sebenarnya lebih rendah daripada nilai ini.
- Bila tampilan penjelasan diaktifkan, nilai ini juga memengaruhi seberapa sering penjelasan muncul. Makin mudah suatu skill aktif, makin jarang penjelasannya diulang.
___

## [_Nilai tempur_](id/editor/combat)
___

## Tampilan penjelasan
Apakah penjelasan ditampilkan sebagai notifikasi toast saat aktif
- Ini adalah penanda apakah penjelasan ditampilkan sebagai notifikasi toast ketika skill ini aktif.
- Bila menyala, penjelasan ditampilkan tiap kali skill aktif dengan peluang (100% − peluang aktif) ÷ 2. Bila peluang aktifnya 40%, berarti 30%.
- Bila mati, penjelasan tidak ditampilkan.
- Bila penjelasannya kosong, penjelasan tidak ditampilkan meski kamu menyalakannya.