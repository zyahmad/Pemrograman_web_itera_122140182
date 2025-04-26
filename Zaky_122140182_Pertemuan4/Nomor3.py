# import sebagian dari modul lokal
from math_operations import luas_persegi, keliling_persegi_panjang, luas_lingkaran

# Import keseluruhan dari modul lokal
import math_operations as operator

def menu():
    print("\n~~~ MENU PERHITUNGAN ~~~")
    print("1. Luas Persegi")
    print("2. Keliling Persegi Panjang")
    print("3. Luas Lingkaran")
    print("4. Konversi Celsius ke Fahrenheit")
    print("5. Konversi Celsius ke Kelvin")
    print("0. Keluar")

def main():
    while True:
        menu()
        pilihan = input("Pilih menu (0-5): ")

        if pilihan == "1":
            sisi = float(input("Masukkan sisi persegi: "))
            print(f"Luas Persegi = {luas_persegi(sisi)}")
        
        elif pilihan == "2":
            panjang = float(input("Masukkan panjang: "))
            lebar = float(input("Masukkan lebar: "))
            print(f"Keliling Persegi Panjang = {keliling_persegi_panjang(panjang, lebar)}")
        
        elif pilihan == "3":
            jari_jari = float(input("Masukkan jari-jari lingkaran: "))
            print(f"Luas Lingkaran = {luas_lingkaran(jari_jari):.2f}")
        
        elif pilihan == "4":
            celsius = float(input("Masukkan suhu dalam Celsius: "))
            print(f"{celsius}°C = {operator.celsius_ke_fahrenheit(celsius):.2f}°F")
        
        elif pilihan == "5":
            celsius = float(input("Masukkan suhu dalam Celsius: "))
            print(f"{celsius}°C = {operator.celsius_ke_kelvin(celsius):.2f}K")
        
        elif pilihan == "0":
            print("Terima kasih, program selesai.")
            break
        
        else:
            print("Pilihan tidak valid. Coba lagi.")

        # Setelah satu perhitungan, tanya lanjut atau keluar
        lanjut = input("\nIngin lanjut? (Y/N): ").strip().upper()
        if lanjut != "Y":
            print("Terima kasih, program selesai.")
            break
        
if __name__ == "__main__":
    main()