import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "Bahasa",
	summary: "Mengubah bahasa yang dipakai untuk tampilan",
	options: {
		preset: "language",
	},
};

export const group: Markdown = {
	title: "Grup",
	summary: "Klasifikasi yang mengikat kategori, aksi, dan item lintas jenis",
	options: {
		preset: "group",
	},
};

export const event: Markdown = {
	title: "Acara",
	summary: "Memeriksa isi acara yang telah terjadi dan menerima hadiahnya",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "Hal tambahan",
	summary: "Kolom yang tidak termasuk tipe tertentu",
	points: ["Kolom acara dan grup terbuka di sisi kanan dari lapisan mana pun.", "Kolom bahasa terbuka dari kolom pengaturan dan dari kolom acara sambutan."],
	children: { event: event, group: group, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "Debug",
	summary: "Menyediakan perkakas untuk menguji dunia",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "Pengaturan",
	summary: "Mengubah pengaturan permainan ini dan mengelola data simpanan",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "Statistik",
	summary: "Menampilkan total yang tercatat sepanjang permainan",
	options: {
		preset: "statistics",
	},
};

export const overview: Markdown = {
	title: "Ikhtisar",
	summary: "Menampilkan ikhtisar dunia ini dan konsol yang menjalankannya",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "Dunia",
	summary: "Pemeriksaan dan pengaturan permainan secara keseluruhan",
	points: ["Terbuka dari judul dunia pada kolom teratas.", "Kolom debug hanya muncul ketika permainan dijalankan dalam mode debug."],
	children: { overview: overview, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const calculation: Markdown = {
	title: "Kalkulasi",
	summary: "Nilai properti yang diterapkan pada aksi beserta rinciannya",
	options: {
		preset: "calculation",
	},
};

export const properties: Markdown = {
	title: "Daftar properti",
	summary: "Daftar properti yang termasuk kategori ini",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "Properti",
	summary: "Angka yang memengaruhi hasil aksi",
	// properties / calculation は label を持たない同ページ内の節なので、
	// 一覧表・リンクは作らず children の見出しとして展開する（item・action と同じ形）
	children: { properties: properties, calculation: calculation },
	options: {
		label: "property",
		preset: "property",
	},
};

// skill

export const skills: Markdown = {
	title: "Daftar skill",
	summary: "Daftar skill yang dimiliki elemen ini",
	options: {
		preset: "skills",
	},
};

export const skill: Markdown = {
	title: "Skill",
	summary: "Bila aktif dalam pertarungan, mengoreksi nilai tempur hanya pada giliran itu",
	children: { skills: skills },
	options: {
		label: "skill",
		preset: "skill",
	},
};

// item

export const trade: Markdown = {
	title: "Tukar",
	summary: "Membeli dan menjual item ini",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "Daftar item",
	summary: "Daftar item yang termasuk kategori ini",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "Item",
	summary: "Barang bawaan yang berkaitan dengan kategori ini",
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "Jalankan",
	summary: "Memulai dan menghentikan aksi ini serta menampilkan kemajuannya",
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "Daftar aksi",
	summary: "Daftar aksi yang termasuk kategori ini",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "Aksi",
	summary: "Perbuatan yang bisa dijalankan pada kategori ini",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "Daftar tugas",
	summary: "Daftar tugas yang diatur pada kategori ini",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "Kategori",
	summary: "Yang menghimpun berbagai elemen",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character

export const missions: Markdown = {
	title: "Misi",
	summary: "Daftar tugas dari semua kategori beserta status pencapaiannya",
	options: {
		preset: "missions",
	},
};

export const ability: Markdown = {
	title: "Kemampuan",
	summary: "Daftar skill yang bisa aktif saat ini, dikelompokkan per kategori",
	options: {
		preset: "ability",
	},
};

export const status: Markdown = {
	title: "Status",
	summary: "Menampilkan keadaan saat ini, seperti koreksi yang diterapkan pada kategori",
	options: {
		preset: "status",
	},
};

export const selling: Markdown = {
	title: "Penjualan",
	summary: "Memilih item yang kamu miliki dari daftar lalu menjualnya sekaligus",
	options: {
		preset: "selling",
	},
};

export const inventory: Markdown = {
	title: "Inventaris",
	summary: "Daftar item yang kamu miliki, dikelompokkan per kategori",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "Aktivitas",
	summary: "Daftar aksi yang bisa dijalankan, dikelompokkan per kategori",
	options: {
		preset: "activity",
	},
};

export const character: Markdown = {
	title: "Karakter",
	summary: "Pemeriksaan dan pengendalian keadaan tokoh utama",
	points: ["Kolom yang berjajar di sini ada untuk melihat keseluruhan secara lintas kategori.", "Terbuka dari judul karakter pada kolom teratas."],
	children: { activity: activity, inventory: inventory, selling: selling, status: status, ability: ability, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "Player",
	summary: "Penjelasan tiap kolom pada layar permainan",
	points: ["Layar berbentuk kolom yang bertambah dari kiri ke kanan, dan makin ke kanan isinya makin rinci.", "Pada pengaturan awal, di bagian paling bawah tiap kolom ditampilkan penjelasan yang sama dengan di sini sebagai petunjuk.", "Petunjuk bisa disembunyikan di kolom pengaturan."],
	list: expandList("Player", [character, category, action, item, skill, property, world, miscellaneous], "Penjelasan"),
	// children: { character: character, category: category, action: action, item: item, skill: skill, property: property, world: world, miscellaneous: miscellaneous },
	options: {
		preset: "player",
		label: "player",
		linkedList: true,
		directory: "player",
	},
};

// list

// prettier-ignore
export const tree: Tree = {
	title: player,
	twig: [
		character,
		category,
		action,
		item,
		skill,
		property,
		world,
		miscellaneous
	],
};
