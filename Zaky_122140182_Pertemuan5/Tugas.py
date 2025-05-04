from abc import ABC, abstractmethod

class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self.__item_id = item_id    # Atribut privat, menyimpan ID unik item
        self._title = title         # Atribut protected, menyimpan judul item

    @property
    def item_id(self):
        return self.__item_id

    @property
    def title(self):
        return self._title

    @abstractmethod
    def display_info(self):
        pass


class Book(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self.__author = author  # Nama penulis buku (privat)

    @property
    def author(self):
        return self.__author

    def display_info(self):
        print(f"[Book] ID: {self.item_id}, Title: {self.title}, Author: {self.author}")


class Magazine(LibraryItem):
    def __init__(self, item_id, title, issue_number):
        super().__init__(item_id, title)
        self.__issue_number = issue_number  # Nomor edisi (privat)

    @property
    def issue_number(self):
        return self.__issue_number

    def display_info(self):
        print(f"[Magazine] ID: {self.item_id}, Title: {self.title}, Issue: {self.issue_number}")


class Library:
    def __init__(self):
        self.__items = []   # Daftar privat yang menyimpan semua item (Book/Magazine)
        self.__load_default_items()

    def __load_default_items(self):
        # Koleksi awal/bawaan
        self.add_item(Book("B001", "Cara Menjadi Kaya", "Haykal"))
        self.add_item(Book("B002", "Kripto Masa Depan", "Fadhil"))
        self.add_item(Book("B003", "Semua Kaya", "Ahmad"))
        self.add_item(Magazine("M001", "Kriptografi", "2025-04"))
        self.add_item(Magazine("M002", "Kebutuhan Sosial", "2025-17"))

    def add_item(self, item: LibraryItem):
        self.__items.append(item)

    def show_items(self):
        print("\n=== Koleksi Perpustakaan ===")
        if not self.__items:
            print("Tidak ada buku/majalah di perpustakaan")
        for item in self.__items:
            item.display_info()
        print("============================")

    def search_item(self, keyword):
        print(f"\nHasil Pencarian Dari '{keyword}':")
        found = False
        for item in self.__items:
            if keyword.lower() in item.title.lower() or keyword == item.item_id:
                item.display_info()
                found = True
        if not found:
            print("Buku/Majalah Tidak Ditemukan.")


def run_library_system():
    library = Library()

    while True:
        print("\n==== Library Menu ====")
        print("1. Tambahkan Buku")
        print("2. Tambahkan Majalah")
        print("3. Memunculkan Semua Daftar")
        print("4. Mencari Buku/Majalah")
        print("5. Keluar")

        choice = input("Choose an option (1-5): ")

        if choice == "1":
            item_id = input("Masukkan ID Buku: ")
            title = input("Masukkan Judul Buku: ")
            author = input("Masukkan Penulis: ")
            book = Book(item_id, title, author)
            library.add_item(book)

        elif choice == "2":
            item_id = input("Masukkan ID Majalah: ")
            title = input("Masukkan Judul Majalah: ")
            issue = input("Masukkan Issue Number: ")
            magazine = Magazine(item_id, title, issue)
            library.add_item(magazine)

        elif choice == "3":
            library.show_items()

        elif choice == "4":
            keyword = input("Masukkan judul atau ID untuk mencari: ")
            library.search_item(keyword)

        elif choice == "5":
            print("Terimakasih~")
            break

        else:
            print("Pilihan tidak sesuai, silahkan coba lagi")


# Jalankan program
if __name__ == "__main__":
    run_library_system()