document.addEventListener('DOMContentLoaded', () => {
    const acasaSection = document.getElementById('acasa');
    // Modificăm stilul textului din secțiunea "acasa"
    //acasaSection.querySelector('h2').style.color = '#2e8b57'; // Verde închis
    acasaSection.querySelectorAll('p').forEach(p => {
        p.style.fontSize = '18px';
        p.style.lineHeight = '1.6';
    });
});

//Manevrare DOM
// let descriereElement = document.getElementById("descriere");
// descriereElement.innerHTML = "Acesta este un nou text pentru descriere. Bine ați venit pe Healthy Lifestyle, destinația ta online pentru un stil de viață sănătos și activ! Suntem aici pentru a îți oferi inspirație, sfaturi și resurse care să te ajute să îți atingi obiectivele de sănătate și fitness.";



//Creare si stergere de elemente
let newparagraf = document.createElement("p");
newparagraf.textContent = "Va incurajam sa urmati aceste sfaturi pentru a observa macar o mica schimbare in viata dumneavoastra.";
let paragrafdiv = document.getElementById("ghid");
paragrafdiv.appendChild(newparagraf);

// let ParagrafDeSters = document.getElementById("ParagrafDeSters");
// paragrafdiv.removeChild(ParagrafDeSters);

//Schimbare proprietati
let ghidNutritie = document.getElementById("ghid");
let paragrafNutritie = ghidNutritie.querySelector("p");
paragrafNutritie.style.color = "#3299a8";
paragrafNutritie.style.fontSize = "20px";
paragrafNutritie.style.fontWeight = "bold";

//Modificare si folosire evenimente generate
let paragraf = document.getElementById("paragraf");
let inputField = document.getElementById("inputField");

// Evenimente generate de mouse

// Adăugarea unei clase când mouse-ul este deasupra paragrafului
paragraf.addEventListener("mouseover", function() {
    paragraf.classList.add("highlight");
});
// Înlăturarea clasei când mouse-ul nu mai este deasupra paragrafului
paragraf.addEventListener("mouseout", function() {
    paragraf.classList.remove("highlight");
});

// Afișarea unui mesaj când se face click pe paragraf
paragraf.addEventListener("click", function() {
    alert("Planuri de mese simple!");
});


//Input functional
let inputText = document.getElementById("inputText");
let outputDiv = document.getElementById("output");

// Adăugarea unui event listener pentru evenimentul 'input'
inputText.addEventListener("input", function() {
    // Obținerea valorii introduse în câmpul de input
    let inputValue = inputText.value;
    
    // Afișarea valorii în div-ul de output
    outputDiv.textContent = "Text introdus: " + inputValue;
});

//SetTimeout, SetInterval
// Funcția care va actualiza conținutul div-ului cu un mesaj la fiecare interval de timp specificat
function afiseazaMesaj() {
    // Se selectează div-ul cu id-ul "afisare"
    let divAfisare = document.getElementById("afisare");
    // Se generează un mesaj
    let mesaj = "Acesta este un mesaj afișat la fiecare 2 secunde.";
    // Se actualizează conținutul div-ului cu mesajul generat
    divAfisare.textContent = mesaj;
}
// Setarea intervalului folosind setInterval pentru a apela funcția afiseazaMesaj la fiecare interval de timp specificat
setInterval(afiseazaMesaj, 2000);



// Selectarea div-ului cu id-ul "patrat"
let patrat = document.getElementById("patrat");
// Funcția care aplică modificările aleatoare asupra div-ului
function schimbaProprietatiAleatorii() {
    // Generarea culorii aleatoare
    let culoare = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // Generarea dimensiunii aleatoare între 50 și 200 pixeli
    //let dimensiune = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
    // Aplicarea modificărilor
    patrat.style.backgroundColor = culoare;
    //patrat.style.width = dimensiune + "px";
    //patrat.style.height = dimensiune + "px";
}
// Apelarea funcției pentru a aplica modificările la intervale regulate de timp
setInterval(schimbaProprietatiAleatorii, 2000); 


function culoarenoua() {
    var symbols, color;
    symbols = "0123456789ABCDEF";
    color = "#";
    for(var i=0; i<6; i++){
        color=color+symbols[Math.floor(Math.random()*16)];
    }
    let patrat = document.getElementById("patrat");
    patrat.style.background = color;
}


// Obține referințele la inputurile HTML și la buton
const numeInput = document.getElementById('nume');
const varstaInput = document.getElementById('varsta');
const salveazaButton = document.getElementById('salveaza');

// Adăugă un eveniment de clic pe butonul de salvare
salveazaButton.addEventListener('click', function() {
    // Obține valorile introduse de utilizator
    const nume = numeInput.value;
    const varsta = varstaInput.value;

    // Verifică dacă utilizatorul a introdus atât numele cât și vârsta
    if (nume && varsta) {
        // Crează un obiect care să reprezinte persoana
        const persoana = { nume: nume, varsta: varsta };

        // Converteste obiectul persoana într-un șir de caractere JSON
        const persoanaJSON = JSON.stringify(persoana);

        // Stochează șirul JSON în localStorage cu o cheie unică (de exemplu, 'persoana')
        localStorage.setItem('persoana', persoanaJSON);

        // Afiseaza un mesaj de confirmare
        alert('Datele au fost salvate în localStorage!');
    } else {
        // Afiseaza un mesaj de eroare dacă utilizatorul nu a introdus toate datele necesare
        alert('Te rog completează toate câmpurile!');
    }
})
