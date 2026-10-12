import * as Type from "~d/type/descriptionType";
import { Markdown, Tree, expandList } from "~d/type/markdownType";

// quate

const typeTree = `
world
├── category
├── action
├── item
├── skill
├── group
└── preset
`;

// 色の継承の階層。typeTreeはタイプの一覧なので、継承の親子はこちらで示す
const colorTree = `
world (basic.design)
└── category
    ├── action
    ├── item
    └── event
`;

// miscellaneous

export const translation: Markdown = {
	title: "Terjemahan",
	summary: "Pengaturan untuk menerjemahkan teks dunia ke sepuluh bahasa",
	points: [
		"Ada dua macam terjemahan: terjemahan frasa umum antarmuka (preset) dan terjemahan nama serta penjelasan yang dimiliki dunia itu sendiri.",
		"Terjemahan frasa umum selalu disertakan tanpa memandang pengaturan `translations` di bagian umum. Pembuat tidak perlu menyiapkannya.",
		"Terjemahan dunia itu sendiri hanya diekspor ketika `translations` di bagian umum diaktifkan dan dunia dipublikasikan, dan pembuatlah yang menerjemahkannya.",
		"Pada bahasa yang terjemahannya tidak disiapkan, teks ditampilkan persis seperti yang tertulis di dunia.",
	],
	links: { general: "general" },
	options: {
		label: "translation",
	},
	children: {
		flag: {
			title: "Mengaktifkan terjemahan",
			summary: "Perilaku ketika terjemahan diaktifkan",
			points: [
				"Yang diaktifkan adalah `translations` di bagian umum. Di sini dijelaskan apa yang terjadi setelah diaktifkan.",
				"Bila aktif, dunia yang dipublikasikan menyertakan berkas terjemahan untuk sepuluh bahasa, dan bahasa bisa diganti dari pengaturan player. Bila tidak aktif, bahasa tidak bisa diganti sama sekali.",
				"Sepuluh berkas itu diekspor dengan isi yang sama (teks sebelum diterjemahkan). Bahasa yang tidak kamu terjemahkan menampilkan teks aslinya apa adanya. Kamu juga bisa menerjemahkan sebagian bahasa saja, tetapi di layar bahasa itu teks asli akan tercampur.",
				"Saat game dimulai, yang pertama ditampilkan adalah bahasa yang diatur di `language` di bagian umum. Setelah itu, bahasa bisa diubah sesuka hati dari kolom pengaturan.",
				"Pada uji main di editor, berkas terjemahan dunia belum ada, jadi mengganti bahasa hanya mengubah frasa umum antarmuka.",
				"Pekerjaan menerjemahkan memang merepotkan, tetapi membuat lebih banyak orang bisa memainkannya.",
			],
			links: { general: "general" },
		},
		file: {
			title: "Berkas bahasa",
			summary: "Berkas JSON untuk terjemahan yang diekspor",
			points: [
				"Ketika kamu mengekspor dunia lewat Publikasikan pada menu, `translations/base` berisi terjemahan frasa umum antarmuka dan `translations/world` berisi terjemahan dunia itu sendiri.",
				"Yang perlu diterjemahkan hanyalah sepuluh berkas di `translations/world`. `translations/base` sudah disertakan dalam keadaan diterjemahkan, jadi tidak perlu disentuh.",
				"Isi berkas terbagi menurut tipe, di bawahnya ada ID elemen, dan di bawahnya lagi berjajar nama (`name`) dan penjelasan (`explanation`).",
				"Tipenya ada tujuh: kategori, aksi, item, acara, grup, skill, dan preset. Mata uang, kapasitas, dan antrian masuk ke item; ikhtisar dunia masuk ke preset; tugas dan acara tetap masuk bersama ke acara.",
				"Elemen yang namanya dibiarkan kosong diekspor dengan nama yang dibuat otomatis dari ID-nya.",
				"Berkas yang sudah diterjemahkan dikembalikan ke `translations/world` dengan nama yang sama.",
			],
		},
		task: {
			title: "Pekerjaan menerjemahkan",
			summary: "Pekerjaan menyunting data terjemahan",
			points: [
				"Sepuluh berkas yang diekspor semuanya berisi hal yang sama (teks sebelum diterjemahkan).",
				"Selain berkas bahasa aslinya, semuanya perlu diterjemahkan.",
				"Yang diterjemahkan hanyalah nilai `name` dan `explanation`. Jangan mengubah ID maupun struktur JSON.",
			],
			children: {
				ai: {
					title: "AI",
					summary: "Terjemahan dengan AI",
					points: ["Menerjemahkan dengan AI seperti ChatGPT, Copilot, atau Claude.", "Semuanya bisa diterjemahkan sekaligus, dengan kualitas yang lumayan.", "Terjemahannya kadang tidak sempurna, dan istilah teknis serta nama diri perlu perhatian khusus.", "Tergantung banyaknya teks, penggunaan AI kadang memerlukan biaya.", "Bila proses terjemahan AI terhenti di tengah jalan, memerintahkan \"lanjutkan\" kadang bisa mengatasinya. (Kadang juga tidak.)"],
					children: {
						prompt: {
							title: "Contoh prompt",
							summary: "Contoh perintah terjemahan yang diberikan kepada AI",
							points: ["Contoh prompt: terjemahkan nilai `name` dan `explanation` pada data JSON yang diunggah dari bahasa Jepang ke bahasa Inggris. Jangan ubah kunci maupun bagian lainnya."],
						},
						gpt: {
							title: "Memakai GPT",
							summary: "Terjemahan dengan GPT dari ChatGPT",
							points: ["Dengan JSON Language Translator yang tersedia di pustaka GPT ChatGPT, menerjemahkan JSON menjadi mudah.", "Struktur JSON tetap terjaga selama diterjemahkan.", "Layanan AI selain ChatGPT kadang juga menyediakan fungsi serupa."],
						},
					},
				},
				online: {
					title: "Layanan terjemahan",
					summary: "Penggunaan layanan terjemahan",
					points: ["Menerjemahkan dengan layanan daring seperti DeepL atau Google Terjemahan.", "Kualitasnya bisa diharapkan lebih tinggi daripada terjemahan AI, tetapi tergantung banyaknya teks akan dikenai biaya.", "Berkas JSON tidak bisa diterjemahkan apa adanya oleh layanan terjemahan, jadi perlu dibuatkan program untuk memakainya.", "Meski berbayar, tampaknya ada juga layanan yang menerjemahkan data JSON apa adanya (misalnya doctranslator.com)."],
				},
				manual: {
					title: "Manual",
					summary: "Terjemahan secara manual",
					points: ["Buka berkas terjemahan dengan editor teks, lalu masukkan isi yang sudah diterjemahkan ke tiap bahasa. Cara ini sangat merepotkan, tetapi terjemahannya bisa persis seperti yang kamu inginkan."],
				},
			},
		},
		code: {
			title: "Kode bahasa",
			summary: "Daftar kode bahasa yang didukung",
			points: ["Nama berkas terjemahan adalah kode bahasa ini.", "Bahasa yang didukung hanya sepuluh ini, dan tidak bisa ditambah atau dikurangi."],
			list: [
				["Kode bahasa", "Bahasa"],
				["en", "Inggris"],
				["zh", "Tionghoa (Sederhana)"],
				["es", "Spanyol"],
				["pt", "Portugis"],
				["fr", "Prancis"],
				["ru", "Rusia"],
				["de", "Jerman"],
				["ja", "Jepang"],
				["id", "Indonesia"],
				["ko", "Korea"],
			],
		},
	},
};

export const miscellaneous: Markdown = {
	title: "Catatan tambahan",
	summary: "Penjelasan tentang pekerjaan pembuatan, bukan tentang isian dunia itu sendiri",
	points: ["Di sini dikumpulkan hal-hal yang tidak masuk ke dalam daftar isian pengaturan."],
	list: expandList("Tambahan", [translation], "Penjelasan"),
	options: {
		label: "miscellaneous",
		linkedList: true,
	},
};

// componsnt

export const property: Type.Property = {
	title: "Properti",
	summary: "Pengaturan efek yang dimiliki item",
	points: ["Ini adalah isian efek yang bisa diatur pada item.", "Item dengan tipe peralatan `necessary` atau `consumable` hanya menerapkan efeknya selama dipasang. `unnecessary` menerapkan efeknya cukup dengan dimiliki, dan besarnya efek sebanding dengan jumlah kepemilikan (dua kali lipat bila memiliki 2).", "Karena pada efek `unnecessary` jumlah kepemilikan langsung menjadi pengali, `maximum` (jumlah kepemilikan maksimum) menjadi batas atas efeknya. Saat menyeimbangkan, aturlah bersama `maximum`.", "Nilai isian mana pun dihitung sebagai penyesuaian selisih level antara level pemain dan level aksi.", "Misalnya, bila nilai serangan 10, serangan dihitung seolah-olah level pemain 10 lebih tinggi daripada level aksi. Nilai negatif bekerja sebaliknya.", "Seberapa besar pengaruh selisih level ditentukan oleh `propertyRatio` di bagian umum (bawaannya 2), dan berubah sebesar pengali itu setiap 10 selisih level.", "Bila `numeric` kategori tidak aktif, selisih level yang sebenarnya dianggap 0, sehingga nilai yang diatur di sini langsung menjadi selisih level.", "Isian yang bekerja lewat pembagian, seperti waktu yang dibutuhkan dan kerusakan yang diterima, mentok pada 100 kali (untuk waktu yang dibutuhkan, sampai seperseratus).", "Pada item yang harus dipasang, hanya satu yang terpasang di tiap grup peralatan yang memberi efek.", "Item dengan jumlah kepemilikan 0 tidak memberi efek, apa pun tipe peralatannya.", "attack, defence, accuracy, evasion, dan restore hanya berlaku pada aksi bertipe `stamina`."],
	list: [
		["Properti", "Rincian efek"],
		["speed", "Memperpendek waktu yang dibutuhkan aksi. Waktu yang dibutuhkan berubah berbanding terbalik dengan selisih level (pengali bekerja setengahnya)."],
		["chance", "Mengubah peluang keberhasilan aksi. Pengali dikenakan pada perbandingan berhasil dan gagal, sehingga tidak pernah melewati `100`%."],
		["experience", "Mengubah pengalaman yang diperoleh. Naik sebanding dengan selisih level (perhitungannya terbalik: makin tinggi level aksi, makin banyak yang didapat)."],
		["attack", "Mengubah kerusakan stamina yang diberikan kepada lawan. (hanya aksi stamina)"],
		["defence", "Mengurangi kerusakan stamina yang diterima dari lawan (pengali bekerja setengahnya). (hanya aksi stamina)"],
		["accuracy", "Menurunkan tingkat meleset serangan. (hanya aksi stamina)"],
		["evasion", "Mengubah tingkat menghindar dari serangan lawan (pengali bekerja setengahnya). (hanya aksi stamina)"],
		["restore", "Mengubah jumlah stamina yang pulih saat aksi berakhir. Makin dekat ke penuh, makin landai kenaikannya. (hanya aksi stamina)"],
	],
	children: {
		category: {
			title: "Kategori",
			summary: "Kategori tempat properti ini diterapkan",
			points: ["Atur ID kategori tempat properti ini diterapkan.", "Bila diatur `*`, properti diterapkan ke seluruh kategori.", "Bila dikosongkan, properti diterapkan ke kategori tempat item itu berada.", "Bila kamu mengatur ID kategori lain, efeknya bekerja pada aksi kategori tersebut. Item itu sendiri boleh berada di kategori mana pun."],
		},
		attack: {
			title: "Serangan [Selisih level]",
			summary: "Koreksi terhadap kerusakan stamina yang diberikan kepada lawan (hanya berlaku pada aksi stamina)",
			points: ["Kerusakan serangan dihitung seolah-olah level pemain lebih tinggi daripada level aksi sebesar nilai ini."],
		},
		defence: {
			title: "Pertahanan [Selisih level]",
			summary: "Koreksi terhadap kerusakan stamina yang diterima dari lawan (hanya berlaku pada aksi stamina)",
			points: ["Kerusakan yang diterima dihitung seolah-olah level pemain lebih tinggi daripada level aksi sebesar nilai ini. Makin tinggi nilainya, makin berkurang kerusakan yang diterima."],
		},
		accuracy: {
			title: "Akurasi [Selisih level]",
			summary: "Koreksi terhadap tingkat meleset serangan (hanya berlaku pada aksi stamina)",
			points: ["Tingkat meleset dihitung seolah-olah level pemain lebih tinggi daripada level aksi sebesar nilai ini. Makin tinggi nilainya, makin rendah tingkat meleset."],
		},
		evasion: {
			title: "Menghindar [Selisih level]",
			summary: "Koreksi terhadap tingkat menghindar dari serangan lawan (hanya berlaku pada aksi stamina)",
			points: ["Tingkat menghindar dihitung seolah-olah level pemain lebih tinggi daripada level aksi sebesar nilai ini. Makin tinggi nilainya, makin mudah menghindar dari serangan lawan."],
		},
		restore: {
			title: "Pemulihan [Selisih level]",
			summary: "Koreksi terhadap jumlah stamina yang pulih (hanya berlaku pada aksi stamina)",
			points: ["Jumlah stamina yang pulih dihitung seolah-olah level pemain lebih tinggi daripada level aksi sebesar nilai ini."],
		},
		speed: {
			title: "Kecepatan [Selisih level]",
			summary: "Koreksi terhadap waktu yang dibutuhkan aksi",
			points: ["Waktu yang dibutuhkan dihitung seolah-olah level pemain lebih tinggi daripada level aksi sebesar nilai ini. Makin tinggi nilainya, makin pendek waktu yang dibutuhkan."],
		},
		chance: {
			title: "Tingkat keberhasilan [Selisih level]",
			summary: "Koreksi terhadap peluang keberhasilan aksi",
			points: ["Peluang keberhasilan aksi dihitung seolah-olah level pemain lebih tinggi daripada level aksi sebesar nilai ini. Makin tinggi nilainya, makin naik peluang keberhasilannya."],
		},
		experience: {
			title: "Pengalaman [Selisih level]",
			summary: "Koreksi terhadap pengalaman yang diperoleh",
			points: ["Pengalaman dihitung seolah-olah level pemain lebih rendah daripada level aksi sebesar nilai ini (karena perhitungannya terbalik, makin tinggi level aksi, makin banyak pengalaman yang didapat)."],
		},
	},
	options: {
		label: "property",
	},
};

export const combat: Type.Combat = {
	title: "Nilai tempur",
	summary: "Pengaturan nilai koreksi tempur pada aksi bertipe stamina",
	points: ["Ini adalah nilai koreksi yang hanya berlaku pada aksi bertipe `stamina`.", "Tiap nilai dihitung sebagai koreksi tambahan terhadap selisih level antara pemain dan aksi.", "Misalnya, bila nilai serangan 10, kerusakan serangan dihitung seolah-olah level pemain 10 lebih tinggi daripada level aksi. Bila negatif, koreksinya ke arah sebaliknya.", "Tergantung di mana kamu mengaturnya, nilai itu menjadi nilai pihak pemain atau nilai pihak lawan.", "Nilai pihak lawan bekerja meniadakan isian berlawanan yang bersesuaian. Pertahanan lawan meniadakan serangan pemain, serangan lawan meniadakan pertahanan pemain, menghindar lawan meniadakan akurasi pemain, dan akurasi lawan meniadakan menghindar pemain.", "Hanya pemulihan yang saling meniadakan dengan isian yang sama: makin tinggi pemulihan lawan, makin sedikit pemulihan pemain."],
	list: [
		["Tempat pengaturan", "Nilai pihak mana"],
		["`defaultCombat` di bagian umum", "Nilai acuan pihak pemain. Menjadi titik awal bersama bagi semua aksi `stamina`"],
		["Nilai tempur aksi", "Nilai pihak lawan. Dilihat dari pemain, bekerja sebagai koreksi ke arah sebaliknya"],
		["Nilai tempur skill", "Nilai pihak yang memiliki skill itu. Skill pihak sendiri ditambahkan ke pemain, skill lawan ke pihak lawan"],
	],
	children: {
		attack: {
			title: "Serangan [Selisih level]",
			summary: "Koreksi selisih level terhadap kerusakan stamina yang diberikan kepada lawan",
			points: ["Makin tinggi nilai di pihak pemain, makin besar kerusakan yang diberikan kepada lawan.", "Nilai yang diatur pada aksi atau pada skill lawan menjadi serangan pihak lawan, dan makin tinggi nilainya, makin besar kerusakan yang diterima pemain."],
		},
		defence: {
			title: "Pertahanan [Selisih level]",
			summary: "Koreksi selisih level terhadap kerusakan stamina yang diterima dari lawan",
			points: ["Makin tinggi nilai di pihak pemain, makin berkurang kerusakan yang diterima.", "Nilai yang diatur pada aksi atau pada skill lawan menjadi pertahanan pihak lawan, dan makin tinggi nilainya, makin kecil kerusakan yang diberikan pemain."],
		},
		accuracy: {
			title: "Akurasi [Selisih level]",
			summary: "Koreksi selisih level terhadap tingkat meleset serangan",
			points: ["Makin tinggi nilai di pihak pemain, makin rendah tingkat meleset serangan.", "Nilai yang diatur pada aksi atau pada skill lawan menjadi akurasi pihak lawan, dan makin tinggi nilainya, makin sulit pemain menghindar dari serangan lawan."],
		},
		evasion: {
			title: "Menghindar [Selisih level]",
			summary: "Koreksi selisih level terhadap tingkat menghindar dari serangan lawan",
			points: ["Makin tinggi nilai di pihak pemain, makin mudah menghindar dari serangan lawan.", "Nilai yang diatur pada aksi atau pada skill lawan menjadi menghindar pihak lawan, dan makin tinggi nilainya, makin sulit serangan pemain mengenai sasaran."],
		},
		restore: {
			title: "Pemulihan [Selisih level]",
			summary: "Koreksi selisih level terhadap jumlah stamina yang pulih",
			points: ["Makin tinggi nilai di pihak pemain, makin banyak stamina yang pulih setelah pertempuran.", "Nilai yang diatur pada aksi atau pada skill lawan menjadi pemulihan pihak lawan, dan makin tinggi nilainya, makin sedikit pemulihan pemain.", "Hanya pemulihan yang, berbeda dari isian lain, saling meniadakan dengan isian yang sama."],
		},
	},
	options: {
		label: "combat",
	},
};

export const acquisition: Type.Acquisition = {
	title: "Perolehan",
	summary: "Pengaturan perolehan item dan level kategori",
	points: ["Atur apa yang diperoleh.", "Selain item, level kategori dan jumlah eksekusi aksi juga bisa diubah.", "Peluang mendapatkannya bisa diatur."],
	list: [
		["Tipe", "Yang diperoleh"],
		["Kategori", "Level"],
		["Aksi", "Jumlah eksekusi"],
		["Item", "Jumlah kepemilikan"],
	],
	children: {
		type: {
			title: "Tipe",
			summary: "Jenis elemen yang diperoleh",
			list: [
				["Tipe", "Yang diperoleh"],
				["Kategori", "Level (nilai yang diatur langsung ditambahkan)"],
				["Aksi", "Jumlah eksekusi"],
				["Item", "Jumlah kepemilikan"],
			],
		},
		id: {
			title: "ID elemen",
			summary: "ID yang menandai elemen yang diperoleh",
		},
		count: {
			title: "Nilai",
			summary: "Angka yang diperoleh",
			points: ["Bila diatur nilai negatif, jumlah kepemilikan, jumlah eksekusi, atau level akan berkurang. Namun tidak akan turun di bawah 0.", "Bila pada item diatur jumlah kepemilikan maksimum (maximum), jumlah kepemilikan tidak bertambah melewati nilai itu.", "Bila tipenya kategori, nilai yang diatur langsung ditambahkan ke level (1 berarti satu level). Cara yang biasa adalah menyesuaikannya lewat pengaturan pengalaman pada aksi. Tanpa tujuan khusus, pengaturan ini tidak diperlukan.", "Level kategori tidak turun di bawah 0 dan juga tidak melewati `maxCategoryLevels` di bagian umum (level maksimum kategori).", "Nilai diatur dengan bilangan bulat."],
		},
		chance: {
			title: "Peluang [-1 sampai 1]",
			summary: "Peluang perolehan berhasil (nilai negatif hanya dinilai saat gagal)",
			points: ["Atur peluang mendapatkannya dengan desimal dari -1 sampai 1. Untuk menentukan peluang dipakai nilai mutlaknya.", "Saat nilainya positif, penilaian hanya dilakukan ketika aksi berhasil: dengan `1` pasti didapat, dengan `0.5` didapat dengan peluang 50%.", "Saat nilainya negatif, penilaian hanya dilakukan ketika aksi gagal: dengan `-1` pasti didapat, dengan `-0.5` didapat dengan peluang 50%.", "Dengan `0`, tidak akan didapat baik saat berhasil maupun saat gagal.", "Nilai bawaannya `1` (pasti didapat saat berhasil)."],
		},
	},
	links: { type: "type" },
	options: {
		label: "acquisition",
	},
};

export const requirement: Type.Requirement = {
	title: "Syarat",
	summary: "Pengaturan syarat yang diperlukan untuk memakai atau menampilkan elemen",
	points: ["Ini adalah syarat yang diatur pada tiap elemen: kategori, aksi, item, dan acara.", "Selama tidak semua syarat yang diatur terpenuhi, operasi yang ditunjukkan pada tabel tidak bisa dilakukan.", "Tergantung pengaturan pembukaan (unlocked) elemen, elemen itu sendiri tidak tampil di layar sampai syaratnya terpenuhi."],
	list: [
		["Tempat pengaturan", "Yang tidak bisa dilakukan bila syarat tidak terpenuhi"],
		["Kategori", "Eksekusi semua aksi di dalam kategori dan operasi itemnya"],
		["Aksi", "Eksekusi aksi"],
		["Item", "Operasi item (memasang dan sebagainya)"],
		["Acara", "Penyelesaian tugas, pemicuan acara perubahan dan acara tetap"],
	],
	children: {
		type: {
			title: "Tipe",
			summary: "Jenis elemen yang dirujuk sebagai syarat",
			list: [
				["Tipe", "Nilai yang dirujuk"],
				["Kategori", "Level kategori"],
				["Aksi", "Jumlah eksekusi aksi"],
				["Item", "Jumlah kepemilikan item"],
			],
		},
		id: {
			title: "ID elemen",
			summary: "ID elemen yang dirujuk sebagai syarat",
			points: ["Atur ID kategori, aksi, atau item yang dirujuk sebagai syarat.", "Bila pada acara penghitungan per grup (requiringGroup) diaktifkan, ini diperlakukan sebagai ID grup, bukan elemen tunggal."],
		},
		count: {
			title: "Nilai",
			summary: "Angka yang dibutuhkan syarat",
			points: ["Syarat terpenuhi bila nilainya sama dengan atau melebihi angka yang ditentukan.", "Diatur dengan bilangan bulat 0 atau lebih. Nilai bawaannya `1`."],
		},
		chance: {
			title: "Peluang konsumsi [0-1]",
			summary: "Peluang item dikonsumsi (0 sampai 1, hanya berlaku bila tipenya item)",
			points: ["Ini adalah peluang mengonsumsi item ketika syarat terpenuhi dan aksi dijalankan.", "Dengan `1` pasti dikonsumsi, dengan `0.5` dikonsumsi dengan peluang 50%, dengan `0` tidak dikonsumsi.", "Nilai bawaannya `1` (pasti dikonsumsi). Namun pada syarat acara (tugas, acara perubahan, acara tetap), nilai bawaannya `0` (tidak dikonsumsi) agar simpananmu tidak berkurang saat diselesaikan.", "Dengan `0` stok tidak berkurang, jadi aksi bisa dijalankan berkali-kali selama jumlah kepemilikan mencapai nilai syaratnya. Gunakan ini bila kamu ingin syaratnya hanya berupa item yang terpasang.", "Bila tipenya bukan item, pengaturan ini tidak berlaku."],
		},
		equipment: {
			title: "Peralatan",
			summary: "Apakah item harus dalam keadaan terpasang sebagai syarat (hanya berlaku bila tipenya item)",
			points: ["Bila diaktifkan, syaratnya bukan hanya memiliki item, tetapi juga memasangnya.", "Terpasang atau tidaknya ditentukan oleh peralatan kategori tempat item itu berada.", "Bila tipenya bukan item, pengaturan ini tidak berlaku."],
		},
	},
	links: { type: "type" },
	options: {
		label: "requirement",
	},
};

export const information: Type.Information = {
	title: "Informasi",
	summary: "Pengaturan informasi dasar elemen (ID, nama, penjelasan, ikon, dan warna)",
	points: ["Ini adalah isian informasi dasar yang sama untuk tiap elemen di dalam dunia (kategori, aksi, item, grup, acara, skill, dan preset).", "Diatur satu per satu untuk tiap elemen."],
	children: {
		id: {
			title: "ID penanda",
			summary: "ID unik untuk menandai elemen",
			points: ["Ini adalah ID untuk menandai tiap elemen secara unik.", "Ini adalah untaian karakter yang dipakai editor untuk membedakan elemen tersebut.", "Misalnya, item mana yang didapat saat sebuah aksi selesai ditentukan dengan ID.", "Karakter yang bisa dipakai adalah gabungan huruf, tanda hubung, dan angka, sepanjang 1 sampai 100 karakter."],
			important: "Setelah game dibagikan, jangan mengubah ID yang sudah diatur. Bila diubah, ID tidak lagi cocok dengan data game yang ada dan game tidak berjalan sebagaimana mestinya.",
			children: {
				displayName: {
					title: "Nama yang ditampilkan",
					summary: "Nama tampilan yang dibuat otomatis dari ID",
					points: ["Bila nama tidak diatur, tanda hubung diganti spasi dan tiap kata diubah menjadi huruf besar di awal serta huruf kecil setelahnya, lalu ditampilkan sebagai nama.", "Meski ID memuat huruf besar, semua selain huruf awal diubah menjadi huruf kecil.", "Untuk bahasa selain Inggris, isian nama perlu diatur satu per satu."],
					children: {
						example: {
							title: "Contoh",
							summary: "Contoh nyata pengubahan ID",
							points: ["Bila ID diatur `stylish-strong-axe`, namanya menjadi `Stylish Strong Axe`.", "Bila ID diatur `stylish-STRONG-axe`, namanya juga menjadi `Stylish Strong Axe`."],
						},
					},
				},
				noDuplicate: {
					title: "Tidak boleh sama",
					summary: "Larangan ID yang sama di dalam tipe yang sama",
					points: ["Karena dipakai untuk membedakan elemen, jangan sampai sama di dalam tiap tipe: kategori, aksi, item, grup, acara, skill, dan preset.", "Acara memperlakukan tugas, acara perubahan, dan acara tetap sebagai satu tipe, jadi di antara ketiganya pun jangan sampai sama.", "ID yang sama pada tipe yang berbeda tidak jadi masalah.", "Dunia yang memuat ID kembar akan menghasilkan galat saat validasi."],
					links: { type: "type" },
				},
			},
		},
		name: {
			title: "Nama",
			summary: "Nama elemen yang ditampilkan",
			points: ["Ini adalah nama elemen yang ditampilkan di dalam game.", "Bahasa selain Inggris juga bisa dimasukkan.", "Nama yang sama dengan elemen lain pun tidak masalah.", "Bisa dimasukkan sampai 20 karakter.", "Bila tidak muat pada lebar tampilan, bagian yang melebihi dipersingkat dengan `…`."],
			children: {
				translateFromId: {
					title: "Pengubahan otomatis dari ID",
					summary: "Fungsi yang membuat nama secara otomatis dari ID",
					points: ["Bila dikosongkan, nama ditampilkan otomatis berdasarkan ID. Rinciannya lihat bagian sebelumnya."],
				},
			},
		},
		explanation: {
			title: "Penjelasan",
			summary: "Penjelasan rinci elemen",
			points: ["Ini adalah penjelasan elemen yang ditampilkan di dalam game.", "Bahasa selain Inggris juga bisa dimasukkan. Teks yang panjang pun ditampilkan seluruhnya.", "Bila tidak ada penjelasan, kosongkan saja."],
		},
		icon: {
			title: "Ikon",
			summary: "Pengaturan ikon yang mewakili elemen",
			points: ["Sebagai ikon bisa diatur gambar, Iconify, atau emoji.", "Iconify adalah layanan yang menyediakan berbagai macam ikon.", "Bila beberapa di antaranya diatur sekaligus, yang ditampilkan mengikuti urutan prioritas gambar, Iconify, lalu emoji."],
			children: {
				image: {
					title: "Gambar",
					summary: "Memakai berkas gambar apa saja",
					points: ["Ini adalah gambar yang mewakili elemen.", "Saat dimasukkan, gambar otomatis diperkecil hingga maksimal 60×60 piksel dan dikompresi ulang.", "Tidak diperlukan bila Iconify atau emoji sudah diatur."],
					children: {
						"file-type": {
							title: "Jenis berkas",
							summary: "Format berkas gambar yang didukung",
							points: ["Jenis umum yang bisa ditampilkan browser dapat dipakai.", "JPEG, PNG, GIF, WebP, SVG, dan sebagainya.", "GIF dan AVIF diubah menjadi PNG. JPEG dan WebP diperkecil dengan format aslinya dipertahankan.", "SVG disematkan apa adanya tanpa diperkecil, jadi hindari berkas yang berukuran besar."],
						},
					},
				},
				iconify: {
					title: "Iconify",
					summary: "Pemakaian kumpulan ikon Iconify",
					points: ["Ini adalah ikon yang mewakili elemen.", "Bila gambar sudah diatur, gambar itulah yang ditampilkan lebih dulu."],
					children: {
						iconify: {
							title: "Cara mencari ikon",
							summary: "Cara memilih ikon dari Iconify",
							points: ["Ikon yang bisa ditampilkan silakan cari di `Iconify`.", "Dengan pencarian ikon, ikon yang paling pas langsung ketemu.", "Saat kamu memilih ikon, penanda ikon itu seperti `game-icons:sword-wound` (jenis kumpulan ikon `:` nama ikon) akan tampil, jadi tempelkan apa adanya ke isian ikon ini."],
							images: ["iconify-selection.png"],
							links: { iconify: "https://icon-sets.iconify.design" },
						},
					},
				},
				emoji: {
					title: "Emoji",
					summary: "Menampilkan ikon dengan emoji",
					points: ["Menampilkan emoji sebagai ikon.", "Masukkan emoji Unicode apa adanya.", "Karena yang dipakai adalah emoji yang terpasang di lingkungan eksekusi, tampilannya sedikit berbeda tiap pengguna.", "Dengan Iconify kamu bisa mengatur emoji yang tidak bergantung pada tiap lingkungan", "Karakter selain emoji juga bisa ditampilkan, tetapi bila karakternya lebih dari satu tampilannya bisa berantakan.", "Misalnya, kamu memasukkan emoji seperti `🗡️` atau `⚔️`."],
				},
			},
		},
		color: {
			title: "Warna",
			summary: "Pengaturan warna tampilan elemen",
			points: ["Sebagai warna elemen, warna ini diterapkan pada ikon elemen dan warna latarnya.", "Dipilih dari pemilih warna di editor.", "Hitam (`#000000`) diperlakukan sebagai nilai yang berarti \"warna belum diatur\". Nilai awal pemilih warna pun hitam ini.", "Bila kamu ingin tampilannya hitam, tentukan warna yang sedikit digeser seperti `#010101`."],
			children: {
				"heritage-from-parent": {
					title: "Pewarisan dari elemen induk",
					summary: "Penerusan pengaturan warna elemen induk",
					points: ["Aksi, item, dan acara yang warnanya belum diatur mewarisi warna kategori tempatnya berada.", "Susunan pewarisannya sebagai berikut.", "Pada elemen yang warnanya diatur sendiri, warna itulah yang diutamakan. Warna itu tidak tertimpa meski kategorinya punya warna.", "Cara dasarnya adalah menentukan warna per kategori dan menyerahkan yang di bawahnya pada pewarisan. Warna sendiri diatur saat kamu ingin menonjolkan elemen tertentu.", "Bila pada aksi diatur atribut (attribute), warna yang diwarisi bukan warna kategori tempatnya berada, melainkan warna kategori yang ditunjuk pada atribut itu.", "Kategori sendiri tidak punya sumber pewarisan. Bila warna kategori dibiarkan hitam (`#000000`), kategori itu dan elemen di bawahnya yang warnanya belum diatur ditampilkan dengan warna tengah antara warna batang dan warna teks pada desain.", "Grup, skill, dan preset tidak mewarisi dan hanya memakai warna yang diatur pada dirinya sendiri."],
					quote: colorTree,
					links: { type: "type" },
				},
			},
		},
		copy: {
			title: "Menyalin informasi",
			summary: "Menggandakan informasi elemen lain",
			points: ["Menekan tombol `Copy Information` akan menyalin informasi elemen lain sekaligus ke elemen ini.", "Pilih tipe sumber salinan (kategori, aksi, item, grup, acara, skill, atau preset), lalu masukkan ID-nya.", "Semua isian termasuk ID penanda akan tertimpa. Setelah menyalin, ubahlah ID penanda menjadi ID yang tidak kembar."],
			links: { type: "type" },
		},
	},
	options: {
		label: "information",
	},
};

export const component: Markdown = {
	title: "Komponen",
	summary: "Bagian yang dipakai bersama",
	points: ["Bagian yang dipakai bersama pada pengaturan di berbagai tempat diambil terpisah dan ditangani tersendiri.", "Komponen yang dipakai di tempat mana pun itu sama, tetapi tergantung tempatnya ada juga bidang komponen yang tidak dipakai."],
	list: expandList("Komponen", [information, requirement, acquisition, combat, property], "Penjelasan"),
	options: {
		label: "component",
		linkedList: true,
	},
};

// type

export const preset: Type.Information = {
	...information,
	title: "Preset",
	summary: "Kustomisasi tampilan elemen sistem",
	points: ["Mengganti teks UI dan ikon yang sudah tertanam sebelumnya di mesin game (player).", "Hanya yang IDnya cocok dengan preset yang sudah ada yang menjadi sasaran penggantian. Menambahkan preset yang IDnya tidak cocok dengan ID mana pun yang ada tidak menimbulkan galat, tetapi tidak memengaruhi tampilan karena tidak ada tempat yang merujuknya.", "Hanya bidang yang kamu atur yang diganti. Misalnya bila kamu hanya mengatur ikon, untuk nama, warna, dan bidang lainnya dipakai yang asli.", "Penimpaan nama dan penjelasan lebih diutamakan daripada terjemahan tiap bahasa yang tertanam di player. String yang kamu timpa ditampilkan apa adanya di semua bahasa.", "Bila ingin mengubah kalimatnya per bahasa, tentukan di berkas terjemahan `translations/world` yang dihasilkan saat terjemahan diaktifkan. Yang itulah yang paling diutamakan."],
	options: {
		label: "preset",
	},
};

export const task: Type.Event = {
	title: "Tugas",
	summary: "Misi yang tercapai bila syaratnya terpenuhi",
	points: ["Tugas tercapai bila syarat yang kamu atur terpenuhi, dan pesan ditampilkan di bagian atas layar.", "Ditampilkan di daftar misi player dan di daftar tugas kategori.", "Tugas tanpa syarat yang diatur tidak akan pernah tercapai.", "Setelah sekali tercapai, tugas tetap tercapai meski syaratnya kemudian tidak lagi terpenuhi, dan hadiahnya pun bisa diambil kapan saja.", "Hadiah tidak diserahkan otomatis. Pemain menerimanya saat membuka tugas dan menekan bilah Perolehan.", "Sampai hadiah diterima, bilah pada daftar diberi pita yang menandakan bahwa hadiah belum diambil.", "Tugas tanpa hadiah yang diatur tidak memunculkan bilah Perolehan dan langsung selesai begitu tercapai.", "Selama jumlah jenis item yang bisa kamu pegang sudah mencapai batas, hadiah tidak bisa diterima. Rapikan dulu simpananmu lalu ambil lagi.", "Dengan perolehan kamu bisa mengubah level kategori, jumlah eksekusi aksi, dan jumlah kepemilikan item.", "Yang ingin kamu picu pada momen selain syarat, seperti saat pertama kali dijalankan atau saat permainan berakhir, diatur dengan acara tetap (unique)."],
	links: { unique: "unique" },
	children: {
		information: information,
		category: {
			title: "Kategori",
			summary: "ID kategori tempat tugas bernaung",
			points: ["Tentukan ID kategori tempat tugas ini bernaung.", "Bila diatur, daftar tugas ditambahkan ke layar kategori player, dan di daftar misi pun tugas ditampilkan terkelompok per kategori.", "Bila dikosongkan, tugas tidak bernaung di kategori mana pun dan ditampilkan bersama di awal daftar misi.", "Bila warna tidak diatur pada tugas itu sendiri, tugas mewarisi warna kategori."],
			links: { category: "category" },
		},
		timing: {
			title: "Momen",
			summary: "Momen pemicuan tugas (tetap `tasked`)",
			points: ["Tugas sudah dipatok pada `tasked` (saat syarat yang kamu atur terpenuhi) dan tidak bisa diedit.", "Hadiah hanya bisa diterima sekali, dan setelah diterima tugas tetap tercapai tanpa berubah lagi.", "Yang ingin kamu picu pada momen tertentu lainnya diatur dengan acara tetap (unique)."],
			links: { unique: "unique" },
		},
		unlocked: {
			title: "Status tampilan awal",
			summary: "Status tampilan awal ikon tugas (tercapainya ditentukan syarat, dan pengaturan ini tidak membuatnya tercapai)",
			points: ["Syarat tercapainya tugas ditentukan oleh requirements, dan bidang ini hanya memengaruhi tampilan ikon di daftar.", "secreted: Tidak tampil sama sekali di daftar tugas sampai semua requirements terpenuhi (tercapainya sendiri tetap terjadi lewat syarat).", "hidden dan hinted: Ikon diberi garis miring dan ditampilkan sebagai belum terbuka.", "released: Garis miringnya hilang dan ikon ditampilkan sebagai sudah terbuka.", "Tugas yang sudah sekali tercapai tidak hilang dari daftar, dan tetap ditampilkan sebagai tercapai meski syaratnya kemudian tidak lagi terpenuhi."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Syarat tercapainya tugas" },
		requiringGroup: {
			title: "Penjumlahan grup",
			summary: "Memperlakukan id pada syarat sebagai ID grup dan menilai dari nilai total elemen yang bernaung di dalamnya",
			points: ["Bila diaktifkan, id yang kamu atur pada syarat (requirements) diperlakukan sebagai ID grup yang berada langsung di bawah dunia.", "Syarat bertipe kategori dinilai dari total level semua kategori yang bernaung di grup itu.", "Syarat bertipe aksi dinilai dari total jumlah eksekusi semua aksi yang bernaung di grup itu.", "Syarat bertipe item dinilai dari total jumlah kepemilikan semua item yang bernaung di grup itu.", "Elemen yang belum terbuka (selain released) tidak dihitung dalam total.", "Peluang konsumsi (chance) dan syarat peralatan (equipment) pada item diabaikan, dan jumlah kepemilikan pun tidak dikonsumsi. Keduanya hanya dipakai untuk penilaian.", "Bila dinonaktifkan, seperti sebelumnya, id pada syarat diperlakukan sebagai ID kategori, aksi, atau item satuan."],
			links: { group: "group" },
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "Hadiah yang bisa diterima saat tugas tercapai" },
		group: {
			title: "Grup tugas",
			summary: "Klasifikasi grup tampilan tugas",
			points: ["Terapkan salah satu yang didefinisikan di grup yang berada langsung di bawah dunia.", "Di daftar tugas kategori, tugas ditampilkan terpisah per grup dengan judul pada masing-masing. Tugas tanpa grup yang diatur pun menjadi satu kesatuan, dan preset \"Tugas\" dipakai sebagai judulnya.", "Di daftar misi, tugas tidak dipisah dengan judul; hanya urutannya saja yang terkumpul per grup.", "Urutan berjajarnya tiap kesatuan ditentukan oleh posisi tempat tugas pertama grup itu muncul."],
			links: { group: "group" },
		},
	},
	options: {
		label: "task",
	},
};

// 構造はtaskと同じで、timingだけchanged固定。プレイヤーの画面には一切表示されない内部処理用のイベント
export const changed: Type.Event = {
	title: "Acara perubahan",
	summary: "Acara untuk pemrosesan internal yang terpicu saat jumlah kategori, aksi, atau item bertambah sekaligus sebanyak jumlah pada syarat atau lebih",
	points: [
		"Diperiksa pada setiap momen ketika jumlah berubah, seperti selesainya aksi, pembelian dan penjualan, atau pembukaan peti harta.",
		"Syarat (requirements) dinilai dari besarnya pertambahan pada satu momen itu, bukan dari nilai mutlak seperti jumlah kepemilikan. Pertambahan kecil yang terbagi beberapa kali tidak dijumlahkan.",
		"Misalnya bila syarat item diatur 3, syarat terpenuhi asalkan item itu bertambah 3 atau lebih dalam satu kali itu. Pengurangan tidak dihitung sebagai pertambahan.",
		"Bila beberapa syarat diatur, semuanya harus terpenuhi sekaligus pada satu perubahan itu. Acara perubahan yang tidak diatur satu syarat pun tidak akan terpicu.",
		"Bila nilai syarat diatur `0`, syarat dianggap terpenuhi meski tidak ada pertambahan, sehingga acara terpicu setiap kali jumlah berubah.",
		"Peluang konsumsi (chance) dan peralatan (equipment) pada syarat tidak dilihat. Penilaian hanya memakai besarnya pertambahan, dan elemen yang dipakai pada syarat pun tidak berkurang.",
		"Hadiah diterima otomatis setiap kali syarat terpenuhi, dan acara terpicu berulang kali tanpa batas. Berbeda dengan tugas, ini bukan sekali saja, dan tidak perlu tindakan untuk menerimanya. Jumlahnya juga bisa diatur negatif.",
		"Berbeda dengan tugas atau pembelian, batas jumlah jenis item yang bisa kamu pegang tidak diperiksa, sehingga item baru bisa bertambah melebihi kapasitas.",
		"Pertambahan dari hadiah pun dianggap perubahan, jadi ketika hadiah suatu acara perubahan memenuhi syarat acara perubahan lain, acara itu terpicu berikutnya.",
		"Sama sekali tidak ditampilkan di layar player. Tidak muncul di daftar misi, dan pesan tercapai pun tidak ditampilkan.",
	],

	important: "Jangan mengatur hadiah acara perubahan sedemikian rupa sehingga memenuhi syaratnya sendiri. Pemicuannya tidak akan berhenti dan permainan akan berhenti. Contohnya kombinasi berupa acara yang syaratnya terpenuhi saat item A bertambah 1, sementara hadiahnya memberikan 1 item A.",
	links: { unique: "unique" },
	children: {
		information: information,
		category: {
			title: "Kategori",
			summary: "ID kategori tempat acara perubahan bernaung (hanya dipakai untuk klasifikasi karena tidak ditampilkan di layar)",
			points: ["Karena tidak ditampilkan di layar player, pengaturan ini tidak memengaruhi tampilan."],
		},
		timing: {
			title: "Momen",
			summary: "Momen pemicuan acara perubahan (tetap `changed`)",
			points: ["Sudah dipatok pada `changed` dan tidak bisa diedit.", "Diperiksa pada setiap momen ketika jumlah berubah, dan terpicu berulang setiap kali syarat terpenuhi."],
		},
		unlocked: {
			title: "Status tampilan awal",
			summary: "Praktis tidak berpengaruh karena tidak ditampilkan di layar",
			points: ["Acara perubahan tidak ditampilkan di layar player, jadi pengaturan ini tidak dipakai."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Syarat terpicunya acara perubahan (dinilai dari besarnya pertambahan jumlah)" },
		requiringGroup: {
			title: "Penjumlahan grup",
			summary: "Memperlakukan id pada syarat sebagai ID grup dan menilai dari total pertambahan elemen yang bernaung di dalamnya",
			points: ["Bila diaktifkan, id yang kamu atur pada syarat (requirements) diperlakukan sebagai ID grup yang berada langsung di bawah dunia.", "Pertambahan semua kategori, semua aksi, dan semua item yang bernaung di grup itu dijumlahkan untuk penilaian.", "Berbeda dengan penjumlahan grup pada tugas, pertambahan elemen yang belum terbuka pun ikut dihitung dalam total.", "Bila dinonaktifkan, seperti sebelumnya, id pada syarat diperlakukan sebagai ID kategori, aksi, atau item satuan."],
			links: { group: "group" },
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "Hadiah yang diterima otomatis saat acara perubahan terpicu" },
		group: {
			title: "Grup acara perubahan",
			summary: "Klasifikasi grup tampilan untuk pengelolaan internal (praktis tidak terpakai karena tidak ditampilkan di layar)",
			points: ["Acara perubahan tidak ditampilkan di layar player, jadi pengaturan ini tidak memengaruhi tampilan."],
		},
	},
	options: {
		label: "changed",
	},
};

export const group: Type.Information = {
	...information,
	title: "Grup",
	summary: "Mendefinisikan grup tampilan untuk kategori, aksi, item, dan tugas",
	points: ["Mendefinisikan grup untuk mengendalikan urutan tampilan. Pada tiap kategori, aksi, item, dan tugas kamu bisa mengatur grup yang didefinisikan di sini.", "Yang berada di grup yang sama ditampilkan terkumpul dalam daftar. Urutan berjajarnya tiap kesatuan ditentukan oleh posisi tempat elemen pertama grup itu muncul (bukan urutan definisi pada daftar grup ini).", "Yang dikosongkan pun diperlakukan sebagai satu grup, dan yang sama-sama kosong berkumpul bersama.", "Urutan definisi pada daftar grup ini hanya berlaku untuk susunan slot peralatan. Slot peralatan ditampilkan sesuai urutan di sini, dan grup yang tidak ada di sini digeser ke belakang.", "Grup juga bisa diberi nama, penjelasan, ikon, dan warna, dan di layar grup kamu bisa melihat daftar kategori, aksi, dan item yang bernaung di dalamnya.", "Bila penjumlahan grup diaktifkan pada syarat acara, kamu bisa menentukan ID grup dan menjadikan elemen yang bernaung di dalamnya sebagai syarat sekaligus."],
	links: { requirement: "requirement" },
	options: {
		label: "group",
	},
};

export const skill: Type.Skill = {
	title: "Skill",
	summary: "Efek khusus yang diundi tiap giliran pertempuran lalu aktif",
	points: ["Efek khusus yang pada aksi pertempuran (`stamina`) diundi tiap giliran lalu aktif. Pada aksi tipe lain skill tidak aktif.", "Wujudnya didefinisikan di sini, lalu dirujuk lewat ID dari `skill` item (pihakmu) dan `skills` aksi (pihak lawan).", "Kandidat pihakmu adalah skill yang dirujuk oleh item yang sedang memberi efek saat itu (`unnecessary` selama dimiliki, `necessary` dan `consumable` selama dipasang). Bila peralatan dilepas, skillnya pun keluar dari kandidat.", "Tiap giliran, kandidat pihakmu dan pihak lawan masing-masing diacak, peluang aktifnya dinilai dari yang teratas, dan hanya satu yang pertama berhasil yang aktif. Bila tidak ada yang berhasil, giliran itu tanpa skill.", "Bila skill yang sama dirujuk dari beberapa item atau aksi, kesempatan undiannya bertambah sebanyak itu sehingga skill lebih mudah aktif."],
	links: { item: "item", action: "action" },
	children: {
		information: information,
		chance: {
			title: "Peluang aktif [0-1]",
			summary: "Peluang skill ini aktif pada giliran itu",
			points: ["Tiap giliran dinilai dengan peluang ini apakah skill aktif. Dengan `1` pasti berhasil, dengan `0` tidak aktif. Nilai bawaannya `1`.", "Penilaian berjalan berurutan dari kandidat teratas hasil pengacakan, dan hanya skill pertama yang berhasil yang aktif. Karena itu, bila kandidatnya banyak, proporsi aktif sebenarnya lebih rendah daripada nilai ini.", "Bila tampilan penjelasan diaktifkan, nilai ini juga memengaruhi seberapa sering penjelasan muncul. Makin mudah suatu skill aktif, makin jarang penjelasannya diulang."],
		},
		property: {
			...combat,
			summary: "Nilai tempur yang ditambahkan pada giliran saat skill aktif",
			points: ["Hanya pada giliran saat skill ini aktif, nilai tempur di sini ditambahkan sebagai koreksi selisih level.", "Hanya nilai pemulihan yang menjadi pengecualian, dan bekerja bukan pada giliran itu melainkan sekaligus pada pemulihan setelah pertempuran usai. Dari nilai pemulihan skill yang aktif selama aksi, yang terbesar ditambahkan ke jumlah pemulihan oleh skill pihakmu dan dikurangkan darinya oleh skill pihak lawan."],
		},
		comment: {
			title: "Tampilan penjelasan",
			summary: "Apakah penjelasan ditampilkan sebagai notifikasi toast saat aktif",
			points: ["Ini adalah penanda apakah penjelasan ditampilkan sebagai notifikasi toast ketika skill ini aktif.", "Bila menyala, penjelasan ditampilkan tiap kali skill aktif dengan peluang (100% − peluang aktif) ÷ 2. Bila peluang aktifnya 40%, berarti 30%.", "Bila mati, penjelasan tidak ditampilkan.", "Bila penjelasannya kosong, penjelasan tidak ditampilkan meski kamu menyalakannya."],
		},
	},
	options: {
		label: "skill",
	},
};

export const item: Type.Item = {
	title: "Item",
	summary: "Elemen barang seperti peralatan dan barang konsumsi",
	points: ["Elemen yang berkaitan dengan kepemilikan barang seperti peralatan, barang konsumsi, dan barang berharga.", "Slot peralatan dibuat per grup pada tiap kategori, dan dari item pada slot yang sama hanya satu yang bisa dipasang. Item juga bisa dibuat agar tidak bisa dipasang.", "Karena jumlah kepemilikan itu sendiri adalah kemajuan, item juga bisa dipakai seperti penanda atau penghitung. Bila dibuat sebagai item tanpa efek yang juga tidak bisa dipasang, item menjadi elemen yang sekadar menghitung angka."],
	children: {
		information: information,
		category: {
			title: "Kategori",
			summary: "ID kategori tempat item bernaung",
			points: ["Tentukan ID kategori tempat item ini bernaung. Item berjajar di daftar item kategori yang ditentukan, dan slot peralatan pun dibuat per kategori.", "Bila warna tidak diatur pada item itu sendiri, item mewarisi warna kategori.", "Sasaran yang dikenai efek properti bisa ditentukan terpisah dari kategori tempatnya bernaung, sehingga item dari kategori lain pun bisa memberi efek."],
			links: { category: "category", property: "property" },
		},
		group: {
			title: "Grup",
			summary: "Klasifikasi grup tampilan item",
			points: ["Terapkan salah satu yang didefinisikan di grup yang berada langsung di bawah dunia.", "Daftar item ditampilkan sesuai urutan grup yang kamu atur.", "Bila dikosongkan, item tidak dikelompokkan."],
			links: { group: "group" },
		},
		unlocked: {
			title: "Status pembukaan awal",
			summary: "Status tampilan dan pembukaan awal elemen (otomatis naik ke status yang lebih tinggi bila syarat pemicuannya terpenuhi)",
			points: ["secreted: Tidak tampil sama sekali di UI sampai semua requirements terpenuhi (tidak muncul di petunjuk, dan di daftar syarat/hadiah pun tersamarkan).", "hidden: Selama tidak dirujuk oleh elemen terbuka mana pun dan syaratnya belum tercapai, item disembunyikan sepenuhnya (namanya pun diredupkan dan tidak bisa dioperasikan).", "hinted (bawaan): Hanya namanya yang ditampilkan lebih dulu, tetapi tidak bisa dioperasikan sampai terbuka.", "released: Terbuka dan bisa dioperasikan sejak awal tanpa kaitan dengan syarat (dulu \"tampil sejak awal\").", "Item yang sudah sekali saja didapat akan tetap terbuka tanpa kaitan dengan pengaturan ini maupun syarat.", "Sebaliknya, item yang tidak diatur satu syarat pun tidak akan terbuka sampai didapat, kecuali dijadikan `released`. Untuk item yang ingin kamu buat agar dibeli, pastikan syaratnya diatur."],
		},
		buyingValue: {
			title: "Harga beli [Koin]",
			summary: "Pengaturan harga pembelian item",
			points: ["Jumlah mata uang yang dibayarkan saat membeli 1 item. Nilai bawaannya `-1` (tidak bisa dibeli).", "Item yang belum terbuka tidak bisa dibeli meski harganya sudah diatur.", "Jumlah yang bisa dibeli sekaligus adalah yang lebih kecil antara jumlah yang terbeli dengan mata uang yang dimiliki dan sisa sampai jumlah kepemilikan maksimum."],
			list: [
				["Harga beli", "Perlakuan"],
				["0", "Tidak bisa dibeli"],
				["Nilai lebih besar dari 0", "Harga saat bisa dibeli"],
				["Nilai lebih kecil dari 0 (misalnya -1)", "Tidak bisa dibeli (diperlakukan sama seperti 0)"],
			],
		},
		sellingValue: {
			title: "Harga jual [Koin]",
			summary: "Pengaturan harga penjualan item",
			points: ["Jumlah mata uang yang diterima saat menjual 1 item. Nilai bawaannya `0` (tidak bisa dijual).", "Mata uang yang diterima sama seperti saat membeli, yaitu yang ditentukan oleh ID mata uang jual beli.", "Harga jual tidak ditentukan otomatis dari harga beli, jadi bila ingin item bisa dijual pastikan nilainya diatur.", "Nilai negatif tidak bisa diatur."],
			list: [
				["Harga jual", "Perlakuan"],
				["0", "Tidak bisa dijual"],
				["Nilai lebih besar dari 0", "Bisa dijual dengan harga itu"],
			],
		},
		maximum: {
			title: "Jumlah kepemilikan maksimum [Buah]",
			summary: "Batas jumlah kepemilikan maksimum item",
			points: ["Bila 0, jumlah yang bisa dimiliki tidak dibatasi. Nilai bawaannya `0`.", "Bila 1 atau lebih, item hanya bisa dimiliki sampai jumlah itu. Bila batasnya tercapai, jumlah kepemilikan tidak bertambah meski item didapat lagi.", "Ini juga menjadi batas jumlah yang bisa dibeli.", "Bila jumlah kepemilikan pada data simpanan melebihi batas, jumlahnya dikurangi sampai batas saat dimuat."],
		},
		equipmentType: {
			title: "Tipe peralatan",
			summary: "Pengaturan tipe terkait pemasangan, efek, dan konsumsi item",
			points: ["Pada item `necessary` dan `consumable`, grupnya otomatis menjadi slot peralatan kategori.", "Di dalam grup yang sama hanya satu item yang bisa dipasang. Bila item baru dipasang, peralatan yang sudah ada di grup yang sama otomatis dilepas.", "Urutan slot peralatan mengikuti urutan definisi pada daftar grup dunia.", "`unnecessary` memberi efek terlepas dari dipasang atau tidak, dan besarnya efek sebanding dengan jumlah kepemilikan (0 buah tanpa efek, n buah menjadi n kali lipat).", "`consumable` hanya dikonsumsi ketika properti item itu memberi efek pada aksi yang dieksekusi, sebanyak 1 buah tiap satu aksi. Pada aksi yang tidak terjangkau efeknya, item tidak berkurang.", "Item yang habis dikonsumsi sampai 0 otomatis dilepas dari peralatan.", "Untuk memasangnya, syarat item itu dan syarat kategori harus sama-sama terpenuhi."],
			list: [
				["Nilai", "Pemasangan", "Pemberian efek", "Konsumsi", "Contoh"],
				["`necessary`", "Perlu", "Hanya selama dipasang (untuk 1 buah)", "Tidak", "Peralatan seperti pedang dan baju zirah"],
				["`consumable`", "Perlu", "Hanya selama dipasang (untuk 1 buah)", "Dikonsumsi saat aksi dieksekusi", "Item yang dikonsumsi untuk mendapat efek, seperti ramuan"],
				["`unnecessary`", "Tidak perlu", "Selalu selama dimiliki (sebanding dengan jumlah kepemilikan)", "Tidak", "Item pasif yang memberi efek cukup dengan dimiliki"],
				["`impossible`", "Tidak bisa", "Tidak ada", "Tidak", "Item tanpa efek seperti bahan dan rongsokan"],
			],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Syarat agar item terbuka dan bisa dipasang" },
		properties: { ...property, options: { ...property.options, array: true }, summary: "Efek properti yang dimiliki item" },
		coinId: { title: "ID mata uang jual beli", summary: "ID mata uang yang dipakai untuk jual beli item ini", points: ["Tentukan ID mata uang (coins) yang dipakai bersama untuk harga beli dan harga jual.", "Bila dikosongkan, atau bila ditentukan ID yang tidak ada di daftar mata uang, mata uang utama (yang pertama di coins) yang dipakai."] },
		// スキルの実体ではなくワールド直下のskillsのID参照なので、スキル自身の項目は持たせない
		skill: { title: skill.title, summary: "ID skill yang item ini berikan kepada pihakmu", points: ["Tentukan ID yang didefinisikan di skill yang berada langsung di bawah dunia. Bila dikosongkan, tidak ada skill.", "Selama item ini memberi efek (`unnecessary` selama dimiliki, `necessary` dan `consumable` selama dipasang), skill yang ditentukan ikut dalam undian pihakmu.", "Bila ditentukan ID yang tidak ada, ID itu diabaikan."], links: { skill: "skill" }, options: { label: "skill" } },
	},
	options: {
		label: "item",
	},
};

export const action: Type.Action = {
	title: "Aksi",
	summary: "Elemen tindakan seperti pengumpulan, pembuatan, dan pertempuran",
	points: ["Elemen yang mewakili tindakan seperti pengumpulan, pembuatan, jual beli, dan pertempuran.", "Setiap kali kamu bertindak, kamu memperoleh pengalaman dan levelmu naik.", "Kamu bisa mengaturnya agar item terpakai atau diperoleh setiap kali kamu bertindak.", "Pola tindakan ada beberapa macam."],
	children: {
		information: information,
		category: {
			title: "Kategori",
			summary: "ID kategori tempat aksi bernaung",
			points: ["Tentukan ID kategori tempat aksi ini bernaung."],
		},
		attribute: {
			title: "Atribut",
			summary: "Kategori atribut khas aksi",
			points: ["Kamu bisa mengatur atribut (kategori) tersendiri.", "Bila dikosongkan, kategori tempatnya bernaung akan diwarisi.", "Misalnya, bila pada aksi yang bernaung di kategori bernama Istana Raja Iblis kamu mengatur atribut sihir secara tersendiri, level dan properti kategori sihirlah yang dihitung dan diterapkan pada waktu penyelesaian serta kerusakan aksi itu.", "Pengalaman saat berhasil pun masuk ke kategori yang diatur pada atribut, bukan ke kategori tempatnya bernaung.", "Bila pada aksi itu sendiri belum diatur warna, warna ikon dan latarnya mewarisi warna kategori yang diatur pada atribut, bukan warna kategori tempatnya bernaung."],
			links: { category: "category" },
		},
		group: {
			title: "Grup",
			summary: "Penggolongan grup tampilan aksi",
			points: ["Terapkan salah satu yang didefinisikan di grup yang berada langsung di bawah dunia.", "Daftar aksi ditampilkan menurut urutan grup yang kamu atur."],
			links: { group: "group" },
		},
		unlocked: {
			title: "Status pembukaan awal",
			summary: "Status tampilan dan pembukaan awal elemen (otomatis naik ke status yang lebih tinggi bila syarat pemicuannya terpenuhi)",
			points: ["secreted: Tidak tampil sama sekali di UI sampai semua requirements terpenuhi (tidak muncul di petunjuk, dan di daftar syarat/hadiah pun tersamarkan).", "hidden: Selama tidak dirujuk oleh elemen terbuka mana pun dan syaratnya belum tercapai, item disembunyikan sepenuhnya (namanya pun diredupkan dan tidak bisa dioperasikan).", "hinted (bawaan): Hanya namanya yang ditampilkan lebih dulu, tetapi tidak bisa dioperasikan sampai terbuka.", "released: Terbuka dan bisa dioperasikan sejak awal tanpa kaitan dengan syarat (dulu \"tampil sejak awal\")."],
		},
		level: {
			title: "Level",
			summary: "Level kesulitan aksi",
			points: ["Kesulitan aksi dinyatakan dengan level.", "Saat dijalankan, level itu dibandingkan dengan level pemain dan setiap properti dihitung.", "Pembandingnya adalah level kategori yang diatur pada atribut.", "Misalnya, bila kamu menjalankan aksi yang lebih tinggi daripada levelmu sendiri, ada pengaruhnya seperti tingkat keberhasilan yang menurun.", "Selama syaratnya terpenuhi, aksi tetap bisa dijalankan meski level pemain lebih kecil daripada nilai ini.", "Namun bila `actionLevelLimit` di bagian umum (batas level aksi) aktif, nilai ini otomatis ditambahkan sebagai syarat atas level kategori, sehingga aksi tidak bisa dijalankan sampai levelnya sampai. Pada kategori yang tidak punya level, nilai itu tidak ditambahkan."],
			links: { property: "property" },
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Syarat yang diperlukan untuk menjalankan aksi" },
		seconds: {
			title: "Waktu yang dibutuhkan [Detik]",
			summary: "Waktu baku yang diperlukan untuk menjalankan aksi",
			points: ["Waktu baku (dalam detik) yang diperlukan untuk melakukan aksi satu kali.", "Pada tipe `stamina`, ini adalah selang waktu untuk satu giliran (mengikis stamina kedua pihak masing-masing satu kali). Giliran yang memulihkan stamina setelah hasilnya ditentukan pun memakai selang yang sama.", "Pada pelaksanaan sebenarnya, nilainya berubah karena kalkulasi properti."],
			links: { property: "property" },
		},
		experience: {
			title: "Pengalaman [100 untuk level berikutnya]",
			summary: "Pengalaman yang diperoleh saat aksi berhasil",
			points: ["Pengalaman baku yang diperoleh saat aksi dijalankan satu kali dan berhasil. 100 setara dengan pengalaman satu level.", "Dalam pertempuran, pengalaman diperoleh saat mengalahkan lawan, jadi sebaiknya diatur agak banyak.", "Pada pelaksanaan sebenarnya, nilainya berubah karena kalkulasi properti."],
			links: { property: "property" },
		},
		chance: {
			title: "Tingkat keberhasilan [0-1]",
			summary: "Peluang keberhasilan saat aksi selesai",
			points: ["Peluang untuk berhasil saat aksi selesai.", "Bila `1` selalu berhasil, dan bila `0` selalu gagal.", "Saat gagal pun item konsumsi tetap terpakai, tetapi pengalaman dan jumlah eksekusi tidak bertambah.", "Dari hadiah yang ada, hanya yang peluangnya (chance) disetel ke nilai positif yang diperoleh saat berhasil. Yang disetel ke nilai negatif hanya diperoleh saat gagal, jadi gagal belum tentu berarti tidak memperoleh apa pun.", "Pada pelaksanaan sebenarnya, nilainya berubah karena kalkulasi properti."],
		},
		maximum: {
			title: "Jumlah eksekusi maksimum [Kali]",
			summary: "Jumlah maksimum aksi dapat diselesaikan",
			points: ["Batas atas jumlah aksi dapat berhasil dan diselesaikan.", "Bila `0` berarti tanpa batas.", "Setelah batas atas tercapai, aksi menjadi tidak dapat dijalankan."],
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "Hadiah yang diperoleh saat aksi berhasil" },
		progressType: {
			title: "Tipe kemajuan",
			summary: "Tipe pelaksanaan aksi",
			points: ["Ada empat macam."],
			list: [
				["Tipe", "Isi tindakan", "Stamina", "Contoh"],
				["`persistent`", "Tipe saat aksi dijalankan berulang secara terus-menerus. Setiap kali selesai satu kali, kamu memperoleh pengalaman dan hadiah.", "Tidak berkaitan", "Menebang kayu, menambang, memancing"],
				["`single`", "Menjalankan aksi satu kali. Bila terhenti di tengah jalan, kemajuannya disimpan dan lain kali bisa dilanjutkan dari sana. Setelah selesai, pengguna menekan aksi konfirmasi dan menerima hasilnya.", "Tidak berkaitan", "Membuka peti harta karun, menguasai skill lewat membaca"],
				["`snap`", "Tipe saat aksi dijalankan seketika. Aksi langsung selesai tanpa berlalunya waktu.", "Tidak berkaitan", "Barter, penggunaan item"],
				["`stamina`", "Setiap kali waktu yang dibutuhkan berlalu, stamina pemain dan stamina lawan masing-masing berkurang. Saat stamina lawan habis, kamu memperoleh pengalaman dan hadiah. Saat stamina pemain habis, permainan berakhir dan semua aksi yang sedang berjalan dibatalkan.", "Berkaitan", "Pertempuran, pekerjaan yang mengandung bahaya"],
			],
		},
		property: combat,
		// スキルの実体ではなくワールド直下のskillsのID参照の一覧
		skills: { title: skill.title, summary: "Daftar skill yang dipicu pihak lawan", points: ["Tentukan skill yang dipicu lawan dari aksi ini dengan ID skill yang berada langsung di bawah dunia.", "Hanya bermakna pada aksi bertipe `stamina`.", "Setiap giliran, daftar diacak urutannya lalu peluang aktif dinilai dari awal, dan hanya yang pertama terpenuhi yang dipicu. Bila tidak ada yang terpenuhi, giliran itu berlalu tanpa skill.", "Skill pihak sendiri tidak terkumpul di sini, melainkan dari skill yang diatur pada item yang sedang memberi efek (item yang berkhasiat cukup dengan dimiliki dan tidak perlu dipakai, serta barang wajib dan barang habis pakai yang sedang dikenakan).", "ID yang tidak ada akan diabaikan."], options: { label: "skill", array: true } },
	},
	options: {
		label: "action",
	},
};

export const category: Type.Category = {
	title: "Kategori",
	summary: "Kerangka besar yang menggolongkan aksi dan item",
	points: ["Mewakili penggolongan yang besar.", "Misalnya, kamu bisa mengaturnya sebagai kerangka bebas: jarak dekat, jarak jauh, sihir, ruang bawah tanah, pandai besi, bengkel, dan sebagainya.", "Aksi dan item ditempatkan langsung di bawah dunia dan dikaitkan lewat ID kategori."],
	children: {
		information: information,
		group: {
			title: "Grup",
			summary: "Penggolongan grup tampilan kategori",
			points: ["Terapkan salah satu yang didefinisikan di grup yang berada langsung di bawah dunia.", "Daftar kategori ditampilkan menurut urutan grup yang kamu atur."],
			links: { group: "group" },
		},
		unlocked: {
			title: "Status pembukaan awal",
			summary: "Status tampilan dan pembukaan awal elemen (otomatis naik ke status yang lebih tinggi bila syarat pemicuannya terpenuhi)",
			points: ["secreted: Tidak tampil sama sekali di UI sampai semua requirements terpenuhi (tidak muncul di petunjuk, dan di daftar syarat/hadiah pun tersamarkan).", "hidden: Selama tidak dirujuk oleh elemen terbuka mana pun dan syaratnya belum tercapai, item disembunyikan sepenuhnya (namanya pun diredupkan dan tidak bisa dioperasikan).", "hinted (bawaan): Hanya namanya yang ditampilkan lebih dulu, tetapi tidak bisa dioperasikan sampai terbuka.", "released: Terbuka dan bisa dioperasikan sejak awal tanpa kaitan dengan syarat (dulu \"tampil sejak awal\")."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Syarat yang diperlukan untuk memakai kategori" },
		numeric: {
			title: "Ada tidaknya level",
			summary: "Ada tidaknya fungsi level kategori",
			points: ["Penanda apakah kategori ini punya level atau tidak.", "Bila aktif, kategori punya level; bila nonaktif, tidak punya.", "Sebagai contoh, ada cara pakai berupa mengaktifkannya pada kategori yang berbasis pengalaman seperti ilmu pedang dan sihir, lalu menonaktifkannya pada kategori tempat seperti ruang bawah tanah dan pandai besi.", "Bila nonaktif, pengalaman tidak masuk, dan dalam kalkulasi properti selisih level antara pemain dan aksi diperlakukan sebagai 0. Koreksi properti dari peralatan tetap berlaku seperti biasa.", "Kategori yang nonaktif juga dikeluarkan dari penilaian tamat (completed)."],
		},
		standaloneProgress: {
			title: "Kemajuan bersamaan",
			summary: "Pengaturan pelaksanaan sejajar dengan kategori lain",
			points: ["Penanda apakah aksi kategori ini bisa berjalan sejajar dengan aksi kategori lain.", "Bila aktif, aksi bisa berjalan bersamaan secara mandiri dari aksi kategori lain.", "Bila nonaktif, di seluruh kategori yang sama-sama disetel nonaktif hanya satu aksi yang bisa berjalan.", "Bila kamu memulai aksi baru di kategori yang nonaktif, aksi yang sedang berjalan tidak dibatalkan, melainkan didorong kembali ke awal antrian tunggu. Sisa jumlah eksekusinya dipertahankan, dan setelah aksi yang menyela selesai, aksi itu dilanjutkan dari sana."],
		},
		background: {
			title: "Latar",
			summary: "Pengaturan latar khas kategori",
			points: ["Mengatur latar kategori ini.", "Saat kategori dipilih, gambar latar ikut berubah.", "Bila tidak diatur, latar dari desain dipakai apa adanya.", "Saat dimasukkan, gambar otomatis diperkecil hingga muat dalam 256×256 piksel."],
		},
	},
	options: {
		label: "category",
	},
};

export const type: Markdown = {
	title: "Tipe",
	summary: "Penggolongan dasar dunia",
	points: ["Dunia tersusun dari 6 tipe.", "Semua elemen ditempatkan langsung di bawah dunia.", "Aksi dan item dikaitkan lewat ID kategori tempatnya bernaung.", "Hanya acara yang bukan tipe: acara ditempatkan terkumpul menurut momen di dalam acara (events) yang berada langsung di bawah dunia."],
	list: expandList("Tipe", [category, action, item, skill, group, preset], "Penjelasan"),
	quote: typeTree,
	options: {
		label: "type",
		linkedList: true,
	},
};

// basic

export const development: Type.Development = {
	title: "Pengembangan",
	summary: "Pengelolaan catatan dan galat saat pengembangan dunia",
	points: ["Dipakai saat pengembangan dunia.", "Isinya berkaitan dengan pengembangan dan pengujian dunia ini, dan tidak memengaruhi isi permainan.", "Pemain tidak akan pernah melihat isi yang berkaitan dengan pengembangan."],
	children: {
		version: {
			title: "Versi",
			summary: "Nomor versi build editor",
			points: ["Nomor versi editor pada saat dunia baru dibuat dicatat secara otomatis.", "Nomor itu tidak diperbarui meski kamu memuat dan menyunting dunia yang sudah ada.", "Pengembang tidak dapat mengubah isi ini."],
		},
		memo: {
			title: "Catatan",
			summary: "Rekaman catatan untuk pengembang",
			points: ["Pengembang bisa menuliskannya dengan bebas sebagai catatan.", "Tidak ada kaitannya dengan publikasi permainan."],
		},
		errors: {
			title: "Galat",
			summary: "Rekaman galat dari hasil validasi",
			points: ["Hasil validasi dunia disimpan di sini secara otomatis.", "Misalnya, hal seperti adanya jenis karakter yang tidak bisa dimasukkan atau angka yang dimasukkan melebihi batas atas ditampilkan sebagai galat.", "Bila tidak ada satu galat pun, sebagai gantinya disimpan satu baris pesan yang menyatakan keberhasilan.", "Pengembang tidak dapat mengubah isi ini.", "Selama galat masih tersisa, dunia tidak bisa dipublikasikan. Saat kamu menjalankan publikasi, validasi dijalankan lebih dulu, dan bila ada galat prosesnya terhenti di situ."],
		},
		timestamp: {
			title: "Stempel waktu",
			summary: "Rekaman pembuatan, penyimpanan, dan publikasi",
			points: ["Waktu pembuatan, penyimpanan, dan publikasi dunia dicatat secara otomatis.", "Pengembang tidak dapat mengubah isi ini."],
			children: {
				created: {
					title: "Tanggal pembuatan",
					summary: "Waktu dunia pertama kali dibuat",
					points: ["Tanggal dan waktu saat dunia pertama kali dibuat."],
				},
				saved: {
					title: "Tanggal penyimpanan",
					summary: "Waktu penyimpanan terakhir dijalankan",
					points: ["Tanggal dan waktu saat dunia terakhir disimpan."],
				},
				published: {
					title: "Tanggal publikasi",
					summary: "Waktu publikasi terakhir dijalankan",
					points: ["Tanggal dan waktu saat dunia terakhir dipublikasikan."],
				},
			},
		},
		autosaveing: {
			title: "Simpan otomatis",
			summary: "Aktif/nonaktifnya fungsi simpan otomatis",
			points: ["Menunjukkan apakah isi suntingan disimpan ke peramban secara otomatis.", "Kamu tidak bisa menulis ulang isian ini secara langsung. Ubahlah lewat pengalih simpan otomatis pada menu editor."],
		},
	},
	options: {
		label: "development",
	},
};

export const design: Type.Design = {
	title: "Desain",
	summary: "Pengaturan tampilan dunia seperti warna dan fonta",
	points: ["Pengaturan tentang tampilan dunia.", "Dua warna yang ditentukan di sini (warna bilah dan warna teks) menjadi dasar seluruh layar, dan semua warna yang dipakai di layar — baris yang terpilih, judul grup, warna afirmasi dan negasi, dan sebagainya — dibentuk dari keduanya.", "Hanya gambar latar yang bisa diganti per kategori, dan dalam hal itu pengaturan di sisi kategorilah yang diutamakan."],
	children: {
		barColor: {
			title: "Warna bilah",
			summary: "Warna yang menjadi latar bilah",
			points: ["Dipakai sebagai warna latar bilah.", "Karena warna ini juga menjadi dasar seluruh layar, warna baris yang terpilih pun dibentuk dari warna ini.", "Petak warna pada elemen yang belum diatur warnanya serta latar notifikasi toast menjadi warna antara warna ini dan warna teks."],
		},
		textColor: {
			title: "Warna teks",
			summary: "Warna teks dan latar",
			points: ["Dipakai sebagai warna teks.", "Gradasi latar pun dibentuk dari warna ini. Bila gambar latar diatur, gradasi yang sama ditipiskan dan ditumpangkan di atas gambar.", "Mengambil selisih terang-gelap yang besar dengan warna bilah membuat teks lebih mudah dibaca. Pada dunia yang selisihnya kecil, petak warna elemen yang belum diatur warnanya pun menjadi sulit dibedakan."],
		},
		shadowColor: {
			title: "Warna bayangan",
			summary: "Warna bayangan bilah",
			points: ["Dipakai sebagai warna bayangan yang jatuh pada bilah dan tajuk.", "Menjadikannya warna yang lebih gelap daripada warna bilah menghasilkan bayangan yang wajar."],
		},
		background: {
			title: "Gambar latar",
			summary: "Gambar latar seluruh permainan",
			points: ["Mengatur gambar latar permainan.", "Bila gambar tidak diatur, latarnya menjadi gradasi yang berdasar pada warna teks.", "Gambar otomatis diperkecil agar muat dalam 256×256 piksel. GIF dan AVIF diubah menjadi PNG.", "Bila gambar latar diatur pada suatu kategori, di layar kategori itu gambar dari sisi kategorilah yang diutamakan.", "Gambar yang diatur bisa dihapus dengan tombol Delete Image."],
			links: { category: "category" },
		},
	},
	options: {
		label: "design",
	},
};

export const general: Type.General = {
	title: "Umum",
	summary: "Pengaturan dasar permainan seperti bahasa dan pengaturan level",
	children: {
		language: {
			title: "Bahasa",
			summary: "Bahasa yang kamu pakai untuk membuat dunia",
			points: [
				"Menetapkan dalam bahasa apa kamu menulis nama dan penjelasan dunia. Ini bahasa yang menjadi dasar saat menyiapkan terjemahan.",
				"Ini juga bahasa yang pertama ditampilkan ketika pemain memulai permainan.",
				"Bila translations dinonaktifkan, pemain tidak bisa beralih dari bahasa ini.",
				"Ini pengaturan yang berbeda dari bahasa tampilan editor dunia itu sendiri. Bahasa tampilan editor dipilih saat membuka editor.",
			],
			links: { translation: "translation" },
		},
		translations: {
			title: "Terjemahan",
			summary: "Apakah menyiapkan terjemahan untuk berbagai bahasa",
			points: [
				"Bila diaktifkan, pemain bisa beralih ke bahasa yang disukainya dan bermain dengan bahasa itu.",
				"Bila dinonaktifkan, bahasa terkunci pada yang dipilih di language, dan operasi peralihannya sendiri tidak tersedia.",
				"Bila kamu mengaktifkannya, kamu perlu menyiapkan data terjemahan untuk tiap bahasa. Paket yang dipublikasikan disertai data terjemahan.",
				"Yang beralih adalah nama dan penjelasan yang didefinisikan di dunia. Terjemahan ungkapan umum di layar (preset) selalu disertakan, terlepas dari pengaturan ini.",
			],
			links: { translation: "translation", preset: "preset" },
		},
		offlineMaxHours: {
			title: "Waktu offline maksimum [Jam]",
			summary: "Batas waktu untuk kemajuan offline",
			points: ["Menetapkan paling lama berapa jam kemajuan saat offline berjalan.", "Misalnya bila kamu menetapkan 6 jam, proses kembali dari offline ditangani sampai 6 jam, dan meski kamu kembali setelah jeda yang lebih panjang, waktu offline tetap diperlakukan sebagai 6 jam.", "Bila kamu menetapkan 0 jam, sama sekali tidak ada proses yang ditangani saat kembali dari offline.", "Nilai maksimumnya adalah 24 jam."],
			links: { category: "category" },
		},
		maxCategoryLevels: {
			title: "Level maksimum kategori",
			summary: "Batas atas level tiap kategori",
			points: [
				"Menetapkan batas atas level tiap kategori. Nilai bawaannya `100`.",
				"Meski memperoleh pengalaman, level berhenti di nilai ini dan kelebihannya dibuang. Begitu pula bila hadiah menambah level secara langsung.",
				"Bila level pada data simpanan melewati batas atas, level itu dipangkas sampai batas atas saat dimuat.",
				"Bilah level dan laju kemajuan pada statistik ditampilkan dengan nilai ini sebagai penyebut.",
				"Kategori yang numeric-nya dinonaktifkan tidak naik level, jadi nilai ini tidak berkaitan dengannya.",
			],
			links: { category: "category" },
		},
		coins: {
			title: "Mata uang",
			summary: "Pengaturan mata uang (coins) yang dipakai di dalam permainan",
			points: [
				"Menetapkan mata uang yang dipakai di dalam permainan. Diperlukan sedikitnya satu.",
				"Mata uang bisa didefinisikan lebih dari satu, dan masing-masing diatur sebagai informasi (ID, nama, ikon, warna, dan sebagainya).",
				"Mata uang dipakai untuk jual beli item serta untuk memperluas kapasitas dan antrian.",
				"Mata uang yang pertama diperlakukan sebagai mata uang utama, dan dipakai ketika ID mata uang (`coinId`) tidak ditentukan pada item, kapasitas, atau antrian, atau ketika ditentukan ID yang tidak ada di daftar mata uang.",
				"Mata uang diperlakukan sebagai salah satu jenis item. Pada syarat dan hadiah, rujuklah ID yang diatur di sini sebagai item. Ia tidak termasuk kategori mana pun dan bukan objek pemasangan peralatan maupun jual beli.",
			],
			links: { information: "information", item: "item" },
		},
		capacity: {
			title: "Kapasitas",
			summary: "Pengaturan kapasitas inventaris",
			points: [
				"Mengelola batas atas jumlah jenis item yang bisa dimiliki pemain.",
				"Yang dikelola bukan jumlah kepemilikan tiap item, melainkan jumlah jenis item yang dimiliki.",
				"Bila `initialCount` dijadikan 0, kapasitas menjadi tanpa batas, dan pembelian kapasitas pun tidak bisa dilakukan.",
				"Bila kamu merujuk item kapasitas pada syarat atau hadiah, gunakanlah ID yang diatur di sini, atau `capacity`.",
			],
			children: {
				information: { ...information, title: "Informasi kapasitas", summary: "ID, nama, ikon, dan warna untuk memperlakukan kapasitas sebagai item" },
				initialCount: {
					title: "Nilai awal kapasitas [Buah]",
					summary: "Kapasitas inventaris awal (jumlah jenis item yang bisa dimiliki)",
					points: ["Ini kapasitas awal saat permainan dimulai (jumlah jenis item yang bisa dimiliki). Nilai bawaannya `10`.", "Bila dijadikan `0`, kapasitas menjadi tanpa batas, dan sekaligus pembelian kapasitas tidak bisa dilakukan."],
				},
				initialCost: {
					title: "Harga dasar kapasitas [Koin]",
					summary: "Harga awal untuk menambah kapasitas sebanyak satu",
					points: ["Ini harga dasar (koin) untuk menambah kapasitas inventaris sebanyak satu slot. Aturlah sebagai bilangan bulat `1` atau lebih.", "Harga sebenarnya dihitung sebagai \"harga dasar × laju kenaikan^jumlah pembelian yang sudah dilakukan\".", "Contoh: dengan harga dasar 100 dan laju kenaikan 1,2, pembelian ke-1 adalah 100 koin, ke-2 120 koin, dan ke-3 144 koin."],
				},
				increasingRate: {
					title: "Laju kenaikan kapasitas [Kali lipat]",
					summary: "Laju kenaikan biaya perluasan kapasitas",
					points: ["Ini pengali seberapa besar biaya perluasan kapasitas naik pada pembelian ke-n. Nilai bawaannya `1.2`.", "Pada `1.0` harganya selalu sama, pada `1.2` harganya menjadi 20% lebih mahal tiap kali membeli.", "Rumus: harga dasar × laju kenaikan^jumlah pembelian yang sudah dilakukan"],
					list: [
						["Laju kenaikan", "Buah ke-1", "Buah ke-5", "Buah ke-10", "Buah ke-100", "Buah ke-1000"],
						["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
						["1.05", "x1.00", "x1.22", "x1.55", "x125.24", "x1.5×10²¹"],
						["1.10", "x1.00", "x1.46", "x2.36", "x1.3×10⁴", "x2.2×10⁴¹"],
						["1.20", "x1.00", "x2.07", "x5.16", "x6.9×10⁷", "x1.3×10⁷⁹"],
						["1.50", "x1.00", "x5.06", "x38.44", "x2.7×10¹⁷", "x8.2×10¹⁷⁵"],
					],
				},
				coinId: {
					title: "ID mata uang kapasitas",
					summary: "ID mata uang yang dipakai untuk perluasan kapasitas",
					points: ["Menentukan ID mata uang (coins) yang dipakai untuk harga perluasan kapasitas inventaris.", "Bila dikosongkan, atau bila ditentukan ID yang tidak ada di daftar mata uang, mata uang utama (yang pertama di coins) yang dipakai."],
				},
				buyingLimit: {
					title: "Batas pembelian kapasitas [Kali]",
					summary: "Jumlah maksimum kapasitas bisa dibeli",
					points: ["Ini batas atas berapa kali kapasitas bisa dibeli dengan mata uang.", "Bila dijadikan `0`, pembelian bisa dilakukan tanpa batas.", "Bila dijadikan `-1`, pembelian tidak bisa dilakukan.", "Pertambahan kapasitas lewat hadiah tidak termasuk dalam batas ini."],
				},
			},
			links: { item: "item" },
		},
		queue: {
			title: "Antrian",
			summary: "Pengaturan jumlah slot untuk menjalankan aksi secara berturut-turut (antrian)",
			points: [
				"Mengelola jumlah slot antrian untuk menjalankan aksi secara berturut-turut.",
				"Antrian mencakup aksi yang sedang dijalankan, dan aksi yang berada paling depan itulah yang dijalankan. Saat slotnya `1`, hanya ada yang sedang dijalankan dan tidak bisa menahan yang menunggu.",
				"Seperti halnya kapasitas, jumlah slot bisa dibeli dengan mata uang, dan bisa juga ditambah dengan menentukan item antrian sebagai hadiah aksi atau acara.",
				"Bila kamu merujuk item antrian pada syarat atau hadiah, gunakanlah ID yang diatur di sini, atau `queue`.",
			],
			children: {
				information: { ...information, title: "Informasi antrian", summary: "ID, nama, ikon, dan warna untuk memperlakukan antrian sebagai item" },
				initialCount: {
					title: "Nilai awal antrian [Slot]",
					summary: "Jumlah slot penjalanan berturut-turut saat permainan dimulai",
					points: ["Ini jumlah slot antrian saat permainan dimulai. Nilai bawaannya `1`.", "Nilai minimumnya `1` (karena yang sedang dijalankan memakai satu slot. Tidak ada perlakuan `0` = tanpa batas seperti pada kapasitas)."],
				},
				initialCost: {
					title: "Harga dasar antrian [Koin]",
					summary: "Harga awal untuk menambah slot sebanyak satu",
					points: ["Ini harga dasar (koin) untuk menambah slot penjalanan berturut-turut sebanyak satu. Aturlah sebagai bilangan bulat `1` atau lebih.", "Harga sebenarnya dihitung sebagai \"harga dasar × laju kenaikan^jumlah pembelian yang sudah dilakukan\".", "Contoh: dengan harga dasar 100 dan laju kenaikan 1,2, pembelian ke-1 adalah 100 koin, ke-2 120 koin, dan ke-3 144 koin."],
				},
				increasingRate: {
					title: "Laju kenaikan antrian [Kali lipat]",
					summary: "Laju kenaikan biaya perluasan slot",
					points: ["Ini pengali seberapa besar biaya perluasan slot naik pada pembelian ke-n. Nilai bawaannya `1.2`.", "Pada `1.0` harganya selalu sama, pada `1.2` harganya menjadi 20% lebih mahal tiap kali membeli.", "Rumus: harga dasar × laju kenaikan^jumlah pembelian yang sudah dilakukan", "Cara kenaikannya sama dengan laju kenaikan kapasitas. Untuk gambaran pengalinya, lihatlah tabel kapasitas."],
				},
				coinId: {
					title: "ID mata uang antrian",
					summary: "ID mata uang yang dipakai untuk perluasan slot",
					points: ["Menentukan ID mata uang (coins) yang dipakai untuk harga perluasan slot penjalanan berturut-turut.", "Bila dikosongkan, atau bila ditentukan ID yang tidak ada di daftar mata uang, mata uang utama (yang pertama di coins) yang dipakai."],
				},
				buyingLimit: {
					title: "Batas pembelian antrian [Kali]",
					summary: "Jumlah maksimum slot bisa dibeli",
					points: ["Ini batas atas berapa kali slot penjalanan berturut-turut bisa dibeli dengan mata uang.", "Bila dijadikan `0`, pembelian bisa dilakukan tanpa batas.", "Bila dijadikan `-1`, pembelian tidak bisa dilakukan.", "Pertambahan slot lewat hadiah tidak termasuk dalam batas ini."],
				},
			},
			links: { item: "item" },
		},
		levelCommonRatio: {
			title: "Laju pertumbuhan pengalaman [Kali lipat]",
			summary: "Laju kenaikan kesulitan naik level",
			points: [
				"Ini laju pertumbuhan pengalaman yang diperlukan untuk mencapai level berikutnya seiring naiknya level kategori. Nilai bawaannya `1.05`, dan nilai di bawah `1` tidak bisa diatur.",
				"Memperbesar nilai ini menaikkan kesulitan. Bila dijadikan `1`, pengalaman yang diperlukan sama di level mana pun.",
				"Pengalaman yang diperlukan untuk mencapai level berikutnya adalah (laju pertumbuhan pengalaman)^(level saat ini-1). Level dihitung dengan membuang angka di belakang koma.",
				"Pengalaman yang diperoleh setelah mencapai batas atas (level maksimum kategori) akan dibuang.",
			],
			list: [
				["Laju pertumbuhan pengalaman", "Lv.1", "Lv.2", "Lv.10", "Lv.50", "Lv.99"],
				["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
				["1.02", "x1.00", "x1.02", "x1.20", "x2.64", "x6.96"],
				["1.05", "x1.00", "x1.05", "x1.55", "x10.92", "x119.28"],
				["1.10", "x1.00", "x1.10", "x2.36", "x106.72", "x1.1×10⁴"],
				["1.20", "x1.00", "x1.20", "x5.16", "x7583.70", "x5.8×10⁷"],
			],
			links: { category: "category" },
		},
		actionLevelLimit: {
			title: "Batas level aksi",
			summary: "Menuntut level kategori atribut untuk menjalankan aksi",
			points: [
				"Bila diaktifkan, di awal syarat (requirements) tiap aksi otomatis ditambahkan syarat \"level kategori atribut berada pada atau di atas level aksi tersebut\".",
				"Bila atribut (attribute) tidak diatur, kategori tempatnya bernaung yang dipakai.",
				"Bila numeric pada kategori atribut dinonaktifkan, kategori itu tidak naik level sehingga tidak ada yang ditambahkan.",
				"Syarat yang ditambahkan dituliskan saat dunia dimuat, jadi pada layar player pun ia ditampilkan sama seperti syarat biasa.",
			],
			links: { action: "action", category: "category", requirement: "requirement" },
		},
		propertyRatio: {
			title: "Rasio properti [Kali lipat]",
			summary: "Menjadi berapa kali lipat properti tiap 10 selisih level",
			points: [
				"Menetapkan menjadi berapa kali lipat properti tiap kali selisih antara level kategori dan level aksi melebar `10`. Nilai bawaannya `1.5`, dan nilai di bawah `1` tidak bisa diatur.",
				"Pengali dihitung sebagai (rasio properti)^(selisih level÷10). Saat selisih levelnya `0`, pengalinya `1` dan nilai yang diatur pada aksi dipakai apa adanya.",
				"Serangan dan pengalaman bertambah sebesar pengali ini, sedangkan pertahanan (kerusakan yang diterima) dan kecepatan (waktu yang dibutuhkan) berkurang sebesar pengali yang sama.",
				"Akurasi, menghindar, tingkat keberhasilan, dan jumlah pemulihan adalah nilai yang tetap berada di `0`–`100`%, jadi pengali dikenakan pada perbandingan antara sisi yang terjadi dan sisi yang tidak. `0`% dan `100`% tidak berubah, dan nilai di antaranya pun tidak pernah melewati `100`%.",
				"Pada pertahanan, menghindar, dan kecepatan, pengali bekerja setengahnya (selisih level `20` setara dengan selisih level `10` pada properti lain). Pertahanan dan menghindar bekerja ganda, pada tingkat terkena serangan dan pada kerusakan yang diterima, sedangkan kecepatan bekerja pada semua properti lain sebagai jumlah penjalanan, jadi pengaruhnya dilemahkan agar seimbang.",
				"Patokannya adalah (laju pertumbuhan pengalaman) pangkat `6.7`. Di atas itu, kenaikan level makin cepat seiring naiknya level; di bawahnya, kenaikan level pada bagian akhir makin memakan waktu.",
				"Bila dijadikan `1`, pengaruh selisih level menghilang. Memperbesar nilainya membuat untung ruginya selisih level menjadi tajam.",
			],
			list: [
				["Rasio properti", "Selisih level -20", "Selisih level -10", "Selisih level 0", "Selisih level +10", "Selisih level +20"],
				["`1`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`"],
				["`1.5`", "`x0.44`", "`x0.67`", "`x1.00`", "`x1.50`", "`x2.25`"],
				["`2`", "`x0.25`", "`x0.50`", "`x1.00`", "`x2.00`", "`x4.00`"],
				["`3`", "`x0.11`", "`x0.33`", "`x1.00`", "`x3.00`", "`x9.00`"],
			],
			links: { action: "action", property: "property" },
		},
		defaultCombat: { ...combat, summary: "Parameter tempur bawaan yang berlaku umum untuk semua aksi", points: ["Ini nilai koreksi tempur dasar di pihak pemain, yang berlaku umum untuk semua aksi bertipe `stamina`.", "Nilai tempur (property) tiap aksi adalah nilai pihak lawan, jadi bekerja ke arah meniadakan nilai yang diatur di sini."], links: { action: "action" } },
	},
	options: {
		label: "general",
	},
};

export const overview: Type.Overview = {
	title: "Ikhtisar",
	summary: "Informasi dasar dunia dan informasi pembuat",
	points: ["Isian yang menjelaskan isi dunia.", "Aturlah agar mudah dipahami saat pengguna memilih dunia.", "Selain URL, pengaturan ini tidak memengaruhi jalannya permainan."],
	children: {
		information: information,
		version: {
			title: "Versi",
			summary: "Nomor versi dunia",
			points: ["Masukkan angka `0` atau lebih (bilangan bulat atau desimal). Nilai bawaannya `0`.", "Umumnya bagian bulat mewakili versi mayor dan bagian desimal mewakili versi minor.", "Versi pada pengembangan (development) adalah versi editor, jadi itu hal yang berbeda."],
		},
		author: {
			title: "Nama pembuat",
			summary: "Nama pembuat dunia",
			points: ["Masukkan nama pena atau nama panggilan.", "Panjangnya 3 sampai 20 karakter, dan hanya huruf serta angka setengah lebar, spasi, dan `!` `?` `.` `,` `-` yang bisa dipakai."],
		},
		homepage: {
			title: "Beranda",
			summary: "URL situs web pembuat",
			points: ["Bila kamu punya beranda sendiri atau media sosial, masukkan URL-nya.", "Pemain bisa memeriksa URL ini lewat tautan.", "Bila tidak ada, kosongkan saja. Nilai awalnya `https://`."],
		},
		url: {
			title: "URL",
			summary: "URL permainan",
			points: ["Masukkan URL tempat permainan dunia ini ditempatkan.", "Masukkan URL halaman utama seperti index.html beserta domainnya.", "Isian ini untuk mencatat di mana dunia ditempatkan. Bila tempat penempatannya belum ditentukan, kosongkan saja.", "Dunia yang dipublikasikan bekerja sebagai PWA. PWA adalah fitur yang membuatnya bisa dipasang dan bekerja seperti aplikasi yang bisa dimainkan meski luring.", "Pengaturan PWA dibuat dengan jalur relatif, jadi terlepas dari nilai isian ini, PWA bekerja apa adanya di tempat penempatannya."],
		},
		estimatedPlayingTime: {
			title: "Perkiraan waktu bermain",
			summary: "Perkiraan waktu sampai permainan dunia tuntas",
			points: ["Perkiraan waktu bermain yang diperlukan untuk menuntaskan permainan dunia.", "Bisa dilihat sebagai patokan saat pemain bermain.", "Ini hanyalah waktu acuan, dan tidak ada definisi jelas tentang apa yang dianggap sebagai tuntasnya dunia."],
			children: {
				value: {
					title: "Nilai",
					summary: "Angka waktu bermain",
					points: ["Diatur dengan bilangan bulat `1` atau lebih. Nilai bawaannya `1`."],
				},
				unit: {
					title: "Satuan",
					summary: "Satuan waktu (jam, menit, dan sebagainya)",
					points: ["Dipilih dari detik, menit, jam, hari, tahun, abad, dan tak terbatas. Nilai bawaannya hari.", "Tak terbatas dipakai untuk dunia yang tidak ada akhirnya."],
				},
			},
		},
	},
	options: {
		label: "overview",
	},
};

// 固定イベントは5つのタイミングが同じ項目を並べるため、そのままでは1ページ内で見出しが重複し、
// 目次とエディターからのリンク（label無しノードは?id=<title>のアンカーになる）がどれを指すか分からなくなる。
// 直下の項目の見出しにタイミング名を添えて区別できるようにする
const toTimingChildren = (children: { [key: string]: Markdown }, timing: string): Type.Event["children"] => {
	const entries = Object.entries(children).map(([key, child]) => [key, { ...child, title: `${child.title}（${timing}）` }]);
	return Object.fromEntries(entries) as Type.Event["children"];
};

// タイミングごとの固定イベント。項目の説明はタスクと共通で、タイミング固有の説明だけ差し替える
const toUniqueEvent = (title: string, summary: string, points: string[], timingPoints: string[]): Type.Event => ({
	title,
	summary,
	points,
	children: toTimingChildren({
		// Markdown.childrenは「子ノードの辞書」と「単一ノード」の両方を許す型のため、辞書として扱うことを明示する
		...(task.children as { [key: string]: Markdown }),
		category: {
			title: "Kategori",
			summary: "Tidak digunakan dalam acara",
			points: ["Tidak ditampilkan di misi maupun di daftar tugas, sehingga kategori tempatnya bernaung tidak ditentukan.", "Kolom masukan tidak ditampilkan di editor."],
		},
		timing: {
			title: "Momen",
			summary: "Momen saat acara terpicu (tetap)",
			points: timingPoints,
		},
		unlocked: {
			title: "Status tampilan awal",
			summary: "Status tampilan awal ikon acara (terpicunya ditentukan momen, dan pengaturan ini tidak membuatnya terpicu)",
			points: ["Syarat terpicunya acara ditentukan oleh momen, dan bidang ini hanya memengaruhi tampilan ikon.", "secreted: Ikon tidak ditampilkan sampai semua requirements terpenuhi (terpicunya sendiri terjadi pada momennya).", "hidden dan hinted: Ikon diberi garis miring dan ditampilkan sebagai belum terbuka.", "released: Garis miringnya hilang dan ikon ditampilkan sebagai sudah terbuka."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Syarat memperoleh hadiah" },
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "Hadiah yang diterima otomatis saat acara terpicu" },
		group: {
			title: "Grup tugas",
			summary: "Tidak digunakan dalam acara",
			points: ["Tidak ditampilkan di misi maupun di daftar tugas, sehingga grup tidak ditentukan.", "Kolom masukan tidak ditampilkan di editor."],
		},
	}, title),
});

export const unique: Type.Unique = {
	title: "Acara tetap",
	summary: "Pesan dan hadiah yang aktif pada momen yang sudah ditentukan",
	points: ["Aktif pada momen yang sudah ditentukan, seperti saat dunia pertama kali dibuka atau saat permainan berakhir, lalu membuka layar khusus.", "Tiap momen disediakan satu, dan tidak bisa ditambah maupun dihapus. Momen yang tidak kamu pakai biarkan kosong.", "Tidak ditampilkan di misi maupun di daftar tugas. Yang tercapai bila syaratnya terpenuhi diatur dengan tugas.", "Bila momennya terpenuhi, acara akan aktif dan membuka layar khusus untuk menampilkan isinya.", "Hadiah diperoleh otomatis bersamaan dengan aktifnya acara. Tidak ada operasi penerimaan maupun pita seperti pada tugas, dan batas atas jenis item yang bisa dimiliki pun tidak diperiksa.", "Bila syarat (requirements) diatur, hadiah hanya diperoleh bila syarat itu terpenuhi pada saat acara aktif. Bila tidak diatur, hadiah diperoleh setiap kali acara aktif.", "Syarat hanya dilihat terpenuhi atau tidak, jadi meski peluang konsumsi (chance) diatur, item tidak berkurang.", "Saat aktif, kamu bisa mengubah level kategori, jumlah penjalanan aksi, dan jumlah kepemilikan item. Dengan mengatur jumlah bernilai minus, kamu juga bisa memakainya untuk hal seperti membuat barang bawaan hilang saat permainan berakhir.", "Bila nama, penjelasan, dan ikon dikosongkan, teks dan ikon bawaan yang tertanam di player yang dipakai."],
	list: [
		["Momen", "Syarat aktif", "Pengulangan"],
		["`comebacked`", "Saat kamu kembali setelah 1 detik atau lebih offline dan sedikitnya satu aksi selesai selama kamu pergi", "Berkali-kali"],
		["`gameovered`", "Saat stamina pemain habis dalam pertarungan", "Berkali-kali"],
		["`welcomed`", "Saat dunia ini dijalankan untuk pertama kalinya", "Hanya sekali"],
		["`completed`", "Saat level semua kategori mencapai nilai maksimum (maxCategoryLevels)", "Hanya sekali"],
		["`obtained`", "Saat aksi berjenis single (peti harta dan sebagainya) selesai dan diperiksa", "Berkali-kali"],
	],
	links: { task: "task" },
	children: {
		comebacked: toUniqueEvent("Saat kembali", "Aktif saat kembali dari offline", ["Aktif saat kamu kembali setelah 1 detik atau lebih offline dan sedikitnya satu aksi selesai selama kamu pergi. Bila tidak ada satu pun penjalanan yang selesai, acara tidak aktif.", "Ditampilkan bersama ringkasan kemajuan selama kamu pergi."], ["Terkunci pada `comebacked` dan tidak bisa diedit.", "Aktif berapa kali pun, tiap kali kamu kembali."]),
		gameovered: toUniqueEvent("Saat permainan berakhir", "Aktif saat stamina habis dalam pertarungan", ["Aktif saat stamina pemain habis dalam pertarungan.", "Bersamaan dengan itu, semua aksi yang sedang berjalan berhenti dan semua pesanan yang menunggu pun dibuang.", "Dengan mengatur jumlah hadiah bernilai minus, kamu bisa memberi harga yang harus dibayar saat permainan berakhir."], ["Terkunci pada `gameovered` dan tidak bisa diedit.", "Aktif berapa kali pun, tiap kali permainan berakhir."]),
		welcomed: toUniqueEvent("Saat pertama kali dimulai", "Aktif saat dunia pertama kali dibuka", ["Aktif saat dunia ini dijalankan untuk pertama kalinya.", "Dipakai untuk menjelaskan latar dunia dan menyerahkan bekal awal yang diberikan saat mulai."], ["Terkunci pada `welcomed` dan tidak bisa diedit.", "Aktif hanya sekali, saat pertama kali dijalankan."]),
		completed: toUniqueEvent("Saat tamat", "Aktif saat semua kategori mencapai level maksimum", ["Aktif saat level semua kategori mencapai nilai maksimum (maxCategoryLevels).", "Kategori yang bukan numeric (angka) dikecualikan dari penilaian. Karena itu, pada dunia yang tidak punya satu pun kategori angka, acara ini tidak aktif."], ["Terkunci pada `completed` dan tidak bisa diedit.", "Aktif hanya sekali, saat syaratnya terpenuhi."]),
		obtained: toUniqueEvent("Saat aksi sekali jalan selesai", "Aktif saat aksi sekali jalan seperti peti harta selesai", ["Aktif saat aksi berjenis single (peti harta dan sebagainya) selesai dan diperiksa.", "Terpisah dari hadiah aksi itu sendiri, kamu bisa menambahkan hadiah yang diatur di sini."], ["Terkunci pada `obtained` dan tidak bisa diedit.", "Aktif berapa kali pun, tiap kali aksi sekali jalan selesai."]),
	},
	options: {
		label: "unique",
	},
};

// タスク・変化イベント・固定イベントをまとめたイベント全体
export const events: Type.Events = {
	title: "Acara",
	summary: "Seluruh acara dunia, yang menghimpun tugas, acara perubahan, dan acara tetap",
	points: ["Acara dunia terdiri atas tiga jenis: tugas (tasks), acara perubahan (changed), dan acara tetap (unique).", "Tugas adalah misi yang tercapai bila syaratnya terpenuhi.", "Acara perubahan adalah acara untuk pemrosesan internal yang tidak ditampilkan di layar, dan aktif berulang kali dengan pemicu berupa pertambahan jumlah.", "Acara tetap adalah petak yang disediakan satu untuk tiap momen, dan tidak bisa ditambah maupun dihapus."],
	list: expandList("Jenis", [task, changed, unique], "Penjelasan"),
	children: {
		tasks: { ...task, options: { ...task.options, array: true } },
		changed: { ...changed, options: { ...changed.options, array: true } },
		unique: unique,
	},
	options: {
		label: "events",
		linkedList: true,
	},
};

export const basic: Type.Basic = {
	title: "Pengaturan dasar",
	summary: "Butir pengaturan dasar untuk dunia secara keseluruhan",
	points: ["Mengatur nama, penjelasan, latar belakang, mata uang, kapasitas, level maksimum kategori, laju pertumbuhan pengalaman, parameter tempur standar, dan sebagainya dari dunia.", "Pengaturan ini berpengaruh pada seluruh dunia."],
	list: expandList("Nama", [overview, general, design, development], "Penjelasan"),
	children: {
		overview: overview,
		general: general,
		design: design,
		development: development,
	},
	options: {
		label: "basic",
		linkedList: true,
	},
};

// world


export const world: Type.World = {
	title: "Dunia",
	summary: "Pengaturan dan struktur data seluruh dunia permainan",
	points: ["Ini data definisi permainan yang dimuat di player untuk dimainkan.", "Lewat pengaturannya, kamu bisa membuat game idle sesuai keinginanmu.", "Dunia memuat pengaturan dasar, enam tipe berupa kategori, aksi, item, skill, grup, dan preset, serta acara."],
	children: {
		basic: basic,
		categories: { ...category, options: { ...category.options, array: true } },
		actions: { ...action, options: { ...action.options, array: true } },
		items: { ...item, options: { ...item.options, array: true } },
		skills: { ...skill, options: { ...skill.options, array: true } },
		groups: { ...group, options: { ...group.options, array: true } },
		events: events,
		presets: { ...preset, options: { ...preset.options, array: true } },
	},
	options: {
		label: "world",
	},
};

// editor

export const editor: Markdown = {
	title: "Editor",
	summary: "Penjelasan tentang cara memakai editor dan tentang struktur dunia",
	list: expandList("Nama", [world, basic, type, events, component, miscellaneous], "Penjelasan"),
	options: {
		label: "editor",
		linkedList: true,
		directory: "editor",
	},
};

// list

// prettier-ignore
export const tree: Tree = {
	title: editor,
	twig: [
		{ title: world },
		{ title: basic, twig: [overview, general, design, development] },
		{ title: type, twig: [category, action, item, skill, group, preset] },
		{ title: events, twig: [task, changed, unique] },
		{ title: component, twig: [information, requirement, acquisition, combat, property] },
		{ title: miscellaneous, twig: [translation] }
	],
};
