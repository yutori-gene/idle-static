import { Markdown, Tree } from "~d/type/markdownType";
import { tree as editor } from "./editor";
import { tree as player } from "./player";


// readme

export const readme: Markdown = {
	title: "Platform pengembangan game idle",
	summary: "Platform untuk membuat dan memainkan game idle dari data definisi bernama dunia",
	points: [
		"Isi sebuah game terhimpun dalam data definisi yang disebut \"dunia\". Tanpa menulis program pun, kamu bisa menyusun satu game utuh hanya dengan masukan di editor.",
		"Dunia yang kamu buat dimuat dan dimainkan di player. Jika diekspor dalam bentuk yang berjalan sendiri, dunia itu bisa langsung didistribusikan.",
		"Dokumen ini terdiri atas dua bagian: editor dan player. Untuk item pengaturan dari sisi pembuat dunia, lihat editor; untuk layar dari sisi pemain, lihat player.",
	],
	children: {
		feature: {
			title: "Fitur",
			summary: "Fungsi dan fitur utama platform ini",
			points: [
				"Elemen yang diperlukan game idle (kategori, aksi, item, skill, grup, dan preset) beserta acara sudah tersedia sejak awal, dan bentuk game ditentukan hanya oleh kombinasinya.",
				"Waktu selama layar tertutup pun ikut dihabiskan sebagai kemajuan offline, jadi game tetap berjalan selama kamu meninggalkannya.",
				"Sepuluh bahasa didukung. Frasa umum antarmuka selalu disertakan, dan teks milik dunia sendiri bisa disiapkan untuk tiap bahasa.",
				"Kemajuan disimpan di peramban untuk tiap dunia, dan bisa diekspor ke berkas untuk dibawa.",
			],
		},
	},
	options: {
		label: "README",
		readme: true,
	}
};


// tree

export const tree: Tree = {
	title: readme,
	twig: [editor, player]
}

// export const list:Markdown[] =  flattenTree(tree);