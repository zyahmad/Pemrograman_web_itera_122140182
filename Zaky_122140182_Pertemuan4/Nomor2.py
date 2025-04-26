# Data Mahasiswa
mahasiswa = [
    {"nama": "Zaky", "nim": "122140182", "nilai_uts": 82, "nilai_uas": 74, "nilai_tugas": 90},
    {"nama": "Ahmad", "nim": "122140092", "nilai_uts": 92, "nilai_uas": 80, "nilai_tugas": 80},
    {"nama": "Makarim", "nim": "122140158", "nilai_uts": 58, "nilai_uas": 90, "nilai_tugas": 88},
    {"nama": "Haykal", "nim": "122140195", "nilai_uts": 83, "nilai_uas": 62, "nilai_tugas": 93},
    {"nama": "Fadhil", "nim": "122140064", "nilai_uts": 64, "nilai_uas": 60, "nilai_tugas": 89},
]

# Menghitung nilai akhir dan grade
# Nilai akhir = 30% UTS + 40% UAS + 30% Tugas
for mhs in mahasiswa:
    nilai_akhir = 0.3 * mhs["nilai_uts"] + 0.4 * mhs["nilai_uas"] + 0.3 * mhs["nilai_tugas"]
    mhs["nilai_akhir"] = round(nilai_akhir, 2)
    
    if nilai_akhir >= 80:
        mhs["grade"] = "A"
    elif nilai_akhir >= 70:
        mhs["grade"] = "B"
    elif nilai_akhir >= 60:
        mhs["grade"] = "C"
    elif nilai_akhir >= 50:
        mhs["grade"] = "D"
    else:
        mhs["grade"] = "E"

# Printing data mahasiswa
print(f"{'Nama':<10} {'NIM':<8} {'UTS':<5} {'UAS':<5} {'Tugas':<7} {'Akhir':<7} {'Grade':<5}")
print("-" * 55)
for mhs in mahasiswa:
    print(f"{mhs['nama']:<10} {mhs['nim']:<8} {mhs['nilai_uts']:<5} {mhs['nilai_uas']:<5} {mhs['nilai_tugas']:<7} {mhs['nilai_akhir']:<7} {mhs['grade']:<5}")

# Menentukan mahasiswa dengan nilai tertinggi dan terendah
nilai_akhir = [mhs["nilai_akhir"] for mhs in mahasiswa]
maks = max(nilai_akhir)
minim = min(nilai_akhir)

mhs_maks = [mhs for mhs in mahasiswa if mhs["nilai_akhir"] == maks]
mhs_min = [mhs for mhs in mahasiswa if mhs["nilai_akhir"] == minim]

print("\nMahasiswa Nilai Tertinggi:")
for mhs in mhs_maks:
    print(f"{mhs['nama']} | {mhs['nim']} | Nilai Akhir : {mhs['nilai_akhir']} | Grade {mhs['grade']}")

print("\nMahasiswa Nilai Terendah:")
for mhs in mhs_min:
    print(f"{mhs['nama']} | {mhs['nim']} | Nilai Akhir : {mhs['nilai_akhir']} | Grade {mhs['grade']}")