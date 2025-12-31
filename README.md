# 🐾 Petstore API Automation Testing dengan Postman & Newman

Project ini berisi rangkaian pengujian otomatis (Automation Testing) untuk **Petstore Swagger API** menggunakan **Postman** sebagai Test Runner dan **Newman** untuk eksekusi melalui Command Line Interface (CLI) serta pembuatan laporan (reporting).

## 🚀 Cakupan Pengujian
Project ini mencakup **15 Test Case** yang terdiri dari skenario positif dan negatif, termasuk:
- **API Chaining**: Menggunakan data dari respon satu API (ID Pet) untuk digunakan pada API berikutnya (Update/Delete).
- **Positive Testing**: Menambah, mencari, mengupdate, dan menghapus data pet.
- **Negative Testing**: Validasi input salah, ID tidak ditemukan, dan format data tidak sesuai.
- **Assertions**: Validasi Status Code dan Response Body JSON.

## 🛠️ Prasyarat (Prerequisites)
Sebelum menjalankan tes, pastikan Anda telah menginstal:
1. [Node.js](https://nodejs.org/) (Versi terbaru direkomendasikan).
2. Newman:
   ```bash
   npm install -g newman
