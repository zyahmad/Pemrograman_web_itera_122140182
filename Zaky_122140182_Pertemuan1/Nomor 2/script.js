document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-tambah").addEventListener("click", function () { hitung("+"); });
    document.getElementById("btn-kurang").addEventListener("click", function () { hitung("-"); });
    document.getElementById("btn-kali").addEventListener("click", function () { hitung("*"); });
    document.getElementById("btn-bagi").addEventListener("click", function () { hitung("/"); });
    document.getElementById("btn-pangkat").addEventListener("click", function () { hitung("^"); });
    document.getElementById("btn-akar").addEventListener("click", function () { hitung("√"); });
    document.getElementById("btn-modulus").addEventListener("click", function () { hitung("%"); });
});

function hitung(operator) {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    let hasil;

    if (isNaN(angka1) && operator !== "√") {
        document.getElementById("hasil-kalkulator").innerText = "Masukkan angka pertama!";
        return;
    }

    if (isNaN(angka2) && operator !== "√") {
        document.getElementById("hasil-kalkulator").innerText = "Masukkan angka kedua!";
        return;
    }

    switch (operator) {
        case "+":
            hasil = angka1 + angka2;
            break;
        case "-":
            hasil = angka1 - angka2;
            break;
        case "*":
            hasil = angka1 * angka2;
            break;
        case "/":
            hasil = angka2 !== 0 ? angka1 / angka2 : "Tidak bisa dibagi nol";
            break;
        case "^":
            hasil = Math.pow(angka1, angka2);
            break;
        case "√":
            hasil = angka1 >= 0 ? Math.sqrt(angka1) : "Akar tidak bisa negatif";
            break;
        case "%":
            hasil = angka1 % angka2;
            break;
        default:
            hasil = "Operasi tidak valid";
    }

    document.getElementById("hasil-kalkulator").innerText = "Hasil: " + hasil;
}
