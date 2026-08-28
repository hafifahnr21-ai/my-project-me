// =======================
// MUSIK
// =======================

function putarMusik(){

    let lagu = document.getElementById("musik");

    lagu.play();

}



// =======================
// RUMAH
// =======================

function tampilRumah(){

document.getElementById("isi").innerHTML=`

<h2>🏠 Rumah</h2>

<p>
Selamat datang di website ulang tahun Nur Hafifah yang ke 20 tahun 💜
</p>

<p>
Semoga hari ini menjadi hari yang indah.
</p>

`;

}



// =======================
// GALERI
// =======================

function tampilGaleri(){

document.getElementById("isi").innerHTML=`

<h2 class="judul-galeri">
📷 Galeri Kenangan 💜
</h2>


<div class="galeri">


<div class="card">
<img src="img/poto1.jpg.jpg" onclick="besar(this)">
<p>💜 Kenangan 1</p>
</div>


<div class="card">
<img src="img/poto2.webp.webp" onclick="besar(this)">
<p>🌸 Kenangan 2</p>
</div>


<div class="card">
<img src="img/poto3.webp.webp" onclick="besar(this)">
<p>✨ Kenangan 3</p>
</div>


<div class="card">
<img src="img/poto4.webp.webp" onclick="besar(this)">
<p>💕 Kenangan 4</p>
</div>


<div class="card">
<img src="img/poto5.jpg.jpg" onclick="besar(this)">
<p>🎈 Kenangan 5</p>
</div>


<div class="card">
<img src="img/poto6.jpg.jpg" onclick="besar(this)">
<p>🎂 Kenangan 6</p>
</div>


<div class="card">
<img src="img/poto7.jpg.jpg" onclick="besar(this)">
<p>🌷 Kenangan 7</p>
</div>


<div class="card">
<img src="img/poto8.jpg.jpg" onclick="besar(this)">
<p>💝 Kenangan 8</p>
</div>


<div class="card">
<img src="img/poto9.webp.webp" onclick="besar(this)">
<p>🌹 Kenangan 9</p>
</div>


<div class="card">
<img src="img/poto10.webp.webp" onclick="besar(this)">
<p>📸 Kenangan 10</p>
</div>


<div class="card">
<img src="img/poto11.webp.webp" onclick="besar(this)">
<p>💖 Kenangan 11</p>
</div>


<div class="card">
<img src="img/poto12.webp.webp" onclick="besar(this)">
<p>🎉 Kenangan 12</p>
</div>


</div>



<div id="popup" onclick="tutup()">

<img id="gambarBesar">

</div>


`;

}




// =======================
// FOTO BESAR
// =======================

function besar(gambar){

document.getElementById("popup").style.display="flex";

document.getElementById("gambarBesar").src=gambar.src;

}



function tutup(){

document.getElementById("popup").style.display="none";

}




// =======================
// TENTANG AKU
// =======================

function tampilTentang(){

document.getElementById("isi").innerHTML=`

<div class="profil">


<h2>
👤 Tentang Aku
</h2>
<img src="img/profil.jpeg" class="foto-profil">


<h3>
Halo, aku Nur Hafifah 💜
</h3>



<div class="cerita">


<p>
Aku adalah seseorang yang sedang menikmati perjalanan hidup.
Aku sedang belajar banyak hal baru yang sebelumnya belum pernah aku lakukan,
tentunya hal-hal yang baik dan bisa membuat diriku berkembang menjadi lebih baik.
</p>



<p>
Saat ini aku juga sedang berusaha memperbaiki diri,
menjadi pribadi yang lebih baik dari sebelumnya.
Aku ingin menjadi diriku sendiri yang lebih sabar,
tidak mudah egois, dan lebih menghargai orang-orang di sekitarku.
</p>



<p>
Aku ingin terus menciptakan banyak kenangan indah untuk diriku sendiri,
menikmati setiap proses yang ada,
dan mensyukuri setiap perjalanan yang sudah aku lalui.
</p>


</div>




<div class="data-diri">


<h3>
✨ Tentang Diriku
</h3>


<p>
🎂 Lahir : 21 September 2006
</p>


<p>
📍 Tempat lahir : Tangerang
</p>


<p>
💜 Aku dilahirkan dengan selamat oleh ibuku
tanpa melalui proses operasi atau sesar.
</p>


</div>



<div class="kesukaan">


<h3>
🌸 Hal Yang Aku Suka
</h3>


<p>
🎬 Aku suka menonton film Indonesia maupun film luar negeri
yang memiliki cerita menarik dan bagus.
</p>


<p>
✈️ Aku suka jalan-jalan, traveling,
sambil mencoba berbagai macam kuliner.
</p>


<p>
🍽️ Aku suka hampir semua makanan 😄
kecuali kayu dan batu tentunya hehehe.
</p>


</div>



<p class="penutup">

Terima kasih sudah mengenal sedikit tentang aku.
Semoga perjalanan hidupku ke depannya selalu dipenuhi
dengan hal-hal baik, kebahagiaan,
dan banyak cerita indah yang bisa dikenang. 💜✨

</p>



</div>

`;

}
// =======================
// UCAPAN + AMPLOP
// =======================


function tampilUcapan(){


index = 0;


document.getElementById("isi").innerHTML=`

<div class="amplop" onclick="bukaSurat()">



<div class="tutup-amplop"></div>



<div class="isi-amplop">

💌

</div>


</div>



<p class="klik">
Klik amplop untuk membuka surat 💜
</p>



<div id="surat" class="surat">


<h2>
💌 Untuk Nur Hafifah
</h2>


<p id="pesan"></p>


</div>


`;

}





// =======================
// BUKA SURAT
// =======================


function bukaSurat(){


let amplop=document.querySelector(".amplop");

let surat=document.getElementById("surat");



amplop.classList.add("buka");



setTimeout(function(){


surat.style.display="block";


ketikPesan();



setTimeout(function(){

hadiahMuncul();

},4000);



},1000);



}





// =======================
// ISI SURAT MENGETIK
// =======================


let teks = 

`Dear Nur Hafifah 💜

Selamat ulang tahun ke 20 tahun 🎂

Semoga selalu diberikan kesehatan,
kebahagiaan, kesuksesan,
dan semua impianmu bisa tercapai.

Terus menjadi pribadi yang luar biasa ✨`;



let index = 0;



function ketikPesan(){


let tulisan=document.getElementById("pesan");


if(tulisan){


tulisan.innerHTML="";

index=0;


ketikMulai();


}


}



function ketikMulai(){


let tulisan=document.getElementById("pesan");


if(tulisan && index < teks.length){


tulisan.innerHTML += teks.charAt(index);


index++;


setTimeout(ketikMulai,50);


}


}





// =======================
// HADIAH RAHASIA
// =======================


function hadiahMuncul(){


let surat=document.getElementById("surat");


if(surat){


surat.innerHTML +=`


<div class="hadiah" onclick="bukaHadiah()">

🎁

</div>



<p class="klik">

Klik hadiah untuk membuka kejutan 💜

</p>



<div id="pesanHadiah"></div>


`;


}


}
function bukaHadiah(){


let hadiah = document.querySelector(".hadiah");

if(hadiah){
    hadiah.classList.add("dibuka");
}


setTimeout(function(){

    let pesan = document.getElementById("pesanHadiah");


    if(!pesan){
        return;
    }


    pesan.innerHTML = `

        <h2>
            🎉 Kejutan Untuk Nur Hafifah 💜
        </h2>

        <p>
            Semoga umur ke 20 tahun ini membawa banyak
            kebahagiaan, kesuksesan, kesehatan,
            dan cerita indah baru dalam hidupmu ✨
        </p>

        <p>
            Tetap menjadi Nur Hafifah yang kuat,
            baik hati, dan selalu percaya dengan
            diri sendiri 💜
        </p>


        <hr>


        <div class="buku-ucapan">

            <h2>
                💌 Ucapan & Doa
            </h2>

            <p>
                Tulis ucapan dan doa terbaikmu
                untuk Nur Hafifah 💜
            </p>


            <div class="form-ucapan">

                <input
                    type="text"
                    id="namaUcapan"
                    placeholder="👤 Nama kamu"
                >

                <textarea
                    id="isiUcapan"
                    placeholder="💌 Tulis ucapan untuk Hafifah..."
                ></textarea>


                <button
                    type="button"
                    id="tombolKirimUcapan">
                    💜 Kirim Ucapan
                </button>

            </div>


            <div class="daftar-ucapan">

                <h2>
                    📖 Ucapan dari Teman
                </h2>

                <div id="listUcapan"></div>

            </div>

        </div>

    `;


    document
    .getElementById("tombolKirimUcapan")
    .addEventListener("click", kirimUcapan);


},800);


}

function kirimUcapan(){


let namaInput = document.getElementById("namaUcapan");

let ucapanInput = document.getElementById("isiUcapan");

let listUcapan = document.getElementById("listUcapan");


if(!namaInput || !ucapanInput || !listUcapan){

    alert("Form ucapan belum siap 💜");

    return;

}


let nama = namaInput.value.trim();

let ucapan = ucapanInput.value.trim();


if(nama === ""){

    alert("Nama kamu belum diisi 💜");

    namaInput.focus();

    return;

}


if(ucapan === ""){

    alert("Ucapan kamu belum diisi 💌");

    ucapanInput.focus();

    return;

}


let kartu = document.createElement("div");

kartu.className = "kartu-ucapan";


let namaTeman = document.createElement("h3");

namaTeman.textContent = "👤 " + nama;


let isiTeman = document.createElement("p");

isiTeman.textContent = ucapan;


let waktu = document.createElement("div");

waktu.className = "waktu-ucapan";

waktu.textContent =
    "🕐 " +
    new Date().toLocaleString("id-ID");


kartu.appendChild(namaTeman);

kartu.appendChild(isiTeman);

kartu.appendChild(waktu);


listUcapan.prepend(kartu);


namaInput.value = "";

ucapanInput.value = "";


alert("💜 Ucapan berhasil dikirim!");


}
