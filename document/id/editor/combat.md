
# Nilai tempur
Pengaturan nilai koreksi tempur pada aksi bertipe stamina
- Ini adalah nilai koreksi yang hanya berlaku pada aksi bertipe `stamina`.
- Tiap nilai dihitung sebagai koreksi tambahan terhadap selisih level antara pemain dan aksi.
- Misalnya, bila nilai serangan 10, kerusakan serangan dihitung seolah-olah level pemain 10 lebih tinggi daripada level aksi. Bila negatif, koreksinya ke arah sebaliknya.
- Tergantung di mana kamu mengaturnya, nilai itu menjadi nilai pihak pemain atau nilai pihak lawan.
- Nilai pihak lawan bekerja meniadakan isian berlawanan yang bersesuaian. Pertahanan lawan meniadakan serangan pemain, serangan lawan meniadakan pertahanan pemain, menghindar lawan meniadakan akurasi pemain, dan akurasi lawan meniadakan menghindar pemain.
- Hanya pemulihan yang saling meniadakan dengan isian yang sama: makin tinggi pemulihan lawan, makin sedikit pemulihan pemain.

|Tempat pengaturan|Nilai pihak mana|
|-|-|
|`defaultCombat` di bagian umum|Nilai acuan pihak pemain. Menjadi titik awal bersama bagi semua aksi `stamina`|
|Nilai tempur aksi|Nilai pihak lawan. Dilihat dari pemain, bekerja sebagai koreksi ke arah sebaliknya|
|Nilai tempur skill|Nilai pihak yang memiliki skill itu. Skill pihak sendiri ditambahkan ke pemain, skill lawan ke pihak lawan|
___

## Serangan [Selisih level]
Koreksi selisih level terhadap kerusakan stamina yang diberikan kepada lawan
- Makin tinggi nilai di pihak pemain, makin besar kerusakan yang diberikan kepada lawan.
- Nilai yang diatur pada aksi atau pada skill lawan menjadi serangan pihak lawan, dan makin tinggi nilainya, makin besar kerusakan yang diterima pemain.
___

## Pertahanan [Selisih level]
Koreksi selisih level terhadap kerusakan stamina yang diterima dari lawan
- Makin tinggi nilai di pihak pemain, makin berkurang kerusakan yang diterima.
- Nilai yang diatur pada aksi atau pada skill lawan menjadi pertahanan pihak lawan, dan makin tinggi nilainya, makin kecil kerusakan yang diberikan pemain.
___

## Akurasi [Selisih level]
Koreksi selisih level terhadap tingkat meleset serangan
- Makin tinggi nilai di pihak pemain, makin rendah tingkat meleset serangan.
- Nilai yang diatur pada aksi atau pada skill lawan menjadi akurasi pihak lawan, dan makin tinggi nilainya, makin sulit pemain menghindar dari serangan lawan.
___

## Menghindar [Selisih level]
Koreksi selisih level terhadap tingkat menghindar dari serangan lawan
- Makin tinggi nilai di pihak pemain, makin mudah menghindar dari serangan lawan.
- Nilai yang diatur pada aksi atau pada skill lawan menjadi menghindar pihak lawan, dan makin tinggi nilainya, makin sulit serangan pemain mengenai sasaran.
___

## Pemulihan [Selisih level]
Koreksi selisih level terhadap jumlah stamina yang pulih
- Makin tinggi nilai di pihak pemain, makin banyak stamina yang pulih setelah pertempuran.
- Nilai yang diatur pada aksi atau pada skill lawan menjadi pemulihan pihak lawan, dan makin tinggi nilainya, makin sedikit pemulihan pemain.
- Hanya pemulihan yang, berbeda dari isian lain, saling meniadakan dengan isian yang sama.