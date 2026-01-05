# 🐾 Petstore API Automation Test dengan Postman & Newman

Project ini berisi rangkaian pengujian otomatis (Automation Testing) untuk **Petstore Swagger API** menggunakan **Postman** sebagai Test Runner dan **Newman** untuk eksekusi melalui Command Line Interface (CLI) serta pembuatan laporan (reporting).

<img width="1918" height="1023" alt="api0" src="https://github.com/user-attachments/assets/884305b0-c4f9-4fff-ab16-0f58a43d0f37" />

<img width="1919" height="1079" alt="api1" src="https://github.com/user-attachments/assets/834d98c2-92b3-4074-adfe-fca169f19141" />

<img width="1919" height="1079" alt="Api2" src="https://github.com/user-attachments/assets/d85f9faf-cab2-497f-9e3e-0cc191db0d1b" />

<img width="1919" height="1022" alt="Api3" src="https://github.com/user-attachments/assets/cc2e03ef-21a1-4668-a92d-512992c5322a" />


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
   ```
   
   ```bash
   npx newman run Petstore_Test.json -r "cli,htmlextra"
   ```
