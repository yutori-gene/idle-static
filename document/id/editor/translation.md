
# Terjemahan
Pengaturan untuk menerjemahkan teks dunia ke sepuluh bahasa
- Ada dua macam terjemahan: terjemahan frasa umum antarmuka (preset) dan terjemahan nama serta penjelasan yang dimiliki dunia itu sendiri.
- Terjemahan frasa umum selalu disertakan tanpa memandang pengaturan `translations` di bagian umum. Pembuat tidak perlu menyiapkannya.
- Terjemahan dunia itu sendiri hanya diekspor ketika `translations` di bagian umum diaktifkan dan dunia dipublikasikan, dan pembuatlah yang menerjemahkannya.
- Pada bahasa yang terjemahannya tidak disiapkan, teks ditampilkan persis seperti yang tertulis di dunia.
- [_general_](id/editor/general)
___

## Mengaktifkan terjemahan
Perilaku ketika terjemahan diaktifkan
- Yang diaktifkan adalah `translations` di bagian umum. Di sini dijelaskan apa yang terjadi setelah diaktifkan.
- Bila aktif, dunia yang dipublikasikan menyertakan berkas terjemahan untuk sepuluh bahasa, dan bahasa bisa diganti dari pengaturan player. Bila tidak aktif, bahasa tidak bisa diganti sama sekali.
- Sepuluh berkas itu diekspor dengan isi yang sama (teks sebelum diterjemahkan). Bahasa yang tidak kamu terjemahkan menampilkan teks aslinya apa adanya. Kamu juga bisa menerjemahkan sebagian bahasa saja, tetapi di layar bahasa itu teks asli akan tercampur.
- Saat game dimulai, yang pertama ditampilkan adalah bahasa yang diatur di `language` di bagian umum. Setelah itu, bahasa bisa diubah sesuka hati dari kolom pengaturan.
- Pada uji main di editor, berkas terjemahan dunia belum ada, jadi mengganti bahasa hanya mengubah frasa umum antarmuka.
- Pekerjaan menerjemahkan memang merepotkan, tetapi membuat lebih banyak orang bisa memainkannya.
- [_general_](id/editor/general)
___

## Berkas bahasa
Berkas JSON untuk terjemahan yang diekspor
- Ketika kamu mengekspor dunia lewat Publikasikan pada menu, `translations/base` berisi terjemahan frasa umum antarmuka dan `translations/world` berisi terjemahan dunia itu sendiri.
- Yang perlu diterjemahkan hanyalah sepuluh berkas di `translations/world`. `translations/base` sudah disertakan dalam keadaan diterjemahkan, jadi tidak perlu disentuh.
- Isi berkas terbagi menurut tipe, di bawahnya ada ID elemen, dan di bawahnya lagi berjajar nama (`name`) dan penjelasan (`explanation`).
- Tipenya ada tujuh: kategori, aksi, item, acara, grup, skill, dan preset. Mata uang, kapasitas, dan antrian masuk ke item; ikhtisar dunia masuk ke preset; tugas dan acara tetap masuk bersama ke acara.
- Elemen yang namanya dibiarkan kosong diekspor dengan nama yang dibuat otomatis dari ID-nya.
- Berkas yang sudah diterjemahkan dikembalikan ke `translations/world` dengan nama yang sama.
___

## Pekerjaan menerjemahkan
Pekerjaan menyunting data terjemahan
- Sepuluh berkas yang diekspor semuanya berisi hal yang sama (teks sebelum diterjemahkan).
- Selain berkas bahasa aslinya, semuanya perlu diterjemahkan.
- Yang diterjemahkan hanyalah nilai `name` dan `explanation`. Jangan mengubah ID maupun struktur JSON.
___

### AI
Terjemahan dengan AI
- Menerjemahkan dengan AI seperti ChatGPT, Copilot, atau Claude.
- Semuanya bisa diterjemahkan sekaligus, dengan kualitas yang lumayan.
- Terjemahannya kadang tidak sempurna, dan istilah teknis serta nama diri perlu perhatian khusus.
- Tergantung banyaknya teks, penggunaan AI kadang memerlukan biaya.
- Bila proses terjemahan AI terhenti di tengah jalan, memerintahkan "lanjutkan" kadang bisa mengatasinya. (Kadang juga tidak.)
___

#### Contoh prompt
Contoh perintah terjemahan yang diberikan kepada AI
- Contoh prompt: terjemahkan nilai `name` dan `explanation` pada data JSON yang diunggah dari bahasa Jepang ke bahasa Inggris. Jangan ubah kunci maupun bagian lainnya.
___

#### Memakai GPT
Terjemahan dengan GPT dari ChatGPT
- Dengan JSON Language Translator yang tersedia di pustaka GPT ChatGPT, menerjemahkan JSON menjadi mudah.
- Struktur JSON tetap terjaga selama diterjemahkan.
- Layanan AI selain ChatGPT kadang juga menyediakan fungsi serupa.
___

### Layanan terjemahan
Penggunaan layanan terjemahan
- Menerjemahkan dengan layanan daring seperti DeepL atau Google Terjemahan.
- Kualitasnya bisa diharapkan lebih tinggi daripada terjemahan AI, tetapi tergantung banyaknya teks akan dikenai biaya.
- Berkas JSON tidak bisa diterjemahkan apa adanya oleh layanan terjemahan, jadi perlu dibuatkan program untuk memakainya.
- Meski berbayar, tampaknya ada juga layanan yang menerjemahkan data JSON apa adanya (misalnya doctranslator.com).
___

### Manual
Terjemahan secara manual
- Buka berkas terjemahan dengan editor teks, lalu masukkan isi yang sudah diterjemahkan ke tiap bahasa. Cara ini sangat merepotkan, tetapi terjemahannya bisa persis seperti yang kamu inginkan.
___

## Kode bahasa
Daftar kode bahasa yang didukung
- Nama berkas terjemahan adalah kode bahasa ini.
- Bahasa yang didukung hanya sepuluh ini, dan tidak bisa ditambah atau dikurangi.

|Kode bahasa|Bahasa|
|-|-|
|en|Inggris|
|zh|Tionghoa (Sederhana)|
|es|Spanyol|
|pt|Portugis|
|fr|Prancis|
|ru|Rusia|
|de|Jerman|
|ja|Jepang|
|id|Indonesia|
|ko|Korea|