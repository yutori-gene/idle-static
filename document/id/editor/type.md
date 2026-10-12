
# Tipe
Penggolongan dasar dunia
- Dunia tersusun dari 6 tipe.
- Semua elemen ditempatkan langsung di bawah dunia.
- Aksi dan item dikaitkan lewat ID kategori tempatnya bernaung.
- Hanya acara yang bukan tipe: acara ditempatkan terkumpul menurut momen di dalam acara (events) yang berada langsung di bawah dunia.

|Tipe|Penjelasan|
|-|-|
|[_category_](id/editor/category)|Kerangka besar yang menggolongkan aksi dan item|
|[_action_](id/editor/action)|Elemen tindakan seperti pengumpulan, pembuatan, dan pertempuran|
|[_item_](id/editor/item)|Elemen barang seperti peralatan dan barang konsumsi|
|[_skill_](id/editor/skill)|Efek khusus yang diundi tiap giliran pertempuran lalu aktif|
|[_group_](id/editor/group)|Mendefinisikan grup tampilan untuk kategori, aksi, item, dan tugas|
|[_preset_](id/editor/preset)|Kustomisasi tampilan elemen sistem|
```
world
├── category
├── action
├── item
├── skill
├── group
└── preset
```