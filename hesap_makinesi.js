// Kullanıcıdan iki sayı ve yapmak istediği işlemi (+, -, *, /) alın. Seçilen işleme göre sonucu hesaplayarak ekrana yazdırın. Kullanıcı geçersiz bir işlem girdiğinde uyarı mesajı gösterin.

let hesapİslemi = prompt("Yapmak istediğiniz işlemi seçiniz \n +, -, *, /");
let sayi1 = Number(prompt("Birinci sayıyı giriniz"));
let sayi2 = Number(prompt("İkinci sayıyı giriniz"));

let sonuc = 0;

if(hesapİslemi === "+"){
    sonuc = sayi1 + sayi2;
}
else if(hesapİslemi === "-"){
    sonuc = sayi1 - sayi2;
}
else if(hesapİslemi === "*"){
    sonuc = sayi1 * sayi2;
}
else if(hesapİslemi === "/"){
    sonuc = sayi1 / sayi2;
}
else{
    alert("Geçersiz bir seçenek girdiniz");
}
console.log(sonuc);
