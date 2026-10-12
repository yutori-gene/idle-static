
# Umum
Pengaturan dasar permainan seperti bahasa dan pengaturan level
___

## Bahasa
Bahasa yang kamu pakai untuk membuat dunia
- Menetapkan dalam bahasa apa kamu menulis nama dan penjelasan dunia. Ini bahasa yang menjadi dasar saat menyiapkan terjemahan.
- Ini juga bahasa yang pertama ditampilkan ketika pemain memulai permainan.
- Bila translations dinonaktifkan, pemain tidak bisa beralih dari bahasa ini.
- Ini pengaturan yang berbeda dari bahasa tampilan editor dunia itu sendiri. Bahasa tampilan editor dipilih saat membuka editor.
- [_translation_](id/editor/translation)
___

## Terjemahan
Apakah menyiapkan terjemahan untuk berbagai bahasa
- Bila diaktifkan, pemain bisa beralih ke bahasa yang disukainya dan bermain dengan bahasa itu.
- Bila dinonaktifkan, bahasa terkunci pada yang dipilih di language, dan operasi peralihannya sendiri tidak tersedia.
- Bila kamu mengaktifkannya, kamu perlu menyiapkan data terjemahan untuk tiap bahasa. Paket yang dipublikasikan disertai data terjemahan.
- Yang beralih adalah nama dan penjelasan yang didefinisikan di dunia. Terjemahan ungkapan umum di layar (preset) selalu disertakan, terlepas dari pengaturan ini.
- [_translation_](id/editor/translation)
- [_preset_](id/editor/preset)
___

## Waktu offline maksimum [Jam]
Batas waktu untuk kemajuan offline
- Menetapkan paling lama berapa jam kemajuan saat offline berjalan.
- Misalnya bila kamu menetapkan 6 jam, proses kembali dari offline ditangani sampai 6 jam, dan meski kamu kembali setelah jeda yang lebih panjang, waktu offline tetap diperlakukan sebagai 6 jam.
- Bila kamu menetapkan 0 jam, sama sekali tidak ada proses yang ditangani saat kembali dari offline.
- Nilai maksimumnya adalah 24 jam.
- [_category_](id/editor/category)
___

## Level maksimum kategori
Batas atas level tiap kategori
- Menetapkan batas atas level tiap kategori. Nilai bawaannya `100`.
- Meski memperoleh pengalaman, level berhenti di nilai ini dan kelebihannya dibuang. Begitu pula bila hadiah menambah level secara langsung.
- Bila level pada data simpanan melewati batas atas, level itu dipangkas sampai batas atas saat dimuat.
- Bilah level dan laju kemajuan pada statistik ditampilkan dengan nilai ini sebagai penyebut.
- Kategori yang numeric-nya dinonaktifkan tidak naik level, jadi nilai ini tidak berkaitan dengannya.
- [_category_](id/editor/category)
___

## Mata uang
Pengaturan mata uang (coins) yang dipakai di dalam permainan
- Menetapkan mata uang yang dipakai di dalam permainan. Diperlukan sedikitnya satu.
- Mata uang bisa didefinisikan lebih dari satu, dan masing-masing diatur sebagai informasi (ID, nama, ikon, warna, dan sebagainya).
- Mata uang dipakai untuk jual beli item serta untuk memperluas kapasitas dan antrian.
- Mata uang yang pertama diperlakukan sebagai mata uang utama, dan dipakai ketika ID mata uang (`coinId`) tidak ditentukan pada item, kapasitas, atau antrian, atau ketika ditentukan ID yang tidak ada di daftar mata uang.
- Mata uang diperlakukan sebagai salah satu jenis item. Pada syarat dan hadiah, rujuklah ID yang diatur di sini sebagai item. Ia tidak termasuk kategori mana pun dan bukan objek pemasangan peralatan maupun jual beli.
- [_information_](id/editor/information)
- [_item_](id/editor/item)
___

## Kapasitas
Pengaturan kapasitas inventaris
- Mengelola batas atas jumlah jenis item yang bisa dimiliki pemain.
- Yang dikelola bukan jumlah kepemilikan tiap item, melainkan jumlah jenis item yang dimiliki.
- Bila `initialCount` dijadikan 0, kapasitas menjadi tanpa batas, dan pembelian kapasitas pun tidak bisa dilakukan.
- Bila kamu merujuk item kapasitas pada syarat atau hadiah, gunakanlah ID yang diatur di sini, atau `capacity`.
- [_item_](id/editor/item)
___

### [_Informasi kapasitas_](id/editor/information)
___

### Nilai awal kapasitas [Buah]
Kapasitas inventaris awal (jumlah jenis item yang bisa dimiliki)
- Ini kapasitas awal saat permainan dimulai (jumlah jenis item yang bisa dimiliki). Nilai bawaannya `10`.
- Bila dijadikan `0`, kapasitas menjadi tanpa batas, dan sekaligus pembelian kapasitas tidak bisa dilakukan.
___

### Harga dasar kapasitas [Koin]
Harga awal untuk menambah kapasitas sebanyak satu
- Ini harga dasar (koin) untuk menambah kapasitas inventaris sebanyak satu slot. Aturlah sebagai bilangan bulat `1` atau lebih.
- Harga sebenarnya dihitung sebagai "harga dasar × laju kenaikan^jumlah pembelian yang sudah dilakukan".
- Contoh: dengan harga dasar 100 dan laju kenaikan 1,2, pembelian ke-1 adalah 100 koin, ke-2 120 koin, dan ke-3 144 koin.
___

### Laju kenaikan kapasitas [Kali lipat]
Laju kenaikan biaya perluasan kapasitas
- Ini pengali seberapa besar biaya perluasan kapasitas naik pada pembelian ke-n. Nilai bawaannya `1.2`.
- Pada `1.0` harganya selalu sama, pada `1.2` harganya menjadi 20% lebih mahal tiap kali membeli.
- Rumus: harga dasar × laju kenaikan^jumlah pembelian yang sudah dilakukan

|Laju kenaikan|Buah ke-1|Buah ke-5|Buah ke-10|Buah ke-100|Buah ke-1000|
|-|-|-|-|-|-|
|1.00|x1.00|x1.00|x1.00|x1.00|x1.00|
|1.05|x1.00|x1.22|x1.55|x125.24|x1.5×10²¹|
|1.10|x1.00|x1.46|x2.36|x1.3×10⁴|x2.2×10⁴¹|
|1.20|x1.00|x2.07|x5.16|x6.9×10⁷|x1.3×10⁷⁹|
|1.50|x1.00|x5.06|x38.44|x2.7×10¹⁷|x8.2×10¹⁷⁵|
___

### ID mata uang kapasitas
ID mata uang yang dipakai untuk perluasan kapasitas
- Menentukan ID mata uang (coins) yang dipakai untuk harga perluasan kapasitas inventaris.
- Bila dikosongkan, atau bila ditentukan ID yang tidak ada di daftar mata uang, mata uang utama (yang pertama di coins) yang dipakai.
___

### Batas pembelian kapasitas [Kali]
Jumlah maksimum kapasitas bisa dibeli
- Ini batas atas berapa kali kapasitas bisa dibeli dengan mata uang.
- Bila dijadikan `0`, pembelian bisa dilakukan tanpa batas.
- Bila dijadikan `-1`, pembelian tidak bisa dilakukan.
- Pertambahan kapasitas lewat hadiah tidak termasuk dalam batas ini.
___

## Antrian
Pengaturan jumlah slot untuk menjalankan aksi secara berturut-turut (antrian)
- Mengelola jumlah slot antrian untuk menjalankan aksi secara berturut-turut.
- Antrian mencakup aksi yang sedang dijalankan, dan aksi yang berada paling depan itulah yang dijalankan. Saat slotnya `1`, hanya ada yang sedang dijalankan dan tidak bisa menahan yang menunggu.
- Seperti halnya kapasitas, jumlah slot bisa dibeli dengan mata uang, dan bisa juga ditambah dengan menentukan item antrian sebagai hadiah aksi atau acara.
- Bila kamu merujuk item antrian pada syarat atau hadiah, gunakanlah ID yang diatur di sini, atau `queue`.
- [_item_](id/editor/item)
___

### [_Informasi antrian_](id/editor/information)
___

### Nilai awal antrian [Slot]
Jumlah slot penjalanan berturut-turut saat permainan dimulai
- Ini jumlah slot antrian saat permainan dimulai. Nilai bawaannya `1`.
- Nilai minimumnya `1` (karena yang sedang dijalankan memakai satu slot. Tidak ada perlakuan `0` = tanpa batas seperti pada kapasitas).
___

### Harga dasar antrian [Koin]
Harga awal untuk menambah slot sebanyak satu
- Ini harga dasar (koin) untuk menambah slot penjalanan berturut-turut sebanyak satu. Aturlah sebagai bilangan bulat `1` atau lebih.
- Harga sebenarnya dihitung sebagai "harga dasar × laju kenaikan^jumlah pembelian yang sudah dilakukan".
- Contoh: dengan harga dasar 100 dan laju kenaikan 1,2, pembelian ke-1 adalah 100 koin, ke-2 120 koin, dan ke-3 144 koin.
___

### Laju kenaikan antrian [Kali lipat]
Laju kenaikan biaya perluasan slot
- Ini pengali seberapa besar biaya perluasan slot naik pada pembelian ke-n. Nilai bawaannya `1.2`.
- Pada `1.0` harganya selalu sama, pada `1.2` harganya menjadi 20% lebih mahal tiap kali membeli.
- Rumus: harga dasar × laju kenaikan^jumlah pembelian yang sudah dilakukan
- Cara kenaikannya sama dengan laju kenaikan kapasitas. Untuk gambaran pengalinya, lihatlah tabel kapasitas.
___

### ID mata uang antrian
ID mata uang yang dipakai untuk perluasan slot
- Menentukan ID mata uang (coins) yang dipakai untuk harga perluasan slot penjalanan berturut-turut.
- Bila dikosongkan, atau bila ditentukan ID yang tidak ada di daftar mata uang, mata uang utama (yang pertama di coins) yang dipakai.
___

### Batas pembelian antrian [Kali]
Jumlah maksimum slot bisa dibeli
- Ini batas atas berapa kali slot penjalanan berturut-turut bisa dibeli dengan mata uang.
- Bila dijadikan `0`, pembelian bisa dilakukan tanpa batas.
- Bila dijadikan `-1`, pembelian tidak bisa dilakukan.
- Pertambahan slot lewat hadiah tidak termasuk dalam batas ini.
___

## Laju pertumbuhan pengalaman [Kali lipat]
Laju kenaikan kesulitan naik level
- Ini laju pertumbuhan pengalaman yang diperlukan untuk mencapai level berikutnya seiring naiknya level kategori. Nilai bawaannya `1.05`, dan nilai di bawah `1` tidak bisa diatur.
- Memperbesar nilai ini menaikkan kesulitan. Bila dijadikan `1`, pengalaman yang diperlukan sama di level mana pun.
- Pengalaman yang diperlukan untuk mencapai level berikutnya adalah (laju pertumbuhan pengalaman)^(level saat ini-1). Level dihitung dengan membuang angka di belakang koma.
- Pengalaman yang diperoleh setelah mencapai batas atas (level maksimum kategori) akan dibuang.

|Laju pertumbuhan pengalaman|Lv.1|Lv.2|Lv.10|Lv.50|Lv.99|
|-|-|-|-|-|-|
|1.00|x1.00|x1.00|x1.00|x1.00|x1.00|
|1.02|x1.00|x1.02|x1.20|x2.64|x6.96|
|1.05|x1.00|x1.05|x1.55|x10.92|x119.28|
|1.10|x1.00|x1.10|x2.36|x106.72|x1.1×10⁴|
|1.20|x1.00|x1.20|x5.16|x7583.70|x5.8×10⁷|
- [_category_](id/editor/category)
___

## Batas level aksi
Menuntut level kategori atribut untuk menjalankan aksi
- Bila diaktifkan, di awal syarat (requirements) tiap aksi otomatis ditambahkan syarat "level kategori atribut berada pada atau di atas level aksi tersebut".
- Bila atribut (attribute) tidak diatur, kategori tempatnya bernaung yang dipakai.
- Bila numeric pada kategori atribut dinonaktifkan, kategori itu tidak naik level sehingga tidak ada yang ditambahkan.
- Syarat yang ditambahkan dituliskan saat dunia dimuat, jadi pada layar player pun ia ditampilkan sama seperti syarat biasa.
- [_action_](id/editor/action)
- [_category_](id/editor/category)
- [_requirement_](id/editor/requirement)
___

## Rasio properti [Kali lipat]
Menjadi berapa kali lipat properti tiap 10 selisih level
- Menetapkan menjadi berapa kali lipat properti tiap kali selisih antara level kategori dan level aksi melebar `10`. Nilai bawaannya `1.5`, dan nilai di bawah `1` tidak bisa diatur.
- Pengali dihitung sebagai (rasio properti)^(selisih level÷10). Saat selisih levelnya `0`, pengalinya `1` dan nilai yang diatur pada aksi dipakai apa adanya.
- Serangan dan pengalaman bertambah sebesar pengali ini, sedangkan pertahanan (kerusakan yang diterima) dan kecepatan (waktu yang dibutuhkan) berkurang sebesar pengali yang sama.
- Akurasi, menghindar, tingkat keberhasilan, dan jumlah pemulihan adalah nilai yang tetap berada di `0`–`100`%, jadi pengali dikenakan pada perbandingan antara sisi yang terjadi dan sisi yang tidak. `0`% dan `100`% tidak berubah, dan nilai di antaranya pun tidak pernah melewati `100`%.
- Pada pertahanan, menghindar, dan kecepatan, pengali bekerja setengahnya (selisih level `20` setara dengan selisih level `10` pada properti lain). Pertahanan dan menghindar bekerja ganda, pada tingkat terkena serangan dan pada kerusakan yang diterima, sedangkan kecepatan bekerja pada semua properti lain sebagai jumlah penjalanan, jadi pengaruhnya dilemahkan agar seimbang.
- Patokannya adalah (laju pertumbuhan pengalaman) pangkat `6.7`. Di atas itu, kenaikan level makin cepat seiring naiknya level; di bawahnya, kenaikan level pada bagian akhir makin memakan waktu.
- Bila dijadikan `1`, pengaruh selisih level menghilang. Memperbesar nilainya membuat untung ruginya selisih level menjadi tajam.

|Rasio properti|Selisih level -20|Selisih level -10|Selisih level 0|Selisih level +10|Selisih level +20|
|-|-|-|-|-|-|
|`1`|`x1.00`|`x1.00`|`x1.00`|`x1.00`|`x1.00`|
|`1.5`|`x0.44`|`x0.67`|`x1.00`|`x1.50`|`x2.25`|
|`2`|`x0.25`|`x0.50`|`x1.00`|`x2.00`|`x4.00`|
|`3`|`x0.11`|`x0.33`|`x1.00`|`x3.00`|`x9.00`|
- [_action_](id/editor/action)
- [_property_](id/editor/property)
___

## [_Nilai tempur_](id/editor/combat)