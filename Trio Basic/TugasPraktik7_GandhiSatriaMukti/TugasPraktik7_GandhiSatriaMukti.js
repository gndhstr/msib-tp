function cekNilai(x) {
    if (x % 3 == 0 && x % 5 == 0) {
        return "gamelab indonesia";
    } else if (x % 5 == 0) {
        return "gamelab";
    } else if (x % 3 == 0) {
        return "game";
    } else {
        return "";
    }
}

function main() {
    console.log("Hasil uji pertama ")
    for (let i = 1; i <= 10; i++) {
        console.log(cekNilai(i)+" ");
    }
    console.log("Hasil uji kedua ")
    for (let i = 1; i <= 25; i++) {
        console.log(cekNilai(i)+" ");
    }
    console.log("Hasil uji ketiga ")
    for (let i = 1; i <= 40; i++) {
        console.log(cekNilai(i)+" ");
    }
}

main();