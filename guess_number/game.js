//? Pcye 1 - 20 arasında sayi tutturduk
let rastgeleSayi = Math.ceil(Math.random()*20)

let mesaj = document.querySelector(".msg")

let skor = 10 ;
// skoru index.html den çekebilirdik ama çok kullanacağımız için bu daha tercih edilen yol
let enYuksekSkor = 0;

//? Her check butonuna basıldıgında yapılacaklar

document.querySelector(".check").addEventListener("click", () => {
    const tahmin = document.querySelector(".guess").value

    //!Tahmin girmeden butona basildiysa
    if(!tahmin) {
        mesaj.textContent = "Lütfen Bir Sayı Giriniz"
    //!Tahmin dogruysa
    }else if(tahmin == rastgeleSayi){
        mesaj.textContent = "Tebrikler Bildiniz 👏"
        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector(".number").textContent = rastgeleSayi

        // top score Kontrolu

        if (skor > enYuksekSkor) {
            enYuksekSkor = skor
            document.querySelector(".top-score").textContent = enYuksekSkor
        }

        //!tahmin yanlissa
    }else{

        //? score 1'den buyul oldugu surece tahmin hakkim var
        if (skor > 1) {

            skor -- ;
            document.querySelector(".score").textContent = skor

            tahmin < rastgeleSayi ? mesaj.textContent = "Arttır👆" : mesaj.textContent = "Azalt👇"

            // arttir azalt

        }else {
            mesaj.textContent = "Oyunu Kaybettiniz😢"
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "red"

            //! oyunu kaybettiniz
        }
    }
})

// Again butonuna basinca ayarlar baslangic degerlerine kurulun arka plan #2d3436 olsun

document.querySelector(".again").onclick = () => {

    document.querySelector("body").style.backgroundColor = "#2d3436"

    rastgeleSayi = Math.ceil(Math.random() * 20)
    skor = 10 ;

    document.querySelector(".score").textContent = skor

    document.querySelector(".number").textContent = "?"

    document.querySelector(".guess").value = ""

    mesaj.textContent = "Oyun Yeni Oyuncu İcin Basliyor"
}

//! ENTER

//Klavyeden enter butonuna basildiginda check butonunu tetikle.

document.addEventListener("keydown", function(e){
    if (e.key === "Enter") {
        //Enter tusuna basildiginda check butonunu tikla
        document.querySelector(".check").click()
    }
})


