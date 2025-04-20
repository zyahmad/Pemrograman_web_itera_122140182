## Deskripsi Aplikasi
Aplikasi Manajemen Buku Pribadi ini memungkinkan pengguna untuk mencatat buku-buku yang dimiliki, sedang dibaca, atau ingin dibeli. Pengguna dapat menambah, mengedit, menghapus buku, serta memfilter dan mencari buku berdasarkan status dan kata kunci. Aplikasi ini dibangun menggunakan React dengan pendekatan modern seperti Hooks, Context API, dan React Router, serta menyimpan data secara lokal menggunakan localStorage.

## Instruksi Instalasi dan Menjalankan
1. Pastikan Node.js dan npm sudah terpasang di komputer Anda.
2. Clone repository ini atau salin file ke direktori kerja Anda.
3. Buka terminal dan jalankan perintah berikut untuk menginstal dependensi:
   ```
   npm install
   ```
4. Jalankan aplikasi dengan perintah:
   ```
   npm start
   ```
5. Akses aplikasi melalui browser di alamat:
   ```
   http://localhost:3000
   ```
   
## Screenshot Antarmuka

### Homepage
![image](https://github.com/user-attachments/assets/d2fd89bf-44c3-41b8-aca3-f58d1d0fc491)

### Statistik
![image](https://github.com/user-attachments/assets/f1a99dd8-4724-4c28-8daf-feee2257b754)

## Komentar dalam Kode untuk Bagian Penting

### Custom Hooks Untuk Menampilkan Statistik Buku
```
function useBookStats(books) {
  return useMemo(() => {
    const total = books.length;
    const milik = books.filter(book => book.status === 'milik').length;
    const baca = books.filter(book => book.status === 'baca').length;
    const beli = books.filter(book => book.status === 'beli').length;

    return { total, milik, baca, beli };
  }, [books]);
}
```

### Menyimpan dan mengambil data dari localStorage secara otomatis
```
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage key “' + key + '”: ', error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error setting localStorage key “' + key + '”: ', error);
    }
  };

  return [storedValue, setValue];
}
```
