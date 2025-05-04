#Sistem Perpustakaan - Konsep OOP yang Diterapkan

Program ini merupakan simulasi sederhana sistem perpustakaan yang dibuat menggunakan **Python** dan menerapkan prinsip-prinsip dasar dari **Object-Oriented Programming (OOP)**. Berikut adalah penjelasan konsep OOP yang digunakan dalam program ini:

---

## 🔹 1. Abstraction (Abstraksi)

Abstraksi dicapai melalui penggunaan **kelas abstrak `LibraryItem`**. Kelas ini mendefinisikan struktur dasar item perpustakaan (seperti `item_id`, `title`, dan `display_info`), tetapi tidak bisa diinstansiasi langsung.

```
from abc import ABC, abstractmethod

class LibraryItem(ABC):
    @abstractmethod
    def display_info(self):
        pass
```
## 🔹 2. Inheritance (Pewarisan)
Kelas Book dan Magazine merupakan turunan (subclass) dari LibraryItem, yang mewarisi atribut dan method dasar, serta mengimplementasikan method abstrak display_info() sesuai dengan kebutuhan masing-masing.
```
class Book(LibraryItem):
    def display_info(self):
        ...

class Magazine(LibraryItem):
    def display_info(self):
        ...
```

## 🔹 3. Encapsulation (Enkapsulasi)
Program melindungi data penting menggunakan access modifiers:

* Atribut seperti __item_id, __author, dan __issue_number disimpan secara private.
* Atribut _title bersifat protected.

Pengaksesan data dilakukan melalui property decorators:
```
@property
def item_id(self):
    return self.__item_id
```

## 🔹 4. Polymorphism (Polimorfisme)
Polimorfisme terlihat saat program memanggil method display_info() dari objek LibraryItem, namun setiap subclass (Book, Magazine) memiliki implementasi berbeda dari method tersebut.
```
for item in self.__items:
    item.display_info()  # Memanggil versi yang sesuai berdasarkan tipe objek
```

## 🔹 5. Property Decorator
Atribut-atribut penting diakses melalui @property, contohnya:
```
@property
def author(self):
    return self.__author
Hal ini menjaga prinsip enkapsulasi sekaligus memberikan akses yang aman terhadap data privat.
```

## ✅ Fitur Sistem
1. Menambahkan Buku dan Majalah
2. Menampilkan seluruh koleksi perpustakaan
3. Mencari item berdasarkan judul atau ID
4. Memiliki data bawaan saat program pertama kali dijalankan
